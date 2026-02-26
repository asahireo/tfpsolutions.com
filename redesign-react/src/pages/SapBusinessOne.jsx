import { AnimatedSection } from '../components/AnimatedSection'
import { Boxes, Warehouse, ShoppingCart, BarChart3, Workflow, Building2 } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'

const pillars = [
  { title: 'SME Digital Core', desc: 'Integrated ERP capability tailored for growing businesses.' },
  { title: 'Operational Control', desc: 'Connect procurement, inventory, and finance operations in one system.' },
  { title: 'Scalable Foundation', desc: 'Build standardized processes that scale as operations expand.' },
]

const capabilities = [
  {
    icon: Boxes,
    title: 'ERP Implementation',
    desc: 'Deploy SAP Business One and OneERP with structured rollout and governance support.',
  },
  {
    icon: Warehouse,
    title: 'Inventory & Production',
    desc: 'Track stock movements, warehouse data, and production planning workflows.',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement Management',
    desc: 'Streamline vendor engagement, purchase orders, and cost control activities.',
  },
  {
    icon: Workflow,
    title: 'Process Integration',
    desc: 'Integrate finance, sales, and operations for cleaner cross-functional execution.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    desc: 'Gain operational insights for forecasting, planning, and decision acceleration.',
  },
  {
    icon: Building2,
    title: 'Industry Readiness',
    desc: 'Adapt ERP modules to sector-specific workflows and growth priorities.',
  },
]

const channels = [
  {
    icon: Boxes,
    title: 'Assessment & Design',
    desc: 'Define ERP scope, target workflows, and phased implementation milestones.',
  },
  {
    icon: Workflow,
    title: 'System Configuration',
    desc: 'Configure modules, roles, and process logic to match business operations.',
  },
  {
    icon: Warehouse,
    title: 'Data & Migration',
    desc: 'Prepare master data and migration paths for clean production go-live.',
  },
  {
    icon: BarChart3,
    title: 'Go-Live & Optimization',
    desc: 'Stabilize deployment and optimize performance with measurable outcomes.',
  },
]

export default function SapBusinessOne() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ SAP Business One & OneERP</span>
                <h1>Digital Core For SME Operations</h1>
                <p>
                  Implement enterprise-grade ERP capabilities to unify inventory,
                  procurement, finance, and production management in one integrated system.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Talk To ERP Team
                  </a>
                  <a className="btn btn-ghost" href="/sap-2/">
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
                  <span>ERP Stack</span>
                  <h3>Plan, Execute, Scale</h3>
                  <p>Operational ERP implementation built for long-term business performance.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Implementation Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="SAP Business One Overview"
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
            <h2 className="section-title">Why Teams Deploy SAP Business One</h2>
            <p className="section-subtitle">
              Bring discipline and traceability to core business operations with integrated ERP.
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
            <h2 className="section-title">Implementation Model</h2>
            <p className="section-subtitle">
              Structured delivery from discovery through deployment and post-go-live optimization.
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
