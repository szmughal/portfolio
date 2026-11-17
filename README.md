# Saad Zafar — Enterprise Solutions Architect & IT Manager Portfolio

Production website built from the approved Figma design for Saad Zafar's portfolio.

## Stack
- **Framework**: Next.js 15 (App Router) + TypeScript + React 19
- **Styling**: Tailwind CSS configured with Figma design tokens
- **Typography**: `next/font` for Space Grotesk, Inter, and JetBrains Mono
- **Motion & 3D**: Framer Motion, GSAP + ScrollTrigger, Lenis (smooth scroll), Three.js + React Three Fiber + Drei
- **Forms & Validation**: React Hook Form + Zod + Resend
- **Deployment**: Vercel

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
*(If `RESEND_API_KEY` is not provided, the contact API runs in development logging mode).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Verification
```bash
npm run build
npm run start
```

---

## 3D & Motion Architecture (`src/components/3d/` & `src/components/motion/`)

- **Hero 3D Scene (`NetworkTopology.tsx` & `Hero3DCanvas.tsx`)**:
  - Built with **React Three Fiber** and **Three.js**.
  - Renders a floating central frosted glass server core (`#4F46E5`), outer wireframe cage (`#06B6D4`), dynamic network splines/cables, and glowing satellite nodes with cyan/indigo emissive materials.
  - Continuous rotation on X and Y axes, gentle core pulse, and subtle pointer parallax.
  - Lazy-loaded via `next/dynamic` with `ssr: false` and a lightweight geometric orbital static fallback while loading.
  - Automatically scales down node count and resolution on mobile screens (< 768px).
- **3D Card Spring Tilt (`TiltCard.tsx`)**:
  - Implemented using **Framer Motion** springs (`useSpring`, `useMotionValue`, `useTransform`).
  - Applied to all 6 **BrowserFrame** project cards and the About portrait card for natural perspective tilt.
- **GSAP ScrollTrigger (`ScrollAnimations.tsx`)**:
  - **Staggered Reveals**: Smooth scroll-triggered entrance for all sections (`#metrics`, `#about`, `#skills`, `#case-study`, `#work`, `#experience`, `#credentials`, `#contact`).
  - **Animated Count-Up**: Triggers numerical count-up on `.counter-metric` elements when entering view.
  - **Drawing Timeline Line**: The vertical timeline line in the Experience section dynamically scales down along the Y-axis from 0% to 100% height scrubbed to scroll position.
  - **Subtle Parallax**: Depth offset on project browser frames during scroll.
- **Lenis Smooth Scroll (`SmoothScroll.tsx`)**:
  - Inertial smooth scrolling synchronized directly with the GSAP ticker (`lenis.raf`).
- **Accessibility (`prefers-reduced-motion`)**:
  - Automatically detects OS reduced-motion preferences: disables Lenis smooth scroll, stops 3D rotation and parallax, and ensures immediate static visibility.

---

## Contact API & Dispatch Engine (`src/app/api/contact/`)

- **Validation**: Schema-validated via `zod` (`src/lib/validations/contact.ts`).
- **Anti-Bot Protection**: Honeypot field (`website_honeypot`) that silently rejects bot submissions.
- **Rate Limiting**: In-memory IP tracking limiting to max 5 transmissions per 10 minutes per IP address.
- **Email Delivery**: Integrates with **Resend** to dispatch structured HTML notifications directly to `saad.zafar060@gmail.com`.
- **User Feedback**: Custom glass toast notifications for success (`#0891B2` cyan) and errors (`#EF4444` rose).

---

## SEO & Accessibility (Lighthouse 90+ Target)

- **Metadata API**: Dynamic Open Graph and Twitter Card tags configured in `src/app/layout.tsx`.
- **Social Banner**: Custom 1200x630 vector asset at `/og-image.svg`.
- **Search Engine Discovery**: Auto-generated `/sitemap.xml` (`sitemap.ts`) and `/robots.txt` (`robots.ts`).
- **JSON-LD Structured Data**: Embedded `Person` schema markup attributing credentials (MCS, CCNA), 8+ years experience, contact info, and production works.
- **WCAG AA Compliance**: High-contrast typography (`#0F172A` on `#FFFFFF` / `#F8FAFC`), visible focus rings (`focus-visible:ring-2 focus-visible:ring-indigo-600`), semantic heading levels (H1–H4), skip-to-content links, and descriptive `alt` tags.

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

1. Push this repository to GitHub or GitLab:
   ```bash
   git add .
   git commit -m "feat: complete Phase D - contact form with Resend, SEO metadata, JSON-LD, and performance optimizations"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Import the project in [Vercel](https://vercel.com/new).
3. Under **Project Settings &rarr; Environment Variables**, add:
   - `RESEND_API_KEY`: Your Resend API key (optional for email dispatch).
4. Click **Deploy**. Vercel will build the Next.js 15 App Router project with automatic edge CDN caching.
