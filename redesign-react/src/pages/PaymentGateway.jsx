import { AnimatedSection } from '../components/AnimatedSection'
import { Link2, ReceiptText, Smartphone, PlugZap } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'
import { WhyChoosePaymentGateway } from '../components/WhyChoosePaymentGateway'

const channels = [
  { icon: Link2, title: 'Shareable Links', desc: 'Generate a hosted payment page and share it instantly with your customers.' },
  { icon: ReceiptText, title: 'Flexible Invoicing', desc: 'Issue recurring or one-off invoices with customizable payment terms.' },
  { icon: Smartphone, title: 'Mobile SDKs', desc: 'Accept payments inside iOS and Android apps using native SDK integrations.' },
  { icon: PlugZap, title: 'Third-Party Integrations', desc: 'Connect with popular platforms and plugins through prebuilt connectors.' },
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
                  From ecommerce stores and subscriptions to platforms and marketplaces, manage
                  your payment stack across channels with faster setup and cleaner operations.
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
                    <h3>Fast Onboarding</h3>
                    <p>Integration-ready in minutes</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Fraud Controls</h3>
                    <p>Data-backed risk management</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Multi-Channel</h3>
                    <p>Web, invoicing, links, mobile</p>
                  </article>
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>Payment Stack</span>
                  <h3>Unified Acceptance Layer</h3>
                  <p>Checkout, links, invoicing, and app SDKs under one operational model.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Product Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="Payment Gateway TikTok"
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
            <h2 className="section-title">Why Teams Choose {featuredProductSpotlight.title}</h2>
            <p className="section-subtitle">
              Designed for quick launch, stronger conversion, and better operational visibility.
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
