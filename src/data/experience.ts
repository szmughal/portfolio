export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  bulletPoints: string[];
  accentColor?: 'cyan' | 'indigo' | 'slate';
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Systems & IT Operations Manager",
    company: "Enter and Post LLC",
    period: "2022 — Present",
    isCurrent: true,
    bulletPoints: [
      "Direct comprehensive IT governance, hybrid multi-site VPN topography, and automated ERP workflows across international dispatch stations.",
      "Architected the Python OCR invoice pipeline reducing administrative processing overhead by 85% with 99.9% database integrity.",
      "Enforced Zero-Trust network perimeters, role-based access control (RBAC), and automated off-site immutable backup protocols.",
    ],
    accentColor: "cyan",
  },
  {
    id: "exp-2",
    role: "Infrastructure & Automation Lead",
    company: "Enter and Post LLC",
    period: "2021 — 2022",
    bulletPoints: [
      "Spearheaded containerized microservice deployments and configured Asterisk/3CX SIP VoIP infrastructure for cross-border agents.",
      "Maintained 99.9% uptime SLA through redundant pfSense failover routers and automated server health ping bots.",
    ],
    accentColor: "indigo",
  },
  {
    id: "exp-3",
    role: "Senior IT Specialist & Systems Admin",
    company: "Universal BrushWares",
    period: "2019 — 2021",
    bulletPoints: [
      "Executed company-wide ERP migration (Odoo), standardizing multi-warehouse inventory tracking and financial statement outputs.",
      "Administered Windows Active Directory Domain Controllers, Group Policies, and automated endpoint antivirus enforcement.",
    ],
    accentColor: "indigo",
  },
  {
    id: "exp-4",
    role: "Network & Infrastructure Engineer",
    company: "BCI / Soneri Bank",
    period: "2018 — 2019",
    bulletPoints: [
      "Monitored mission-critical banking network backbone, ATM interconnectivity, and secure IPsec tunnels across 50+ banking branches.",
      "Executed disaster recovery drills verifying zero-data-loss RPO compliance per state banking security directives.",
    ],
    accentColor: "slate",
  },
  {
    id: "exp-5",
    role: "Enterprise Systems Support Specialist",
    company: "Efrotech",
    period: "2017 — 2018",
    bulletPoints: [
      "Supported HRMS/ERP rollouts, authored automated SQL reporting scripts, and optimized database indexing performance.",
    ],
    accentColor: "slate",
  },
  {
    id: "exp-6",
    role: "Associate Network & Infrastructure Engineer",
    company: "Inbox Business Technologies / Standard Chartered",
    period: "2016 — 2017",
    bulletPoints: [
      "Hardware diagnostics, rack cabling, Cisco Catalyst switch configurations, and client workstation provisioning for corporate financial ops.",
    ],
    accentColor: "slate",
  },
];
