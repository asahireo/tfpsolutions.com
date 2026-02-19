import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'

const reasons = [
  {
    quote: 'Run onboarding, payroll setup, and workforce records from one streamlined HR flow.',
    author: 'Faster HR Operations',
    role: 'Reduce manual admin in daily workforce management.',
    company: 'Workforce Setup',
  },
  {
    quote: 'Automate wage calculations and compliance checks for accurate, on-time payroll cycles.',
    author: 'Payroll Accuracy',
    role: 'Lower payroll errors while meeting policy requirements.',
    company: 'Compliance',
  },
  {
    quote: 'Centralize employee data, approvals, and reporting to improve operational visibility.',
    author: 'Unified Visibility',
    role: 'Keep HR, finance, and operations aligned.',
    company: 'Reporting',
  },
]

export function WhyChooseSmartHrPayroll() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % reasons.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + reasons.length) % reasons.length)

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = reasons[activeIndex]

  return (
    <div className="pg-why-wrap" ref={containerRef} onMouseMove={handleMouseMove}>
      <motion.div className="pg-why-index" style={{ x: numberX, y: numberY }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {String(activeIndex + 1).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <div className="pg-why-layout">
        <aside className="pg-why-side">
          <span className="pg-why-side-label">Why Teams Choose</span>
          <div className="pg-why-progress">
            <motion.div
              className="pg-why-progress-fill"
              animate={{ height: `${((activeIndex + 1) / reasons.length) * 100}%` }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </aside>

        <div className="pg-why-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.35 }}
              className="pg-why-company"
            >
              <span className="pg-why-dot" />
              {current.company}
            </motion.div>
          </AnimatePresence>

          <div className="pg-why-quote-slot">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                className="pg-why-quote"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {current.quote.split(' ').map((word, idx) => (
                  <motion.span
                    key={`${word}-${idx}`}
                    className="pg-why-word"
                    variants={{
                      hidden: { opacity: 0, y: 18, rotateX: 90 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        transition: { duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] },
                      },
                      exit: { opacity: 0, y: -8, transition: { duration: 0.16, delay: idx * 0.018 } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="pg-why-footer">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="pg-why-author"
              >
                <motion.span
                  className="pg-why-author-line"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <div>
                  <p>{current.author}</p>
                  <span>{current.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pg-why-nav">
              <button className="pg-why-nav-btn" onClick={goPrev} aria-label="Previous reason">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="pg-why-nav-btn" onClick={goNext} aria-label="Next reason">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
