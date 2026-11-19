export interface PersonalInfo {
  name: string;
  surname: string;
  title: string;
  badge: string;
  leadParagraph: string;
  location: string;
  slaUptime: string;
  status: string;
  email: string;
  linkedin: string;
  github: string;
  phone: string;
  coordinates: string;
  portraitUrl: string;
  portraitAlt: string;
  bioHeading: string;
  bioParagraphs: string[];
  trustedOrgs: string[];
  techTags: Array<{ label: string; icon: string; category: string }>;
}

export const personalData: PersonalInfo = {
  name: "SAAD",
  surname: "ZAFAR",
  title: "IT Manager — Enterprise Infrastructure, Systems & Automation",
  badge: "OPEN TO ENTERPRISE IT LEADERSHIP & ADVISORY",
  leadParagraph:
    "Hands-on IT Manager with 8+ years directing enterprise IT infrastructure, Cisco networks, Odoo ERP, and hybrid cloud operations in corporate and tier-1 banking environments. I bridge infrastructure stability with high-ROI automation—from in-house QuickBooks OCR pipelines to production SEO web systems.",
  location: "Karachi, Pakistan",
  slaUptime: "99.9% Core Uptime",
  status: "ONLINE",
  email: "saad.zafar060@gmail.com",
  linkedin: "https://linkedin.com/in/szmughal",
  github: "https://github.com/szmughal",
  phone: "+92-333-3415230",
  coordinates: "Karachi, Pakistan • PKT (UTC+5)",
  portraitUrl: "/saad-zafar-headshot.jpg",
  portraitAlt:
    "Portrait of Saad Zafar, IT Manager and Enterprise Systems Architect based in Karachi, Pakistan",
  bioHeading: "Bridging Core Infrastructure Stability with High-ROI Digital Automation",
  bioParagraphs: [
    "Promoted to lead complete IT operations at Enter and Post LLC, I direct enterprise cybersecurity, Google Workspace administration, hybrid Mega Cloud and encrypted EaseUS backups, and multi-tier end-user support at 99.9% uptime.",
    "Across 8+ years spanning Standard Chartered Bank, Soneri Bank, and manufacturing operations at Universal BrushWares, I have managed Cisco routing and switching, Active Directory domains, Linux servers, and Odoo ERP across Inventory, Sales, Purchase, and Manufacturing modules.",
    "Where manual accounting or lead bottlenecks slow teams down, I build practical automation: an in-house Python OCR pipeline that turns multi-page scanned PDFs into QuickBooks-ready Excel workbooks (cutting entry time by 85%), paired with production web deployments and AEO/GEO search optimization.",
  ],
  trustedOrgs: [
    "Enter and Post LLC",
    "Universal BrushWares",
    "Soneri Bank",
    "Standard Chartered Bank",
  ],
  techTags: [
    { label: "Cisco CCNA", icon: "router", category: "network" },
    { label: "Odoo ERP", icon: "apps", category: "erp" },
    { label: "Python OCR", icon: "bot", category: "ai" },
    { label: "Linux & AD", icon: "terminal", category: "os" },
    { label: "Google Workspace", icon: "shield", category: "cloud" },
    { label: "Technical SEO / AEO", icon: "search", category: "seo" },
  ],
};
