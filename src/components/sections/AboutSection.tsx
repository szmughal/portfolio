'use client';

import React from 'react';
import Image from 'next/image';
import { personalData } from '@/data/personal';
import { TagPill } from '@/components/ui/TagPill';
import { TiltCard } from '@/components/motion/TiltCard';
import { GlassCard } from '@/components/ui/GlassCard';
import { Compass, Terminal, Cpu, Shield, Bot, Router, Search } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    terminal: <Terminal className="w-3.5 h-3.5 text-[#0369A1]" />,
    apps: <Cpu className="w-3.5 h-3.5 text-[#059669]" />,
    shield: <Shield className="w-3.5 h-3.5 text-[#0369A1]" />,
    bot: <Bot className="w-3.5 h-3.5 text-[#059669]" />,
    router: <Router className="w-3.5 h-3.5 text-[#0369A1]" />,
    search: <Search className="w-3.5 h-3.5 text-[#334155]" />,
  };

  return (
    <section id="about" aria-labelledby="about-heading">
      <GlassCard variant="high" className="p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Local Portrait Card with 3D Tilt (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard maxTilt={5} className="w-full max-w-[360px]">
              <div
                id="portrait-card"
                className="relative w-full rounded-2xl p-1.5 bg-white border border-slate-200 shadow-raised overflow-hidden"
              >
                <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-[4/5]">
                  <Image
                    src={personalData.portraitUrl}
                    alt={personalData.portraitAlt}
                    width={760}
                    height={950}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-[#0B1120]/10 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Bottom Telemetry Floating Caption */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex flex-col gap-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-headline text-base font-bold text-[#0F172A]">
                        Saad Zafar
                      </span>
                      <span className="font-mono text-[11px] text-[#0369A1] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] font-semibold">
                        PK // UTC+5
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#475569]">
                      IT Manager &amp; Systems Architect
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Editorial Bio & Architectural Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase text-[#0369A1] tracking-widest font-bold">
                ARCHITECTURAL PROFILE
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-headline text-2xl sm:text-3xl lg:text-[34px] text-[#0F172A] font-bold leading-tight"
            >
              {personalData.bioHeading}
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-[#334155] leading-relaxed max-w-[65ch]">
              {personalData.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Tech Tag Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {personalData.techTags.map((tag) => (
                <TagPill
                  key={tag.label}
                  variant="slate"
                  icon={iconMap[tag.icon] || <Terminal className="w-3.5 h-3.5" />}
                >
                  {tag.label}
                </TagPill>
              ))}
            </div>
          </div>

        </div>
      </GlassCard>
    </section>
  );
};
