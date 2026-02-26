import { AnimatedSection } from '../components/AnimatedSection'
import { Users, Calculator, ShieldCheck, BarChart3 } from 'lucide-react'
import { productTikTokEmbeds } from '../siteData'
import { WhyChooseSmartHrPayroll } from '../components/WhyChooseSmartHrPayroll'

const channels = [
  { icon: Users, title: 'Employee Lifecycle', desc: 'Manage workforce records, onboarding, and status updates in one system.' },
  { icon: Calculator, title: 'Payroll Automation', desc: 'Automate salary calculations, deductions, and payroll execution cycles.' },
  { icon: ShieldCheck, title: 'Compliance Controls', desc: 'Apply policy and statutory checks with standardized payroll governance.' },
  { icon: BarChart3, title: 'HR & Payroll Reporting', desc: 'Track workforce metrics, payroll outputs, and operational insights.' },
]

export default function SmartHrPayroll() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ SmartHR Payroll</span>
                <h1>Automated HR & Payroll Operations Platform</h1>
                <p>
                  Simplify HR workflows and payroll execution with a centralized platform built for
                  accurate calculations, compliance readiness, and better workforce visibility.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Start With Sales
                  </a>
                  <a className="btn btn-ghost" href="/smarthr-payroll/">
                    Product Site
                  </a>
                </div>

                <div className="pg-pill-grid">
                  <article className="pg-pill-card">
                    <h3>HR Automation</h3>
                    <p>Streamline workforce admin workflows</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Payroll Precision</h3>
                    <p>Reliable salary and deduction processing</p>
                  </article>
                  <article className="pg-pill-card">
                    <h3>Compliance Ready</h3>
                    <p>Policy checks embedded in operations</p>
                  </article>
                </div>
              </div>

              <div className="pg-hero-visual">
                <div className="pg-hero-halo" />
                <article className="pg-hero-block pg-hero-block-main">
                  <span>HR Tech Stack</span>
                  <h3>Unified Workforce & Payroll Control</h3>
                  <p>Operate employee data, payroll cycles, and approvals from one integrated layer.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Product Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={productTikTokEmbeds.smartHrPayroll}
                        title="SmartHR Payroll TikTok"
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
            <h2 className="section-title">Why Teams Choose SmartHR Payroll</h2>
            <p className="section-subtitle">
              Built for reliable payroll cycles, cleaner HR operations, and compliance confidence.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <WhyChooseSmartHrPayroll />
          </AnimatedSection>
        </div>
      </section>

      <section className="section pg-section">
        <div className="container">
          <AnimatedSection className="pg-section-head">
            <h2 className="section-title">More Ways To Integrate</h2>
            <p className="section-subtitle">
              Choose modules based on team process and operational maturity.
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
