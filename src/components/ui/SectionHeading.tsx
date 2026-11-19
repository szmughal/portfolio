import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  tag: string;
  title: string | React.ReactNode;
  description?: string;
  icon?: React.ReactNode;
  accentColor?: 'cobalt' | 'emerald' | 'slate';
  rightElement?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  icon,
  accentColor = 'cobalt',
  rightElement,
  className,
}) => {
  const tagColor = {
    cobalt: 'text-[#0369A1]',
    emerald: 'text-[#047857]',
    slate: 'text-[#334155]',
  }[accentColor];

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10',
        className
      )}
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-2">
          {icon && (
            <span className={cn('inline-flex shrink-0', tagColor)} aria-hidden="true">
              {icon}
            </span>
          )}
          <span
            className={cn(
              'font-mono text-[11px] uppercase tracking-widest font-bold',
              tagColor
            )}
          >
            {tag}
          </span>
        </div>

        <h2 className="font-headline text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
          {title}
        </h2>
      </div>

      {(description || rightElement) && (
        <div className="flex items-center gap-4">
          {description && (
            <p className="text-sm text-[#475569] max-w-md leading-relaxed">
              {description}
            </p>
          )}
          {rightElement}
        </div>
      )}
    </div>
  );
};
