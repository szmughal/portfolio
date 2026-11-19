import React from 'react';
import { GlassCard } from './GlassCard';
import { TagPill } from './TagPill';
import { cn } from '@/lib/utils';

export interface TimelineItemProps {
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  bulletPoints: string[];
  accentColor?: 'cobalt' | 'emerald' | 'slate';
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  role,
  company,
  location,
  period,
  isCurrent = false,
  bulletPoints,
  accentColor = 'cobalt',
  className,
}) => {
  const nodeStyles = {
    emerald: 'bg-[#059669] ring-4 ring-[#F8FAFC]',
    cobalt: 'bg-[#0369A1] ring-4 ring-[#F8FAFC]',
    slate: 'bg-slate-400 ring-4 ring-[#F8FAFC]',
  }[accentColor];

  const companyStyles = {
    emerald: 'text-[#047857]',
    cobalt: 'text-[#0369A1]',
    slate: 'text-[#334155]',
  }[accentColor];

  return (
    <div className={cn('relative group', className)}>
      {/* Node Dot */}
      <div
        className={cn(
          'absolute -left-[27px] sm:-left-[35px] top-6 w-3.5 h-3.5 rounded-full z-10 transition-transform duration-200 group-hover:scale-125',
          nodeStyles
        )}
        aria-hidden="true"
      />

      {/* Content Card */}
      <GlassCard
        className={cn(
          'p-5 sm:p-6 transition-all duration-200 hover:shadow-raised',
          isCurrent && 'border-[#A7F3D0]'
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-headline text-base sm:text-lg font-bold text-[#0F172A]">
              {role}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
              <span className={cn('font-mono text-xs font-semibold', companyStyles)}>
                {company}
              </span>
              {location && (
                <>
                  <span className="text-slate-300" aria-hidden="true">•</span>
                  <span className="font-mono text-xs text-[#475569]">{location}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2.5 mt-1 sm:mt-0 shrink-0">
            {isCurrent && (
              <TagPill variant="emerald" size="sm" pulseDot>
                CURRENT
              </TagPill>
            )}
            <span className="font-mono text-xs tabular-nums text-[#475569] font-medium">
              {period}
            </span>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-[#334155] list-disc list-inside leading-relaxed">
          {bulletPoints.map((point, index) => (
            <li key={index} className="marker:text-slate-400">
              {point}
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
};
