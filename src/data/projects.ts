export type ProjectCategory = 'all' | 'website' | 'on-page' | 'off-page' | 'social';

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
  accentColor?: 'cobalt' | 'emerald' | 'slate';
}

export const projectsData: ProjectItem[] = [
  {
    id: "tnt-commercial",
    name: "TNT Commercial Services 615",
    domain: "tntcommercialservices615.com",
    url: "https://tntcommercialservices615.com/",
    tags: ["Website", "On-Page SEO", "Off-Page SEO"],
    description:
      "Commercial cleaning website serving Nashville and Middle Tennessee, built with full On-Page SEO structure, local service pages, and Off-Page authority link building.",
    imageUrl: "/projects/tnt-commercial.png",
    imageAlt:
      "Live homepage screenshot of TNT Commercial Services 615 showing commercial cleaning solutions across Middle Tennessee",
    categories: ["website", "on-page", "off-page"],
    accentColor: "emerald",
  },
  {
    id: "enter-and-post",
    name: "Enter and Post LLC",
    domain: "enterandpost.com",
    url: "https://enterandpost.com/",
    tags: ["Website", "On-Page SEO", "Off-Page SEO", "Social Media Content"],
    description:
      "Portland, OR bookkeeping, tax, staffing, and modern technology platform engineered with full On-Page and Off-Page SEO, AEO/GEO optimization, consultation funnels, and ongoing social media content creation.",
    imageUrl: "/projects/enter-and-post.png",
    imageAlt:
      "Live homepage screenshot of Enter and Post LLC showing bookkeeping, tax, staffing, and modern technology services",
    categories: ["website", "on-page", "off-page", "social"],
    accentColor: "cobalt",
  },
  {
    id: "janglee-painting",
    name: "Janglee Painting",
    domain: "jangleepainting.com",
    url: "http://www.jangleepainting.com/",
    tags: ["Website", "Social Media Content"],
    description:
      "Residential and commercial interior/exterior painting contractor website for Jang Lee Painting LLC with service showcases, offers, renovation booking, and social media content creation.",
    imageUrl: "/projects/janglee-painting.png",
    imageAlt:
      "Live homepage screenshot of Jang Lee Painting LLC showcasing interior and exterior renovation services",
    categories: ["website", "social"],
    accentColor: "slate",
  },
  {
    id: "natural-wonders",
    name: "Natural Wonder Trees",
    domain: "naturalwondertrees.com",
    url: "https://naturalwondertrees.com/",
    tags: ["Website"],
    description:
      "Portland and Tualatin tree care and landscape management site for Natural Wonders Tree Service LLC featuring service breakdowns, photo gallery, and instant quote requests.",
    imageUrl: "/projects/natural-wonders.png",
    imageAlt:
      "Live homepage screenshot of Natural Wonders Tree Service LLC showing navigation, phone contact, and hero banner",
    categories: ["website"],
    accentColor: "emerald",
  },
  {
    id: "ace-wall-scholars",
    name: "Acewall Scholars",
    domain: "acewallscholars.org",
    url: "https://www.acewallscholars.org/",
    tags: ["Off-Page SEO", "Social Media Content"],
    description:
      "Virginia and online K-12/test-prep tutoring and mentoring organization supported with targeted Off-Page SEO authority outreach and ongoing social media content creation.",
    imageUrl: "/projects/ace-wall-scholars.png",
    imageAlt:
      "Live homepage screenshot of Acewall Scholars tutoring and academic mentoring organization",
    categories: ["off-page", "social"],
    accentColor: "cobalt",
  },
  {
    id: "duncan-brooke",
    name: "Duncan Brooke",
    domain: "duncanbrooke.co.za",
    url: "http://duncanbrooke.co.za/",
    tags: ["Website"],
    description:
      "Personalised accounting, tax management, payroll, and financial advisory website for DuncanBrooke Accounting Services in Alberton, South Africa.",
    imageUrl: "/projects/duncan-brooke.png",
    imageAlt:
      "Live homepage screenshot of DuncanBrooke Accounting Services in Alberton, South Africa",
    categories: ["website"],
    accentColor: "slate",
  },
  {
    id: "best-valuation",
    name: "Best Valuation",
    domain: "bestvaluation.vercel.app",
    url: "https://bestvaluation.vercel.app/",
    tags: ["Website"],
    description:
      "SECP and PBA approved certified asset valuation platform for property, vehicle, gold, and net-worth reports across Pakistan with 1-working-day turnaround.",
    imageUrl: "/projects/best-valuation.png",
    imageAlt:
      "Live homepage screenshot of Best Valuation certified asset valuers website in Pakistan",
    categories: ["website"],
    accentColor: "cobalt",
  },
  {
    id: "growmore",
    name: "GrowMore Terminal",
    domain: "growmore-ruddy.vercel.app",
    url: "https://growmore-ruddy.vercel.app/",
    tags: ["Website"],
    description:
      "Institutional Pakistan Stock Exchange (KSE 100) live intelligence terminal featuring automated valuation engines, technical decision levels, and wealth tracking.",
    imageUrl: "/projects/growmore.png",
    imageAlt:
      "Live terminal dashboard screenshot of GrowMore PSX financial intelligence and wealth management platform",
    categories: ["website"],
    accentColor: "emerald",
  },
];
