import { useState } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'

const office = {
  name: 'TFP Solutions Berhad (Head Office)',
  address:
    'Wisma LMS No.6, Jalan Abd. Rahman Idris, Off Jalan Raja Muda Abdul Aziz, 50300 Kuala Lumpur, Wilayah Persekutuan, Malaysia',
  phone: '+603 9213 0688',
  fax: '+603 2202 7667',
  email: 'info@tfp.com.my',
  enquiryEmail: 'enquiry@tfp.com.my',
}

const channels = [
  ['LinkedIn', 'https://www.linkedin.com/company/tfp-solutions-berhad/'],
  ['Facebook', 'https://www.facebook.com/TFPSolutionsBerhad/'],
  ['X / Twitter', 'https://twitter.com/tfp_solutions'],
  ['YouTube', 'https://www.youtube.com/channel/UC9sCKPgRcH9gJIFwutJv9Lw'],
  ['Instagram', 'https://www.instagram.com/TFP_Solutions/'],
]

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Website enquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    )
    window.location.href = `mailto:${office.enquiryEmail}?subject=${subject}&body=${body}`
  }

  return (
    <main className="contact-page">
      <section className="page-hero section">
        <div className="container page-hero-grid">
          <AnimatedSection>
            <span className="eyebrow">✦ Contact Us</span>
            <h1>Talk to the right team, faster.</h1>
            <p>
              Share your goals and we will route your request to the relevant team for fintech,
              payment, HR, recruitment, and enterprise solutions.
            </p>
            <div className="page-hero-actions">
              <a className="btn btn-primary" href={`mailto:${office.email}`}>Email Us</a>
              <a className="btn btn-ghost" href="/corporate-overview/">Corporate Overview</a>
            </div>
            <div className="contact-quick-grid">
              <div className="contact-quick-card">
                <span>General Enquiry</span>
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </div>
              <div className="contact-quick-card">
                <span>Phone</span>
                <a href="tel:+60392130688">{office.phone}</a>
              </div>
              <div className="contact-quick-card">
                <span>Office</span>
                <p>Kuala Lumpur, Malaysia</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="page-hero-panel">
              <div className="quote-card">
                <p className="quote-text">
                  Need support on product scope, implementation timelines, or governance details?
                  Send us your enquiry and our team will follow up.
                </p>
                <div className="quote-meta">
                  <span className="quote-dot" aria-hidden="true" />
                  <span>Enterprise-focused response handling</span>
                </div>
              </div>
              <div className="stat-tiles">
                <div className="stat-tile">
                  <span className="stat-tile-kicker">HQ Phone</span>
                  <strong>{office.phone}</strong>
                  <p>Main office line for business enquiries.</p>
                </div>
                <div className="stat-tile">
                  <span className="stat-tile-kicker">Enquiry Mailbox</span>
                  <strong>{office.enquiryEmail}</strong>
                  <p>For proposals, project briefs, and onboarding queries.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-layout">
          <AnimatedSection>
            <div className="contact-card contact-form-wrap">
              <h2 className="section-title">Send an enquiry</h2>
              <p className="section-subtitle">
                Fill in your details. We will open your email draft with all information prefilled.
              </p>
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="contact-form-grid">
                  <label>
                    Name
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </label>
                  <label>
                    Phone
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  </label>
                  <label>
                    Subject
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    />
                  </label>
                </div>
                <label className="contact-message">
                  Message
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  />
                </label>
                <button className="btn btn-primary" type="submit">Compose Email</button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="contact-card contact-office-wrap">
              <h3>{office.name}</h3>
              <p>{office.address}</p>
              <ul className="contact-office-list">
                <li><strong>Phone:</strong> <a href="tel:+60392130688">{office.phone}</a></li>
                <li><strong>Fax:</strong> {office.fax}</li>
                <li><strong>Email:</strong> <a href={`mailto:${office.email}`}>{office.email}</a></li>
              </ul>
              <div className="contact-office-actions">
                <a
                  className="btn btn-ghost"
                  href="https://maps.google.com/?q=Wisma+LMS+No.6+Jalan+Abd.+Rahman+Idris+Kuala+Lumpur"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Google Maps
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://ul.waze.com/ul?place=ChIJ6QBxalizzTERLKgb1r6Prrs&ll=3.16734150%2C101.70224150&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Waze
                </a>
              </div>
              <div className="contact-map">
                <iframe
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Wisma%20LMS%20No.6%20Jalan%20Abd.%20Rahman%20Idris%20Kuala%20Lumpur&t=m&z=16&output=embed"
                  title="TFP Solutions Berhad Office Map"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Official channels</h2>
            <p className="section-subtitle">Follow official TFP channels for updates and announcements.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="contact-social-grid">
              {channels.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-social-card">
                  {label}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
