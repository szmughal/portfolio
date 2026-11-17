export interface SkillItem {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  accentColor: 'indigo' | 'cyan' | 'amber';
}

export const skillsData: SkillItem[] = [
  {
    id: "network",
    code: "01 // NET",
    category: "Infrastructure & Networks",
    title: "Infrastructure & Networks",
    description:
      "Cisco enterprise routing & switching, dynamic VLAN segmentation, site-to-site IPsec VPN, high-availability pfSense/FortiGate firewalls, and SD-WAN optimization.",
    tags: ["Cisco CCNA", "VLAN Mesh", "pfSense HA"],
    icon: "router",
    accentColor: "indigo",
  },
  {
    id: "erp",
    code: "02 // ERP",
    category: "Business Systems",
    title: "Business Systems",
    description:
      "End-to-end Odoo ERP implementation (Accounting, Inventory, Sales, HR), complex PostgreSQL query tuning, Metabase BI visualization, and legacy SAP data extraction.",
    tags: ["Odoo v14-17", "PostgreSQL", "Metabase BI"],
    icon: "dataset",
    accentColor: "cyan",
  },
  {
    id: "automation",
    code: "03 // AI",
    category: "Automation & OCR",
    title: "Automation & OCR",
    description:
      "Python automated pipelines, Agentic AI workers (LangChain/LLM parsers), Tesseract OCR document extraction, regex-driven data reconciliation, and ETL batch queues.",
    tags: ["Python CV", "FastAPI", "Agentic OCR"],
    icon: "memory",
    accentColor: "amber",
  },
  {
    id: "security",
    code: "04 // SEC",
    category: "Security & Disaster Recovery",
    title: "Security & Disaster Recovery",
    description:
      "Zero-Trust architecture policies, automated 3-2-1 off-site backup synchronizations, strict RPO/RTO optimization targets, and hardened perimeter defense.",
    tags: ["Zero-Trust", "RTO < 15m", "Veeam & ZFS"],
    icon: "shield_with_heart",
    accentColor: "indigo",
  },
  {
    id: "cloud",
    code: "05 // TEL",
    category: "Cloud & Telephony",
    title: "Cloud & Telephony",
    description:
      "Hybrid cloud server orchestration, AWS EC2/S3 & Azure deployments, 3CX & Asterisk VoIP PBX systems, SIP trunk configuration, and cross-border agent routing.",
    tags: ["AWS / Azure", "3CX VoIP", "SIP Trunking"],
    icon: "cloud_sync",
    accentColor: "cyan",
  },
  {
    id: "web-seo",
    code: "06 // AEO",
    category: "Web / SEO / AEO-GEO",
    title: "Web / SEO / AEO-GEO",
    description:
      "Modern full-stack web architecture (Next.js, Tailwind, PHP), Programmatic Schema.org injection, Core Web Vitals optimization, and generative Answer Engine Optimization (AEO/GEO).",
    tags: ["Schema.org", "AEO / GEO", "Speed Index 100"],
    icon: "manage_search",
    accentColor: "indigo",
  },
];
