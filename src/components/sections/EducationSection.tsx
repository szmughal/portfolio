'use client';

import React from 'react';
import { educationData } from '@/data/education';
import { GlassCard } from '@/components/ui/GlassCard';
import { GraduationCap, Award, BookOpen, Router, ShieldCheck, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  workspace_premium: Award,
  history_edu: BookOpen,
  router: Router,
  verified_user: ShieldCheck,
};

export const EducationSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 sm:gap-10" id="credentials">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-cyan-700" />
          <span className="font-mono text-[11px] uppercase text-cyan-700 tracking-widest font-bold">
            ACCREDITATIONS &amp; DEGREES
          </span>
        </div>
        <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mt-1">
          Education &amp; Technical Credentials
        </h2>
      </div>

      {/* 4 Credential Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {educationData.map((edu) => {
          const IconComponent = iconMap[edu.icon] || Award;

          const colorTheme = {
            indigo: {
              icon: 'text-indigo-600',
              badge: 'text-indigo-700',
              hoverBorder: 'hover:border-indigo-400',
            },
            cyan: {
              icon: 'text-cyan-700',
              badge: 'text-cyan-700',
              hoverBorder: 'hover:border-cyan-400',
            },
            amber: {
              icon: 'text-amber-700',
              badge: 'text-amber-700',
              hoverBorder: 'hover:border-amber-400',
            },
          }[edu.accentColor];

          return (
            <GlassCard
              key={edu.id}
              className={`p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${colorTheme.hoverBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <IconComponent className={`w-7 h-7 ${colorTheme.icon}`} />
                  <span className="font-mono text-[11px] uppercase font-bold text-slate-500">
                    {edu.badge}
                  </span>
                </div>

                <h3 className="font-headline text-base sm:text-lg text-slate-900 font-bold leading-snug">
                  {edu.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className={`mt-6 pt-3 border-t border-slate-100 font-mono text-[11px] font-medium ${colorTheme.badge}`}>
                {edu.institution} • {edu.location}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
