import { useMotionValue, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const count = useMotionValue(0)
  const displayRef = useRef(null)

  useEffect(() => {
    if (!inView) return

    const controls = animate(count, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        if (displayRef.current) {
          displayRef.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
        }
      },
    })

    return () => controls.stop()
  }, [inView, value, duration, prefix, suffix, count])

  return (
    <span ref={ref}>
      <span ref={displayRef}>{prefix}0{suffix}</span>
    </span>
  )
}
