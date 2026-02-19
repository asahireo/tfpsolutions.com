import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useMeasure from 'react-use-measure'

function wrapIndex(n, len) {
  if (len <= 0) return 0
  return ((n % len) + len) % len
}

// Minimal signed offset from active index to i, with wrapping when loop is enabled.
function signedOffset(i, active, len, loop) {
  const raw = i - active
  if (!loop || len <= 1) return raw
  const alt = raw > 0 ? raw - len : raw + len
  return Math.abs(alt) < Math.abs(raw) ? alt : raw
}

/**
 * CardStack
 * - Keeps card markup flexible via renderCard()
 * - Uses motion for a fan/stack carousel interaction
 * - Designed for this repo: no Tailwind, no Next.js
 */
export function CardStack({
  items,
  initialIndex = 0,
  maxVisible = 5,

  cardWidth = 520,
  cardHeight = 320,

  overlap = 0.48,
  spreadDeg = 48,

  perspectivePx = 1100,
  depthPx = 140,
  tiltXDeg = 12,

  activeLiftPx = 22,
  activeScale = 1.03,
  inactiveScale = 0.94,

  springStiffness = 280,
  springDamping = 28,

  loop = true,
  autoAdvance = false,
  intervalMs = 2800,
  pauseOnHover = true,

  showDots = true,
  className = '',

  onChangeIndex,
  renderCard,
}) {
  const reduceMotion = useReducedMotion()
  const len = items?.length ?? 0

  const [ref, bounds] = useMeasure()
  const [active, setActive] = React.useState(() => wrapIndex(initialIndex, len))
  const [hovering, setHovering] = React.useState(false)

  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len))
  }, [len])

  React.useEffect(() => {
    if (!len) return
    onChangeIndex?.(active, items[active])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2))
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0

  const safeContainerWidth = Math.max(0, Math.floor(bounds.width || 0))
  const effectiveCardWidth = Math.min(
    cardWidth,
    Math.max(280, safeContainerWidth ? safeContainerWidth - 32 : cardWidth),
  )
  const effectiveCardHeight = cardHeight

  const cardSpacing = Math.max(10, Math.round(effectiveCardWidth * (1 - overlap)))

  const canGoPrev = loop || active > 0
  const canGoNext = loop || active < len - 1

  const prev = React.useCallback(() => {
    if (!len) return
    if (!canGoPrev) return
    setActive((a) => wrapIndex(a - 1, len))
  }, [canGoPrev, len])

  const next = React.useCallback(() => {
    if (!len) return
    if (!canGoNext) return
    setActive((a) => wrapIndex(a + 1, len))
  }, [canGoNext, len])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  React.useEffect(() => {
    if (!autoAdvance) return
    if (reduceMotion) return
    if (!len) return
    if (pauseOnHover && hovering) return

    const id = window.setInterval(() => {
      if (loop || active < len - 1) next()
    }, Math.max(700, intervalMs))

    return () => window.clearInterval(id)
  }, [autoAdvance, intervalMs, hovering, pauseOnHover, reduceMotion, len, loop, active, next])

  if (!len) return null

  return (
    <div
      ref={ref}
      className={`card-stack ${className}`.trim()}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="card-stack-stage"
        style={{ height: Math.max(380, effectiveCardHeight + 100) }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="card-stack-deck" style={{ perspective: `${perspectivePx}px` }}>
          {items.map((item, i) => {
            const off = signedOffset(i, active, len, loop)
            const abs = Math.abs(off)
            const visible = abs <= maxOffset
            if (!visible) return null

            const isActive = off === 0

            const rotateZ = off * stepDeg
            const x = off * cardSpacing
            const y = abs * 10

            // Keep cards fully opaque so text from cards behind doesn't show through.
            // Depth is already communicated via rotation + scale.
            const opacity = 1

            const scale = isActive ? activeScale : inactiveScale
            const lift = isActive ? -activeLiftPx : 0
            const rotateX = isActive ? 0 : tiltXDeg
            const zIndex = 100 - abs

            const dragProps = isActive
              ? {
                  drag: 'x',
                  dragConstraints: { left: 0, right: 0 },
                  dragElastic: 0.18,
                  onDragEnd: (_e, info) => {
                    if (reduceMotion) return
                    const travel = info.offset.x
                    const v = info.velocity.x
                    const threshold = Math.min(160, effectiveCardWidth * 0.22)

                    if (travel > threshold || v > 650) prev()
                    else if (travel < -threshold || v < -650) next()
                  },
                }
              : {}

            const onCardClick = (e) => {
              // First click selects; second click (when active) can follow the link.
              if (i !== active) {
                e?.preventDefault?.()
                setActive(i)
              }
            }

            const CardShell = item?.href ? motion.a : motion.div
            const shellProps = item?.href ? { href: item.href } : {}

            return (
              <CardShell
                key={item.id ?? i}
                className={`card-stack-card ${isActive ? 'is-active' : ''}`.trim()}
                style={{
                  width: effectiveCardWidth,
                  height: effectiveCardHeight,
                  zIndex,
                }}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: y + 40,
                        x,
                        rotateZ,
                        rotateX,
                        scale,
                      }
                }
                animate={{
                  opacity,
                  x,
                  y: y + lift,
                  rotateZ,
                  rotateX,
                  scale,
                }}
                transition={{
                  type: 'spring',
                  stiffness: springStiffness,
                  damping: springDamping,
                }}
                onClick={onCardClick}
                {...shellProps}
                {...dragProps}
              >
                <div className="card-stack-z">
                  {renderCard ? renderCard(item, { active: isActive }) : null}
                </div>
              </CardShell>
            )
          })}
        </div>
      </div>

      {showDots ? (
        <div className="card-stack-dots" aria-label="Card navigation">
          {items.map((it, idx) => {
            const on = idx === active
            return (
              <button
                key={it.id ?? idx}
                type="button"
                onClick={() => setActive(idx)}
                className={`card-stack-dot ${on ? 'is-active' : ''}`.trim()}
                aria-label={`Go to ${it.title ?? it.id ?? idx}`}
              />
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
