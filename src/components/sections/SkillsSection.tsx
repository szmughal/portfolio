'use client';

import React from 'react';
import { skillsData } from '@/data/skills';
import { GlassCard } from '@/components/ui/GlassCard';
import { TagPill } from '@/components/ui/TagPill';
import {
  Network,
  Router,
  Database,
  Cpu,
  ShieldAlert,
  Cloud,
  SearchCheck,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  router: Router,
  dataset: Database,
  memory: Cpu,
  shield_with_heart: ShieldAlert,
  cloud_sync: Cloud,
  manage_search: SearchCheck,
};

export const SkillsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 sm:gap-10" id="skills">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-indigo-600" />
            <span className="font-mono text-[11px] uppercase text-indigo-600 tracking-widest font-bold">
              SYSTEM CAPABILITIES
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mt-1">
            Core Competency Matrix
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-slate-600 max-w-md font-medium leading-relaxed">
          Production-tested across high-concurrency environments, multi-branch routing, and automated business workflows.
        </p>
      </div>

      {/* 6 Interactive Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Router;

          const colorTheme = {
            indigo: {
              iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
              code: 'text-indigo-600',
              hoverBorder: 'hover:border-indigo-400',
            },
            cyan: {
              iconBg: 'bg-cyan-50 border-cyan-200 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white',
              code: 'text-cyan-700',
              hoverBorder: 'hover:border-cyan-400',
            },
            amber: {
              iconBg: 'bg-amber-50 border-amber-200 text-amber-700 group-hover:bg-amber-600 group-hover:text-white',
              code: 'text-amber-700',
              hoverBorder: 'hover:border-amber-400',
            },
          }[skill.accentColor];

          return (
            <GlassCard
              key={skill.id}
              className={`group p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${colorTheme.hoverBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all shadow-xs ${colorTheme.iconBg}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`font-mono text-xs font-bold ${colorTheme.code}`}>
                    {skill.code}
                  </span>
                </div>

                <h3 className="font-headline text-lg sm:text-xl text-slate-900 font-bold">
                  {skill.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
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
