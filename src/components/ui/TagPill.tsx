import React from 'react';
import { cn } from '@/lib/utils';

export interface TagPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'indigo' | 'cyan' | 'amber' | 'emerald' | 'slate' | 'rose';
  size?: 'sm' | 'md';
  pulseDot?: boolean;
  icon?: React.ReactNode;
}

export const TagPill: React.FC<TagPillProps> = ({
  className,
  variant = 'slate',
  size = 'md',
  pulseDot = false,
  icon,
  children,
  ...props
}) => {
  const variants = {
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    cyan: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  const dotColors = {
    indigo: 'bg-indigo-500',
    cyan: 'bg-cyan-500',
    amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
    slate: 'bg-slate-500',
    rose: 'bg-rose-500',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 rounded gap-1 tracking-wider',
    md: 'text-[11px] px-2.5 py-1 rounded-lg gap-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium border select-none transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2 mr-0.5">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotColors[variant]
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              dotColors[variant]
            )}
          />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
