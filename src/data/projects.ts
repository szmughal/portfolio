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
    tags: ["Website", "On-Page SEO", "Off-Page SEO"],
    description:
      "Portland, OR bookkeeping, tax, staffing, and modern technology platform engineered with full On-Page and Off-Page SEO, AEO/GEO optimization, and consultation funnels.",
    imageUrl: "/projects/enter-and-post.png",
    imageAlt:
      "Live homepage screenshot of Enter and Post LLC showing bookkeeping, tax, staffing, and modern technology services",
    categories: ["website", "on-page", "off-page"],
    accentColor: "cobalt",
  },
  {
    id: "janglee-painting",
    name: "Jangle Painting",
    domain: "jangleepainting.com",
    url: "http://www.jangleepainting.com/",
    tags: ["Website"],
    description:
      "Residential and commercial interior/exterior painting contractor website for Jang Lee Painting LLC with service showcases, offers, and renovation booking.",
    imageUrl: "/projects/janglee-painting.png",
    imageAlt:
      "Live homepage screenshot of Jang Lee Painting LLC showcasing interior and exterior renovation services",
    categories: ["website"],
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
    tags: ["Website", "Off-Page SEO"],
    description:
      "Virginia and online K-12/test-prep tutoring and mentoring platform supported by targeted Off-Page SEO authority outreach, donation flows, and student appointment scheduling.",
    imageUrl: "/projects/ace-wall-scholars.png",
    imageAlt:
      "Live homepage screenshot of Acewall Scholars tutoring and academic mentoring organization",
    categories: ["website", "off-page"],
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
];
