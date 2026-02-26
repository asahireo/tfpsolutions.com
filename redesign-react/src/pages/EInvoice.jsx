import { AnimatedSection } from '../components/AnimatedSection'
import { FileCheck2, ArrowLeftRight, Landmark, BarChart3, ShieldCheck, Workflow } from 'lucide-react'
import { productTikTokEmbeds } from '../siteData'

const pillars = [
  { title: 'Real-Time Validation', desc: 'Submit invoices for near real-time validation and compliance checks.' },
  { title: 'IRN + QR Output', desc: 'Generate IRN references and QR verification for each validated invoice.' },
  { title: 'JSON/XML Standard', desc: 'Exchange invoices in standardized machine-readable document structures.' },
]

const capabilities = [
  {
    icon: FileCheck2,
    title: 'Invoice Lifecycle',
    desc: 'Create, validate, transmit, and track invoice status from one operational console.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Trading Partner Exchange',
    desc: 'Exchange digital invoices with customers and vendors through standardized flows.',
  },
  {
    icon: Landmark,
    title: 'Regulatory Alignment',
    desc: 'Support Malaysia e-invoicing obligations with complete traceability and reporting support.',
  },
  {
    icon: Workflow,
    title: 'ERP Integration',
    desc: 'Connect billing and finance systems to automate invoice generation and updates.',
  },
  {
    icon: ShieldCheck,
    title: 'Control & Security',
    desc: 'Protect invoice data with access controls, traceability, and audit-friendly records.',
  },
  {
    icon: BarChart3,
    title: 'Finance Reporting',
    desc: 'Track invoicing throughput, exceptions, and cycle efficiency across teams.',
  },
]

const channels = [
  {
    icon: FileCheck2,
    title: 'Issuer Onboarding',
    desc: 'Configure entities, tax profiles, and invoice templates for production use.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Document Exchange',
    desc: 'Move invoices across partner networks with reliable validation checkpoints.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    desc: 'Automate repetitive billing operations to improve speed and consistency.',
  },
  {
    icon: BarChart3,
    title: 'Performance Insights',
    desc: 'Monitor invoice health and processing outcomes in near real-time.',
  },
]

export default function EInvoice() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ e-Invoice</span>
                <h1>Legally Compliant Digital Invoice Exchange</h1>
                <p>
                  One Invoice helps teams move from paper-heavy billing to compliant digital
                  invoicing with real-time validation, IRN generation, and QR verification.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Speak To Sales
                  </a>
                  <a className="btn btn-ghost" href="/e-invoice/">
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
                  <span>Invoice Stack</span>
                  <h3>Structured, Auditable, Scalable</h3>
                  <p>Digitize invoice operations while preserving compliance and finance controls.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Platform Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={productTikTokEmbeds.eInvoice}
                        title="e-Invoice Overview"
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
            <h2 className="section-title">Why Teams Choose e-Invoice</h2>
            <p className="section-subtitle">
              Improve time-to-payment, reduce manual errors, and strengthen compliance posture.
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
            <h2 className="section-title">Implementation Paths</h2>
            <p className="section-subtitle">
              Roll out in phases with integration support for finance and operations teams.
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
