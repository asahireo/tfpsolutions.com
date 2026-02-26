import { AnimatedSection } from '../components/AnimatedSection'
import { Smartphone, CreditCard, Wallet, ShieldCheck } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'
import { WhyChooseMiPay } from '../components/WhyChooseMiPay'

const channels = [
  { icon: Smartphone, title: 'Mobile Wallet App', desc: 'Support top-up, transfer, and payment usage from one mobile app flow.' },
  { icon: CreditCard, title: 'Prepaid Master Card', desc: 'Enable prepaid card access for secure spending online and offline.' },
  { icon: Wallet, title: 'Wallet & Card Linking', desc: 'Bridge wallet balances with card programs for flexible everyday payments.' },
  { icon: ShieldCheck, title: 'Risk & Compliance', desc: 'Apply safeguards across onboarding, spend controls, and transaction monitoring.' },
]

export default function MiPay() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ MiPay</span>
                <h1>Mobile Fintech Wallet & Prepaid Card Platform</h1>
                <p>
                  Give users a secure, practical way to pay, top up, and manage money through
                  wallet-first experiences integrated with prepaid card capabilities.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Start With Sales
                  </a>
                  <a className="btn btn-ghost" href="/mipay/">
                    Product Site
                  </a>
                </div>

                <div className="pg-pill-grid">
                  <article className="pg-pill-card">
                    <h3>Wallet First</h3>
                    <p>Everyday payments and top-up flows</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Prepaid Ready</h3>
                    <p>Card-enabled payment access</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>User Control</h3>
                    <p>Spend visibility and account safety</p>
                  </article>
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>Fintech Stack</span>
                  <h3>Unified Wallet + Card Experience</h3>
                  <p>Deliver onboarding, transactions, and controls through one connected product layer.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Product Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="MiPay TikTok"
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
            <h2 className="section-title">Why Teams Choose MiPay</h2>
            <p className="section-subtitle">
              Built for mobile-first users, operational clarity, and scalable fintech rollout.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <WhyChooseMiPay />
          </AnimatedSection>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">More Ways To Integrate</h2>
            <p className="section-subtitle">
              Choose the delivery channel based on your user and business model.
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
