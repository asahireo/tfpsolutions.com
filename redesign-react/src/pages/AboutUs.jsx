import { AnimatedSection } from '../components/AnimatedSection'
import { FeatureIcon } from '../components/FeatureIcon'
import { OrbitalDeliverables } from '../components/OrbitalDeliverables'
import { Timeline } from '../components/Timeline'
import { services, values, growthIntegratedEngines } from '../siteData'

const milestones = [
  { year: '2007', title: 'Early foundations', desc: 'Started building enterprise payment and technology services for local businesses.' },
  { year: '2013', title: 'Platform expansion', desc: 'Expanded into HR and business systems with integrated operations tooling.' },
  { year: '2018', title: 'Ecosystem growth', desc: 'Strengthened partnerships and widened product offerings across industries.' },
  { year: '2021', title: 'Regional readiness', desc: 'Hardened infrastructure and security posture for scale across SEA.' },
  { year: 'Today', title: 'Integrated stack', desc: 'Delivering payment, payroll, recruitment, and cybersecurity solutions under one group.' },
]

export default function AboutUs() {
  const deliverables = growthIntegratedEngines.map((engine, index, arr) => {
    const prev = arr[(index - 1 + arr.length) % arr.length].title
    const next = arr[(index + 1) % arr.length].title
    // Related ids are neighbors for a simple "connected nodes" effect.
    // Use engine title as ID for now or engine.id if available
    const makeId = (title) => arr.findIndex((e) => e.title === title) + 1

    return {
      id: index + 1,
      title: engine.title,
      href: `/corporate-overview/#structure`,
      content: engine.description,
      relatedIds: [makeId(prev), makeId(next)].filter(Boolean),
      energy: 45 + ((index * 11) % 55),
    }
  })

  return (
    <main>
      <section className="page-hero section">
        <div className="container page-hero-grid">
          <AnimatedSection>
            <span className="eyebrow">✦ About Us</span>
            <h1>Built for operations. Driven by innovation.</h1>
            <p>
              TFP Solutions Berhad is a publicly listed group delivering integrated fintech and
              business platforms across Malaysia and the region.
            </p>
            <div className="page-hero-actions">
              <a className="btn btn-primary" href="/contact-us/">Talk To Our Team</a>
              <a className="btn btn-ghost" href="/board-of-directors/">Board of Directors</a>
              <a className="btn btn-ghost" href="/management-team/">Management Team</a>
            </div>
            <div className="stats stats-compact">
              <div className="stat">
                <strong>18+ yrs</strong>
                <span className="stat-label">Operating history</span>
              </div>
              <div className="stat">
                <strong>Integrated</strong>
                <span className="stat-label">Payment and HR stack</span>
              </div>
              <div className="stat">
                <strong>Public</strong>
                <span className="stat-label">Bursa-listed group</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="page-hero-panel">
              <div className="quote-card">
                <p className="quote-text">
                  We focus on the hard parts: settlement, compliance, payroll accuracy, security,
                  and systems that keep running when businesses get busy.
                </p>
                <div className="quote-meta">
                  <span className="quote-dot" aria-hidden="true" />
                  <span>Operations-minded product culture</span>
                </div>
              </div>
              <div className="stat-tiles">
                <div className="stat-tile">
                  <span className="stat-tile-kicker">Coverage</span>
                  <strong>Payments, HR, Security</strong>
                  <p>One group, multiple specialist lines.</p>
                </div>
                <div className="stat-tile">
                  <span className="stat-tile-kicker">Approach</span>
                  <strong>Enterprise-grade</strong>
                  <p>Built with governance, auditability, and uptime in mind.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle">
              A practical stack of services designed to improve cashflow, efficiency, and resilience.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <OrbitalDeliverables items={deliverables} />
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              A simple set of principles that guide how we build products and support customers.
            </p>
          </AnimatedSection>

          <div className="features-grid">
            {values.map(([icon, title, desc], i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="feature-card">
                  <FeatureIcon name={icon} />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Milestones</h2>
            <p className="section-subtitle">
              A high-level view of how the group evolved into an integrated solutions provider.
            </p>
          </AnimatedSection>
          <Timeline items={milestones} />
        </div>
      </section>

      <section className="section">
        <AnimatedSection>
          <div className="container cta cta-tight">
            <div>
              <h2>Want the full corporate profile?</h2>
              <p>Explore corporate information, governance, announcements, and official filings.</p>
            </div>
            <a className="btn btn-primary" href="/corporate-information/">View Corporate Information</a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
