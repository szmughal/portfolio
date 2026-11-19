'use client';

import React from 'react';
import { educationData } from '@/data/education';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GraduationCap, Award, BookOpen, Router, ShieldCheck, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  workspace_premium: Award,
  history_edu: BookOpen,
  router: Router,
  verified_user: ShieldCheck,
};

export const EducationSection: React.FC = () => {
  return (
    <section className="flex flex-col" id="credentials" aria-labelledby="credentials-heading">
      <SectionHeading
        tag="ACCREDITATIONS & DEGREES"
        title={<span id="credentials-heading">Education &amp; Technical Credentials</span>}
        description="Academic computer science foundation paired with hands-on Cisco networking training."
        icon={<GraduationCap className="w-4 h-4" />}
        accentColor="cobalt"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {educationData.map((edu) => {
          const IconComponent = iconMap[edu.icon] || Award;

          const colorTheme = {
            cobalt: {
              icon: 'text-[#0369A1]',
              badge: 'text-[#0369A1]',
            },
            emerald: {
              icon: 'text-[#059669]',
              badge: 'text-[#047857]',
            },
            slate: {
              icon: 'text-[#0F172A]',
              badge: 'text-[#475569]',
            },
          }[edu.accentColor];

          return (
            <GlassCard
              key={edu.id}
              hoverEffect
              className="bento-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className={`w-6 h-6 ${colorTheme.icon}`} aria-hidden="true" />
                  <span className="font-mono text-[11px] uppercase font-semibold text-[#475569]">
                    {edu.badge}
                  </span>
                </div>

                <h3 className="font-headline text-base sm:text-lg text-[#0F172A] font-bold leading-snug">
                  {edu.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className={`mt-6 pt-3 border-t border-slate-100 font-mono text-[11px] font-semibold ${colorTheme.badge}`}>
                {edu.institution} • {edu.location}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
