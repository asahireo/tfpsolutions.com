import { useMemo, useState } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'
import { AnimatedTooltip } from '../components/AnimatedTooltip'
import { FeatureIcon } from '../components/FeatureIcon'
import { managementTeam } from '../siteData'

const filters = ['All', 'Leadership', 'Strategy', 'Operations', 'Technology', 'Finance', 'Subsidiary']

function hasTag(person, tag) {
  return Array.isArray(person.tags) && person.tags.includes(tag)
}

export default function ManagementTeam() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = useMemo(() => {
    if (activeFilter === 'All') return managementTeam
    return managementTeam.filter((p) => hasTag(p, activeFilter))
  }, [activeFilter])

  return (
    <main className="management-page">
      <section className="section management-hero">
        <div className="management-hero-bg" aria-hidden="true" />
        <div className="container management-hero-grid">
          <AnimatedSection>
            <span className="eyebrow">✦ Company</span>
            <h1>Management Team</h1>
            <p>
              The operators and builders behind our products, platforms, and group execution.
              This team turns strategy into delivery, with an enterprise mindset for uptime,
              compliance, and customer impact.
            </p>

            <div className="stats stats-compact">
              <div className="stat">
                <strong>{managementTeam.length}</strong>
                <span className="stat-label">Leaders listed</span>
              </div>
              <div className="stat">
                <strong>Multi-unit</strong>
                <span className="stat-label">Group operations</span>
              </div>
              <div className="stat">
                <strong>Ops-first</strong>
                <span className="stat-label">Execution culture</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="management-hero-panel">
              <div className="management-principles">
                <div className="principle">
                  <FeatureIcon name="shield" />
                  <div>
                    <h3>Governance by design</h3>
                    <p>Clear owners, auditable processes, and systems built for accountability.</p>
                  </div>
                </div>
                <div className="principle">
                  <FeatureIcon name="lightning" />
                  <div>
                    <h3>Delivery with cadence</h3>
                    <p>Fast iterations where it matters, stable operations where it counts.</p>
                  </div>
                </div>
                <div className="principle">
                  <FeatureIcon name="building" />
                  <div>
                    <h3>Scale-ready execution</h3>
                    <p>Operational rigor that holds up as customers and transactions grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Leadership Constellation</h2>
            <p className="section-subtitle">
              Hover or tap a profile to reveal role. Browse below for unit coverage and focus areas.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <AnimatedTooltip items={managementTeam} />
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Focus Areas</h2>
            <p className="section-subtitle">
              Filter by what you need: strategy, operations, technology, finance, and subsidiary leadership.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="team-filters" role="tablist" aria-label="Management team filters">
              {filters.map((label) => {
                const isActive = activeFilter === label
                return (
                  <button
                    key={label}
                    type="button"
                    className={`chip ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveFilter(label)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </AnimatedSection>

          <div className="team-grid">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.05}>
                <article className="team-card">
                  <div className="team-card-media">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="team-card-body">
                    <div className="team-card-header">
                      <h3 className="team-card-name">{p.name}</h3>
                      <p className="team-card-role">{p.role}</p>
                    </div>
                    <p className="team-card-unit">{p.unit}</p>
                    <div className="team-tags" aria-label={`${p.name} focus tags`}>
                      {(p.tags || []).map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
