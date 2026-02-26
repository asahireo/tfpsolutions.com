import { AnimatedSection } from '../components/AnimatedSection'
import { UserRoundCheck, Globe, BarChart3, BanknoteArrowUp, Building2, ShieldCheck } from 'lucide-react'
import { productTikTokEmbeds } from '../siteData'

const pillars = [
  { title: 'Recruitment + Exchange', desc: 'Recruitment and workforce exchange services delivered in one networking flow.' },
  { title: 'Cross-Stakeholder Data', desc: 'Operational views for employers, regulators, and ecosystem partners.' },
  { title: 'Fintech Enabled', desc: 'Connected to payment and remittance workflows for practical outcomes.' },
]

const capabilities = [
  {
    icon: UserRoundCheck,
    title: 'Worker Profiling',
    desc: 'Structured worker records and lifecycle visibility from onboarding onward.',
  },
  {
    icon: Building2,
    title: 'Employer Operations',
    desc: 'Support for workforce administration, attendance context, and basic reporting.',
  },
  {
    icon: BanknoteArrowUp,
    title: 'Remittance Insights',
    desc: 'Correlate wage and remittance behavior for stronger policy and planning decisions.',
  },
  {
    icon: Globe,
    title: 'Agency Coordination',
    desc: 'Bridge data exchanges between agencies, employers, and relevant institutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance Controls',
    desc: 'Policy-aware handling of workforce data with trackable process checkpoints.',
  },
  {
    icon: BarChart3,
    title: 'Decision Dashboards',
    desc: 'Actionable dashboards to monitor trends and operational bottlenecks.',
  },
]

const channels = [
  {
    icon: UserRoundCheck,
    title: 'Registration Flows',
    desc: 'Capture worker and employer data through structured digital onboarding paths.',
  },
  {
    icon: Building2,
    title: 'Stakeholder Workspace',
    desc: 'Provide role-based visibility for employers, agencies, and program administrators.',
  },
  {
    icon: BanknoteArrowUp,
    title: 'Fintech Linkage',
    desc: 'Connect to payroll and remittance pathways for measurable worker outcomes.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring & Reporting',
    desc: 'Generate periodic summaries and status insights for governance and operations.',
  },
]

export default function Fwex() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ FoWeX Networking</span>
                <h1>FoWeX Networking Platform</h1>
                <p>
                  FoWeX Networking combines foreign workforce recruitment, onboarding,
                  and exchange workflows in one connected platform for employers and ecosystem partners.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Explore FoWeX Networking
                  </a>
                  <a className="btn btn-ghost" href="/fwex/">
                    Product Site
                  </a>
                </div>

                <div className="pg-pill-grid">
                  {pillars.map((item) => (
                    <article className="pg-pill-card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>FoWeX Networking</span>
                  <h3>Data-Driven Workforce Ecosystem</h3>
                  <p>Support welfare and governance outcomes with practical digital infrastructure.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>FoWeX Networking Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={productTikTokEmbeds.fwex}
                        title="FoWeX Networking Overview"
                        allow="encrypted-media; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">How FoWeX Networking Supports Stakeholders</h2>
            <p className="section-subtitle">
              Purpose-built modules for regulators, employers, embassies, and workforce partners.
            </p>
          </AnimatedSection>

          <div className="features-grid">
            {capabilities.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.04}>
                <article className="feature-card">
                  <div className="feature-icon">
                    <item.icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">Operational Modules</h2>
            <p className="section-subtitle">
              Activate the components you need for worker services, oversight, and reporting.
            </p>
          </AnimatedSection>

          <div className="pg-channel-grid">
            {channels.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.05}>
                <article className="pg-channel-card">
                  <item.icon className="pg-channel-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
