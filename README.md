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

## Project Structure & Content Editing

All client content, biography, case study statistics, credentials, and project data are decoupled from UI components and stored in `src/data/*.ts`:

| File | Content |
| :--- | :--- |
| `src/data/personal.ts` | Executive bio, contact info, social links, location, SLA stats, tech badges |
| `src/data/metrics.ts` | 4 headline telemetry counters (8+ yrs, 99.9% uptime, 85% OCR cut, 5+ portals) |
| `src/data/skills.ts` | 6 competency bento cards (Networks, ERP, OCR, Security, Cloud, SEO/AEO) |
| `src/data/caseStudy.ts` | Accounting OCR case study phases, before/after metrics, terminal script |
| `src/data/projects.ts` | 6 production web assets (TNT, Enter & Post, Jangle, Natural Wonders, Acewall, Duncan Brooke) |
| `src/data/experience.ts` | 6 enterprise career roles & SLA achievements |
| `src/data/education.ts` | MCS, BSc, Cisco CCNA, ITIL & Cybersecurity credentials |
| `src/data/navigation.ts` | Navigation links and paths |

---

## Reusable UI Components (`src/components/ui/`)

- `Button`: Primary (Electric Indigo), Secondary (Slate/White), Cyan (`#0891B2`), Outline, and Ghost with active scale micro-interactions.
- `GlassCard`: Dual-tier glassmorphism (`control-glass` and `control-glass-high`) with blur, specular highlight, and hover elevation.
- `TagPill`: Monospaced tag badges with live status pulsing dots.
- `MetricCard`: Monospaced telemetry counter blocks with data target attributes.
- `BrowserFrame`: Modern browser chrome with macOS window dots, domain pill, image/viewport container, and live links.
- `PhoneFrame`: Mobile device mockup container with dynamic island and responsive viewport.
- `TimelineItem`: Career track node with gradient line and bullet points.
- `SectionHeading`: Space Grotesk headline, tracked category tag, and subtitle.
- `NavPill`: Header navigation link with active state styling.

---

## Deployment to Vercel

1. Push this repository to GitHub or GitLab:
   ```bash
   git add .
   git commit -m "feat: complete Phase A - setup, design tokens, and reusable components"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Import the project in [Vercel](https://vercel.com/new).
3. Set environment variable `RESEND_API_KEY` (configured in Phase D for contact form dispatch).
4. Click **Deploy**.
