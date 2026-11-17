# Saad Zafar — Enterprise Solutions Architect & IT Manager Portfolio

Production website built from the approved Figma design for Saad Zafar's portfolio.

## Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS configured with Figma design tokens
- **Typography**: `next/font` for Space Grotesk, Inter, and JetBrains Mono
- **Motion & 3D**: Framer Motion, GSAP + ScrollTrigger, Lenis (smooth scroll), Three.js + React Three Fiber + Drei
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run start
```

---

## Sections Architecture (`src/components/sections/`)

All sections are laid out matching the approved Figma order and styling:

1. **Header (`Header.tsx`)**: Fixed milk-glass top navigation bar with `SZ // ARCHITECT` branding, live availability pill, center anchor navigation pills, and `Get in Touch` CTA.
2. **Command Strip (`CommandStrip.tsx`)**: Sticky NOC telemetry sandbox bar with viewport simulator buttons (`Desktop 1440px`, `Tablet 834px`, `Mobile 390px`) and collapsible 3D & motion specs HUD.
3. **Hero (`HeroSection.tsx`)**: Dual ambient radial lighting, availability badge, bold geometric typography with electric gradient text, mini telemetry status chip, dual CTAs, and 3D topology telemetry canvas frame.
4. **Metrics (`MetricsSection.tsx`)**: 4-column bento counter grid (`8+ Years Experience`, `99.9% System Uptime`, `85% Less Data-Entry Time`, `5+ Production Portals`).
5. **About (`AboutSection.tsx`)**: High-contrast glass container with 3D perspective portrait card, PK/UTC+5 time indicator, architectural profile narrative, and 6 technical stack chips.
6. **Skills (`SkillsSection.tsx`)**: 6 interactive capability bento cards (`01 // NET` through `06 // AEO`) with custom icons, monospace codes, descriptions, and technology tags.
7. **Case Study (`CaseStudySection.tsx`)**: Enterprise Accounting OCR & Ledger Automation with 85% reductive efficiency badge, 3-phase Before/Engine/After pipeline diagram, and Python syntax telemetry terminal.
8. **Projects (`ProjectsSection.tsx`)**: Production web architecture showcase featuring an interactive category filter (`All (6)`, `Website`, `On-Page SEO`, `Off-Page SEO`) and 6 browser frame cards.
9. **Experience (`ExperienceSection.tsx`)**: Chronological enterprise career track with vertical gradient timeline line, node bullet points, CURRENT badge, and banking SLA metrics.
10. **Education & Credentials (`EducationSection.tsx`)**: 4 accreditations (MCS, BSc, Cisco CCNA, ITIL & Enterprise Cybersecurity).
11. **Contact & Terminal (`ContactSection.tsx`)**: Direct NOC dispatch channels (Email, LinkedIn, Karachi NOC) and SSL 256-bit encrypted interactive session initiation form.
12. **Footer (`Footer.tsx`)**: Copyright notice, NOC latency (`12ms`), active timezone (`UTC+5 // Active`), and social dispatch links.

---

## Centralized Data Layer (`src/data/*.ts`)

All content is decoupled from components for instant editing:
- `src/data/personal.ts` — Bio, contact info, coordinates, credentials
- `src/data/metrics.ts` — 4 headline metric counters
- `src/data/skills.ts` — 6 bento competency blocks
- `src/data/caseStudy.ts` — Accounting OCR case study phases & code
- `src/data/projects.ts` — 6 production web assets (TNT, Enter & Post, Jangle, Natural Wonders, Acewall, Duncan Brooke)
- `src/data/experience.ts` — 6 enterprise career roles
- `src/data/education.ts` — Academic degrees and Cisco certifications
- `src/data/navigation.ts` — Top nav links

---

## Deployment to Vercel

```bash
git remote add origin <your-repo-url>
git push -u origin main
```
Import repository into Vercel and configure `RESEND_API_KEY`.
