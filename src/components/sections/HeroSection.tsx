'use client';

import React from 'react';
import { personalData } from '@/data/personal';
import { Button } from '@/components/ui/Button';
import { MapPin, CheckCircle, ArrowUpRight, ArrowDownRight, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 flex flex-col gap-12" id="hero">
      
      {/* Ambient Radial Lighting (matching Figma light mode) */}
      <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-indigo-200/40 via-cyan-100/30 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-16 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-cyan-200/35 via-indigo-100/25 to-transparent blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Lead Editorial */}
        <div className="w-full lg:w-7/12 flex flex-col items-start gap-5 z-10">
          
          {/* Floating Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-cyan-400/60 backdrop-blur-xl shadow-[0_2px_12px_rgba(8,145,178,0.15)] hover:border-cyan-500 transition-all cursor-pointer group">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600 shadow-[0_0_8px_rgba(8,145,178,0.6)]" />
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-cyan-800 font-bold group-hover:tracking-widest transition-all">
              {personalData.badge}
            </span>
          </div>

          {/* Headline & Title */}
          <div className="flex flex-col gap-1">
            <h1 className="font-headline text-[50px] sm:text-[72px] lg:text-[84px] leading-[0.92] tracking-tighter font-bold uppercase text-slate-900">
              {personalData.name}{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 bg-clip-text text-transparent">
                {personalData.surname}
              </span>
            </h1>
            <p className="font-headline text-lg sm:text-2xl text-indigo-700 tracking-tight mt-2 font-semibold">
              {personalData.title}
            </p>
          </div>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            {personalData.leadParagraph}
          </p>

          {/* Mini Telemetry Chip */}
          <div className="flex flex-wrap items-center gap-3 bg-white/90 border border-slate-200 hover:border-cyan-400/60 px-4 py-2 rounded-xl backdrop-blur-xl shadow-xs transition-all">
            <div className="flex items-center gap-1.5 text-cyan-700 font-mono text-xs font-semibold">
              <MapPin className="w-4 h-4 text-cyan-600 animate-pulse" />
              <span>{personalData.location}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 text-slate-800 font-mono text-xs font-semibold">
              <CheckCircle className="w-4 h-4 text-indigo-600" />
              <span>{personalData.slaUptime}</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-50 text-cyan-700 border border-cyan-200 font-bold">
              {personalData.status}
            </span>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <Button
              href="#work"
              variant="primary"
              size="lg"
              iconRight={<ArrowUpRight className="w-4 h-4" />}
            >
              View Production Work
            </Button>

            <Button
              href="#contact"
              variant="cyan"
              size="lg"
              iconRight={<ArrowDownRight className="w-4 h-4" />}
            >
              Contact Me / Terminal
            </Button>
          </div>
        </div>

        {/* Right Column: 3D Telemetry Frame */}
        <div className="w-full lg:w-5/12 relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[480px] rounded-2xl bg-white/85 border border-slate-200/90 backdrop-blur-xl p-1 shadow-[0_16px_40px_rgba(79,70,229,0.08)] overflow-hidden group">
            
            {/* Glowing Top Accent Edge */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600 shadow-[0_1px_8px_rgba(14,165,233,0.4)]" />

            {/* Live Telemetry Top Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200/80 font-mono text-xs bg-slate-50/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                <span className="text-slate-700 uppercase tracking-wider font-semibold">
                  Topology // 3D Core
                </span>
              </div>
              <span className="text-cyan-700 font-semibold">LIVE_STREAM // 60FPS</span>
            </div>

            {/* 3D Scene Viewport / Fallback */}
            <div
              id="hero-3d-container"
              className="w-full h-[360px] sm:h-[400px] flex items-center justify-center relative bg-gradient-to-b from-indigo-50/20 to-cyan-50/30 overflow-hidden"
            >
              {/* Static Geometric Schematic Representation (replaces with R3F canvas in Phase C) */}
              <div className="relative flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border border-indigo-300/40 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-44 h-44 rounded-full border border-dashed border-cyan-400/50 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-32 h-32 rounded-full border border-indigo-400/60" />

                {/* Core Server Node */}
                <div className="absolute w-14 h-14 rounded-2xl bg-indigo-600/90 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 font-mono text-xs font-bold">
                  SZ::CORE
                </div>

                {/* Satellite Satellite Nodes */}
                <div className="absolute -top-2 left-6 px-2 py-0.5 rounded bg-white border border-cyan-300 text-[10px] font-mono text-cyan-800 shadow-xs">
                  Cisco_Edge
                </div>
                <div className="absolute -bottom-2 right-4 px-2 py-0.5 rounded bg-white border border-indigo-300 text-[10px] font-mono text-indigo-800 shadow-xs">
                  OCR_Pipe::85%
                </div>
                <div className="absolute top-1/2 -left-6 px-2 py-0.5 rounded bg-white border border-amber-300 text-[10px] font-mono text-amber-800 shadow-xs">
                  Odoo_ERP
                </div>
                <div className="absolute top-1/2 -right-6 px-2 py-0.5 rounded bg-white border border-emerald-300 text-[10px] font-mono text-emerald-800 shadow-xs">
                  99.9%_SLA
                </div>
              </div>

              {/* Bottom Interactive Prompt Pill */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-600 text-[11px] font-mono border border-slate-200 shadow-xs pointer-events-none">
                Interactive: Orbit, Drag &amp; Inspect Node
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Prompt */}
      <div className="w-full flex justify-center pt-4">
        <a
          href="#metrics"
          className="group flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <span className="font-mono uppercase tracking-widest text-[10px] font-semibold">
            SCROLL TO INITIALIZE SYSTEM
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-indigo-600" />
        </a>
      </div>

    </section>
  );
};
