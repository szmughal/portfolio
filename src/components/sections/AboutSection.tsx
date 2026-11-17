'use client';

import React from 'react';
import { personalData } from '@/data/personal';
import { TagPill } from '@/components/ui/TagPill';
import { Compass, Terminal, Cpu, Shield, Bot, Router, Search } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    terminal: <Terminal className="w-3.5 h-3.5 text-indigo-600" />,
    apps: <Cpu className="w-3.5 h-3.5 text-cyan-600" />,
    shield: <Shield className="w-3.5 h-3.5 text-amber-600" />,
    bot: <Bot className="w-3.5 h-3.5 text-indigo-600" />,
    router: <Router className="w-3.5 h-3.5 text-cyan-600" />,
    search: <Search className="w-3.5 h-3.5 text-indigo-600" />,
  };

  return (
    <section
      className="relative rounded-3xl control-glass-high p-6 sm:p-10 lg:p-12 overflow-hidden shadow-resting"
      id="about"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Portrait Card with Telemetry Frame */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <div
            id="portrait-card"
            className="relative w-full max-w-[380px] rounded-2xl p-1 bg-gradient-to-br from-indigo-200 via-slate-100 to-cyan-200 shadow-[0_16px_36px_rgba(79,70,229,0.12)] group transition-transform duration-300 ease-out"
          >
            <div className="relative rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={personalData.portraitUrl}
                alt={personalData.portraitAlt}
                className="w-full h-[400px] sm:h-[440px] object-cover object-top transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Telemetry Floating Pill */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline text-base font-bold text-slate-900">
                    Saad Zafar
                  </span>
                  <span className="font-mono text-xs text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200 font-bold">
                    PK // UTC+5
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  Infrastructure &amp; Enterprise IT Leader
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Bio & Architectural Philosophy */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4 sm:gap-5">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-700" />
            <span className="font-mono text-[11px] uppercase text-cyan-700 tracking-widest font-bold">
              ARCHITECTURAL PROFILE
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold leading-tight">
            {personalData.bioHeading}
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
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
    </section>
  );
};
