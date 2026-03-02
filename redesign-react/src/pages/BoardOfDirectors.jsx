import { useState } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'
import { boardMembers } from '../siteData'
import { resolveAssetPath } from '../lib/resolveAssetPath'

function getParagraphs(text) {
  return (text || '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
}

function DefaultAvatar({ name, className }) {
  return (
    <div className={`${className} board-accordion-avatar-fallback`} aria-label={name} role="img">
      <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <circle cx="32" cy="24" r="12" />
        <path d="M14 54c1.8-11.3 9.4-17 18-17s16.2 5.7 18 17" />
      </svg>
    </div>
  )
}

function MemberMedia({ member, className }) {
  if (!member.image || member.avatarType === 'default') {
    return <DefaultAvatar name={member.name} className={className} />
  }

  return (
    <img
      src={resolveAssetPath(member.image)}
      alt={member.name}
      className={className}
      loading="lazy"
      style={{ objectPosition: member.imagePosition || 'center 34%' }}
    />
  )
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
                        <MemberMedia member={member} className="board-accordion-avatar" />
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
                          <MemberMedia member={member} className="board-accordion-detail-portrait" />
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
