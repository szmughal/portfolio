import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cyan';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      target,
      rel,
      icon,
      iconRight,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

    const variants = {
      primary:
        'bg-indigo-600 hover:bg-indigo-700 text-white font-code shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:shadow-[0_8px_24px_rgba(79,70,229,0.45)] border border-transparent',
      secondary:
        'bg-white/90 hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-indigo-300 backdrop-blur-xl shadow-xs',
      cyan:
        'bg-white/90 text-cyan-800 border border-cyan-300/80 hover:bg-cyan-50 hover:border-cyan-500 backdrop-blur-xl shadow-xs font-semibold',
      outline:
        'bg-transparent border border-slate-300 hover:border-indigo-600 text-slate-700 hover:text-indigo-600',
      ghost: 'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
      md: 'px-4 py-2 text-sm rounded-xl gap-2',
      lg: 'px-6 py-2.5 text-base rounded-xl gap-2.5 shadow-md',
      icon: 'w-9 h-9 p-0 rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-slate-100',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {icon && <span className="inline-flex shrink-0">{icon}</span>}
          {children}
          {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        {children}
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
