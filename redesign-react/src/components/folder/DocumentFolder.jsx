import { useMemo, useState } from 'react'

const FALLBACK_PREVIEW =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200'

function DocumentPreviewCard({ doc, index, totalCount, isVisible }) {
  const middleIndex = (totalCount - 1) / 2
  const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0
  const rotation = 0
  const translationX = factor * 92
  const translationY = -104

  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noreferrer"
      className="doc-folder-preview-card"
      style={{
        transform: isVisible
          ? `translateY(${translationY}px) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
          : 'translateY(0px) translateX(0px) rotate(0deg) scale(0.4)',
        opacity: isVisible ? 1 : 0,
        transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 55}ms`,
        zIndex: 20 + index,
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="doc-folder-preview-inner">
        <img
          src={doc.previewImage || FALLBACK_PREVIEW}
          alt={doc.title}
          onError={(event) => {
            event.currentTarget.src = FALLBACK_PREVIEW
          }}
        />
        <div className="doc-folder-preview-overlay" />
        <p className="doc-folder-preview-title">{doc.title}</p>
        <p className="doc-folder-preview-type">PDF</p>
      </div>
    </a>
  )
}

export function DocumentFolder({ title, subtitle, docs, gradient }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const previewDocs = useMemo(() => docs.slice(0, 5), [docs])
  const isVisible = isHovered || isPinned
  const folderGradient = gradient || 'linear-gradient(135deg, #e85f4f, #ff4f3a)'

  const togglePinned = () => {
    setIsPinned((prev) => !prev)
  }

  return (
    <article
      className={`doc-folder ${isVisible ? 'is-active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        className="doc-folder-hit"
        onClick={togglePinned}
        aria-label={`Toggle ${title} document previews`}
      >
        <div className="doc-folder-glow" />

        <div className="doc-folder-stage">
          <div className="doc-folder-back" style={{ background: folderGradient }} />
          <div className="doc-folder-tab" style={{ background: folderGradient }} />

          <div className="doc-folder-preview-stack">
            {previewDocs.map((doc, index) => (
              <DocumentPreviewCard
                key={doc.url}
                doc={doc}
                index={index}
                totalCount={previewDocs.length}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className="doc-folder-front" style={{ background: folderGradient }} />
          <div className="doc-folder-front-shine" />
        </div>

        <div className="doc-folder-copy">
          <h3>{title}</h3>
          <p>{docs.length} documents</p>
          <span>{subtitle}</span>
          <strong>Hover / Tap</strong>
        </div>
      </button>
    </article>
  )
}
