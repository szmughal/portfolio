---
name: Architectural Control Room Light
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464555'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#703a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#934e00'
  on-tertiary-container: '#ffd2b1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the discipline, analytical rigor, and precision of enterprise IT systems architecture. It captures the atmosphere of a modern mission-critical command room translated into a luminous, hyper-legible light mode environment. The emotional tone is authoritative yet nimble, engineering-grade, transparent, and structurally sound.

The aesthetic fuses **Modern Technical Minimalism** with **Light Glassmorphism**:
- Crisp, clinical surfaces featuring translucent milk-glass panels layered over neutral slate canvases.
- High-contrast typography optimized for executive dashboards, architecture schematics, and complex systems narratives.
- Precision instrumentation: telemetry readouts, status indicators, and live infrastructure signals handled with technical clarity rather than decorative fluff.

## Colors

The palette balances clinical clarity with electric architectural cues:

- **Canvas & Underlays**: Canvas begins at `#F8FAFC` (Slate 50), with layered surfaces rising to pure `#FFFFFF` (100% or 80% frosted alpha).
- **Primary (Electric Indigo - `#4F46E5` / `#5B5BFF`)**: Anchors primary actions, key architectural nodes, active navigation rails, and focal milestones.
- **Secondary (Cyber Cyan / Ocean - `#0284C7` / `#06B6D4`)**: Reserved for system status, integration flows, secondary metrics, and network links.
- **Tertiary (Telemetry Amber - `#D97706`)**: High-visibility alert states, KPI highlights, latency metrics, and mission checkpoints.
- **Text & Structure**: Primary text sits at `#0F172A` (Slate 900) for maximum contrast ratio; muted text leverages `#475569` and `#64748B`. Outlines and dividers use `#E2E8F0` with optical precision.

## Typography

Typography establishes an immediate hierarchy between strategic leadership and technical execution:

- **Display & Headings (Space Grotesk)**: Geometric, assertive, and modern. Conveys structural engineering and forward-thinking transformation.
- **Narrative & Body (Inter)**: Highly neutral, screen-optimized grotesk ensuring sustained readability across case studies, architecture briefs, and system descriptions.
- **Telemetry & Labels (JetBrains Mono)**: Monospaced precision for metrics, status markers, system uptime figures, architecture stacks, and code telemetry. Always set with slight positive tracking to ensure tabular clarity.

## Layout & Spacing

The layout model enforces architectural alignment through a structured 12-column responsive fluid grid:

- **Desktop (1024px+)**: 12 columns, `2.5rem` outer margins, `1.5rem` gutters. Content maxes out at a disciplined 1280px container width for comfortable reading and telemetry dashboard layouts.
- **Tablet (768px - 1023px)**: 8 columns, `2rem` margins, `1.25rem` gutters. Cards collapse into two-column pairs.
- **Mobile (< 768px)**: 4 columns, `1.25rem` outer margins, `1rem` gutters. Telemetry blocks collapse into sequential horizontal cards or compact vertical stacks.

Vertical cadence follows an 8px base rhythm. Outer sections maintain generous negative space to balance dense technical readouts with executive elegance.

## Elevation & Depth

Visual depth is achieved through translucent planar layering, hairline boundaries, and diffused ambient light:

- **Surface Translucency**: Glass cards utilize `rgba(255, 255, 255, 0.8)` with a `12px` to `16px` backdrop filter blur, revealing ambient background gradients while preserving sharp contrast.
- **Structural Outlines**: Panels feature a crisp `1px` border of `#E2E8F0` (Slate 200). A subtle inset specular highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.9)`) simulates a machine-milled glass edge.
- **Ambient Shadow System**:
  - *Resting Card*: `0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)`.
  - *Hover / Raised Card*: `0 12px 32px -4px rgba(79, 70, 229, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)`.
  - *Overlay / Telemetry Modal*: `0 20px 48px -8px rgba(15, 23, 42, 0.12), 0 1px 2px rgba(15, 23, 42, 0.06)`.

## Shapes

The design uses balanced, crisp rounding (`0.5rem` standard radius) that bridges structural technical interfaces with modern UI precision.

- **Standard Elements (inputs, buttons, pill badges)**: `0.5rem` (8px) for structural containers; tags and status pills use a complete rounded radius (`9999px`) to distinguish meta labels from structural cards.
- **Cards & Data Modules**: `rounded-lg` (`1rem` / 16px) for major architectural grouping blocks.
- **Code & Telemetry Consoles**: `0.75rem` (12px) to maintain a refined terminal enclosure aesthetic.

## Components

### Buttons
- **Primary**: Solid Electric Indigo (`#4F46E5`), high-contrast white text (`#FFFFFF`), `0.5rem` radius, subtle drop shadow `0 2px 8px rgba(79, 70, 229, 0.25)`. Hover states shift to `#4338CA` with an expanded indigo glow.
- **Secondary / Technical**: Translucent `#FFFFFF` with `1px` border in `#E2E8F0`, text in `#0F172A`. Hover transitions border to `#0284C7` with a cyan ambient hint.
- **Icon Actions**: Fixed square proportions (`40x40px`), muted `#64748B` stroke, highlighting to indigo on interaction.

### Cards & System Blocks
- Glass cards built with `background: rgba(255, 255, 255, 0.8)`, `backdrop-filter: blur(14px)`, `border: 1px solid #E2E8F0`.
- Padding conforms strictly to `1.5rem` (`space-lg`) on desktop and `1rem` on mobile.

### Chips & Telemetry Tags
- Rendered in **JetBrains Mono** (`label-md` or `label-sm`).
- Include active status indicators: a 6px pulsing dot (e.g., `#0284C7` for healthy networks, `#10B981` for active systems, `#D97706` for warning/latency).
- Styled with low-opacity tinted backgrounds (e.g., Indigo: `rgba(79, 70, 229, 0.08)`, Cyan: `rgba(2, 132, 199, 0.08)`).

### Input Fields & Controls
- High-contrast white surfaces framed in `#CBD5E1`.
- Focused states produce an Electric Indigo border (`#4F46E5`) with an exterior `0 0 0 3px rgba(79, 70, 229, 0.15)` optical ring.
- Checkboxes and radios feature custom indigo fills with crisp mechanical check vectors.

### Code & Telemetry Panels
- Container built in rich `#0F172A` (Slate 900) or high-contrast Slate 100 with refined borders, offering an authentic CLI/architecture viewport.
- Syntax highlighting uses Cyber Cyan (`#38BDF8`), Electric Indigo highlights (`#818CF8`), and Telemetry Amber (`#FBBF24`).