export interface MetricItem {
  id: string;
  tag: string;
  value: string;
  targetNumber: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
  accentColor: 'indigo' | 'cyan' | 'amber';
}

export const metricsData: MetricItem[] = [
  {
    id: "tenure",
    tag: "TENURE_SYSTEMS",
    value: "8+",
    targetNumber: 8,
    suffix: "+",
    label: "Years Experience",
    description: "Enterprise IT, Network Ops & Systems Architecture across hybrid setups.",
    icon: "layers",
    accentColor: "indigo",
  },
  {
    id: "availability",
    tag: "AVAILABILITY_INDEX",
    value: "99.9%",
    targetNumber: 99.9,
    suffix: "%",
    label: "System Uptime",
    description: "High-availability infrastructure, disaster recovery & automatic failover.",
    icon: "bolt",
    accentColor: "cyan",
  },
  {
    id: "efficiency",
    tag: "EFFICIENCY_SURGE",
    value: "85%",
    targetNumber: 85,
    suffix: "%",
    label: "Less Data-Entry Time",
    description: "Python Agentic OCR Automation Pipeline replacing manual accounting inputs.",
    icon: "precision_manufacturing",
    accentColor: "amber",
  },
  {
    id: "scale",
    tag: "DEPLOYMENT_SCALE",
    value: "5+",
    targetNumber: 5,
    suffix: "+",
    label: "Production Portals",
    description: "Custom web stacks, Technical SEO & AEO/GEO Optimized for high ranking.",
    icon: "public",
    accentColor: "indigo",
  },
];
