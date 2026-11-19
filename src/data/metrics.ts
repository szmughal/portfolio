export interface MetricItem {
  id: string;
  tag: string;
  value: string;
  targetNumber: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
  accentColor: 'cobalt' | 'emerald' | 'slate';
}

export const metricsData: MetricItem[] = [
  {
    id: "tenure",
    tag: "TENURE // ENTERPRISE IT",
    value: "8+",
    targetNumber: 8,
    suffix: "+",
    label: "Years Experience",
    description: "Corporate & tier-1 banking IT operations, Cisco networks, and systems leadership.",
    icon: "layers",
    accentColor: "slate",
  },
  {
    id: "availability",
    tag: "SLA // AVAILABILITY",
    value: "99.9%",
    targetNumber: 99.9,
    suffix: "%",
    label: "System Uptime",
    description: "Hybrid cloud backups, Symantec endpoint defense, and continuous network reliability.",
    icon: "bolt",
    accentColor: "emerald",
  },
  {
    id: "efficiency",
    tag: "OCR // QUICKBOOKS",
    value: "85%",
    targetNumber: 85,
    suffix: "%",
    label: "Faster Accounting",
    description: "Monthly data-entry time cut via in-house PDF-to-Excel OCR extraction pipeline.",
    icon: "precision_manufacturing",
    accentColor: "cobalt",
  },
  {
    id: "scale",
    tag: "WEB // PRODUCTION",
    value: "6",
    targetNumber: 6,
    suffix: "",
    label: "Live Websites",
    description: "Production web deployments hardened with SSL/DNS, On-Page SEO, and AEO/GEO.",
    icon: "public",
    accentColor: "cobalt",
  },
];
