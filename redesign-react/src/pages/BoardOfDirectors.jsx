import { AnimatedSection } from '../components/AnimatedSection'
import { AnimatedTooltip } from '../components/AnimatedTooltip'
import { boardMembers } from '../siteData'

export default function BoardOfDirectors() {
    return (
        <main style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Spotlight Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(142, 198, 63, 0.15) 0%, rgba(8, 16, 10, 0) 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <section className="page-hero section" style={{ paddingBottom: 0, position: 'relative', zIndex: 1 }}>
                <div className="container page-hero-grid" style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <AnimatedSection>
                        <span className="eyebrow" style={{ display: 'inline-block' }}>✦ Corporate Information</span>
                        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Board of Directors</h1>
                        <p style={{ margin: '0 auto', maxWidth: '700px', fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--ink-100)' }}>
                            Our leadership team brings decades of experience across finance, technology, and public service,
                            steering TFP Solutions with integrity and strategic vision.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
                <div className="container">
                    <AnimatedSection delay={0.2}>
                        <AnimatedTooltip items={boardMembers} />
                    </AnimatedSection>
                </div>
            </section>
        </main>
    )
}
