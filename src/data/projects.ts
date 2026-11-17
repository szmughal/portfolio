export type ProjectCategory = 'all' | 'website' | 'on-page' | 'off-page';

export interface ProjectItem {
  id: string;
  name: string;
  domain: string;
  url: string;
  tags: string[];
  description: string;
  imageUrl: string;
  imageAlt: string;
  categories: ProjectCategory[];
  accentColor?: 'indigo' | 'cyan' | 'amber';
}

export const projectsData: ProjectItem[] = [
  {
    id: "tnt-commercial",
    name: "TNT Commercial Services 615",
    domain: "tntcommercialservices615.com",
    url: "https://tntcommercialservices615.com/",
    tags: ["Website", "On-Page SEO", "Off-Page SEO"],
    description:
      "High-converting commercial facilities platform engineered with programmatic JSON-LD local schema and comprehensive backlink authority indexing.",
    imageUrl: "/projects/tnt-cleaning.svg",
    imageAlt:
      "High tech dark themed website mockup for TNT Commercial Services 615 showing clean dashboard UI, corporate janitorial scheduling analytics, and interactive quotation engine with emerald and cyan highlights",
    categories: ["website", "on-page", "off-page"],
    accentColor: "cyan",
  },
  {
    id: "enter-and-post",
    name: "Enter and Post LLC",
    domain: "enterandpost.com",
    url: "https://enterandpost.com/",
    tags: ["Website", "On-Page SEO", "Off-Page SEO"],
    description:
      "Logistics & interstate freight dispatch portal integrated with automated tracking webhooks and multi-region technical SEO clustering.",
    imageUrl: "/projects/enter-and-post.svg",
    imageAlt:
      "Modern logistics freight management portal interface for Enter and Post LLC displaying active shipment routes on an interactive world map, tracking metrics, and freight dispatch portal with dark obsidian styling",
    categories: ["website", "on-page", "off-page"],
    accentColor: "indigo",
  },
  {
    id: "janglee-painting",
    name: "Jangle Painting",
    domain: "jangleepainting.com",
    url: "http://www.jangleepainting.com/",
    tags: ["Website"],
    description:
      "Modern responsive contractor showcase with instant dynamic lead quote calculation engine and optimized image delivery pipeline.",
    imageUrl: "/projects/jangleepainting.svg",
    imageAlt:
      "Bespoke website design for Jangle Painting residential and commercial contractors featuring vivid color swatch selectors, interactive quote calculators, and fast micro-animations on a sleek dark canvas",
    categories: ["website"],
    accentColor: "amber",
  },
  {
    id: "natural-wonders",
    name: "Natural Wonder Trees",
    domain: "naturalwondertrees.com",
    url: "https://naturalwondertrees.com/",
    tags: ["Website"],
    description:
      "Eco-friendly tree care services site optimized for 100/100 Google Core Web Vitals, mobile tap targets, and frictionless scheduling.",
    imageUrl: "/projects/natural-wonders.svg",
    imageAlt:
      "Clean corporate arboricultural and eco-friendly forestry website UI for Natural Wonder Trees with high-resolution greenery imagery, service breakdown, and automated booking calendar with lightning quick page transitions",
    categories: ["website"],
    accentColor: "cyan",
  },
  {
    id: "ace-wall-scholars",
    name: "Acewall Scholars",
    domain: "acewallscholars.org",
    url: "https://www.acewallscholars.org/",
    tags: ["Website", "Off-Page SEO"],
    description:
      "Educational non-profit academy platform with academic authority link profile engineering and structured learning management integrations.",
    imageUrl: "/projects/ace-wall-scholars.svg",
    imageAlt:
      "Educational academy web portal mockup for Acewall Scholars displaying student learning management dashboard, scholarship matriculation tracking, and academic course catalogs on an obsidian background with violet accents",
    categories: ["website", "off-page"],
    accentColor: "indigo",
  },
  {
    id: "duncan-brooke",
    name: "Duncan Brooke",
    domain: "duncanbrooke.co.za",
    url: "http://duncanbrooke.co.za/",
    tags: ["Website"],
    description:
      "High-aesthetic executive portfolio with bespoke serif/sans contrast typography and lightning-fast global CDN edge deployment.",
    imageUrl: "/projects/duncan-brooke.svg",
    imageAlt:
      "High-fashion and luxury art portfolio website interface for Duncan Brooke with dramatic typographic layouts, monochromatic minimal photography, subtle edge illumination, and micro-hover interactions",
    categories: ["website"],
    accentColor: "cyan",
  },
];
