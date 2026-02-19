import { AnimatedSection } from '../components/AnimatedSection'
import { BriefcaseBusiness, UserRoundPlus, FileCheck2, Building2, Handshake, ShieldCheck } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'

const pillars = [
  { title: 'One-Stop Service', desc: 'Recruitment and workforce services under one coordinated delivery model.' },
  { title: 'Foreign Worker Focus', desc: 'Specialized operational support for foreign worker onboarding and management.' },
  { title: 'Operational Guidance', desc: 'Structured consultation to reduce onboarding friction and process gaps.' },
]

const capabilities = [
  {
    icon: UserRoundPlus,
    title: 'Talent Sourcing',
    desc: 'Support employer hiring needs with structured candidate sourcing workflows.',
  },
  {
    icon: FileCheck2,
    title: 'Documentation Flow',
    desc: 'Coordinate required documentation and process checkpoints for onboarding.',
  },
  {
    icon: Building2,
    title: 'Employer Consultation',
    desc: 'Advise employers on workforce planning and practical service deployment.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Placement Operations',
    desc: 'Manage job placement lifecycle with clearer visibility across stakeholders.',
  },
  {
    icon: Handshake,
    title: 'Ecosystem Coordination',
    desc: 'Facilitate collaboration between employers, agencies, and support partners.',
  },
  {
    icon: ShieldCheck,
    title: 'Process Assurance',
    desc: 'Apply operating controls to improve consistency and reduce compliance risk.',
  },
]

const channels = [
  {
    icon: UserRoundPlus,
    title: 'Hiring Intake',
    desc: 'Capture workforce requirements and align sourcing strategy to business needs.',
  },
  {
    icon: FileCheck2,
    title: 'Onboarding Preparation',
    desc: 'Prepare worker onboarding packs and structured process handovers.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Service Delivery',
    desc: 'Coordinate recruitment execution with ongoing status and milestone updates.',
  },
  {
    icon: Handshake,
    title: 'Post-Placement Support',
    desc: 'Maintain continuity through advisory support and operational follow-ups.',
  },
]

export default function RecruitmentService() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ Recruitment Service</span>
                <h1>Foreign Workforce Recruitment With One-Stop Solutions</h1>
                <p>
                  End-to-end recruitment support for employers that need practical,
                  coordinated workforce onboarding and long-term operational continuity.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Connect With O2U
                  </a>
                  <a className="btn btn-ghost" href="/recruitment-service/">
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
                  <span>Recruitment Stack</span>
                  <h3>Source, Onboard, Support</h3>
                  <p>Structured recruitment operations for sustainable workforce outcomes.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Service Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="Recruitment Service Overview"
                        allow="encrypted-media; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Recruitment Operations Visual</h4>
                    <img
                      className="pg-hero-product-image"
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
                      alt="Recruitment and workforce management workflow"
                      loading="lazy"
                    />
                    <p>Track progress from hiring intake through onboarding and service delivery.</p>
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
            <h2 className="section-title">Why Employers Work With Us</h2>
            <p className="section-subtitle">
              Specialized recruitment operations designed for reliability and operational clarity.
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
            <h2 className="section-title">Service Modules</h2>
            <p className="section-subtitle">
              Select the recruitment and onboarding components that match your operating model.
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
