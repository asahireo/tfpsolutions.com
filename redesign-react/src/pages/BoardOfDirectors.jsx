import { useState } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'
import { boardMembers } from '../siteData'

function getParagraphs(text) {
  return (text || '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
}

export default function BoardOfDirectors() {
  const [openName, setOpenName] = useState(boardMembers[0]?.name || null)

  return (
    <main>
      <section className="page-hero section">
        <div className="container page-hero-grid">
          <AnimatedSection>
            <span className="eyebrow">✦ Corporate Information</span>
            <h1>Board of Directors</h1>
            <p>
              Compact board list with expandable full profiles. Click any row to open detailed
              background and appointment information.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="board-accordion">
            {boardMembers.map((member, index) => {
              const isOpen = openName === member.name
              const panelId = `board-panel-${index}`
              const buttonId = `board-trigger-${index}`
              const paragraphs = getParagraphs(member.bio)

              return (
                <AnimatedSection key={member.name} delay={Math.min(index * 0.04, 0.25)}>
                  <article className={`board-accordion-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      id={buttonId}
                      type="button"
                      className="board-accordion-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenName((prev) => (prev === member.name ? null : member.name))}
                    >
                      <div className="board-accordion-leading">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="board-accordion-avatar"
                          loading="lazy"
                          style={{ objectPosition: member.imagePosition || 'center 34%' }}
                        />
                        <div className="board-accordion-heading">
                          <h3>{member.name}</h3>
                          <p>{member.role}</p>
                        </div>
                      </div>
                      <span className="board-accordion-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div
                      id={panelId}
                      className="board-accordion-panel"
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                    >
                      <div className="board-accordion-panel-inner">
                        <div className="board-accordion-detail-media">
                          <img
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                            style={{ objectPosition: member.imagePosition || 'center 34%' }}
                          />
                        </div>
                        <div className="board-accordion-detail-text">
                          {paragraphs.map((paragraph, idx) => (
                            <p key={`${member.name}-bio-${idx}`}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
