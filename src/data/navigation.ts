export interface NavItem {
  label: string;
  href: string;
  pathId: string;
}

export const navItems: NavItem[] = [
  { label: "Overview", href: "#hero", pathId: "overview" },
  { label: "Skills", href: "#skills", pathId: "skills" },
  { label: "Case Study", href: "#case-study", pathId: "case-study" },
  { label: "Work", href: "#work", pathId: "work" },
  { label: "Experience", href: "#experience", pathId: "experience" },
  { label: "Credentials", href: "#credentials", pathId: "credentials" },
  { label: "Contact", href: "#contact", pathId: "contact" },
];
