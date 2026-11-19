'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { personalData } from '@/data/personal';
import { Button } from '@/components/ui/Button';
import { TagPill } from '@/components/ui/TagPill';
import { MapPin, ShieldCheck, ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';

const Static3DFallback = () => (
  <div className="relative flex items-center justify-center w-full h-full select-none" aria-hidden="true">
    <div className="relative w-52 h-52 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-sky-400/25" />
      <div className="absolute inset-6 rounded-full border border-dashed border-emerald-400/35" />
      <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0369A1] border border-sky-400/40 text-white flex items-center justify-center font-mono text-xs font-bold shadow-lg shadow-sky-500/20">
        SZ
      </div>
    </div>
  </div>
);

const Hero3DCanvas = dynamic(() => import('@/components/3d/Hero3DCanvas'), {
  ssr: false,
  loading: () => <Static3DFallback />,
});

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-12 flex flex-col gap-12" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Editorial Authority Copy (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          <TagPill variant="emerald" pulseDot>
            {personalData.badge}
          </TagPill>

          <div className="flex flex-col gap-2">
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em] font-bold text-[#0F172A]">
              {personalData.name}{' '}
              <span className="text-[#0369A1]">{personalData.surname}</span>
            </h1>
            <p className="font-headline text-lg sm:text-2xl text-[#334155] tracking-tight font-semibold mt-1">
              {personalData.title}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#475569] max-w-[60ch] leading-relaxed">
            {personalData.leadParagraph}
          </p>

          {/* Compact Location & SLA Metadata */}
          <div className="flex flex-wrap items-center gap-3 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-xs">
            <div className="flex items-center gap-1.5 text-[#0F172A] font-mono text-xs font-medium">
              <MapPin className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
              <span>{personalData.location}</span>
            </div>
            <span className="text-slate-300" aria-hidden="true">•</span>
            <div className="flex items-center gap-1.5 text-[#0F172A] font-mono text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-[#059669]" aria-hidden="true" />
              <span>{personalData.slaUptime}</span>
            </div>
          </div>

          {/* Primary & Secondary 44px+ CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <Button
              href="#work"
              variant="primary"
              size="lg"
              iconRight={<ArrowUpRight className="w-4 h-4" />}
            >
              Explore Projects
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Start a Conversation
            </Button>
          </div>

          {/* Institutional Trust Strip */}
          <div className="w-full pt-4 mt-2 border-t border-slate-200/80">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#475569] font-semibold mb-2">
              Enterprise &amp; Banking Experience Across
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-[#334155] font-medium">
              {personalData.trustedOrgs.map((org, idx) => (
                <React.Fragment key={org}>
                  <span>{org}</span>
                  {idx < personalData.trustedOrgs.length - 1 && (
                    <span className="text-slate-300" aria-hidden="true">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Elevated Obsidian 3D Telemetry Card (5 cols) */}
        <div className="lg:col-span-5 w-full flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[460px] rounded-2xl bg-[#0B1120] border border-slate-800 shadow-overlay overflow-hidden flex flex-col">
            
            {/* Obsidian Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/90 bg-slate-950/60 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
                <span className="text-slate-200 uppercase tracking-wider font-semibold">
                  TOPOLOGY // ENTERPRISE CORE
                </span>
              </div>
              <span className="text-emerald-400 font-semibold">99.9% SLA</span>
            </div>

            {/* 3D R3F Canvas Viewport */}
            <div
              id="hero-3d-container"
              className="flex-1 w-full relative bg-[radial-gradient(circle_at_center,rgba(3,105,161,0.16),transparent_70%)]"
            >
              <Hero3DCanvas />
            </div>

            {/* Subtle Node Legend Bar */}
            <div className="px-4 py-2.5 border-t border-slate-800/90 bg-slate-950/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Cisco • Linux • Odoo • OCR</span>
              <span className="text-sky-400 hidden sm:inline">Interactive 3D Topology</span>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="w-full flex justify-center pt-2">
        <a
          href="#metrics"
          aria-label="Scroll down to key performance metrics"
          className="group inline-flex flex-col items-center gap-1 min-h-[44px] px-4 py-2 rounded-lg text-[#475569] hover:text-[#0369A1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
        >
          <span className="font-mono uppercase tracking-widest text-[11px] font-semibold">
            Scroll to Metrics
          </span>
          <ChevronDown className="w-4 h-4 text-[#0369A1] group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
