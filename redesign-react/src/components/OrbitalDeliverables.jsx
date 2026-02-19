import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ServiceIcon } from './ServiceIcon'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

function getRotationFromMatrix(transform) {
  if (!transform || transform === 'none') return 0

  // DOMMatrixReadOnly exists in modern browsers; fall back to manual parse.
  try {
    const m = new DOMMatrixReadOnly(transform)
    const angle = Math.atan2(m.b, m.a) * (180 / Math.PI)
    return angle
  } catch {
    const match = transform.match(/matrix\(([^)]+)\)/)
    if (!match) return 0
    const parts = match[1].split(',').map((s) => Number(s.trim()))
    const a = parts[0]
    const b = parts[1]
    const angle = Math.atan2(b, a) * (180 / Math.PI)
    return angle
  }
}

export function OrbitalDeliverables({ items }) {
  const [activeId, setActiveId] = useState(null)
  const [paused, setPaused] = useState(false)
  const [offsetDeg, setOffsetDeg] = useState(0)

  const rotatorRef = useRef(null)

  const itemsById = useMemo(() => {
    const map = new Map()
    for (const item of items) map.set(item.id, item)
    return map
  }, [items])

  const total = items.length

  const relatedSet = useMemo(() => {
    if (!activeId) return new Set()
    const item = itemsById.get(activeId)
    return new Set(item?.relatedIds || [])
  }, [activeId, itemsById])

  const close = () => {
    setActiveId(null)
    setPaused(false)
    setOffsetDeg(0)
  }

  const open = (id) => {
    const idx = items.findIndex((x) => x.id === id)
    if (idx < 0) return

    // Pause first (freezes CSS rotation), then compute its angle once.
    setPaused(true)
    setActiveId(id)

    const rotator = rotatorRef.current
    const currentDeg = rotator ? getRotationFromMatrix(getComputedStyle(rotator).transform) : 0

    const baseDeg = (idx / total) * 360
    const nodeDeg = (baseDeg + currentDeg) % 360

    // Bring active node near the top (270deg in our coordinate system).
    const target = 270
    let delta = target - nodeDeg
    // Shortest rotation path.
    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360

    setOffsetDeg((prev) => prev + clamp(delta, -220, 220))
  }

  return (
    <div className="orbital" onClick={close} role="presentation">
      <div className="orbital-stage">
        <div className="orbital-center" aria-hidden="true">
          <div className="orbital-core" />
          <div className="orbital-core-ring orbital-core-ring-1" />
          <div className="orbital-core-ring orbital-core-ring-2" />
        </div>

        <div className={`orbital-rotator ${paused ? 'is-paused' : ''}`} ref={rotatorRef} aria-hidden="true">
          <div className="orbital-offset" style={{ transform: `rotate(${offsetDeg}deg)` }}>
            <div className="orbital-ring" />
            {items.map((item, index) => {
              const deg = (index / total) * 360
              const isActive = item.id === activeId
              const isRelated = relatedSet.has(item.id)
              const size = 76 + Math.round((item.energy || 50) * 0.20)

              return (
                <button
                  key={item.id}
                  type="button"
                  className={[
                    'orbital-node',
                    isActive ? 'is-active' : '',
                    isRelated ? 'is-related' : '',
                  ].filter(Boolean).join(' ')}
                  style={{
                    // Center the node on the orbit line (left/top are 50%).
                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(var(--orbital-radius)) rotate(${-deg}deg)`,
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    if (item.id === activeId) close()
                    else open(item.id)
                  }}
                  aria-expanded={isActive ? 'true' : 'false'}
                >
                  <span className="orbital-node-pulse" aria-hidden="true" />
                  <span className="orbital-node-upright">
                    <span className="orbital-node-inner">
                      <ServiceIcon name={item.title} className="service-icon-orbital" />
                    </span>
                    <span className="orbital-node-label">{item.title}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence>
          {activeId && (
            <motion.div
              className="orbital-card"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label="Deliverable details"
            >
              <div className="orbital-card-top">
                <div>
                  <div className="orbital-card-kicker">What We Deliver</div>
                  <h3 className="orbital-card-title">{itemsById.get(activeId)?.title}</h3>
                </div>
                <button type="button" className="orbital-card-close" onClick={close} aria-label="Close">
                  ×
                </button>
              </div>
              <p className="orbital-card-body">{itemsById.get(activeId)?.content}</p>
              {itemsById.get(activeId)?.href && (
                <a className="btn btn-primary orbital-card-cta" href={itemsById.get(activeId)?.href}>
                  Explore Service
                </a>
              )}
              {itemsById.get(activeId)?.relatedIds?.length ? (
                <div className="orbital-related">
                  <div className="orbital-related-title">Connected</div>
                  <div className="orbital-related-chips">
                    {itemsById.get(activeId)?.relatedIds.map((rid) => {
                      const rel = itemsById.get(rid)
                      if (!rel) return null
                      return (
                        <button
                          key={rid}
                          type="button"
                          className="orbital-chip"
                          onClick={() => open(rid)}
                        >
                          {rel.title}
                          <span className="orbital-chip-arrow" aria-hidden="true">→</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
