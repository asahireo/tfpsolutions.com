import { AnimatedSection } from '../components/AnimatedSection'
import { MonitorSmartphone, Store, CreditCard, Boxes } from 'lucide-react'
import { WhyChoosePaymentTerminal } from '../components/WhyChoosePaymentTerminal'

const channels = [
  { icon: Store, title: 'Retail Counters', desc: 'Serve walk-in customers with stable in-store checkout and settlement flows.' },
  { icon: MonitorSmartphone, title: 'Portable POS', desc: 'Use compact terminals for field teams, events, and mobile merchant operations.' },
  { icon: CreditCard, title: 'Omni-Payment Acceptance', desc: 'Accept cards, wallet, QR, and contactless methods in one operational workflow.' },
  { icon: Boxes, title: 'Multi-Branch Control', desc: 'Monitor terminal health, support tickets, and merchant rollout status centrally.' },
]

export default function PaymentTerminal() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ Payment Terminal</span>
                <h1>Smart In-Store Payment Terminal Infrastructure</h1>
                <p>
                  Build merchant acceptance operations with terminal + POS infrastructure designed
                  for deployment speed, transaction reliability, and centralized control.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Start With Sales
                  </a>
                  <a className="btn btn-ghost" href="/payment-terminal/">
                    Product Site
                  </a>
                </div>

                <div className="pg-pill-grid">
                  <article className="pg-pill-card">
                    <h3>Fast Deployment</h3>
                    <p>Terminal-ready rollout in minutes</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Device Monitoring</h3>
                    <p>Track health, usage, and incidents</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Store-Ready Payments</h3>
                    <p>Reliable offline/online operations</p>
                  </article>
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>Terminal Stack</span>
                  <h3>Integrated POS & Terminal Layer</h3>
                  <p>Handle terminal acceptance, reconciliation, and branch reporting from one stack.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Product Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame pg-hero-video-placeholder">
                      <div className="pg-hero-video-placeholder-inner">
                        <strong>Video Coming Soon</strong>
                        <p>Official Payment Terminal walkthrough will be published here.</p>
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
            <h2 className="section-title">Why Teams Choose Payment Terminal</h2>
            <p className="section-subtitle">
              Built for physical checkout speed, reliable acceptance, and scalable operations.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <WhyChoosePaymentTerminal />
          </AnimatedSection>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">More Ways To Integrate</h2>
            <p className="section-subtitle">
              Enable terminal acceptance across store types and business models.
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
