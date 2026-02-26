import { AnimatedSection } from '../components/AnimatedSection'
import { Link2, ReceiptText, Smartphone, PlugZap } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'
import { WhyChoosePaymentGateway } from '../components/WhyChoosePaymentGateway'

const channels = [
  { icon: Link2, title: 'Payment Links', desc: 'Create shareable links for rapid collection without custom checkout development.' },
  { icon: ReceiptText, title: 'Gateway Invoicing', desc: 'Issue one-off or scheduled invoices with payment status tracking and reminders.' },
  { icon: Smartphone, title: 'Web & Mobile Flows', desc: 'Deploy browser, hosted, and app-based payment journeys from one gateway stack.' },
  { icon: PlugZap, title: 'FPX by PayNet', desc: 'Support online banking rails with FPX, plus cards and digital wallet methods.' },
]

export default function PaymentGateway() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ Payment Gateway</span>
                <h1>Modern Payment Infrastructure For Growth</h1>
                <p>
                  MobilityOne Payment Gateway centralizes checkout, links, invoicing, and FPX
                  acceptance with clear onboarding, reconciliation, and settlement operations.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Start With Sales
                  </a>
                  <a className="btn btn-ghost" href={featuredProductSpotlight.ctaHref}>
                    Product Site
                  </a>
                </div>

                <div className="pg-pill-grid">
                  <article className="pg-pill-card">
                    <h3>Merchant Onboarding</h3>
                    <p>Structured KYC and document workflow</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>FPX + Multi Method</h3>
                    <p>Online banking, cards, wallet rails</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Integration Options</h3>
                    <p>Web, links, invoicing, mobile</p>
                  </article>
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>Payment Stack</span>
                  <h3>Unified Acceptance Layer</h3>
                  <p>One platform for merchant collection, channel orchestration, and payment visibility.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Product Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame pg-hero-video-placeholder">
                      <div className="pg-hero-video-placeholder-inner">
                        <strong>Video Coming Soon</strong>
                        <p>Official Payment Gateway walkthrough will be published here.</p>
                      </div>
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
            <h2 className="section-title">Why Teams Choose {featuredProductSpotlight.title}</h2>
            <p className="section-subtitle">
              Built for launch speed, compliance readiness, and commercial clarity.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <WhyChoosePaymentGateway />
          </AnimatedSection>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">More Ways To Integrate</h2>
            <p className="section-subtitle">
              Choose the channel that matches your workflow.
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
