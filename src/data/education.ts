export interface EducationItem {
  id: string;
  badge: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  icon: string;
  accentColor: 'cobalt' | 'emerald' | 'slate';
}

export const educationData: EducationItem[] = [
  {
    id: "mcs",
    badge: "2015 — 2016",
    title: "Master of Computer Science (MCS)",
    institution: "University of Karachi",
    location: "Karachi, PK",
    description:
      "Graduate study in computer systems architecture, database engineering, networking, and enterprise software design.",
    icon: "workspace_premium",
    accentColor: "cobalt",
  },
  {
    id: "bsc",
    badge: "2012 — 2013",
    title: "Bachelor of Science (BSc)",
    institution: "University of Karachi",
    location: "Karachi, PK",
    description:
      "Undergraduate foundation in computer science, applied mathematics, and analytical problem solving.",
    icon: "history_edu",
    accentColor: "slate",
  },
  {
    id: "ccna",
    badge: "Networking",
    title: "Cisco Certified Network Associate (CCNA) Curriculum",
    institution: "Core Routing & Switching",
    location: "Verified Training",
    description:
      "Hands-on routing, switching, IPv4/IPv6 subnetting, VLAN segmentation, and enterprise perimeter network security.",
    icon: "router",
    accentColor: "emerald",
  },
  {
    id: "languages",
    badge: "Communication",
    title: "Executive Bilingual Operations",
    institution: "English & Urdu",
    location: "Global Remote Ready",
    description:
      "English (Professional Working Proficiency) and Urdu (Native) for cross-border engineering, leadership, and documentation.",
    icon: "verified_user",
    accentColor: "slate",
  },
];
