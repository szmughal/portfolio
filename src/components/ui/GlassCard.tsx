import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'high' | 'subtle';
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
      default:
        'bg-white/88 backdrop-blur-[16px] shadow-[0_10px_30px_-10px_rgba(79,70,229,0.07),0_4px_6px_-2px_rgba(15,23,42,0.04)]',
      high:
        'bg-white/96 backdrop-blur-[20px] shadow-[0_16px_36px_-8px_rgba(79,70,229,0.1),0_6px_12px_-3px_rgba(15,23,42,0.06)]',
      subtle:
        'bg-white/70 backdrop-blur-[12px] shadow-xs',
    };

    const borderStyle = bordered
      ? variant === 'high'
        ? 'border border-slate-300/80'
        : 'border border-slate-200/90'
      : '';

    const hoverStyle = hoverEffect
      ? 'transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg'
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
