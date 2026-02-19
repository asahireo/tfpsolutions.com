import { AnimatedSection } from '../components/AnimatedSection'
import { agmEgmMeetings } from '../siteData'
import { CalendarDays, ExternalLink, Files } from 'lucide-react'

export default function AgmEgm() {
  const totalMeetings = agmEgmMeetings.length
  const latestYear = Math.max(...agmEgmMeetings.map((m) => m.year))
  const egmCount = agmEgmMeetings.filter((m) => m.type.includes('EGM')).length

  return (
    <main>
      <section className="page-hero section agm-hero">
        <div className="container page-hero-grid">
          <AnimatedSection>
            <span className="eyebrow">✦ AGM / EGM Centre</span>
            <h1>One Unified Meeting Archive</h1>
            <p>
              All AGM and EGM references are now centralized in one page while preserving the same
              visual style and navigation experience.
            </p>
            <div className="page-hero-actions">
              <a className="btn btn-primary" href="#meeting-list">View All Meetings</a>
              <a className="btn btn-ghost" href="/investor-relations/">Investor Relations</a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="agm-hero-panel">
              <div className="agm-stat">
                <CalendarDays size={18} />
                <span>{totalMeetings} archived meetings</span>
              </div>
              <div className="agm-stat">
                <Files size={18} />
                <span>Latest cycle: {latestYear}</span>
              </div>
              <div className="agm-stat">
                <CalendarDays size={18} />
                <span>{egmCount} extraordinary meeting entries</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" id="meeting-list">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Meeting Index</h2>
            <p className="section-subtitle">Browse by year and open materials in one click.</p>
          </AnimatedSection>

          <div className="agm-grid">
            {agmEgmMeetings.map((meeting, index) => (
              <AnimatedSection key={meeting.id} delay={index * 0.04}>
                <article id={meeting.id} className="agm-card">
                  <div className="agm-card-top">
                    <span className="agm-type-pill">{meeting.type}</span>
                    <span className="agm-year-pill">{meeting.year}</span>
                  </div>
                  <h3>{meeting.label}</h3>
                  <p>{meeting.description}</p>
                  <a href={meeting.legacyUrl} target="_blank" rel="noopener noreferrer" className="agm-open-link">
                    Open Materials
                    <ExternalLink size={16} />
                  </a>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
