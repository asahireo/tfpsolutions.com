import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileMenu({ links }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <motion.span
                    className="hamburger-line"
                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                    className="hamburger-line"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                    className="hamburger-line"
                    animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="menu-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav
                            className="mobile-nav"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="mobile-nav-header">
                                <span className="mobile-nav-title">Menu</span>
                                <button className="close-btn" onClick={() => setIsOpen(false)}>
                                    ✕
                                </button>
                            </div>
                            <div className="mobile-nav-links">
                                {links.map(({ label, href, isPrimary, target }) => (
                                    <motion.a
                                        key={`${label}-${href}`}
                                        href={href}
                                        target={target}
                                        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                                        className={isPrimary ? 'btn btn-primary mobile-cta' : 'mobile-link'}
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ x: 8 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
