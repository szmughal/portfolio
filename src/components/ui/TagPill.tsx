import React from 'react';
import { cn } from '@/lib/utils';

export type TagPillVariant =
  | 'cobalt'
  | 'emerald'
  | 'slate'
  | 'obsidian'
  | 'rose'
  // Backwards-compatible aliases
  | 'indigo'
  | 'cyan'
  | 'amber';

export interface TagPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagPillVariant;
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
  const variants: Record<TagPillVariant, string> = {
    cobalt: 'bg-[#F0F9FF] text-[#0369A1] border-[#BAE6FD]',
    emerald: 'bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]',
    slate: 'bg-slate-100 text-[#334155] border-slate-200',
    obsidian: 'bg-[#0B1120] text-slate-100 border-slate-700',
    rose: 'bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]',
    indigo: 'bg-[#F0F9FF] text-[#0369A1] border-[#BAE6FD]',
    cyan: 'bg-[#F0F9FF] text-[#0369A1] border-[#BAE6FD]',
    amber: 'bg-slate-100 text-[#334155] border-slate-300',
  };

  const dotColors: Record<TagPillVariant, string> = {
    cobalt: 'bg-[#0369A1]',
    emerald: 'bg-[#059669]',
    slate: 'bg-slate-500',
    obsidian: 'bg-sky-400',
    rose: 'bg-[#DC2626]',
    indigo: 'bg-[#0369A1]',
    cyan: 'bg-[#0369A1]',
    amber: 'bg-[#0369A1]',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-md gap-1.5 tracking-wide',
    md: 'text-xs px-3 py-1 rounded-lg gap-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium border select-none whitespace-nowrap transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
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
      {icon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
};
