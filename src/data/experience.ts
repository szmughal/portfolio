export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  bulletPoints: string[];
  accentColor?: 'cobalt' | 'emerald' | 'slate';
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "IT Manager (Infrastructure, Systems & Digital Operations)",
    company: "Enter and Post LLC",
    location: "Karachi, Pakistan",
    period: "July 2025 — Present",
    isCurrent: true,
    bulletPoints: [
      "Direct the complete IT function as sole authority: technology infrastructure, IT procurement, cybersecurity standards, network stability, and multi-tier end-user support.",
      "Engineered and deployed an in-house OCR pipeline parsing multi-page scanned PDF invoices and bank statements into QuickBooks-ready spreadsheets—cutting monthly data-entry time by 85%.",
      "Administer enterprise Google Workspace, monitor endpoints via Symantec management console, enforce SPF/DKIM/DMARC records, and maintain Mega Cloud + weekly encrypted EaseUS local backups.",
      "Built agentic AI scraping workflows (Claude Code, Antigravity, ChatGPT) into Mailchimp/GoHighLevel and optimized web assets for Answer Engine & Generative Engine Optimization (AEO/GEO).",
    ],
    accentColor: "emerald",
  },
  {
    id: "exp-2",
    role: "Assistant Manager – IT, Web Development & Marketing",
    company: "Enter and Post LLC",
    location: "Karachi, Pakistan",
    period: "March 2024 — June 2025",
    bulletPoints: [
      "Configured and maintained office LAN hardware, troubleshooting laptops, desktops, and network printers for uninterrupted daily operations.",
      "Built, launched, and maintain 5+ live production websites (custom static sites and WordPress/Elementor) with full DNS, SSL encryption, CDN caching, and mobile responsiveness.",
      "Authored targeted technical blog articles and SEO content assets driving first-page Google rankings, alongside GoHighLevel CRM SMS/email/call-routing funnels.",
    ],
    accentColor: "cobalt",
  },
  {
    id: "exp-3",
    role: "Senior IT Executive",
    company: "Universal BrushWares",
    location: "Karachi, Pakistan",
    period: "December 2021 — March 2024",
    bulletPoints: [
      "Managed complete on-site network stack across production and office facilities utilizing Cisco switches and routers.",
      "Administered daily Odoo ERP operations across Inventory, Sales, Purchase, and Manufacturing modules with custom forms and granular access permissions.",
      "Integrated PostgreSQL with Metabase BI for live inventory turnover dashboards; administered Asterisk PABX telephony, multi-zone Hikvision IP surveillance, Shopify B2C sync, and automated 30-day Odoo snapshots.",
    ],
    accentColor: "cobalt",
  },
  {
    id: "exp-4",
    role: "Resident Engineer (Deputed to Soneri Bank)",
    company: "BCI Pvt Ltd",
    location: "Karachi, Pakistan",
    period: "August 2021 — December 2021",
    bulletPoints: [
      "Delivered first- and second-line hardware, application, and OS support in an audit-heavy banking environment under strict SLA deadlines.",
      "Handled user access provisioning, Active Directory domain joins, network troubleshooting across branches, and regulatory compliance logging.",
    ],
    accentColor: "slate",
  },
  {
    id: "exp-5",
    role: "IT Support Engineer",
    company: "Efrotech Services",
    location: "Karachi, Pakistan",
    period: "February 2021 — August 2021",
    bulletPoints: [
      "Monitored departmental network racks, switches, and core servers including Active Directory, DNS, DHCP, firewalls, and file servers.",
      "Administered user mail accounts on MDaemon mail server and evaluated/procured departmental IT hardware.",
    ],
    accentColor: "slate",
  },
  {
    id: "exp-6",
    role: "IT Support Specialist (Deputed to Standard Chartered Bank)",
    company: "Inbox Business Technologies",
    location: "Karachi, Pakistan",
    period: "August 2018 — January 2021",
    bulletPoints: [
      "Configured and deployed laptops and workstations strictly adhering to Standard Chartered Bank global security baselines.",
      "Installed and maintained Avaya IP phones and specialized banking apps; delivered field IT support for bank ATM systems across Karachi ensuring minimal downtime.",
    ],
    accentColor: "slate",
  },
];
