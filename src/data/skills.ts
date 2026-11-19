export interface SkillItem {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  colSpan: string;
  featured?: boolean;
  accentColor: 'cobalt' | 'emerald' | 'slate';
}

export const skillsData: SkillItem[] = [
  {
    id: "network",
    code: "01 // INFRA",
    category: "Enterprise Infrastructure & Networks",
    title: "Enterprise Infrastructure & Networks",
    description:
      "Cisco routers and switches, LAN topology, patch panel and rack cabling, Linux administration, Active Directory domains, DNS/DHCP, firewall monitoring, and remote VPN access.",
    tags: ["Cisco CCNA", "Active Directory", "Linux & VPN"],
    icon: "router",
    colSpan: "lg:col-span-7",
    accentColor: "cobalt",
  },
  {
    id: "automation",
    code: "02 // OCR",
    category: "In-House OCR & Agentic Automation",
    title: "In-House OCR & Agentic Automation",
    description:
      "Custom PDF-to-Excel OCR pipeline converting scanned multi-page invoices and bank statements into QuickBooks-ready workbooks (-85% entry time), plus Python scraping and Claude Code / Antigravity / ChatGPT CRM pipelines.",
    tags: ["QuickBooks OCR", "Python Automation", "Agentic AI"],
    icon: "memory",
    colSpan: "lg:col-span-5",
    featured: true,
    accentColor: "emerald",
  },
  {
    id: "erp",
    code: "03 // ERP",
    category: "Odoo ERP & Business Analytics",
    title: "Odoo ERP & Business Analytics",
    description:
      "Odoo administration across Inventory, Sales, Purchase, and Manufacturing modules, custom form development, PostgreSQL database tuning, live Metabase BI dashboards, and Shopify B2C sync.",
    tags: ["Odoo ERP", "PostgreSQL", "Metabase BI"],
    icon: "dataset",
    colSpan: "lg:col-span-5",
    accentColor: "slate",
  },
  {
    id: "security",
    code: "04 // SEC",
    category: "Cybersecurity & Hybrid Disaster Recovery",
    title: "Cybersecurity & Hybrid Disaster Recovery",
    description:
      "Symantec Endpoint Protection console governance, strict SPF/DKIM/DMARC domain authentication, multi-tier automated backups (Mega Cloud paired with weekly encrypted EaseUS Todo Backup local mirrors), and Hikvision IP surveillance.",
    tags: ["Symantec EPP", "SPF/DKIM/DMARC", "Mega + EaseUS"],
    icon: "shield_with_heart",
    colSpan: "lg:col-span-7",
    accentColor: "emerald",
  },
  {
    id: "cloud",
    code: "05 // COMMS",
    category: "Cloud, Mail & Enterprise Telephony",
    title: "Cloud, Mail & Enterprise Telephony",
    description:
      "Enterprise Google Workspace administration, MDaemon mail server operations, Asterisk PABX and Avaya IP telephony systems, and Zoom/Teams collaboration for local and remote staff.",
    tags: ["Google Workspace", "Asterisk PABX", "Avaya IP"],
    icon: "cloud_sync",
    colSpan: "lg:col-span-6",
    accentColor: "cobalt",
  },
  {
    id: "web-seo",
    code: "06 // WEB",
    category: "Web Architecture, SEO & AEO/GEO",
    title: "Web Architecture, SEO & AEO/GEO",
    description:
      "WordPress/Elementor and custom static or Next.js production deployments with full DNS, SSL, and CDN caching, technical blog SEO, Answer/Generative Engine Optimization (AEO/GEO), and GoHighLevel CRM workflows.",
    tags: ["On/Off-Page SEO", "AEO / GEO", "GoHighLevel CRM"],
    icon: "manage_search",
    colSpan: "lg:col-span-6",
    accentColor: "slate",
  },
];
