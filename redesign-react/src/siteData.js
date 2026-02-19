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
        title: 'Products & Services',
        items: [
          { label: 'Payment Gateway', href: '/payment-gateway/', description: 'Online payment processing stack.' },
          { label: 'Payment Terminal & POS', href: '/payment-terminal/', description: 'Payment terminal and POS solutions.' },
          { label: 'MiPay Wallet App', href: '/mipay/', description: 'Digital payment and wallet app ecosystem.' },
          { label: 'E-Wallet Integration', href: '/e-wallet-integration/', description: 'Real-time integration with e-wallet systems.' },
          { label: 'Micro Lending', href: '/micro-lending/', description: 'Accessible lending solutions for underserved markets.' },
          { label: 'SmartHR Payroll', href: '/smarthr-payroll/', description: 'Payroll and workforce administration platform.' },
          { label: 'E-Wages', href: '/e-wages/', description: 'Digital wage payment ecosystem.' },
          { label: 'Recruitment Services', href: '/recruitment-service/', description: 'Recruitment, onboarding, and workforce exchange services.' },
          { label: 'FWeX Workforce Exchange', href: '/fwex/', description: 'Digital exchange platform supporting foreign worker ecosystems.' },
          { label: 'OneSchool Cashback Platform', href: '/oneschool/', description: 'Community commerce and cashback platform.' },
          { label: 'SAP Business One', href: '/sap-2/', description: 'ERP licensing, deployment, and implementation services.' },
          { label: 'e-Invoice', href: '/e-invoice/', description: 'Electronic invoicing solutions.' },
          { label: 'Usahawan Digital', href: '/usahawan-digital/', description: 'Digital merchant enablement program for inclusive communities.' },
          { label: 'Cyber Security', href: '/cyber-security/', description: 'Managed security and cyber defense operations services.' },
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
    description: 'Comprehensive digital payment and financial solutions.',
    subsidiaries: [
      {
        name: 'MBP Solutions',
        products: [
          { name: 'Payment Gateway', href: '/payment-gateway/', desc: 'Seamless online payment processing infrastructure.' },
          { name: 'Payment & POS Terminal & Solutions', href: '/payment-terminal/', desc: 'Secure payment terminal and POS solutions for business operations.' },
          { name: 'MiPay Prepaid Mastercard & App', href: '/mipay/', desc: 'Next-gen mobile payment and digital wallet solutions.' },
        ],
      },
      {
        name: 'OneCENT',
        products: [
          { name: 'Digital Community Platform (Multi-Level Cashback)', href: '/oneschool/', desc: 'Community platform with multi-level cashback rewards.' },
          { name: 'Real-Time e-Wallet Integration', href: '/e-wallet-integration/', desc: 'Real-time system integration with major e-wallets.' },
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
    description: 'End-to-end management for workforce and foreign labour.',
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
          { name: 'Foreign Workforce Recruitment & FOWEX Services', href: '/recruitment-service/', desc: 'End-to-end recruitment, onboarding, and workforce exchange services.' },
          { name: 'FWeX (Foreign Worker eXchange)', href: '/fwex/', desc: 'Digital exchange platform for workforce ecosystem transparency and support.' },
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
    description: 'Scalable enterprise software and cooperative management.',
    subsidiaries: [
      {
        name: 'SBOne Solutions',
        products: [
          { name: 'SAP Business One (B1) & OneERP Implementation', href: '/sap-2/', desc: 'ERP licensing and implementation for SAP B1 and OneERP deployments.' },
          { name: 'e-Invoice', href: '/e-invoice/', desc: 'LHDN-compliant electronic invoicing solutions.' },
          { name: 'Cyber Security', href: '/cyber-security/', desc: 'Managed cyber defense and enterprise security operations support.' },
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
    description: 'Advanced AI, analytics, and insurtech solutions.',
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
  ['lightning', 'Integrated Stack', 'Unified ecosystem across payment, HR, and business operations.'],
  ['shield', 'Enterprise Security', 'Bank-grade encryption and compliance with industry standards.'],
  ['globe', 'Regional Reach', 'Serving businesses across Malaysia and Southeast Asia.'],
  ['clock', '18+ Years', 'Nearly two decades of fintech innovation and reliability.'],
  ['headset', 'Dedicated Support', '24/7 technical assistance and account management.'],
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
    ['Mobile Fintech', '/mipay/'],
    ['SmartHR Payroll', '/smarthr-payroll/'],
    ['Payment Gateway', '/payment-gateway/'],
    ['Cyber Security', '/cyber-security/'],
  ],
  Company: [
    ['About Us', '/about-us/'],
    ['Corporate Information', '/corporate-information/'],
    ['Board of Directors', '/board-of-directors/'],
    ['Management Team', '/management-team/'],
    ['Corporate Structure', '/group-structure/'],
  ],
  Resources: [
    ['Press Releases', '/investor-relations/'],
    ['Annual Reports', '/investor-relations/'],
    ['Board of Directors', '/board-of-directors/'],
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
    bio: 'Appointed on 15 February 2013. He holds a Postgraduate Diploma in Business Management from The Oxford Association of Management. An entrepreneur with extensive experience in the ICT industry, he is also the Executive Director of MobilityOne Limited, listed on the London Stock Exchange.',
  },
  {
    name: 'Datin Sr Eugena Braganza',
    role: 'Group Chief Executive Officer',
    image: 'https://tfp.com.my/wp-content/uploads/2024/05/datin-gena-3-01-1024x1024.jpg',
    bio: 'A Chartered Quantity Surveyor with over 15 years of experience in project management and high-value developments. Known for leading multidisciplinary teams and driving sustainable growth. Recognized as Young Achiever of the Year at the RICS Southeast Asia Awards 2022.',
  },
  {
    name: 'YM Dato’ Indera Puteri Munawarah Syammiyah Binti Munir',
    role: 'Executive Director',
    image: 'https://tfp.com.my/wp-content/uploads/2021/06/YM-Dato-Indera-Puteri-Munawarah-Syammiyah-Binti-Munir.jpg',
    bio: 'Appointed on 19 January 2021. She has extensive experience in the banking industry, having held key positions at CIMB Islamic Bank Berhad, Kuwait Finance House (Malaysia) Berhad, and CIMB Investment Bank Berhad, specializing in Regional Debt Capital Markets.',
  },
  {
    name: 'Datuk Seri Syed Ali bin Abbas Alhabshee',
    role: 'Group Chairman, Non-Independent Non-Executive Director',
    image: 'https://tfp.com.my/wp-content/uploads/2021/06/Datuk-Seri-Syed-Ali-Bin-Abbas-Alhabshee.png',
    bio: 'Appointed to the Board on 9 June 2017. He holds a professional Diploma in Leadership and Management from the New Zealand Institute of Management (2003) and was awarded as Honorary Fellow from Liverpool John Moores University, UK (2016).',
  },
  {
    name: 'Noor Shahwan Bin Saffwan',
    role: 'Independent Non-Executive Director',
    image: 'https://tfp.com.my/wp-content/uploads/2021/06/Noor-Shahwan-Bin-Saffwan.jpg',
    bio: 'Appointed on 19 March 2015. He holds a Bachelor of Economics from University of Malaya (1974). His career began at the Ministry of Trade & Industry, followed by extensive service in various corporate and public sectors.',
  },
  {
    name: 'Encik Abd Rahim Bin Adam',
    role: 'Independent Non-Executive Director',
    image: 'https://tfp.com.my/wp-content/uploads/2024/09/Screenshot-2024-09-12-at-11.13.41-AM-e1726110907711.png',
    bio: 'A Chartered Accountant with over 30 years of experience in accounting, audit, tax, and corporate advisory. Founder of Iltizam Consulting Sdn Bhd (1996). Member of MIA, MATA, MIM, and KL Malay Chamber of Commerce. MBA from RMIT University Australia (2002).',
  },
  {
    name: 'Abdul Raof Bin Abdullah Shan',
    role: 'Independent Non-Executive Director',
    image: 'https://tfp.com.my/wp-content/uploads/2024/12/Pic-Encik-Abdul-Raof-Bin-Abdullah-Shan-scaled.jpg',
    bio: 'Over 20 years of experience in finance and banking, including risk management and fund management at Bank Bumiputra Malaysia Berhad. Has served as CFO for VtoV.com PLC in Los Angeles and held executive roles at KBN Holdings and Triprogram Xcess.',
  },
]

export const managementTeam = [
  {
    name: 'Vincent Yong',
    role: 'Deputy CEO',
    image: 'https://tfp.com.my/wp-content/uploads/2023/10/Vincent-Yong.gif',
    tags: ['Leadership', 'Strategy'],
    unit: 'TFP Solutions Berhad',
  },
  {
    name: 'Din Khalid',
    role: 'Group Chief Operating Officer (GCOO)',
    image: 'https://tfp.com.my/wp-content/uploads/2023/10/Din-Khalid-1.gif',
    tags: ['Operations', 'Delivery'],
    unit: 'TFP Group of Companies',
  },
  {
    name: 'Chong Hon Bu',
    role: 'Chief Operating Officer',
    image: 'https://tfp.com.my/wp-content/uploads/2023/10/Chong-Hon-Bu-1.gif',
    tags: ['Operations', 'Scale'],
    unit: 'TFP Group of Companies',
  },
  {
    name: 'Mazharul Haque',
    role: 'Chief Technology Officer (CTO)',
    image: 'https://tfp.com.my/wp-content/uploads/2023/10/Mazharul-Haque.gif',
    tags: ['Technology', 'Security'],
    unit: 'TFP Group of Companies / SoftFac Technology Sdn Bhd',
  },
  {
    name: 'Ahmad Shahrir Bin Mohd. Salleh',
    role: 'Chief Operating Officer',
    image: 'https://tfp.com.my/wp-content/uploads/2023/10/Ahmad-Shahrir-Bin-Mohd.-Salleh-1.gif',
    tags: ['Subsidiary', 'Operations'],
    unit: 'OneCENT Sdn Bhd',
  },
  {
    name: 'Sharin Bin Mohamed Sahari',
    role: 'General Manager',
    image: 'https://tfp.com.my/wp-content/uploads/2023/10/Sharin-Bin-Mohamed-Sahari-1.gif',
    tags: ['Subsidiary', 'Execution'],
    unit: 'MBP Solutions Sdn Bhd',
  },
  {
    name: 'Jaeson Hoo',
    role: 'Accountant',
    image: 'https://tfp.com.my/wp-content/uploads/2023/10/Jaeson-Hoo-1.gif',
    tags: ['Finance', 'Reporting'],
    unit: 'TFP Group of Companies',
  },
]
