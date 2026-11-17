import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  tag: string;
  title: string | React.ReactNode;
  description?: string;
  icon?: React.ReactNode;
  accentColor?: 'indigo' | 'cyan' | 'amber';
  rightElement?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  icon,
  accentColor = 'indigo',
  rightElement,
  className,
}) => {
  const tagColor = {
    indigo: 'text-indigo-600',
    cyan: 'text-cyan-700',
    amber: 'text-amber-700',
  }[accentColor];

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12',
        className
      )}
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-1.5 mb-2">
          {icon && <span className={cn('inline-flex', tagColor)}>{icon}</span>}
          <span
            className={cn(
              'font-mono text-[11px] uppercase tracking-widest font-bold',
              tagColor
            )}
          >
            {tag}
          </span>
        </div>

        <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          {title}
        </h2>
      </div>

      {(description || rightElement) && (
        <div className="flex items-center gap-4">
          {description && (
            <p className="font-mono text-xs text-slate-600 max-w-md font-medium leading-relaxed">
              {description}
            </p>
          )}
          {rightElement}
        </div>
      )}
    </div>
  );
};
