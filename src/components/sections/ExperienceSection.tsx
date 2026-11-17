'use client';

import React from 'react';
import { experienceData } from '@/data/experience';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { History } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 sm:gap-10" id="experience">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-indigo-600" />
          <span className="font-mono text-[11px] uppercase text-indigo-600 tracking-widest font-bold">
            CHRONOLOGY // LEADERSHIP
          </span>
        </div>
        <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mt-1">
          Enterprise Career Track
        </h2>
      </div>

      {/* Timeline Container with Vertical Gradient Line that draws on scroll */}
      <div className="relative pl-6 sm:pl-10 space-y-6 sm:space-y-8">
        {/* Track Line */}
        <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-slate-200/80 pointer-events-none" />
        {/* Animated Drawing Indicator Line */}
        <div
          id="timeline-line"
          className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-emerald-400 pointer-events-none origin-top will-change-transform"
        />

        {experienceData.map((exp) => (
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
  );
};
