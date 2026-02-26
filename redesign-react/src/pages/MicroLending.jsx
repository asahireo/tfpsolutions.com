import { AnimatedSection } from '../components/AnimatedSection'
import { WalletCards, HandCoins, ShieldCheck, BarChart3 } from 'lucide-react'
import { WhyChooseMicroLending } from '../components/WhyChooseMicroLending'

const channels = [
  { icon: WalletCards, title: 'Digital Loan Onboarding', desc: 'Capture borrower information and documents through guided digital processes.' },
  { icon: ShieldCheck, title: 'Risk & Policy Controls', desc: 'Apply risk scoring, thresholds, and policy checks before funding decisions.' },
  { icon: HandCoins, title: 'Disbursement & Collections', desc: 'Operate disbursement and repayment with structured reminders and timelines.' },
  { icon: BarChart3, title: 'Portfolio Visibility', desc: 'Track repayment quality and collection outcomes across borrower segments.' },
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
                  Deliver responsible micro-financing with disciplined onboarding, risk governance,
                  and portfolio visibility across approval, disbursement, and repayment cycles.
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
                    <div className="pg-hero-tiktok-frame pg-hero-video-placeholder">
                      <div className="pg-hero-video-placeholder-inner">
                        <strong>Video Coming Soon</strong>
                        <p>Official Micro Lending walkthrough will be published here.</p>
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
