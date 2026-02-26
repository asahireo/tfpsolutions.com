import { AnimatedSection } from '../components/AnimatedSection'
import { Store, Smartphone, Wallet, Users, HandCoins, ArrowBigUpDash } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'

const pillars = [
  { title: 'Micro Merchant Enablement', desc: 'Support digital readiness for micro enterprises and inclusive groups.' },
  { title: 'Cashless Acceptance', desc: 'Provide payment terminals to accelerate cashless transaction culture.' },
  { title: 'Inclusive Growth', desc: 'Built to support youth, women, and B40 entrepreneur participation.' },
]

const capabilities = [
  {
    icon: Store,
    title: 'Merchant Onboarding',
    desc: 'Deploy merchant-ready payment terminal setups for micro business operations.',
  },
  {
    icon: Wallet,
    title: 'Multi-Channel Payments',
    desc: 'Accept debit card, credit card, e-wallet, bill payment, and reload transactions.',
  },
  {
    icon: Smartphone,
    title: 'Digital Transaction Culture',
    desc: 'Help merchants shift to reliable, trackable, and faster payment experiences.',
  },
  {
    icon: HandCoins,
    title: 'Income Enablement',
    desc: 'Enable new revenue opportunities through broader digital payment acceptance.',
  },
  {
    icon: Users,
    title: 'Community Inclusion',
    desc: 'Create practical digital pathways for underserved and emerging entrepreneurs.',
  },
  {
    icon: ArrowBigUpDash,
    title: 'SME Program Alignment',
    desc: 'Aligned with entrepreneurship support initiatives for micro enterprise growth.',
  },
]

const channels = [
  {
    icon: Store,
    title: 'Terminal Provisioning',
    desc: 'Deploy and configure payment terminals for immediate operational use.',
  },
  {
    icon: Wallet,
    title: 'Transaction Services',
    desc: 'Enable cashless collection, bill payments, and selected top-up services.',
  },
  {
    icon: Smartphone,
    title: 'Merchant Training',
    desc: 'Support merchant adoption through practical onboarding and usage guidance.',
  },
  {
    icon: ArrowBigUpDash,
    title: 'Business Growth Support',
    desc: 'Use digital payments as a foundation for stronger business resilience and growth.',
  },
]

export default function UsahawanDigital() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ Usahawan Digital</span>
                <h1>Cashless Enablement For Micro Entrepreneurs</h1>
                <p>
                  Equip micro enterprises and inclusive communities with practical payment
                  technology to accelerate digital commerce participation across Malaysia.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Join The Program
                  </a>
                  <a className="btn btn-ghost" href="/usahawan-digital/">
                    Program Page
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
                  <span>Inclusion Stack</span>
                  <h3>Terminal, Training, Transactions</h3>
                  <p>Build digital payment confidence and operational capability for small merchants.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Program Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="Usahawan Digital Overview"
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
            <h2 className="section-title">Program Outcomes</h2>
            <p className="section-subtitle">
              Built to increase digital inclusion and improve cashless transaction readiness.
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
            <h2 className="section-title">Deployment Approach</h2>
            <p className="section-subtitle">
              Phase implementation based on merchant readiness and local ecosystem support.
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
