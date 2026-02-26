import { AnimatedSection } from '../components/AnimatedSection'
import { GraduationCap, CreditCard, Smartphone, Wallet, BookOpenCheck, Users } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'

const pillars = [
  { title: 'Digital School Programs', desc: 'Connect schools, parents, and operators through one digital platform.' },
  { title: 'Smart Card Ecosystem', desc: 'Support secure identity and payment-linked student usage patterns.' },
  { title: 'App-Driven Experience', desc: 'Use mobile apps for engagement, communications, and service access.' },
]

const capabilities = [
  {
    icon: GraduationCap,
    title: 'Program Management',
    desc: 'Coordinate digital initiatives for schools with centralized administration tools.',
  },
  {
    icon: CreditCard,
    title: 'Smart Card Functions',
    desc: 'Enable student identity, controlled spending, and school service transactions.',
  },
  {
    icon: Smartphone,
    title: 'Family App Features',
    desc: 'Provide parents and guardians with convenient access to school-related services.',
  },
  {
    icon: Wallet,
    title: 'Cashless Campus Use',
    desc: 'Encourage safer and more transparent cashless transactions in school environments.',
  },
  {
    icon: BookOpenCheck,
    title: 'Learning Enablement',
    desc: 'Support digital learning and school operations through integrated tooling.',
  },
  {
    icon: Users,
    title: 'Stakeholder Collaboration',
    desc: 'Link administrators, teachers, students, and families in one ecosystem.',
  },
]

const channels = [
  {
    icon: GraduationCap,
    title: 'School Onboarding',
    desc: 'Set up institutions, user roles, and operational policies for launch readiness.',
  },
  {
    icon: CreditCard,
    title: 'Card Issuance',
    desc: 'Issue and manage student smart cards with configurable access and limits.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Experience',
    desc: 'Deploy app workflows for notifications, top-up support, and activity tracking.',
  },
  {
    icon: Wallet,
    title: 'Payment Operations',
    desc: 'Manage school-related payments and spending records with cleaner reconciliation.',
  },
]

export default function OneSchool() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ OneSchool</span>
                <h1>Digital School Program & Smart Card Platform</h1>
                <p>
                  OneSchool enables digital learning ecosystems where implementation,
                  financing, and day-to-day student services can be managed in one place.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Start A Pilot
                  </a>
                  <a className="btn btn-ghost" href="/oneschool/">
                    Product Site
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
                  <span>Education Stack</span>
                  <h3>Learning, Identity, Payments</h3>
                  <p>Operational tools for modern school ecosystems and connected communities.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>OneSchool Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="OneSchool Overview"
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
            <h2 className="section-title">What OneSchool Delivers</h2>
            <p className="section-subtitle">
              Practical tools for education operators and families moving into digital-first workflows.
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
            <h2 className="section-title">Rollout Options</h2>
            <p className="section-subtitle">
              Deploy in phases based on school readiness and ecosystem requirements.
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
