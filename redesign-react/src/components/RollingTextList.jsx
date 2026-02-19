import { services } from "../siteData";
import "./RollingTextList.css";

const colorClassMap = {
    blue: "text-blue",
};

const fallbackServiceImage = "https://picsum.photos/seed/tfp-service-fallback/800/500";

// Map services to images and categories
// Map services to images and categories
const serviceImages = {
    // Fintech
    'Payment Gateway': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    'Payment & POS Terminal & Solutions': 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800',
    'MiPay Prepaid Master Card & Apps': 'https://picsum.photos/seed/mobile-fintech/800/500',
    'Digital Community platform with multi-level cashback': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    'System Integration to e-Wallet in real-time': 'https://images.unsplash.com/photo-1620714223084-87d899416c8f?auto=format&fit=crop&q=80&w=800',
    'Micro Lending': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    'XPAT apps': 'https://images.unsplash.com/photo-1616077168712-fc6c788cd4ee?auto=format&fit=crop&q=80&w=800',

    // Workforce
    'HR & Payroll Solution': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    'E-Wages Solution': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800',
    'Recruitment Services of Foreign Workers': 'https://picsum.photos/seed/recruitment-service/800/500',
    'FOWEX services': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    'S4S Sim & Wallet apps': 'https://images.unsplash.com/photo-1534078829399-1d222b20345c?auto=format&fit=crop&q=80&w=800',

    // Enterprise
    'SAP B1 Licences & Implementation': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'OneERP Solution & Implementation': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    'e-Invoice': 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800',
    'Integrated Cooperative Mgmt Information System (ICMIS)': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',

    // AI
    'AI solutioning & analytics': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800',
    'Digital twin modelling': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    'Predictive intelligence & risk scoring': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    'Cross-agency / enterprise data fusion': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    'On-Demand Protection Coverage & Embedded Insurance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
};

const serviceCategories = {
    'Payment Gateway': 'Infrastructure',
    'Payment & POS Terminal & Solutions': 'Payments',
    'MiPay Prepaid Master Card & Apps': 'Fintech',
    'Digital Community platform with multi-level cashback': 'Community',
    'System Integration to e-Wallet in real-time': 'Fintech',
    'Micro Lending': 'Finance',
    'XPAT apps': 'Fintech',

    'HR & Payroll Solution': 'HR Tech',
    'E-Wages Solution': 'HR Tech',
    'Recruitment Services of Foreign Workers': 'Services',
    'FOWEX services': 'Services',
    'S4S Sim & Wallet apps': 'Telco',

    'SAP B1 Licences & Implementation': 'Enterprise',
    'OneERP Solution & Implementation': 'Enterprise',
    'e-Invoice': 'Enterprise',
    'Integrated Cooperative Mgmt Information System (ICMIS)': 'Enterprise',

    'AI solutioning & analytics': 'AI',
    'Digital twin modelling': 'AI',
    'Predictive intelligence & risk scoring': 'AI',
    'Cross-agency / enterprise data fusion': 'Big Data',
    'On-Demand Protection Coverage & Embedded Insurance': 'Insurtech',
};

function RollingTextItem({ item }) {
    return (
        <a
            href={item.href}
            className="rolling-item"
        >
            <div className="rolling-item-window">
                <div className="rolling-item-content">
                    <div className="rolling-text-block">
                        <h2 className="rolling-title">
                            {item.title}
                        </h2>
                    </div>

                    <div className="rolling-text-block">
                        <h2
                            className={`rolling-title hover-state ${colorClassMap[item.color] || "text-blue"}`}
                        >
                            {item.title}
                        </h2>
                    </div>
                </div>
            </div>

            <span className="rolling-category">
                {item.category}
            </span>

            <div className="rolling-image-wrapper">
                <div className="rolling-image-inner">
                    <img
                        src={item.src}
                        alt={item.alt}
                        className="rolling-image"
                        loading="lazy"
                        onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = fallbackServiceImage;
                        }}
                    />
                    <div className="rolling-image-overlay" />
                </div>
            </div>
        </a>
    );
}

export function RollingTextList() {
    const items = services.map(([label, href, desc], index) => ({
        id: index,
        title: label,
        href: href,
        category: serviceCategories[label] || 'Service',
        src: serviceImages[label] || fallbackServiceImage,
        alt: desc,
        color: "blue",
    }));

    return (
        <div className="rolling-list-container">
            <div className="rolling-list-wrapper">
                {items.map((item) => (
                    <RollingTextItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
