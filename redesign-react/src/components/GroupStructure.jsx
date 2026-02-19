import { growthIntegratedEngines } from '../siteData'
import './GroupStructure.css'

export function GroupStructure() {
  return (
    <div className="group-structure-grid">
      {growthIntegratedEngines.map((engine, engineIndex) => {
        const productsCount = engine.subsidiaries.reduce((sum, sub) => sum + (sub.products?.length || 0), 0)
        return (
          <article key={engine.id} className="engine-card">
            <header className="engine-header">
              <div className="engine-meta">
                <span className="engine-chip">Engine {engineIndex + 1}</span>
                <span className="engine-stat">{productsCount} products</span>
              </div>
              <h3 className="engine-title">{engine.title}</h3>
              <p className="engine-desc">{engine.description}</p>
            </header>

            <div className="subsidiary-list">
              {engine.subsidiaries.map((sub) => (
                <section key={sub.name} className="subsidiary-item">
                  <div className="subsidiary-header">
                    <h4 className="subsidiary-name">{sub.name}</h4>
                    {sub.note && <span className="subsidiary-note">{sub.note}</span>}
                  </div>
                  <div className="product-list">
                    {sub.products.map((product) => {
                      const label = typeof product === 'string' ? product : product.name
                      const href = typeof product === 'string' ? '' : product.href
                      const isExternal = typeof href === 'string' && href.startsWith('http')

                      if (href) {
                        return (
                          <a
                            key={label}
                            href={href}
                            className="product-link"
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                          >
                            {label}
                          </a>
                        )
                      }

                      return (
                        <span key={label} className="product-link">
                          {label}
                        </span>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>
          </article>
        )
      })}
    </div>
  )
}
