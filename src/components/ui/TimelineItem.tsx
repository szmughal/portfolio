import React from 'react';
import { GlassCard } from './GlassCard';
import { TagPill } from './TagPill';
import { cn } from '@/lib/utils';

export interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  bulletPoints: string[];
  accentColor?: 'cyan' | 'indigo' | 'slate';
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  role,
  company,
  period,
  isCurrent = false,
  bulletPoints,
  accentColor = 'indigo',
  className,
}) => {
  const nodeStyles = {
    cyan: 'bg-cyan-600 shadow-[0_0_10px_rgba(8,145,178,0.5)] ring-4 ring-white',
    indigo: 'bg-indigo-600 ring-4 ring-white',
    slate: 'bg-slate-400 ring-4 ring-white',
  }[accentColor];

  const companyStyles = {
    cyan: 'text-cyan-700',
    indigo: 'text-indigo-700',
    slate: 'text-slate-800',
  }[accentColor];

  return (
    <div className={cn('relative group', className)}>
      {/* Node Dot */}
      <div
        className={cn(
          'absolute -left-[27px] sm:-left-[35px] top-6 w-3.5 h-3.5 rounded-full z-10 transition-transform duration-300 group-hover:scale-125',
          nodeStyles
        )}
      />

      {/* Content Glass Card */}
      <GlassCard
        className={cn(
          'p-5 sm:p-6 transition-all duration-300 hover:shadow-md',
          isCurrent && 'border-cyan-300/90'
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-headline text-base sm:text-lg font-bold text-slate-900">
              {role}
            </h3>
            <span className={cn('font-mono text-xs font-semibold', companyStyles)}>
              {company}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            {isCurrent && (
              <TagPill variant="cyan" size="sm" pulseDot>
                CURRENT
              </TagPill>
            )}
            <span className="font-mono text-xs text-slate-500 font-medium">{period}</span>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed">
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
