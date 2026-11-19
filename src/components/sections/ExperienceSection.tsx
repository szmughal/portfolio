'use client';

import React from 'react';
import { experienceData } from '@/data/experience';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { History } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="flex flex-col" id="experience" aria-labelledby="experience-heading">
      <SectionHeading
        tag="CHRONOLOGY // LEADERSHIP"
        title={<span id="experience-heading">Enterprise Career Track</span>}
        description="Eight years of progression from tier-1 banking field infrastructure support to sole-authority IT operations leadership."
        icon={<History className="w-4 h-4" />}
        accentColor="cobalt"
      />

      {/* Timeline Container with Scroll-Drawing Vertical Line */}
      <div className="relative pl-6 sm:pl-10 space-y-6">
        <div
          className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-slate-200 pointer-events-none"
          aria-hidden="true"
        />
        <div
          id="timeline-line"
          className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#059669] via-[#0369A1] to-slate-400 pointer-events-none origin-top will-change-transform"
          aria-hidden="true"
        />

        {experienceData.map((exp) => (
          <TimelineItem
            key={exp.id}
            role={exp.role}
            company={exp.company}
            location={exp.location}
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
