import { AnimatedSection } from '../components/AnimatedSection'
import { galleryItems } from '../siteData'

export default function Gallery() {
  return (
    <main>
      <section className="page-hero section gallery-hero">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">✦ Media</span>
            <h1>Gallery</h1>
            <p className="section-subtitle">Photos from events, activities, and corporate milestones.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.25rem' }}>
        <div className="container">
          {galleryItems.length > 0 ? (
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <AnimatedSection key={item.id}>
                  <article className="gallery-card">
                    <img src={item.image} alt={item.title || 'Gallery image'} loading="lazy" />
                    {item.title ? <p>{item.title}</p> : null}
                  </article>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="gallery-empty" aria-live="polite" />
            </AnimatedSection>
          )}
        </div>
      </section>
    </main>
  )
}

