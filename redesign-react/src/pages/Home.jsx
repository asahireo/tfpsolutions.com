import { SplineScene } from '../components/SplineScene'
import { InfiniteSlider } from '../components/InfiniteSlider'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { AnimatedSection } from '../components/AnimatedSection'
import { ServiceIcon } from '../components/ServiceIcon'
import { FeatureIcon } from '../components/FeatureIcon'
import { CardStack } from '../components/CardStack'
import { ROBOT_SCENE, services, features, partners, growthIntegratedEngines } from '../siteData'

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <AnimatedSection>
            <span className="eyebrow">✦ Productivity Through Innovation</span>
            <h1>Fintech and business platforms built for real operations.</h1>
            <p>
              TFP Solutions Berhad provides integrated products across payment, payroll,
              recruitment, ERP and cybersecurity for sustainable business growth.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#services">Explore Services</a>
              <a className="btn btn-ghost" href="/contact-us/">Talk To Our Team</a>
            </div>
            <div className="stats">
              <div className="stat">
                <strong><AnimatedCounter value={18} suffix="+" /></strong>
                <span className="stat-label">Years in operation</span>
              </div>
              <div className="stat">
                <strong><AnimatedCounter value={10} suffix="+" /></strong>
                <span className="stat-label">Core service lines</span>
              </div>
              <div className="stat">
                <strong>Bursa</strong>
                <span className="stat-label">Public listed group</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="hero-panel">
              <SplineScene scene={ROBOT_SCENE} className="spline-canvas" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="ticker-wrap">
        <div className="container">
          <InfiniteSlider gap={14} duration={28} durationOnHover={45} className="ticker-slider">
            {services.map(([label]) => (
              <span className="pill" key={label}>{label}</span>
            ))}
          </InfiniteSlider>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Core Services</h2>
            <p className="section-subtitle">
              Focused offerings that drive payment performance and digital transformation across industries.
            </p>
          </AnimatedSection>
          <CardStack
            className="services-stack"
            items={growthIntegratedEngines.map((engine) => ({
              id: engine.title,
              title: engine.title,
              description: engine.description,
              href: `/corporate-overview/#structure`,
            }))}
            maxVisible={3}
            cardWidth={480}
            cardHeight={252}
            overlap={0.22}
            spreadDeg={20}
            depthPx={130}
            tiltXDeg={6}
            activeLiftPx={8}
            activeScale={1}
            inactiveScale={0.86}
            showDots={true}
            renderCard={(item, meta) => (
              <div className={`service-card service-card-stack ${meta?.active ? 'is-active' : 'is-inactive'}`}>
                <ServiceIcon name={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Why Choose TFP?</h2>
            <p className="section-subtitle">
              Trusted by enterprises across Malaysia for nearly two decades of reliability.
            </p>
          </AnimatedSection>
          <div className="features-grid">
            {features.map(([icon, title, desc], i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="feature-card">
                  <FeatureIcon name={icon} />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <AnimatedSection>
          <div className="container structure">
            <div>
              <h2 className="section-title">Corporate Structure</h2>
              <p className="section-subtitle">
                A connected group of specialized companies under TFP Solutions Berhad,
                each focused on delivering excellence in their domain.
              </p>
              <a className="btn btn-primary" href="/corporate-overview/#structure">View Full Group Structure</a>
            </div>
            <img
              src="https://tfp.com.my/wp-content/uploads/2021/07/TFP-Group-Corporate-Structure.png"
              alt="TFP corporate structure diagram"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Our Technology Partners</h2>
            <p className="section-subtitle">
              Collaborating with global technology leaders to deliver enterprise-grade solutions.
            </p>
          </AnimatedSection>
          <div className="partners">
            {partners.map(([name, src], i) => (
              <AnimatedSection key={name} delay={i * 0.08}>
                <div className="partner">
                  <img src={src} alt={name} loading="lazy" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <AnimatedSection>
          <div className="container cta">
            <div>
              <h2>Ready to transform your operations?</h2>
              <p>Share your requirements and we'll recommend the right product stack for your business.</p>
            </div>
            <a className="btn btn-primary" href="/contact-us/">Get Started Today</a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
