import { AnimatedSection } from '../components/AnimatedSection'

export default function NotFound() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <AnimatedSection className="not-found">
            <span className="eyebrow">✦ 404</span>
            <h1>Page not found</h1>
            <p className="section-subtitle">
              This route does not exist in the React redesign yet.
            </p>
            <div className="page-hero-actions">
              <a className="btn btn-primary" href="/">Back to Home</a>
              <a className="btn btn-ghost" href="/about-us/">About Us</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

