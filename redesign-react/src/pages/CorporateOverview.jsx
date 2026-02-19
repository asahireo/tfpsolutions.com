import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '../components/AnimatedSection'
import { FeatureIcon } from '../components/FeatureIcon'
import { partners, values } from '../siteData'
import { RollingTextList } from '../components/RollingTextList'
import { GroupStructure } from '../components/GroupStructure'

export default function CorporateOverview() {
  const [isChairmanExpanded, setIsChairmanExpanded] = useState(false)

  return (
    <main>
      <section className="page-hero section overview-hero">
        <div className="container page-hero-grid">
          <AnimatedSection>
            <span className="eyebrow">✦ Corporate Overview</span>
            <h1>Productivity Through Innovation</h1>
            <p>
              TFP Solutions Berhad stands for Telecommunications, FinTech and App Platform.
              The group has progressively evolved to stay at the forefront of the IT business sector.
            </p>
            <div className="page-hero-actions">
              <a className="btn btn-primary" href="/corporate-information/">Corporate Information</a>
              <a className="btn btn-ghost" href="/investor-relations/">Investor Relations</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section overview-combined" id="chairman">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Who We Are & Chairman&apos;s Foreword</h2>
            <p className="section-subtitle">Company profile and a message from leadership in one view.</p>
          </AnimatedSection>

          <div className="overview-combined-grid">
            <AnimatedSection delay={0.05}>
              <article className="overview-story overview-intro-card">
                <h3>Who We Are</h3>
                <p>
                  Since 2008, the company has operated as a Bursa Malaysia ACE Market public-listed entity.
                  TFP Group has transformed from a software developer into a software service provider, and today
                  into a fintech-focused organization integrated with business management solutions.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <article className="chairman-message-card">
                <div className="message-content">
                  <h3>Chairman&apos;s Foreword</h3>
                  <p className="message-lead"><strong>Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</strong></p>
                  <p>
                    TFP Solutions Berhad, which stands for &ldquo;Telecommunications, FinTech, and App Platform,&rdquo; has progressed from a
                    software developer to a software service provider, and now TFP has shifted into a FinTech entity that works
                    in tandem with our existing Business Management Solutions (&ldquo;BMS&rdquo;).
                  </p>

                  <AnimatePresence>
                    {isChairmanExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p>
                          As for year 2020, Covid-19 pandemic spread like wildfire, bringing repercussions to many businesses in Malaysia.
                          This was a wake-up call as many businesses saw the emergence to transform into a cashless and digital ecosystem
                          and to be in line with the recent Government&apos;s MyDIGITAL, PEMERKASA and Paynet&apos;s cashless initiatives, we are
                          lucky to be in position to facilitate underserved groups to embark on the digital economy.
                        </p>
                        <p>
                          During the year, we recorded a loss after taxation of RM3.62 million, as a result of our business strategy
                          transformation into fintech, we have also successfully completed our private placements and rights issue
                          exercises raising a total of RM16.35 million with our support from our shareholders.
                        </p>
                        <h4>Going Digital with FinTech Infrastructure</h4>
                        <p>
                          In today&apos;s world, communication is at the core of how we associate with one another. TFP Group, via our wholly-owned
                          subsidiary MBP Solutions Sdn Bhd inked a co-branding agreement with Tune Talk to form OneCALL, which targets
                          the B40/rural population, petty traders, and the underserved gig economy by providing unique features of
                          e-Wallet which helps to make bill payments, remittance and prepaid reload.
                        </p>
                        <p>
                          The digital cooperative system offered helps to cover all aspects of the businesses needs and provide an easy
                          transition from their current system to a new one. Koperasi Perwaja Kemaman Berhad and Koperasi Pembangunan
                          Usahama Masyarakat Maju Sabah Berhad (KOPUSAMAJU), both of which is under Malaysia Co-operative Societies
                          Commission of Malaysia (SKM), are recent cooperative partnerships with which we are assisting in evolution
                          and provision digital cooperative services.
                        </p>
                        <h4>Brighter prospects ahead</h4>
                        <p>
                          Malaysia appears to be experiencing yet another period of challenges and uncertainty at the time of writing,
                          however TFP will continue to optimise our resources in our ongoing efforts for high productivity coupled with
                          prudent spending and investments where needed.
                        </p>
                        <p>
                          We see a potential for providing new insights to various businesses by assisting them with an improved digital
                          transformation strategy through our FinTech services.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    className="btn-expand"
                    onClick={() => setIsChairmanExpanded(!isChairmanExpanded)}
                  >
                    {isChairmanExpanded ? 'Read Less' : 'Read Full Message'}
                  </button>
                </div>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" id="structure">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Group Structure</h2>
            <p className="section-subtitle">Our ecosystem of subsidiaries and business units.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <GroupStructure />
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              Integrated products and services across fintech, payments, HR, and operations platforms.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="what-we-do-compact">
              <RollingTextList />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              Principles that guide our transformation and operations.
            </p>
          </AnimatedSection>

          <div className="features-grid">
            {values.map(([icon, title, desc], i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
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
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle">
              Technology and ecosystem partners that support enterprise-grade delivery.
            </p>
          </AnimatedSection>

          <div className="overview-partners-grid">
            {partners.map(([name, logo], index) => (
              <AnimatedSection key={name} delay={index * 0.03}>
                <article className="overview-partner-card">
                  <img src={logo} alt={name} loading="lazy" />
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
