# Saad Zafar — Enterprise Systems & IT Operations Portfolio

Production portfolio website redesigned with the **`ui-ux-pro-max` v2.15.0** design intelligence system, combining **Swiss Architectural Minimalism** with an **Asymmetric Bento Box** layout, interactive 3D network topology, GSAP scroll choreography, and WCAG AA+ accessibility.

## Stack
- **Framework**: Next.js 15 (App Router) + TypeScript + React 19
- **Styling & Tokens**: Tailwind CSS + CSS Custom Properties (`design-system/saad-zafar/MASTER.md`, `tokens.css`, `tokens.json`)
- **Typography**: `next/font` for `Space Grotesk`, `Inter`, and `JetBrains Mono`
- **Motion & 3D**: Framer Motion (spring 3D card tilt + filtered grid transitions), GSAP + ScrollTrigger (wave staggers, metric count-ups, scroll-drawn timeline), Lenis (smooth scroll), React Three Fiber + Three.js (lazy-loaded 3D core topology with mobile static fallback & GPU cleanup)
- **Forms & Validation**: React Hook Form + Zod + Resend API route (`/api/contact`) with honeypot, rate limiting, and accessible focusable error summary
- **Deployment**: Vercel

---

## Design System Source of Truth (`design-system/saad-zafar/`)

Generated via `ui-ux-pro-max`:
- `design-system/saad-zafar/MASTER.md` — System-wide pattern, typography, color contrast rules, and motion guidelines
- `design-system/saad-zafar/tokens.css` & `tokens.json` — Exported semantic color and spacing tokens
- `design-system/saad-zafar/preview.html` — Token preview sheet

**Palette Summary**:
- Canvas: `#F8FAFC` (with 64px architectural hairline grid)
- Card Surface: `#FFFFFF` (`1px solid #E2E8F0`)
- Dark Telemetry / Code Surface: `#0B1120` (Obsidian)
- Primary Ink: `#0F172A` | Muted Ink: `#475569`
- Cobalt Accent: `#0369A1` | Signal Emerald: `#059669`

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
# Optional Resend API Key for live email dispatch
RESEND_API_KEY=re_your_api_key_here
```
*(If `RESEND_API_KEY` is omitted, `/api/contact` logs payloads safely in development mode.)*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Start
```bash
npm run build
npm run start
```

---

## Editing Portfolio Content (`src/data/*.ts`)

All text, CV roles, metrics, credentials, and project showcases live in `/src/data/`:
- `src/data/personal.ts` — Name, title, bio, trusted organizations, contact links, `/saad-portrait.jpg`
- `src/data/metrics.ts` — 4 executive KPI counters (`8+`, `99.9%`, `85%`, `6`)
- `src/data/skills.ts` — 6 asymmetric Bento capabilities (`01 // INFRA` through `06 // WEB`)
- `src/data/caseStudy.ts` — Enter and Post LLC QuickBooks OCR extraction case study & sample CSV rows
- `src/data/projects.ts` — 6 live websites (TNT Commercial Services 615, Enter and Post LLC, Jangle Painting, Natural Wonder Trees, Acewall Scholars, Duncan Brooke)
- `src/data/experience.ts` — Chronological career history (2018–Present)
- `src/data/education.ts` — MCS, BSc, Cisco CCNA curriculum, bilingual operations
- `src/data/navigation.ts` — Top header & mobile drawer navigation links

---

## Deployment to Vercel

```bash
git push -u origin main
```
Import the repository in [Vercel](https://vercel.com/new), optionally add `RESEND_API_KEY` under **Project Settings → Environment Variables**, and deploy.
