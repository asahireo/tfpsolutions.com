import { AnimatedSection } from '../components/AnimatedSection'
import { WalletCards, HandCoins, ShieldCheck, BarChart3 } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'
import { WhyChooseMicroLending } from '../components/WhyChooseMicroLending'

const channels = [
  { icon: WalletCards, title: 'Digital Loan Onboarding', desc: 'Collect borrower information and documents through guided digital flows.' },
  { icon: ShieldCheck, title: 'Risk & Policy Controls', desc: 'Apply credit rules and threshold checks before disbursement decisions.' },
  { icon: HandCoins, title: 'Disbursement & Collections', desc: 'Run disbursement and repayment operations with structured timelines.' },
  { icon: BarChart3, title: 'Portfolio Visibility', desc: 'Track lending performance and repayment behavior across cohorts.' },
]

export default function MicroLending() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ Micro Lending</span>
                <h1>Accessible Digital Lending For Growth Segments</h1>
                <p>
                  Deliver responsible micro-financing experiences with faster borrower onboarding,
                  cleaner risk controls, and better repayment visibility across the lending cycle.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Start With Sales
                  </a>
                  <a className="btn btn-ghost" href="/micro-lending/">
                    Product Site
                  </a>
                </div>

                <div className="pg-pill-grid">
                  <article className="pg-pill-card">
                    <h3>Faster Funding</h3>
                    <p>Quicker borrower approval and disbursement</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Risk Clarity</h3>
                    <p>Policy-driven credit and risk checks</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Repayment Control</h3>
                    <p>Structured tracking across loan cycles</p>
                  </article>
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>Lending Stack</span>
                  <h3>End-To-End Micro Financing Operations</h3>
                  <p>Manage onboarding, approval, disbursement, and repayment in one unified flow.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Product Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="Micro Lending TikTok"
                        allow="encrypted-media; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Micro Lending Product Visual</h4>
                    <img
                      className="pg-hero-product-image"
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200"
                      alt="Micro lending analytics and repayment overview"
                      loading="lazy"
                    />
                    <p>Operational view of lending status, approvals, and repayment performance.</p>
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
            <h2 className="section-title">Why Teams Choose Micro Lending</h2>
            <p className="section-subtitle">
              Built for speed, lending discipline, and sustainable portfolio performance.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <WhyChooseMicroLending />
          </AnimatedSection>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">More Ways To Integrate</h2>
            <p className="section-subtitle">
              Deploy lending workflows based on your process and borrower journey.
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
