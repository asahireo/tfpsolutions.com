import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MAX_ITEMS_PER_COLUMN = 6

function normalizePathname(pathname) {
  if (!pathname) return '/'
  if (pathname !== '/' && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

function isInternalHref(href) {
  return typeof href === 'string' && href.startsWith('/')
}

function hrefToPathname(href) {
  if (typeof href !== 'string') return ''
  return href.split('#')[0]
}

function isActiveHref(href, activePath) {
  if (!isInternalHref(href)) return false
  return normalizePathname(hrefToPathname(href)) === normalizePathname(activePath)
}

function splitSubmenuColumns(subMenus) {
  const out = []
  for (const sub of subMenus || []) {
    const items = sub.items || []
    if (items.length <= MAX_ITEMS_PER_COLUMN) {
      out.push({
        key: `${sub.title}-0`,
        title: sub.title,
        items,
      })
      continue
    }

    let chunkIndex = 0
    for (let i = 0; i < items.length; i += MAX_ITEMS_PER_COLUMN) {
      const chunk = items.slice(i, i + MAX_ITEMS_PER_COLUMN)
      chunkIndex += 1
      out.push({
        key: `${sub.title}-${chunkIndex}`,
        title: i === 0 ? sub.title : `${sub.title} (More ${chunkIndex - 1})`,
        items: chunk,
      })
    }
  }
  return out
}

function menuHasActiveLink(item, activePath) {
  if (isActiveHref(item.link, activePath)) return true
  for (const sub of item.subMenus || []) {
    for (const link of sub.items || []) {
      if (isActiveHref(link.href, activePath)) return true
    }
  }
  return false
}

export function DropdownNavigation({ navItems, activePath }) {
  const navRef = useRef(null)
  const [openMenu, setOpenMenu] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)
  const [menuTop, setMenuTop] = useState(96)

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!navRef.current || navRef.current.contains(event.target)) return
      setOpenMenu(null)
      setHoveredId(null)
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  useEffect(() => {
    const updateMenuPosition = () => {
      if (!navRef.current) return
      const rect = navRef.current.getBoundingClientRect()
      setMenuTop(Math.round(rect.bottom + 10))
    }

    updateMenuPosition()
    window.addEventListener('resize', updateMenuPosition)
    window.addEventListener('scroll', updateMenuPosition, { passive: true })
    return () => {
      window.removeEventListener('resize', updateMenuPosition)
      window.removeEventListener('scroll', updateMenuPosition)
    }
  }, [openMenu])

  return (
    <nav
      ref={navRef}
      className="nav mega-nav"
      aria-label="Primary navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpenMenu(null)
          setHoveredId(null)
        }
      }}
    >
      <div className="mega-nav-shell">
        <ul className="mega-nav-list">
          {navItems.map((item) => {
            const hasSubmenu = Array.isArray(item.subMenus) && item.subMenus.length > 0
            const menuColumns = splitSubmenuColumns(item.subMenus)
            const isOpen = openMenu === item.id
            const isHovered = hoveredId === item.id
            const isActive = menuHasActiveLink(item, activePath)
            const isHighlighted = isHovered || isOpen || isActive

            return (
              <li
                key={item.id}
                className="mega-nav-item"
                onMouseEnter={() => {
                  setHoveredId(item.id)
                  if (hasSubmenu) setOpenMenu(item.id)
                }}
                onMouseLeave={() => {
                  setHoveredId(null)
                  if (hasSubmenu) setOpenMenu(null)
                }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    className={`mega-nav-trigger ${isActive ? 'is-active' : ''}`}
                    onFocus={() => setHoveredId(item.id)}
                    onBlur={() => setHoveredId(null)}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="mega-nav-dot" aria-hidden="true" />}
                    {isHighlighted && (
                      <motion.span layoutId="mega-nav-pill" className="mega-nav-pill" aria-hidden="true" />
                    )}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={`mega-nav-trigger ${isOpen ? 'is-open' : ''} ${isActive ? 'is-active' : ''}`}
                    onClick={() => setOpenMenu((prev) => (prev === item.id ? null : item.id))}
                    onFocus={() => setHoveredId(item.id)}
                    onBlur={() => setHoveredId(null)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="mega-nav-dot" aria-hidden="true" />}
                    <span className={`mega-nav-caret ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                      ▾
                    </span>
                    {isHighlighted && (
                      <motion.span layoutId="mega-nav-pill" className="mega-nav-pill" aria-hidden="true" />
                    )}
                  </button>
                )}

                <AnimatePresence>
                  {hasSubmenu && isOpen && (
                    <div className="mega-menu-positioner" style={{ top: menuTop }}>
                      <motion.div
                        className="mega-menu"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      >
                        <div className="mega-menu-grid">
                          {menuColumns.map((column) => (
                            <section key={column.key} className="mega-menu-column">
                              <h4>{column.title}</h4>
                              <ul>
                                {column.items.map((link) => (
                                  <li key={`${column.title}-${link.label}`}>
                                    <a
                                      href={link.href}
                                      className="mega-menu-link"
                                      target={link.target}
                                      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                      onClick={() => {
                                        setOpenMenu(null)
                                        setHoveredId(null)
                                      }}
                                    >
                                      <span className="mega-menu-link-copy">
                                        <span className="mega-menu-link-label">{link.label}</span>
                                        {link.description && (
                                          <span className="mega-menu-link-desc">{link.description}</span>
                                        )}
                                      </span>
                                      <span className="mega-menu-link-icon" aria-hidden="true">
                                        {link.target === '_blank' ? '↗' : '›'}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </section>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
