export const ROBOT_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

export const navLinks = [
  ['About Us', '/about-us/'],
  ['Board of Directors', '/board-of-directors/'],
  ['Management Team', '/management-team/'],
  ['Investor Updates', '/investor-relations/'],
  ['Contact Us', '/contact-us/', true],
]

export const navMenuItems = [
  {
    id: 'home',
    label: 'Home',
    link: '/',
  },
  {
    id: 'about',
    label: 'About Us',
    subMenus: [
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '/about-us/', description: 'Company background and mission.' },
          { label: 'Board of Directors', href: '/board-of-directors/', description: 'Board profiles and governance.' },
          { label: 'Management Team', href: '/management-team/', description: 'Operational leadership team.' },
          { label: 'Gallery', href: '/gallery/', description: 'Media and event snapshots.' },
        ],
      },
    ],
  },
  {
    id: 'corporate',
    label: 'Corporate',
    subMenus: [
      {
        title: 'Corporate Pages',
        items: [
          { label: 'Corporate Overview', href: '/corporate-overview/', description: 'Strategy, structure, and leadership.' },
          { label: 'Corporate Information', href: '/corporate-information/', description: 'Policies, TOR, and governance PDFs.' },
          { label: 'Group Structure', href: '/group-structure/', description: 'Company structure and subsidiaries.' },
        ],
      },
    ],
  },
  {
    id: 'media',
    label: 'Media',
    subMenus: [
      {
        title: 'Investor & Media',
        items: [
          { label: 'Investor Updates', href: '/investor-relations/', description: 'Announcements, press releases, and financial reports.' },
          { label: 'AGM / EGM Centre', href: '/agm-egm/', description: 'Unified archive for AGM and EGM records.' },
        ],
      },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    subMenus: [
      {
        title: 'Payments',
        items: [
          { label: 'Payment Gateway', href: '/payment-gateway/', description: 'Online payment processing stack.' },
          { label: 'Payment Terminal & POS', href: '/payment-terminal/', description: 'Merchant terminal acceptance and branch POS operations.' },
          { label: 'E-Wallet Integration (MiPay)', href: '/e-wallet-integration/', description: 'Unified MiPay wallet app and real-time e-wallet integration stack.' },
          { label: 'Micro Lending', href: '/micro-lending/', description: 'Accessible lending solutions for underserved markets.' },
        ],
      },
      {
        title: 'Workforce',
        items: [
          { label: 'SmartHR Payroll', href: '/smarthr-payroll/', description: 'Statutory-ready payroll and workforce administration platform.' },
          { label: 'E-Wages', href: '/e-wages/', description: 'Digital wage disbursement ecosystem for regulated operations.' },
          { label: 'FoWeX Networking', href: '/fwex/', description: 'Foreign workforce permit, onboarding, and ecosystem services.' },
        ],
      },
      {
        title: 'Enterprise',
        items: [
          { label: 'SAP Business One', href: '/sap-2/', description: 'SAP B1 and OneERP deployment and implementation services.' },
          { label: 'e-Invoice', href: '/e-invoice/', description: 'IRN-ready e-Invoice and compliance workflows.' },
        ],
      },
      {
        title: 'Platforms',
        items: [
          { label: 'XPAT Jobs', href: 'https://xpat.com.my/', description: 'Jobs and workforce services for expatriates and foreign workers.', target: '_blank' },
          { label: 'S4S Sim & Wallet Apps', href: 'https://xpat.com.my/sim-plans', description: 'Connectivity and wallet solutions for workforce users.', target: '_blank' },
        ],
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact Us',
    link: '/contact-us/',
  },
]

function flattenNavMenu(items) {
  const out = []
  const seen = new Set()
  for (const item of items) {
    if (item.link) {
      const key = `${item.link}::${item.target || ''}`
      if (seen.has(key)) continue
      seen.add(key)
      out.push({ label: item.label, href: item.link, isPrimary: item.label === 'Contact Us', target: item.target })
      continue
    }
    for (const sub of item.subMenus || []) {
      for (const link of sub.items || []) {
        const key = `${link.href}::${link.target || ''}`
        if (seen.has(key)) continue
        seen.add(key)
        out.push({ label: link.label, href: link.href, isPrimary: link.label === 'Contact Us', target: link.target })
      }
    }
  }
  return out
}

// Single source of truth for all products and services
export const growthIntegratedEngines = [
  {
    id: 'fintech',
    title: 'Embedded Fintech & Digital Payments',
    description: 'Transaction engine for collections, disbursements, and payment orchestration.',
    subsidiaries: [
      {
        name: 'MBP Solutions',
        products: [
          { name: 'Payment Gateway', href: '/payment-gateway/', desc: 'Seamless online payment processing infrastructure.' },
          { name: 'Payment & POS Terminal & Solutions', href: '/payment-terminal/', desc: 'Secure payment terminal and POS solutions for business operations.' },
        ],
      },
      {
        name: 'OneCENT',
        products: [
          { name: 'E-Wallet Integration (MiPay)', href: '/e-wallet-integration/', desc: 'Unified MiPay wallet app and real-time e-wallet system integration.' },
        ],
      },
      {
        name: 'JustCall Corp',
        products: [
          { name: 'Micro Lending', href: '/micro-lending/', desc: 'Accessible credit solutions for underserved markets.' },
        ],
      },
      {
        name: 'Pocket Pay',
        products: [
          { name: 'XPAT Jobs', href: 'https://xpat.com.my/', desc: 'Jobs and workforce services for expatriates and foreign workers.' },
        ],
      },
    ],
  },
  {
    id: 'workforce',
    title: 'Workforce & Labour Ecosystem Management',
    description: 'Workforce compliance and financial inclusion flows across labour ecosystems.',
    subsidiaries: [
      {
        name: 'Softpac Technology',
        products: [
          { name: 'HR & Payroll Solution', href: '/smarthr-payroll/', desc: 'Automated payroll processing with compliance built-in.' },
          { name: 'E-Wages Solution', href: '/e-wages/', desc: 'Digital wage payments for migrant worker compliance.' },
        ],
      },
      {
        name: 'Agensi Pekerjaan O2U Solutions',
        note: '(49%)',
        products: [
          { name: 'FoWeX Networking', href: '/fwex/', desc: 'End-to-end recruitment, onboarding, and workforce exchange networking services.' },
        ],
      },
      {
        name: 'S4S Digital',
        products: [
          { name: 'S4S Sim & Wallet apps', href: 'https://xpat.com.my/sim-plans', desc: 'Integrated telco and wallet apps for workforce connectivity.' },
        ],
      },
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Sector SaaS',
    description: 'Recurring software engine for ERP, e-Invoice, and cooperative platforms.',
    subsidiaries: [
      {
        name: 'SBOne Solutions',
        products: [
          { name: 'SAP Business One (B1) & OneERP Implementation', href: '/sap-2/', desc: 'ERP licensing and implementation for SAP B1 and OneERP deployments.' },
          { name: 'e-Invoice', href: '/e-invoice/', desc: 'LHDN-compliant electronic invoicing solutions.' },
        ],
      },
      {
        name: 'Koperasi One Fintech',
        note: '(70:30)',
        products: [
          { name: 'Integrated Cooperative Mgmt Information System (ICMIS)', href: '/corporate-overview/#structure', desc: 'Integrated management system for cooperatives.' },
        ],
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Intelligent Solutions',
    description: 'Decision intelligence engine for analytics, automation, and digital twin use cases.',
    subsidiaries: [
      {
        name: 'Comm Zed',
        products: [
          { name: 'AI Solutioning & Analytics', href: '/contact-us/', desc: 'Custom AI models and data analytics services.' },
          { name: 'Digital Twin Modelling', href: '/contact-us/', desc: 'Virtual replicas for simulation and operational optimization.' },
          { name: 'Predictive intelligence & risk scoring', href: '/contact-us/', desc: 'Risk scoring and future trend analysis.' },
          { name: 'Cross-agency / enterprise data fusion', href: '/contact-us/', desc: 'Cross-agency enterprise data integration.' },
        ],
      },
      {
        name: 'VSure Tech',
        note: '(51%)',
        products: [
          { name: 'On-Demand Protection Coverage & Embedded Insurance', href: '/contact-us/', desc: 'Flexible, on-demand protection coverage and embedded insurance.' },
        ],
      },
    ],
  },
]

// Dynamically generate flat list for backward compatibility with components using 'services'
// Format: [Label, Href, Description]
export const services = growthIntegratedEngines.flatMap(engine =>
  engine.subsidiaries.flatMap(sub =>
    sub.products.map(p => [p.name, p.href, p.desc])
  )
)

export const mobileNavLinks = flattenNavMenu(navMenuItems)


export const features = [
  ['building', 'Public Listed', 'Listed on Bursa Malaysia with transparent governance and proven track record.'],
  ['lightning', '4 Growth Engines', 'AI, Fintech, Workforce Ecosystem, and Enterprise SaaS under one strategy.'],
  ['shield', '4 Execution Engines', 'Marketing & Revenue, Product & Platform, Delivery, and Governance disciplines.'],
  ['globe', 'Regional Reach', 'Serving businesses across Malaysia and Southeast Asia.'],
  ['clock', '18+ Years', 'Nearly two decades of fintech innovation and reliability.'],
  ['headset', 'KPI-Led Delivery', 'Execution linked to measurable outcomes across teams and business units.'],
]

export const values = [
  ['shield', 'Trust First', 'We build for reliability, compliance, and long-term partnerships.'],
  ['lightning', 'Move With Speed', 'Ship improvements quickly without compromising quality or security.'],
  ['building', 'Operate At Scale', 'Design for real operations: reconciliation, reporting, and uptime.'],
  ['globe', 'Serve The Region', 'Support multi-branch businesses and cross-border ambitions.'],
  ['headset', 'Stay Accountable', 'Clear ownership, responsive support, and measurable outcomes.'],
  ['clock', 'Build To Last', 'Durable systems that reduce operational risk and cost over time.'],
]

export const partners = [
  ['Microsoft', 'https://tfp.com.my/wp-content/uploads/2020/07/microsoft.png'],
  ['SAP', 'https://tfp.com.my/wp-content/uploads/2020/07/sap.png'],
  ['Huawei', 'https://tfp.com.my/wp-content/uploads/2020/07/huawei.png'],
  ['Oracle', 'https://tfp.com.my/wp-content/uploads/2020/07/oracle.png'],
  ['VMware', 'https://tfp.com.my/wp-content/uploads/2020/07/vmware.png'],
  ['HP', 'https://tfp.com.my/wp-content/uploads/2020/07/hp-partner.png'],
  ['Symantec', 'https://tfp.com.my/wp-content/uploads/2020/07/symantec.png'],
  ['Radware', 'https://tfp.com.my/wp-content/uploads/2020/07/radwere.png'],
  ['Tune Talk', 'https://tfp.com.my/wp-content/uploads/2020/07/tune-talk.png'],
  ['Exabytes', 'https://tfp.com.my/wp-content/uploads/2020/07/exabytes-partner-1.png'],
  ['Mobility One', 'https://tfp.com.my/wp-content/uploads/2020/07/mobility-one.png'],
  ['M-1Pay', 'https://tfp.com.my/wp-content/uploads/2020/07/m-1pay.png'],
  ['OnePay', 'https://tfp.com.my/wp-content/uploads/2020/07/onepay.png'],
  ['OneTransfer', 'https://tfp.com.my/wp-content/uploads/2020/07/onetransfer.png'],
  ['Suntront', 'https://tfp.com.my/wp-content/uploads/2020/07/suntront.png'],
  ['InfoVista', 'https://tfp.com.my/wp-content/uploads/2020/07/infovista.png'],
  ['Mimosa', 'https://tfp.com.my/wp-content/uploads/2020/07/mimosa.png'],
  ['Damballa', 'https://tfp.com.my/wp-content/uploads/2020/07/damballa.png'],
]

export const featuredProductSpotlight = {
  title: 'Payment Gateway',
  intro: 'Secure online payment processing for web and mobile transactions with settlement-ready flows and enterprise controls.',
  points: [
    'Fast checkout integration across channels',
    'Fraud-aware processing with reliable uptime',
    'Scalable infrastructure for growing volumes',
  ],
  ctaLabel: 'Explore Payment Gateway',
  ctaHref: '/payment-gateway/',
  // Replace this with your own TikTok embed URL anytime.
  tiktokEmbedUrl: 'https://www.tiktok.com/embed/v2/6718335390845095173',
}

export const productTikTokEmbeds = {
  default: featuredProductSpotlight.tiktokEmbedUrl,
  simCard: 'https://www.tiktok.com/embed/v2/7547643469863374087',
  eWages: 'https://www.tiktok.com/embed/v2/7537995860496485640',
  eInvoice: 'https://www.tiktok.com/embed/v2/7497187765746945287',
  miPayEWallet: 'https://www.tiktok.com/embed/v2/7553839902140452114',
  fwex: 'https://www.tiktok.com/embed/v2/7522043144297352466',
  eWalletIntegration: 'https://www.tiktok.com/embed/v2/7553839902140452114',
  smartHrPayroll: 'https://www.tiktok.com/embed/v2/7537995860496485640',
}

export const galleryItems = [
  {
    id: 'gallery-1',
    title: 'Corporate Event Highlights',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'gallery-2',
    title: 'Leadership And Team Session',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'gallery-3',
    title: 'Product Showcase',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'gallery-4',
    title: 'Digital Transformation Workshop',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'gallery-5',
    title: 'Industry Collaboration',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'gallery-6',
    title: 'Innovation In Action',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
  },
]

export const footerLinks = {
  Services: [
    ['E-Wallet Integration (MiPay)', '/e-wallet-integration/'],
    ['SmartHR Payroll', '/smarthr-payroll/'],
    ['Payment Gateway', '/payment-gateway/'],
    ['E-Wages', '/e-wages/'],
  ],
  Company: [
    ['About Us', '/about-us/'],
    ['Corporate Information', '/corporate-information/'],
    ['Board of Directors', '/board-of-directors/'],
    ['Management Team', '/management-team/'],
    ['Corporate Structure', '/group-structure/'],
  ],
  Resources: [
    ['Investor Updates', '/investor-relations/'],
    ['AGM / EGM Centre', '/agm-egm/'],
    ['Corporate Overview', '/corporate-overview/'],
    ['Contact Us', '/contact-us/'],
  ],
}

export const agmEgmMeetings = [
  {
    id: 'agm-2025-18th',
    label: '18th AGM 2025',
    type: 'AGM',
    year: 2025,
    description: 'AGM materials and references.',
    legacyUrl: 'https://tfp.com.my/18th-annual-general-meeting-2025/',
  },
  {
    id: 'egm-2025',
    label: 'EGM 2025',
    type: 'EGM',
    year: 2025,
    description: 'Extraordinary general meeting page.',
    legacyUrl: 'https://tfp.com.my/egm-2025/',
  },
  {
    id: 'agm-2024-17th',
    label: '17th AGM 2024',
    type: 'AGM',
    year: 2024,
    description: 'AGM materials and references.',
    legacyUrl: 'https://tfp.com.my/17th-annual-general-meeting-2024/',
  },
  {
    id: 'agm-2023-16th',
    label: '16th AGM 2023',
    type: 'AGM',
    year: 2023,
    description: 'AGM materials and references.',
    legacyUrl: 'https://tfp.com.my/16th-annual-general-meeting-2023/',
  },
  {
    id: 'agm-egm-2023-15th',
    label: '15th AGM & EGM 2023',
    type: 'AGM + EGM',
    year: 2023,
    description: 'Combined AGM/EGM documents.',
    legacyUrl: 'https://tfp.com.my/15th-agm-and-egm-2023/',
  },
  {
    id: 'agm-2022-15th',
    label: '15th AGM 2022',
    type: 'AGM',
    year: 2022,
    description: 'AGM materials and references.',
    legacyUrl: 'https://tfp.com.my/15th-annual-general-meeting-2022/',
  },
  {
    id: 'agm-2021-14th',
    label: '14th AGM 2021',
    type: 'AGM',
    year: 2021,
    description: 'AGM materials and references.',
    legacyUrl: 'https://tfp.com.my/14th-annual-general-meeting-2021/',
  },
  {
    id: 'agm-2020-13th',
    label: '13th AGM 2020',
    type: 'AGM',
    year: 2020,
    description: 'AGM materials and references.',
    legacyUrl: 'https://tfp.com.my/13th-annual-general-meeting-2020/',
  },
]

export const corporateDocuments = [
  {
    group: 'Terms of Reference',
    title: 'Audit Committee TOR',
    desc: 'Oversight scope, reporting, and audit governance responsibilities.',
    url: 'https://tfp.com.my/wp-content/uploads/2022/10/TFP-AC-TOR.pdf',
    previewImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900',
  },
  {
    group: 'Terms of Reference',
    title: 'Nomination Committee TOR',
    desc: 'Appointment, succession, and governance responsibilities for nominations.',
    url: 'https://tfp.com.my/wp-content/uploads/2022/10/TFP-NC-TOR.pdf',
    previewImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=900',
  },
  {
    group: 'Terms of Reference',
    title: 'Remuneration Committee TOR',
    desc: 'Compensation governance, review process, and committee responsibilities.',
    url: 'https://tfp.com.my/wp-content/uploads/2022/10/TFP-RC-TOR.pdf',
    previewImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=900',
  },
  {
    group: 'Policies',
    title: 'Whistle Blower Policy',
    desc: 'Reporting channels and protections for raising concerns in good faith.',
    url: 'https://tfp.com.my/wp-content/uploads/2020/06/TFP-Whistle-Blower-Policy.pdf',
    previewImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=900',
  },
  {
    group: 'Policies',
    title: 'Diversity Policy',
    desc: 'Principles for representation, fairness, and inclusive leadership practices.',
    url: 'https://tfp.com.my/wp-content/uploads/2020/06/TFP-Diversity-Policy.pdf',
    previewImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=900',
  },
  {
    group: 'Policies',
    title: 'Anti-bribery & Anti-corruption Policy',
    desc: 'Standards and controls to prevent bribery and corruption risks.',
    url: 'https://tfp.com.my/wp-content/uploads/2021/10/TFP-Anti-bribery-Anti-corruption-Policy-Final.pdf',
    previewImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=900',
  },
  {
    group: 'Policies',
    title: "Directors' Fit and Proper Policy",
    desc: 'Suitability principles for directors, including integrity and competence.',
    url: 'https://tfp.com.my/wp-content/uploads/2022/06/Directors-Fit-and-Proper-Policy_FINAL.pdf',
    previewImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=900',
  },
  {
    group: 'Other Governance',
    title: 'Code of Business Conduct',
    desc: 'Expected conduct standards and ethical guidelines for the organization.',
    url: 'https://tfp.com.my/wp-content/uploads/2020/06/TFP-Code-of-Business-Conduct.pdf',
    previewImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=900',
  },
  {
    group: 'Other Governance',
    title: 'Board Charter',
    desc: 'Board roles, responsibilities, and governance framework.',
    url: 'https://tfp.com.my/wp-content/uploads/2022/10/TFP-Board-Charter.pdf',
    previewImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=900',
  },
]



export const boardMembers = [
  {
    name: 'Dato’ Hussian @ Rizal Bin A. Rahman, D.S.A.P',
    role: 'Managing Director',
    image: 'https://tfp.com.my/wp-content/uploads/2020/07/Dato’-Hussian.png',
    imagePosition: 'center 44%',
    bio: `Dato’ Hussian was appointed to the Board of the Company on 15 February 2013. He obtained the Postgraduate Diploma in Business Management from The Oxford Association of Management, Oxford, England (“OXIM”) and was also admitted to the membership of Certified Master of Business Administration from the OXIM, a membership that recognises management competency and professional development.

Dato’ Hussian has been an entrepreneur since in his mid-20s. He was involved in the businesses of trading and shipping and subsequently ventured into the Information and Communications Technology (“ICT”) industry. He has extensive experience in the ICT industry and currently is the Executive Director and major shareholder of MobilityOne Limited (“MobilityOne”), which is listed on AIM of the London Stock Exchange. MobilityOne is an e-commerce infrastructure payment solutions and platform provider that works closely with most of the telecommunication companies and financial institutions in Malaysia.`,
  },
  {
    name: 'Dato’ Haris Bin Ismail',
    role: 'Corporate Advisor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900',
    imagePosition: 'center 36%',
    bio: 'Profile details to be updated upon final confirmation. This entry is reserved for Director, A.I. & Analytics.',
  },
  {
    name: 'Datin Sr Eugena Braganza',
    role: 'Group Chief Executive Officer',
    image: 'https://tfp.com.my/wp-content/uploads/2024/05/datin-gena-3-01-1024x1024.jpg',
    imagePosition: 'center 58%',
    bio: `Datin Sr Eugena Braganza is a distinguished Chartered Quantity Surveyor with over 15 years of experience in quantity surveying and project management, covering both local and international markets. She has been instrumental in the successful delivery of high-value, large-scale, and complex developments, including major infrastructure and mega projects.

Renowned for her ability to lead high-performing, multidisciplinary teams, Datin Sr Eugena brings a results-oriented mindset and a commitment to excellence that elevates every project she undertakes. Her leadership style is both dynamic and inclusive, enabling her to drive collaboration across stakeholders while ensuring efficiency, quality, and compliance at every stage of delivery.

Her exceptional contributions to the built environment were formally recognised when she was highly commanded as Young Achiever of the Year at the Royal Institution of Chartered Surveyors (RICS) Southeast Asia Awards 2022, a prestigious accolade that reflects not only her professional excellence but also her influence as a next-generation leader in the industry toward sustainable growth and long-term success.`,
  },
  {
    name: 'YM Dato’ Indera Puteri Munawarah Syammiyah Binti Munir',
    role: 'Executive Director',
    image: '/images/board/indera-puteri.png',
    imagePosition: 'center 50%',
    bio: 'YM Dato’ Indera Puteri Munawarah Syammiyah Binti Munir (“Puteri Munawarah”) was appointed to the Board of the Company on 19 January 2021 as Group Executive Director. She has worked in the banking industry for several years. She was the Executive Product Management at CIMB Islamic Bank Berhad from February 2010 to July 2013. From September 2013 to August 2015, she worked as the Senior Executive, Investment Banking at Kuwait Finance House (Malaysia) Berhad. In September 2016, she returned to CIMB as part of CIMB Investment Bank Berhad and was the Manager, Regional Debt Capital Markets up to December 2020.',
  },
  {
    name: 'Datuk Seri Syed Ali bin Abbas Alhabshee',
    role: 'Group Chairman, Non-Independent Non-Executive Director',
    image: '/images/board/syed-ali.png',
    imagePosition: 'center 50%',
    bio: 'Datuk Seri Syed Ali Bin Syed Abbas Al-Habshee was appointed to the Board of the Company on 9 June 2017 as a Non-Independent Non-Executive Director and Chairman. He obtained his professional Diploma in Leadership and Management by the New Zealand Institute of Management, New Zealand in 2003. On 16 July 2016, Datuk Seri Syed Ali was awarded as Honorary Fellow from Liverpool John Moores University, United Kingdom.',
  },
  {
    name: 'Noor Shahwan Bin Saffwan',
    role: 'Independent Non-Executive Director',
    image: '/images/board/noor-shahwan.png',
    imagePosition: 'center 50%',
    bio: 'Encik Noor Shahwan was appointed to the Board of the Company on 19 March 2015 as a Non-Independent Non-Executive Director. He was subsequently re-designated as Independent Non-Executive Director on 13 April 2015. He holds a Bachelor of Economics degree from University of Malaya in 1974. He started his career with the Ministry of Trade & Industry as International Trade Officer from 1975 to 1976.',
  },
  {
    name: 'Encik Abd Rahim Bin Adam',
    role: 'Independent Non-Executive Director',
    image: '/images/board/abd-rahim-bin-adam.png',
    imagePosition: 'center 50%',
    bio: 'Encik Rahim, a Chartered Accountant by profession with more than 3 decades work experience in accounting, audit, tax and corporate advisory services. In 1989, he began his career as an auditor with Grant Thornton International. Subsequently in 1993 he embraced corporate experience at United Engineers (M) Berhad, responsible in investment and special projects. To seize the opportunity to unlock his full potential, he founded Iltizam Consulting Sdn Bhd in year 1996, specialising in corporate advisory services and continues to lead the firm to this day. He has been a distinguished member of various esteemed organizations, inter alia, Malaysian Institute of Accountants, Malaysian Association of Tax Accountants, Malaysian Institute of Management and Kuala Lumpur Malay Chamber of Commerce. He is also an Alumni of RMIT University Australia, by virtue of graduating with an MBA (International Management) in 2002, hence his networking is far beyond Malaysia and the ASEAN region.',
  },
  {
    name: 'Abdul Raof Bin Abdullah Shan',
    role: 'Independent Non-Executive Director',
    image: '/images/board/abdul-raof-bin-abdullah-shan.png',
    imagePosition: 'center 50%',
    bio: `Encik Abdul Raof Abdullah Shan is a highly experienced finance and banking professional with over 20 years in the industry, including significant tenure at Bank Bumiputra Malaysia Berhad (BBMB, now CIMB Bank), where he specialised in risk management, fund management, and investment portfolios, with over a decade in international banking. Since 1994, he has been providing independent professional services in the areas of financial consulting, focusing on banking facilities negotiations and restructures.

He also took other roles, such as Chief Financial Officer at VtoV.com PLC in Los Angeles (1999-2001), a company that was involved in IT and digital content, as well as executive roles at KBN Holdings and Triprogram Xcess (TPX) in Malaysia. He currently continues his consulting work independently, serving in both private and public sector advisory positions, establishing himself as a versatile and internationally experienced consultant.`,
  },
]

export const managementTeam = [
  {
    name: 'Tuan Haji Khairuddin Bin Khalid',
    role: 'COO',
    image: '/images/management/khairuddin.png',
    tags: ['Operations', 'Delivery', 'Strategy'],
    unit: 'TFP Group of Companies',
  },
  {
    name: 'Encik Daniel Mohamed',
    role: 'BDD',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900',
    tags: ['Leadership', 'Business Development', 'Revenue'],
    unit: 'TFP Group of Companies',
  },
  {
    name: 'Sazali Shahid',
    role: 'CTO',
    image: '/images/management/sazali.png',
    tags: ['Technology', 'Platform', 'AI'],
    unit: 'TFP Group of Companies',
  },
  {
    name: 'Encik Sharin Bin Mohamed Sahari',
    role: 'CFO',
    image: '/images/management/sharin.png',
    tags: ['Finance', 'Governance', 'KPI'],
    unit: 'TFP Group of Companies',
  },
]
