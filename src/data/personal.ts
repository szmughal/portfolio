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
  github?: string;
  phone?: string;
  coordinates: string;
  portraitUrl: string;
  portraitAlt: string;
  bioHeading: string;
  bioParagraphs: string[];
  techTags: Array<{ label: string; icon: string; category: string }>;
}

export const personalData: PersonalInfo = {
  name: "SAAD",
  surname: "ZAFAR",
  title: "Senior IT Manager & Enterprise Solutions Architect",
  badge: "AVAILABLE FOR ENTERPRISE & ARCHITECTURE ROLES",
  leadParagraph:
    "I keep infrastructure stable and turn manual work into automation. Orchestrating mission-critical high-availability systems, automated OCR pipelines, and enterprise ERP backbones across Karachi and multi-national operations.",
  location: "Karachi, PK",
  slaUptime: "99.9% Historical SLA Uptime",
  status: "ONLINE",
  email: "saad.zafar060@gmail.com",
  linkedin: "https://linkedin.com/in/szmughal",
  phone: "+92-333-3415230",
  coordinates: "Karachi, Pakistan • PKT (UTC+5)",
  portraitUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4TVKdmkzhx_VTQvc4JZx-QojFzz6kCTqulNQ9ZC4DA6p9GbbfaBGJ7hAqWTAFi5tLO5qroefyxo4lRTfp6lhzhuxmSq-qMQFvaWc-SehGaGSGt4u3UuMiPKvDPAgPKHh0YDOzRFkm3EJ_OzbOfXEs2AyOklbSI9sqIwK72S5CNw5twmVbjOqkPA0alMlN-KjDcsYUGwUTN-zu364xs0UjiU6KiE_jtrV5wdTpUg_G",
  portraitAlt:
    "Futuristic portrait of Saad Zafar, Pakistani Senior IT Manager and Enterprise Architect with clean modern grooming, dark tailored blazer, cinematic blue and indigo rim lighting, high-tech server racks subtly blurred in the background",
  bioHeading: "Engineering Resilient Infrastructure and Automated Enterprise Workflows",
  bioParagraphs: [
    "Based in Karachi, Pakistan, I operate as a Senior IT Manager and Enterprise Solutions Architect with a deep specialization in bridging complex on-premise hardware footprints with resilient hybrid cloud ecosystems.",
    "Throughout my 8+ year trajectory—spanning multinational logistics companies, financial banking networks, and manufacturing plants—I have owned the architecture of multi-site SD-WAN/VLAN networks, end-to-end ERP rollouts (Odoo), and mission-critical disaster recovery pipelines.",
    "My guiding philosophy is simple: eliminate repetitive manual operational friction through Python automated pipelines and intelligent OCR, while locking down server perimeters with Zero-Trust network discipline.",
  ],
  techTags: [
    { label: "Linux Enterprise", icon: "terminal", category: "os" },
    { label: "Odoo ERP", icon: "apps", category: "erp" },
    { label: "Disaster Recovery", icon: "shield", category: "security" },
    { label: "Python Agents", icon: "bot", category: "ai" },
    { label: "Cisco CCNA", icon: "router", category: "network" },
    { label: "Technical SEO", icon: "search", category: "seo" },
  ],
};
