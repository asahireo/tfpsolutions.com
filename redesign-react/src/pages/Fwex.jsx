import { AnimatedSection } from '../components/AnimatedSection'
import { UserRoundCheck, Globe, BarChart3, BanknoteArrowUp, Building2, ShieldCheck } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'

const pillars = [
  { title: 'Worker-Centric', desc: 'Digital services to support foreign worker welfare and transparency.' },
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
                <span className="eyebrow">✦ FWeX</span>
                <h1>Foreign Worker eXchange Platform</h1>
                <p>
                  FWeX connects workforce stakeholders through a fintech-enabled platform that
                  improves visibility, welfare tracking, and decision support for foreign worker ecosystems.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Explore FWeX
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
                  <span>FWeX Platform</span>
                  <h3>Data-Driven Workforce Ecosystem</h3>
                  <p>Support welfare and governance outcomes with practical digital infrastructure.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>FWeX Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="FWeX Overview"
                        allow="encrypted-media; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Workforce Operations Visual</h4>
                    <img
                      className="pg-hero-product-image"
                      src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?auto=format&fit=crop&q=80&w=1200"
                      alt="Workforce analytics and coordination"
                      loading="lazy"
                    />
                    <p>Consolidated insights across attendance, movement, and financial behavior.</p>
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
            <h2 className="section-title">How FWeX Supports Stakeholders</h2>
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
