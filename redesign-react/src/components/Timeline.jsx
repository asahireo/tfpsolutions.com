import { motion } from 'framer-motion'

export function Timeline({ items }) {
  return (
    <div className="timeline2">
      <motion.div
        className="timeline2-line"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="timeline2-items">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            className="timeline2-item"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="timeline2-dot" aria-hidden="true">
              <span className="timeline2-dot-core" />
              <span className="timeline2-dot-ping" />
            </div>
            <div className="timeline2-card">
              <div className="timeline2-year">{item.year}</div>
              <h3 className="timeline2-title">{item.title}</h3>
              <p className="timeline2-body">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

