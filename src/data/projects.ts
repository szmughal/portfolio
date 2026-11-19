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
      "Commercial cleaning and facility management site built with local commercial service schema, On-Page SEO optimization, and Off-Page authority link building.",
    imageUrl: "/projects/tnt-cleaning.svg",
    imageAlt:
      "Website preview for TNT Commercial Services 615 showing commercial cleaning services, Nashville service coverage, and inspection booking flow",
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
      "Bookkeeping, tax, and digital operations web platform engineered with full On-Page and Off-Page SEO, AEO/GEO structuring, and GoHighLevel CRM integration.",
    imageUrl: "/projects/enter-and-post.svg",
    imageAlt:
      "Website preview for Enter and Post LLC displaying cloud bookkeeping, tax advisory, and automated OCR operations workflow",
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
      "Responsive residential and commercial painting website designed around clean project showcases, service area pages, and direct estimate requests.",
    imageUrl: "/projects/janglee-painting.svg",
    imageAlt:
      "Website preview for Jangle Painting showcasing residential and commercial painting services and quotation intake",
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
      "Arborist and tree care web deployment tuned for mobile responsiveness, fast CDN caching, SSL security, and frictionless service scheduling.",
    imageUrl: "/projects/natural-wonders.svg",
    imageAlt:
      "Website preview for Natural Wonder Trees featuring arborist services, tree care breakdown, and service booking UI",
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
      "Educational scholarship foundation portal supported by targeted Off-Page SEO outreach, academic authority backlinks, and clear student application flows.",
    imageUrl: "/projects/ace-wall-scholars.svg",
    imageAlt:
      "Website preview for Acewall Scholars educational foundation showing scholarship programs and student mentorship tracks",
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
      "Minimal architectural and professional portfolio engineered with clean editorial typography, responsive media grids, and reliable DNS/SSL routing.",
    imageUrl: "/projects/duncan-brooke.svg",
    imageAlt:
      "Website preview for Duncan Brooke featuring minimalist portfolio layout and architectural project showcase",
    categories: ["website"],
    accentColor: "slate",
  },
];
