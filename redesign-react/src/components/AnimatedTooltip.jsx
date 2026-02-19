import React, { useState } from 'react'
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

const TypewriterText = ({ text, delay = 0 }) => {
    // Split text into words or characters. 
    // For a typewriter effect, splitting by character is smoothest.
    const characters = text.split('')

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay,
            },
        },
    }

    const childVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'inline-block' }}>
            {characters.map((char, index) => (
                <motion.span key={index} variants={childVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.div>
    )
}

export const AnimatedTooltip = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const springConfig = { stiffness: 100, damping: 5 }
    const x = useMotionValue(0)



    // Translate the tooltip horizontally based on mouse position
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)

    const handleMouseMove = (event) => {
        const halfWidth = event.target.offsetWidth / 2
        x.set(event.nativeEvent.offsetX - halfWidth)
    }

    return (
        <div className="tooltip-grid">
            {items.map((item, index) => {
                const isHovered = hoveredIndex === index
                const isBlurry = hoveredIndex !== null && hoveredIndex !== index

                const handleActivate = () => {
                    // Touch devices don't reliably trigger hover. Toggle on click/tap.
                    setHoveredIndex((prev) => (prev === index ? null : index))
                }

                return (
                    <div
                        className={`tooltip-item ${isBlurry ? 'is-blurred' : ''}`}
                        key={item.name}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={handleActivate}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') handleActivate()
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <AnimatePresence mode="popLayout">
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 260,
                                            damping: 10,
                                        },
                                    }}
                                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                    style={{
                                        translateX: translateX,
                                        whiteSpace: 'nowrap',
                                    }}
                                    className="tooltip-content"
                                >
                                    <div className="tooltip-gradient-bottom"></div>
                                    <div className="tooltip-gradient-left"></div>

                                    <div className="tooltip-name">
                                        <TypewriterText text={item.name} delay={0.1} />
                                    </div>
                                    <div className="tooltip-role">
                                        <TypewriterText text={item.role} delay={0.2} />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            className="tooltip-image-wrapper"
                            animate={{
                                // Keep portraits static; only change treatment (blur/opacity) on focus.
                                scale: 1,
                                filter: isBlurry ? 'blur(2px) grayscale(80%)' : 'blur(0px) grayscale(0%)',
                                opacity: isBlurry ? 0.6 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                onMouseMove={handleMouseMove}
                                src={item.image}
                                alt={item.name}
                                className="tooltip-image"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                )
            })}
        </div>
    )
}
