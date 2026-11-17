export interface EducationItem {
  id: string;
  badge: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  icon: string;
  accentColor: 'indigo' | 'cyan' | 'amber';
}

export const educationData: EducationItem[] = [
  {
    id: "mcs",
    badge: "Postgraduate",
    title: "Master of Computer Science (MCS)",
    institution: "University of Karachi",
    location: "Karachi, PK",
    description:
      "Advanced Distributed Systems, Database Architecture, and Telecommunications Engineering.",
    icon: "workspace_premium",
    accentColor: "indigo",
  },
  {
    id: "bsc",
    badge: "Undergraduate",
    title: "Bachelor of Science (BSc)",
    institution: "Academic Foundation",
    location: "Karachi, PK",
    description:
      "Computer Science & Applied Mathematics fundamentals, algorithm complexity, and statistics.",
    icon: "history_edu",
    accentColor: "cyan",
  },
  {
    id: "ccna",
    badge: "Cisco Systems",
    title: "Cisco Certified Network Associate (CCNA)",
    institution: "Cisco ID Verification Validated",
    location: "Global",
    description:
      "Enterprise Routing & Switching, IP Services, OSPF, BGP Routing Tables, and Network Security.",
    icon: "router",
    accentColor: "amber",
  },
  {
    id: "itil-sec",
    badge: "Service & Sec",
    title: "ITIL & Enterprise Cybersecurity",
    institution: "Continuous Professional Accreditation",
    location: "Global",
    description:
      "IT Service Management (ITSM), Incident Control, Change Advisory, and Zero-Trust Hardening.",
    icon: "verified_user",
    accentColor: "indigo",
  },
];
