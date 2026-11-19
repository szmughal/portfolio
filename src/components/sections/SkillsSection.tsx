'use client';

import React from 'react';
import { skillsData } from '@/data/skills';
import { GlassCard } from '@/components/ui/GlassCard';
import { TagPill } from '@/components/ui/TagPill';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Network,
  Router,
  Database,
  Cpu,
  ShieldCheck,
  Cloud,
  SearchCheck,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  router: Router,
  dataset: Database,
  memory: Cpu,
  shield_with_heart: ShieldCheck,
  cloud_sync: Cloud,
  manage_search: SearchCheck,
};

export const SkillsSection: React.FC = () => {
  return (
    <section className="flex flex-col" id="skills" aria-labelledby="skills-heading">
      <SectionHeading
        tag="SYSTEM CAPABILITIES"
        title={<span id="skills-heading">Core Competency Matrix</span>}
        description="Production-tested across tier-1 banking SLAs, enterprise ERP deployments, automated OCR pipelines, and technical SEO."
        icon={<Network className="w-4 h-4" />}
        accentColor="cobalt"
      />

      {/* Asymmetric 12-Column Bento Box Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {skillsData.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Router;
          const isFeatured = Boolean(skill.featured);

          if (isFeatured) {
            return (
              <GlassCard
                key={skill.id}
                variant="obsidian"
                hoverEffect
                className={`bento-card group p-6 sm:p-7 flex flex-col justify-between ${skill.colSpan}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                      {skill.code}
                    </span>
                  </div>

                  <h3 className="font-headline text-lg sm:text-xl text-white font-bold">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <TagPill key={tag} variant="obsidian" size="sm">
                      {tag}
                    </TagPill>
                  ))}
                </div>
              </GlassCard>
            );
          }

          const lightAccent = {
            cobalt: {
              iconBg: 'bg-[#F0F9FF] border-[#BAE6FD] text-[#0369A1]',
              code: 'text-[#0369A1]',
            },
            emerald: {
              iconBg: 'bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]',
              code: 'text-[#047857]',
            },
            slate: {
              iconBg: 'bg-slate-100 border-slate-200 text-[#0F172A]',
              code: 'text-[#475569]',
            },
          }[skill.accentColor];

          return (
            <GlassCard
              key={skill.id}
              hoverEffect
              className={`bento-card group p-6 sm:p-7 flex flex-col justify-between ${skill.colSpan}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors ${lightAccent.iconBg}`}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className={`font-mono text-xs font-bold tracking-wider ${lightAccent.code}`}>
                    {skill.code}
                  </span>
                </div>

                <h3 className="font-headline text-lg sm:text-xl text-[#0F172A] font-bold">
                  {skill.title}
                </h3>
                <p className="text-sm text-[#475569] mt-2.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <TagPill key={tag} variant="slate" size="sm">
                    {tag}
                  </TagPill>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
