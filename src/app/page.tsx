import React from 'react';
import {
  Button,
  GlassCard,
  TagPill,
  MetricCard,
  BrowserFrame,
  TimelineItem,
  SectionHeading,
  NavPill,
} from '@/components/ui';
import { personalData } from '@/data/personal';
import { metricsData } from '@/data/metrics';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { navItems } from '@/data/navigation';
import { ArrowUpRight, Terminal, Shield, CheckCircle2, Bot } from 'lucide-react';

export default function PhaseAPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* PHASE A HEADER & REVIEW STATUS */}
      <GlassCard variant="high" className="p-6 border-indigo-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <TagPill variant="indigo" size="sm">
                PHASE A COMPLETE: SETUP, TOKENS &amp; REUSABLE COMPONENTS
              </TagPill>
            </div>
            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900">
              Saad Zafar Portfolio — Design System &amp; Component Verification
            </h1>
            <p className="text-xs text-slate-600 font-mono mt-1">
              Scaffolded with Next.js 15 (App Router), TypeScript, Tailwind tokens from Figma, next/font, and centralized /data/*.ts
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              href="#components"
            >
              Inspect Components
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* 1. NAVIGATION PILLS SHOWCASE */}
      <section className="space-y-4">
        <SectionHeading
          tag="01 // NAVIGATION"
          title="NavPill Component"
          description="Interactive glass navigation pill bar matching Figma top header."
        />
        <GlassCard className="p-4 flex flex-wrap items-center gap-2">
          {navItems.map((item, index) => (
            <NavPill
              key={item.pathId}
              label={item.label}
              href={item.href}
              isActive={index === 0}
            />
          ))}
        </GlassCard>
      </section>

      {/* 2. BUTTONS & TAG PILLS SHOWCASE */}
      <section id="components" className="space-y-4">
        <SectionHeading
          tag="02 // BUTTONS & TAGS"
          title="Button &amp; TagPill Variants"
          description="Pixel-accurate styles from Figma variables: primary, secondary, cyan, ghost, sizes &amp; states."
        />
        <GlassCard className="p-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary Indigo</Button>
            <Button variant="cyan">Secondary Cyan</Button>
            <Button variant="secondary">Secondary Slate</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost Action</Button>
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="lg">
              Large Hero
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
            <TagPill variant="indigo" pulseDot>
              AVAILABLE FOR ENTERPRISE
            </TagPill>
            <TagPill variant="cyan" pulseDot>
              99.9% UPTIME
            </TagPill>
            <TagPill variant="emerald" pulseDot>
              HEALTHY
            </TagPill>
            <TagPill variant="amber">OFF-PAGE SEO</TagPill>
            <TagPill variant="slate" icon={<Terminal className="w-3 h-3" />}>
              Linux Enterprise
            </TagPill>
            <TagPill variant="rose">7.2% ERROR RATE</TagPill>
          </div>
        </GlassCard>
      </section>

      {/* 3. METRIC CARDS SHOWCASE */}
      <section className="space-y-4">
        <SectionHeading
          tag="03 // TELEMETRY"
          title="MetricCard Component"
          description="Monospace telemetry counters loaded directly from /data/metrics.ts"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricsData.map((m) => (
            <MetricCard
              key={m.id}
              tag={m.tag}
              value={m.value}
              targetNumber={m.targetNumber}
              label={m.label}
              description={m.description}
              iconName={m.icon}
              accentColor={m.accentColor}
            />
          ))}
        </div>
      </section>

      {/* 4. BROWSER FRAME SHOWCASE */}
      <section className="space-y-4">
        <SectionHeading
          tag="04 // FRAMES & VIEWPORTS"
          title="BrowserFrame Component"
          description="Browser mockups with traffic light dots, domain pill, image/viewport, tags &amp; live link."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(0, 3).map((p) => (
            <BrowserFrame
              key={p.id}
              urlDomain={p.domain}
              title={p.name}
              description={p.description}
              tags={p.tags}
              imageSrc={p.imageUrl}
              imageAlt={p.imageAlt}
              externalHref={p.url}
              accentColor={p.accentColor}
            />
          ))}
        </div>
      </section>

      {/* 5. TIMELINE ITEM SHOWCASE */}
      <section className="space-y-4">
        <SectionHeading
          tag="05 // CAREER MATRIX"
          title="TimelineItem Component"
          description="Career track nodes with expandable bullet points from /data/experience.ts"
        />
        <div className="relative pl-8 space-y-6">
          <div className="absolute left-3.5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-200" />
          {experienceData.slice(0, 2).map((exp) => (
            <TimelineItem
              key={exp.id}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              isCurrent={exp.isCurrent}
              bulletPoints={exp.bulletPoints}
              accentColor={exp.accentColor}
            />
          ))}
        </div>
      </section>

      {/* 6. DATA LAYER STATUS */}
      <GlassCard className="p-6 border-slate-200">
        <h3 className="font-headline text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          Centralized Data Store Confirmed (/src/data/*.ts)
        </h3>
        <p className="text-xs text-slate-600 mb-4">
          All client text, biography, case study statistics, credentials, and project URLs are strictly separated from presentation components.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs font-mono">
          <div className="p-2 rounded bg-slate-100 border border-slate-200 text-slate-700">personal.ts</div>
          <div className="p-2 rounded bg-slate-100 border border-slate-200 text-slate-700">metrics.ts</div>
          <div className="p-2 rounded bg-slate-100 border border-slate-200 text-slate-700">skills.ts</div>
          <div className="p-2 rounded bg-slate-100 border border-slate-200 text-slate-700">caseStudy.ts</div>
          <div className="p-2 rounded bg-slate-100 border border-slate-200 text-slate-700">projects.ts</div>
          <div className="p-2 rounded bg-slate-100 border border-slate-200 text-slate-700">experience.ts</div>
        </div>
      </GlassCard>
    </div>
  );
}
