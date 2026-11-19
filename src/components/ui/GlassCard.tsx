import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'high' | 'obsidian' | 'subtle';
  hoverEffect?: boolean;
  bordered?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      variant = 'default',
      hoverEffect = false,
      bordered = true,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: 'bg-white shadow-resting text-[#0F172A]',
      high: 'bg-white shadow-raised text-[#0F172A]',
      obsidian: 'bg-[#0B1120] shadow-overlay text-[#F8FAFC]',
      subtle: 'bg-white/85 backdrop-blur-md shadow-xs text-[#0F172A]',
    };

    const borderStyle = bordered
      ? variant === 'obsidian'
        ? 'border border-slate-800'
        : variant === 'high'
        ? 'border border-slate-200'
        : 'border border-slate-200/90'
      : '';

    const hoverStyle = hoverEffect
      ? variant === 'obsidian'
        ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700'
        : 'transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-raised'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl',
          variants[variant],
          borderStyle,
          hoverStyle,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
