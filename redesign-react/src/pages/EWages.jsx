import { AnimatedSection } from '../components/AnimatedSection'
import { HandCoins, ShieldCheck, Users, BarChart3 } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'
import { WhyChooseEWages } from '../components/WhyChooseEWages'

const channels = [
  { icon: Users, title: 'Employer Onboarding', desc: 'Set up employer payroll structures and worker payout rules efficiently.' },
  { icon: HandCoins, title: 'Digital Wage Disbursement', desc: 'Disburse wages through controlled digital channels with clear status updates.' },
  { icon: ShieldCheck, title: 'Compliance Tracking', desc: 'Apply compliance checks and payout controls for regulated wage operations.' },
  { icon: BarChart3, title: 'Payout Reporting', desc: 'Monitor wage transfer performance, confirmations, and exception handling.' },
]

export default function EWages() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ E-Wages Solution</span>
                <h1>Digital Wage Distribution Ecosystem</h1>
                <p>
                  Modernize wage disbursement with transparent digital workflows, stronger compliance
                  controls, and operational visibility across payroll payout cycles.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Start With Sales
                  </a>
                  <a className="btn btn-ghost" href="/e-wages/">
                    Product Site
                  </a>
                </div>

                <div className="pg-pill-grid">
                  <article className="pg-pill-card">
                    <h3>Faster Payouts</h3>
                    <p>Digitized wage disbursement cycles</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Compliance Clarity</h3>
                    <p>Trackable and auditable wage flows</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Operational Control</h3>
                    <p>Centralized payroll payout visibility</p>
                  </article>
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>Wage Stack</span>
                  <h3>End-To-End E-Wages Operations</h3>
                  <p>Handle wage setup, disbursement, confirmation, and reporting from one platform.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Product Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="E-Wages TikTok"
                        allow="encrypted-media; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>E-Wages Product Visual</h4>
                    <img
                      className="pg-hero-product-image"
                      src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200"
                      alt="Digital wage and payroll payout dashboard"
                      loading="lazy"
                    />
                    <p>Clear view of wage disbursement status and payout tracking metrics.</p>
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
            <h2 className="section-title">Why Teams Choose E-Wages Solution</h2>
            <p className="section-subtitle">
              Built for compliant wage operations, faster transfers, and cleaner reporting.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <WhyChooseEWages />
          </AnimatedSection>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">More Ways To Integrate</h2>
            <p className="section-subtitle">
              Configure digital wage workflows based on your operational model.
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
