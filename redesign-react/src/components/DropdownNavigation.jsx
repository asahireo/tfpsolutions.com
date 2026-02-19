import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MAX_ITEMS_PER_COLUMN = 8

function normalizePathname(pathname) {
  if (pathname !== '/' && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

function isInternalHref(href) {
  return typeof href === 'string' && href.startsWith('/')
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

export function DropdownNavigation({ navItems, activePath }) {
  const [openMenu, setOpenMenu] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <nav className="nav mega-nav" aria-label="Primary navigation">
      <ul className="mega-nav-list">
        {navItems.map((item) => {
          const hasSubmenu = Array.isArray(item.subMenus) && item.subMenus.length > 0
          const menuColumns = splitSubmenuColumns(item.subMenus)
          const isOpen = openMenu === item.id
          const isHovered = hoveredId === item.id
          const isActive =
            !!item.link &&
            isInternalHref(item.link) &&
            normalizePathname(item.link) === normalizePathname(activePath)

          return (
            <li
              key={item.id}
              className="mega-nav-item"
              onMouseEnter={() => setOpenMenu(item.id)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.link ? (
                <a
                  href={item.link}
                  className={`mega-nav-trigger ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <span>{item.label}</span>
                  {(isHovered || isActive) && (
                    <motion.span layoutId="mega-nav-pill" className="mega-nav-pill" aria-hidden="true" />
                  )}
                </a>
              ) : (
                <button
                  type="button"
                  className={`mega-nav-trigger ${isOpen ? 'is-open' : ''}`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <span className={`mega-nav-caret ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    v
                  </span>
                  {(isHovered || isOpen) && (
                    <motion.span layoutId="mega-nav-pill" className="mega-nav-pill" aria-hidden="true" />
                  )}
                </button>
              )}

              <AnimatePresence>
                {hasSubmenu && isOpen && (
                  <motion.div
                    className="mega-menu"
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
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
                                >
                                  <span className="mega-menu-link-label">{link.label}</span>
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
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
