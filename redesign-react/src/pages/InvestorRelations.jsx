import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '../components/AnimatedSection'
import { FileText, Megaphone, Newspaper, PieChart } from 'lucide-react'

const isExternalUrl = (url) => typeof url === 'string' && /^https?:\/\//i.test(url)

// Dummy data - in a real app this might come from a CMS or API
const annualReports = [
    { year: '2025', title: 'Annual Report 2025', url: '/agm-egm/#agm-2025-18th' },
    { year: '2024', title: 'Annual Report 2024', url: '/agm-egm/#agm-2024-17th' },
    { year: '2023', title: 'Annual Report 2023', url: '/agm-egm/#agm-2023-16th' },
    { year: '2022', title: 'Annual Report 2022', url: '/agm-egm/#agm-2022-15th' },
]

const financialReports = [
    { quarter: 'Q1 2025', title: 'First Quarter Report', url: '#' },
    { quarter: 'Q4 2024', title: 'Fourth Quarter Report', url: '#' },
    { quarter: 'Q3 2024', title: 'Third Quarter Report', url: '#' },
]

const pressReleases = [
    { date: 'Oct 2024', title: 'TFP Solutions Expands Fintech Reach', url: '#' },
    { date: 'Aug 2024', title: 'New Partnership Announcement', url: '#' },
]

const announcements = [
    { date: 'Dec 2024', title: 'Notice of EGM', url: '/agm-egm/#egm-2025' },
    { date: 'Nov 2024', title: 'Change in Boardroom', url: '#' },
]

const tabs = [
    { id: 'annual', label: 'Annual Reports', icon: FileText, data: annualReports },
    { id: 'financial', label: 'Financial Reports', icon: PieChart, data: financialReports },
    { id: 'press', label: 'Press Releases', icon: Newspaper, data: pressReleases },
    { id: 'announcement', label: 'Announcements', icon: Megaphone, data: announcements },
]

export default function InvestorRelations() {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    return (
        <main>
            <section className="page-hero section">
                <div className="container page-hero-grid">
                    <AnimatedSection>
                        <span className="eyebrow">✦ Investor Relations</span>
                        <h1>Transparency & Performance</h1>
                        <p>
                            Access our latest financial reports, corporate announcements, and shareholder information.
                            We are committed to clear and timely communication with our stakeholders.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="tabs-container">
                            <div className="tabs-header">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon
                                    const isActive = activeTab === tab.id
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`tab-btn ${isActive ? 'active' : ''}`}
                                        >
                                            <Icon size={18} />
                                            <span>{tab.label}</span>
                                            {isActive && (
                                                <motion.div
                                                    className="tab-indicator"
                                                    layoutId="activeTab"
                                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </button>
                                    )
                                })}
                            </div>

                            <div className="tabs-content">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="documents-grid"
                                    >
                                        {tabs.find(t => t.id === activeTab)?.data.map((item, i) => (
                                            <a
                                                key={i}
                                                href={item.url}
                                                target={isExternalUrl(item.url) ? "_blank" : undefined}
                                                rel={isExternalUrl(item.url) ? "noopener noreferrer" : undefined}
                                                className="document-card"
                                            >
                                                <div className="document-icon">
                                                    <FileText size={24} />
                                                </div>
                                                <div className="document-info">
                                                    <span className="document-meta">{item.year || item.quarter || item.date}</span>
                                                    <h3>{item.title}</h3>
                                                    <span className="btn-link">Download / View &rarr;</span>
                                                </div>
                                            </a>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <style jsx>{`
        .tabs-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .tabs-header {
          display: flex;
          gap: 1rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0;
          overflow-x: auto;
        }
        .tab-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .tab-btn:hover {
          color: var(--text);
        }
        .tab-btn.active {
          color: var(--brand);
        }
        .tab-indicator {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--brand);
        }
        .documents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          padding-top: 1rem;
        }
        .document-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: all 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .document-card:hover {
          border-color: var(--brand);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }
        .document-icon {
          padding: 0.75rem;
          background: var(--surface-highlight);
          border-radius: 8px;
          color: var(--brand);
        }
        .document-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .document-meta {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .document-info h3 {
          font-size: 1.125rem;
          margin: 0;
          line-height: 1.3;
        }
        .btn-link {
          font-size: 0.875rem;
          color: var(--brand);
          margin-top: 0.5rem;
          font-weight: 500;
        }
      `}</style>
        </main>
    )
}
