import { AnimatedSection } from '../components/AnimatedSection'
import { Wallet, PlugZap, ArrowLeftRight, ShieldCheck } from 'lucide-react'
import { productTikTokEmbeds } from '../siteData'
import { WhyChooseEWalletIntegration } from '../components/WhyChooseEWalletIntegration'

const channels = [
  { icon: PlugZap, title: 'API Integration', desc: 'Connect merchant systems to wallet rails with clean API contracts.' },
  { icon: ArrowLeftRight, title: 'Live Status Events', desc: 'Receive real-time callbacks for authorization, success, and settlement.' },
  { icon: Wallet, title: 'Multi-Wallet Support', desc: 'Enable multiple wallet providers through one integration strategy.' },
  { icon: ShieldCheck, title: 'Secure Processing', desc: 'Protect data flows with controlled access and transaction safeguards.' },
]

export default function EWalletIntegration() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ E-Wallet Integration (MiPay)</span>
                <h1>Unified MiPay and Real-Time e-Wallet Integration</h1>
                <p>
                  Run MiPay wallet experiences and real-time e-wallet processing from one
                  platform with cleaner reconciliation and scalable connectivity.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Start With Sales
                  </a>
                  <a className="btn btn-ghost" href="/e-wallet-integration/">
                    Product Site
                  </a>
                </div>

                <div className="pg-pill-grid">
                  <article className="pg-pill-card">
                    <h3>Real-Time Events</h3>
                    <p>Immediate transaction state updates</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Unified API</h3>
                    <p>Single integration approach</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Operational Clarity</h3>
                    <p>Better reconciliation and reporting</p>
                  </article>
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>Integration Stack</span>
                  <h3>Wallet Connectivity Layer</h3>
                  <p>Handle wallet request flows, status sync, and settlement visibility in one place.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Product Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={productTikTokEmbeds.eWalletIntegration}
                        title="e-Wallet Integration TikTok"
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
            <h2 className="section-title">Why Teams Choose E-Wallet Integration (MiPay)</h2>
            <p className="section-subtitle">
              Designed for speed, reliability, and clean payment operations.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <WhyChooseEWalletIntegration />
          </AnimatedSection>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">More Ways To Integrate</h2>
            <p className="section-subtitle">
              Choose the integration path that fits your architecture.
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
