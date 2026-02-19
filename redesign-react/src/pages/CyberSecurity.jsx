import { AnimatedSection } from '../components/AnimatedSection'
import { ShieldCheck, Radar, LockKeyhole, ServerCog, ScanSearch, Users } from 'lucide-react'
import { featuredProductSpotlight } from '../siteData'

const pillars = [
  { title: '24/7 Monitoring', desc: 'Continuous visibility across endpoints, network traffic, and critical workloads.' },
  { title: 'Threat Response', desc: 'Faster investigation and response playbooks for security incidents.' },
  { title: 'Governance Ready', desc: 'Controls and reporting aligned with enterprise security operations.' },
]

const capabilities = [
  {
    icon: Radar,
    title: 'Threat Detection',
    desc: 'Identify suspicious behavior early using layered monitoring and anomaly signals.',
  },
  {
    icon: LockKeyhole,
    title: 'Identity & Access',
    desc: 'Reduce unauthorized access risk with stronger access controls and policy enforcement.',
  },
  {
    icon: ScanSearch,
    title: 'Vulnerability Coverage',
    desc: 'Prioritize and remediate known weaknesses with recurring scans and action tracking.',
  },
  {
    icon: ServerCog,
    title: 'Infrastructure Hardening',
    desc: 'Harden server and application environments with baseline security controls.',
  },
  {
    icon: Users,
    title: 'Awareness Enablement',
    desc: 'Support teams with operational security guidance and response readiness.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Support',
    desc: 'Documented controls and evidence-friendly reporting for audits and reviews.',
  },
]

const channels = [
  {
    icon: Radar,
    title: 'SOC Visibility',
    desc: 'Monitor logs and events through centralized dashboards with contextual alerting.',
  },
  {
    icon: ScanSearch,
    title: 'Assessment Services',
    desc: 'Run periodic risk assessments and vulnerability reviews for critical systems.',
  },
  {
    icon: ServerCog,
    title: 'Security Engineering',
    desc: 'Integrate defensive controls during architecture, deployment, and operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Incident Readiness',
    desc: 'Define roles, escalation flows, and playbooks before incidents occur.',
  },
]

export default function CyberSecurity() {
  return (
    <main className="payment-service-page">
      <section className="section pg-hero">
        <div className="container">
          <AnimatedSection>
            <div className="pg-hero-layout">
              <div className="pg-hero-content">
                <span className="eyebrow">✦ Cyber Security</span>
                <h1>Operational Cyber Defense For Modern Enterprises</h1>
                <p>
                  Protect digital operations with continuous monitoring, hardened infrastructure,
                  and response-ready security workflows built for real business environments.
                </p>
                <div className="page-hero-actions">
                  <a className="btn btn-primary" href="/contact-us/">
                    Talk To Security Team
                  </a>
                  <a className="btn btn-ghost" href="/cyber-security/">
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
                  <span>Security Stack</span>
                  <h3>Detect, Respond, Recover</h3>
                  <p>Unified cyber operations to reduce risk exposure and service disruption.</p>
                </article>
                <div className="pg-hero-media-grid">
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Security Walkthrough</h4>
                    <div className="pg-hero-tiktok-frame">
                      <iframe
                        src={featuredProductSpotlight.tiktokEmbedUrl}
                        title="Cyber Security Overview"
                        allow="encrypted-media; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="pg-hero-block pg-hero-block-mini pg-hero-media-card">
                    <h4>Threat Monitoring Visual</h4>
                    <img
                      className="pg-hero-product-image"
                      src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1200"
                      alt="Security operations dashboard"
                      loading="lazy"
                    />
                    <p>Real-time visibility into system health, threats, and response status.</p>
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
            <h2 className="section-title">Why Organizations Choose Our Cyber Security Services</h2>
            <p className="section-subtitle">
              End-to-end security operations designed for reliability, speed, and accountability.
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
            <h2 className="section-title">Delivery Channels</h2>
            <p className="section-subtitle">
              Flexible security coverage across monitoring, engineering, and incident response.
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
