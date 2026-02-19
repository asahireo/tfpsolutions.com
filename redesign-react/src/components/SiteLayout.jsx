import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DropdownNavigation } from './DropdownNavigation'
import { navMenuItems, footerLinks } from '../siteData'

function normalizePathname(pathname) {
  // Treat trailing slash as optional for active-state comparisons.
  if (pathname !== '/' && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

export function SiteLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Keep root-relative links inside the SPA on GitHub Pages project URLs.
    const onDocumentClick = (event) => {
      if (event.defaultPrevented) return
      if (event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = event.target.closest?.('a[href]')
      if (!anchor) return
      if (anchor.target && anchor.target !== '_self') return
      if (anchor.hasAttribute('download')) return

      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('//')) return

      event.preventDefault()
      navigate(href)
    }

    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [navigate])

  useEffect(() => {
    const hash = location.hash?.trim()
    if (!hash) {
      // Basic "page change" behavior for an SPA.
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    // Hash links should land on the exact section, even after route transitions.
    const id = decodeURIComponent(hash.slice(1))
    const target = document.getElementById(id)
    if (!target) return

    const headerOffset = 96
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: Math.max(top, 0), left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  const activePath = normalizePathname(location.pathname)

  return (
    <>
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="/">
            <img src="https://tfp.com.my/wp-content/uploads/2020/06/tfp-logo-icon.png" alt="TFP logo" />
            <span>TFP Solutions Berhad</span>
          </a>
          <DropdownNavigation navItems={navMenuItems} activePath={activePath} />
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <img src="https://tfp.com.my/wp-content/uploads/2020/06/tfp-logo-icon.png" alt="TFP logo" />
                <span>TFP Solutions Berhad</span>
              </div>
              <p className="footer-about">
                A publicly listed fintech company on Bursa Malaysia, delivering integrated
                business solutions across payment, HR, and enterprise technology.
              </p>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div className="footer-col" key={title}>
                <h4>{title}</h4>
                <ul className="footer-links">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} TFP Solutions Berhad. All rights reserved.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">in</a>
              <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="Twitter">X</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
