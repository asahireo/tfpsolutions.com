import { useMemo, useState } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'
import { DocumentFolder } from '../components/folder/DocumentFolder'
import { corporateDocuments } from '../siteData'

const groupOrder = ['Terms of Reference', 'Policies', 'Other Governance']

function groupDocs(docs) {
  const out = new Map()
  for (const g of groupOrder) out.set(g, [])
  for (const d of docs) {
    const key = out.has(d.group) ? d.group : 'Other Governance'
    out.get(key).push(d)
  }
  return out
}

const groupMeta = {
  'Terms of Reference': {
    subtitle: 'Committee TOR documents for oversight and governance.',
    gradient: 'linear-gradient(135deg, #91d94e, #5ea82c)',
  },
  Policies: {
    subtitle: 'Group policies that guide conduct, integrity, and governance practices.',
    gradient: 'linear-gradient(135deg, #8bd849, #4e9720)',
  },
  'Other Governance': {
    subtitle: 'Board-level governance references and standards.',
    gradient: 'linear-gradient(135deg, #9de562, #6ab633)',
  },
}

export default function CorporateInformation() {
  const [query, setQuery] = useState('')

  const filteredDocs = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return corporateDocuments
    return corporateDocuments.filter((d) => {
      const hay = `${d.group} ${d.title} ${d.desc || ''}`.toLowerCase()
      return hay.includes(q)
    })
  }, [query])

  const grouped = useMemo(() => groupDocs(filteredDocs), [filteredDocs])

  return (
    <main>
      <section className="page-hero section corporate-hero">
        <div className="container page-hero-grid corporate-hero-grid">
          <AnimatedSection>
            <span className="eyebrow">✦ Governance</span>
            <h1>Corporate Information</h1>
            <p>
              Committee terms of reference, governance policies, and key board documents.
              Use the library below to find and open the latest PDFs.
            </p>

            <div className="doc-toolbar">
              <label className="doc-search">
                <span className="sr-only">Search documents</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search: audit committee, anti-bribery, board charter..."
                  inputMode="search"
                  aria-label="Search corporate documents"
                />
              </label>

              <div className="doc-jumps" aria-label="Jump to sections">
                <a className="chip" href="#terms">Terms</a>
                <a className="chip" href="#policies">Policies</a>
                <a className="chip" href="#others">Others</a>
              </div>
            </div>

            <div className="page-hero-actions">
              <a className="btn btn-primary" href="/board-of-directors/">Board of Directors</a>
              <a className="btn btn-ghost" href="/management-team/">Management Team</a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="corporate-hero-panel">
              <div className="corporate-panel-kicker">Document Library</div>
              <div className="corporate-panel-stats">
                <div className="corp-stat">
                  <strong>{corporateDocuments.length}</strong>
                  <span>documents</span>
                </div>
                <div className="corp-stat">
                  <strong>3</strong>
                  <span>sections</span>
                </div>
                <div className="corp-stat">
                  <strong>PDF</strong>
                  <span>format</span>
                </div>
              </div>
              <p className="corporate-panel-note">
                External links open on `tfp.com.my` in a new tab.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Governance Folders</h2>
            <p className="section-subtitle">
              Hover or tap a folder to fan out document previews. Click a preview to open the PDF.
            </p>
          </AnimatedSection>

          <div className="doc-folder-grid">
            {groupOrder.map((g, index) => {
              const docs = grouped.get(g) || []
              if (!docs.length) return null

              return (
                <AnimatedSection key={g} delay={index * 0.06}>
                  <DocumentFolder
                    title={g}
                    subtitle={groupMeta[g].subtitle}
                    docs={docs}
                    gradient={groupMeta[g].gradient}
                  />
                </AnimatedSection>
              )
            })}
          </div>

          {!filteredDocs.length ? (
            <AnimatedSection>
              <div className="empty-state">
                <h3>No matches</h3>
                <p>Try a different search term.</p>
                <button className="btn btn-ghost" type="button" onClick={() => setQuery('')}>
                  Clear search
                </button>
              </div>
            </AnimatedSection>
          ) : null}
        </div>
      </section>
    </main>
  )
}
