import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import BoardOfDirectors from './pages/BoardOfDirectors'
import ManagementTeam from './pages/ManagementTeam'
import CorporateInformation from './pages/CorporateInformation'
import CorporateOverview from './pages/CorporateOverview'
import InvestorRelations from './pages/InvestorRelations'
import AgmEgm from './pages/AgmEgm'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import PaymentGateway from './pages/PaymentGateway'
import PaymentTerminal from './pages/PaymentTerminal'
import MiPay from './pages/MiPay'
import EWalletIntegration from './pages/EWalletIntegration'
import MicroLending from './pages/MicroLending'
import SmartHrPayroll from './pages/SmartHrPayroll'
import EWages from './pages/EWages'
import CyberSecurity from './pages/CyberSecurity'
import EInvoice from './pages/EInvoice'
import Fwex from './pages/Fwex'
import OneSchool from './pages/OneSchool'
import RecruitmentService from './pages/RecruitmentService'
import SapBusinessOne from './pages/SapBusinessOne'
import UsahawanDigital from './pages/UsahawanDigital'
import NotFound from './pages/NotFound'

import './styles.css'

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<Navigate to="/about-us/" replace />} />
          <Route path="/about-us/" element={<AboutUs />} />

          <Route path="/board-of-directors" element={<Navigate to="/board-of-directors/" replace />} />
          <Route path="/board-of-directors/" element={<BoardOfDirectors />} />

          <Route path="/management-team" element={<Navigate to="/management-team/" replace />} />
          <Route path="/management-team/" element={<ManagementTeam />} />

          <Route path="/corporate-information" element={<Navigate to="/corporate-information/" replace />} />
          <Route path="/corporate-information/" element={<CorporateInformation />} />

          <Route path="/corporate-overview" element={<Navigate to="/corporate-overview/" replace />} />
          <Route path="/corporate-overview/" element={<CorporateOverview />} />

          <Route path="/investor-relations" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/investor-relations/" element={<InvestorRelations />} />

          <Route path="/agm-egm" element={<Navigate to="/agm-egm/" replace />} />
          <Route path="/agm-egm/" element={<AgmEgm />} />

          <Route path="/13th-annual-general-meeting-2020" element={<Navigate to="/agm-egm/#agm-2020-13th" replace />} />
          <Route path="/13th-annual-general-meeting-2020/" element={<Navigate to="/agm-egm/#agm-2020-13th" replace />} />
          <Route path="/14th-annual-general-meeting-2021" element={<Navigate to="/agm-egm/#agm-2021-14th" replace />} />
          <Route path="/14th-annual-general-meeting-2021/" element={<Navigate to="/agm-egm/#agm-2021-14th" replace />} />
          <Route path="/15th-annual-general-meeting-2022" element={<Navigate to="/agm-egm/#agm-2022-15th" replace />} />
          <Route path="/15th-annual-general-meeting-2022/" element={<Navigate to="/agm-egm/#agm-2022-15th" replace />} />
          <Route path="/15th-agm-and-egm-2023" element={<Navigate to="/agm-egm/#agm-egm-2023-15th" replace />} />
          <Route path="/15th-agm-and-egm-2023/" element={<Navigate to="/agm-egm/#agm-egm-2023-15th" replace />} />
          <Route path="/16th-annual-general-meeting-2023" element={<Navigate to="/agm-egm/#agm-2023-16th" replace />} />
          <Route path="/16th-annual-general-meeting-2023/" element={<Navigate to="/agm-egm/#agm-2023-16th" replace />} />
          <Route path="/17th-annual-general-meeting-2024" element={<Navigate to="/agm-egm/#agm-2024-17th" replace />} />
          <Route path="/17th-annual-general-meeting-2024/" element={<Navigate to="/agm-egm/#agm-2024-17th" replace />} />
          <Route path="/18th-annual-general-meeting-2025" element={<Navigate to="/agm-egm/#agm-2025-18th" replace />} />
          <Route path="/18th-annual-general-meeting-2025/" element={<Navigate to="/agm-egm/#agm-2025-18th" replace />} />
          <Route path="/egm-2025" element={<Navigate to="/agm-egm/#egm-2025" replace />} />
          <Route path="/egm-2025/" element={<Navigate to="/agm-egm/#egm-2025" replace />} />

          <Route path="/gallery" element={<Navigate to="/gallery/" replace />} />
          <Route path="/gallery/" element={<Gallery />} />

          <Route path="/contact-us" element={<Navigate to="/contact-us/" replace />} />
          <Route path="/contact-us/" element={<ContactUs />} />

          <Route path="/payment-gateway" element={<Navigate to="/payment-gateway/" replace />} />
          <Route path="/payment-gateway/" element={<PaymentGateway />} />
          <Route path="/announcement" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/announcement/" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/annual-reports" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/annual-reports/" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/financial-reports" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/financial-reports/" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/press-release" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/press-release/" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/category/activity" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/category/activity/" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/category/notice" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/category/notice/" element={<Navigate to="/investor-relations/" replace />} />

          <Route path="/payment-terminal" element={<Navigate to="/payment-terminal/" replace />} />
          <Route path="/payment-terminal/" element={<PaymentTerminal />} />
          <Route path="/pos-system" element={<Navigate to="/payment-terminal/" replace />} />
          <Route path="/pos-system/" element={<Navigate to="/payment-terminal/" replace />} />

          <Route path="/mipay" element={<Navigate to="/mipay/" replace />} />
          <Route path="/mipay/" element={<MiPay />} />
          <Route path="/mobile-fintech" element={<Navigate to="/mipay/" replace />} />
          <Route path="/mobile-fintech/" element={<Navigate to="/mipay/" replace />} />

          <Route path="/e-wallet-integration" element={<Navigate to="/e-wallet-integration/" replace />} />
          <Route path="/e-wallet-integration/" element={<EWalletIntegration />} />

          <Route path="/micro-lending" element={<Navigate to="/micro-lending/" replace />} />
          <Route path="/micro-lending/" element={<MicroLending />} />
          <Route path="/microfinancing" element={<Navigate to="/micro-lending/" replace />} />
          <Route path="/microfinancing/" element={<Navigate to="/micro-lending/" replace />} />

          <Route path="/smarthr-payroll" element={<Navigate to="/smarthr-payroll/" replace />} />
          <Route path="/smarthr-payroll/" element={<SmartHrPayroll />} />

          <Route path="/e-wages" element={<Navigate to="/e-wages/" replace />} />
          <Route path="/e-wages/" element={<EWages />} />
          <Route path="/ewages-ecosystem-for-migrant-workers-in-sabah" element={<Navigate to="/e-wages/" replace />} />
          <Route path="/ewages-ecosystem-for-migrant-workers-in-sabah/" element={<Navigate to="/e-wages/" replace />} />

          <Route path="/cyber-security" element={<Navigate to="/cyber-security/" replace />} />
          <Route path="/cyber-security/" element={<CyberSecurity />} />

          <Route path="/e-invoice" element={<Navigate to="/e-invoice/" replace />} />
          <Route path="/e-invoice/" element={<EInvoice />} />

          <Route path="/fwex" element={<Navigate to="/fwex/" replace />} />
          <Route path="/fwex/" element={<Fwex />} />

          <Route path="/oneschool" element={<Navigate to="/oneschool/" replace />} />
          <Route path="/oneschool/" element={<OneSchool />} />

          <Route path="/recruitment-service" element={<Navigate to="/recruitment-service/" replace />} />
          <Route path="/recruitment-service/" element={<RecruitmentService />} />

          <Route path="/sap-2" element={<Navigate to="/sap-2/" replace />} />
          <Route path="/sap-2/" element={<SapBusinessOne />} />

          <Route path="/usahawan-digital" element={<Navigate to="/usahawan-digital/" replace />} />
          <Route path="/usahawan-digital/" element={<UsahawanDigital />} />

          <Route path="/group-structure" element={<Navigate to="/corporate-overview/#structure" replace />} />
          <Route path="/group-structure/" element={<Navigate to="/corporate-overview/#structure" replace />} />
          <Route path="/core-value" element={<Navigate to="/about-us/" replace />} />
          <Route path="/core-value/" element={<Navigate to="/about-us/" replace />} />
          <Route path="/chairman-foreword" element={<Navigate to="/corporate-overview/#chairman" replace />} />
          <Route path="/chairman-foreword/" element={<Navigate to="/corporate-overview/#chairman" replace />} />
          <Route path="/csr" element={<Navigate to="/about-us/" replace />} />
          <Route path="/csr/" element={<Navigate to="/about-us/" replace />} />
          <Route path="/job-scams" element={<Navigate to="/contact-us/" replace />} />
          <Route path="/job-scams/" element={<Navigate to="/contact-us/" replace />} />
          <Route path="/tfp-minutes-for-18th-annual-general-meeting" element={<Navigate to="/agm-egm/#agm-2025-18th" replace />} />
          <Route path="/tfp-minutes-for-18th-annual-general-meeting/" element={<Navigate to="/agm-egm/#agm-2025-18th" replace />} />
          <Route path="/tfp-minutes-for-the-extraordinary-general-meeting" element={<Navigate to="/agm-egm/#egm-2025" replace />} />
          <Route path="/tfp-minutes-for-the-extraordinary-general-meeting/" element={<Navigate to="/agm-egm/#egm-2025" replace />} />
          <Route path="/circular-of-the-acquisition-and-diversification-for-the-tfp-shareholders" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/circular-of-the-acquisition-and-diversification-for-the-tfp-shareholders/" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/tfp-solutions-berhad-tfp-a-leading-fintech-and-business-management-solutions-provider-is-pleased-to-announce-its-latest-strategic-initiative-the-exploration-of-a-generative-ai-powered-data-ce" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/tfp-solutions-berhad-tfp-a-leading-fintech-and-business-management-solutions-provider-is-pleased-to-announce-its-latest-strategic-initiative-the-exploration-of-a-generative-ai-powered-data-ce/" element={<Navigate to="/investor-relations/" replace />} />
          <Route path="/redesign-html" element={<Navigate to="/" replace />} />
          <Route path="/redesign-html/" element={<Navigate to="/" replace />} />



          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}
