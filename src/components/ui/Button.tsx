import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'secondary' | 'outline' | 'ghost';
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
      'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2';

    const variants = {
      primary:
        'bg-[#0369A1] hover:bg-[#075985] text-white shadow-xs hover:shadow-raised border border-transparent',
      dark:
        'bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-xs hover:shadow-raised border border-transparent',
      secondary:
        'bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-300 hover:border-[#0369A1] hover:text-[#0369A1] shadow-xs',
      outline:
        'bg-transparent border border-slate-300 hover:border-[#0369A1] text-[#334155] hover:text-[#0369A1]',
      ghost: 'bg-transparent hover:bg-slate-100 text-[#475569] hover:text-[#0F172A]',
    };

    const sizes = {
      sm: 'px-3.5 py-2 text-xs rounded-lg gap-1.5 min-h-[38px]',
      md: 'px-4 py-2.5 text-sm rounded-lg gap-2 min-h-[44px]',
      lg: 'px-6 py-3 text-sm sm:text-base rounded-lg gap-2.5 min-h-[48px]',
      icon: 'w-11 h-11 p-0 rounded-lg flex items-center justify-center text-[#475569] hover:text-[#0369A1] hover:bg-slate-100',
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
          {icon && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>}
          {children}
          {iconRight && <span className="inline-flex shrink-0" aria-hidden="true">{iconRight}</span>}
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
        {icon && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>}
        {children}
        {iconRight && <span className="inline-flex shrink-0" aria-hidden="true">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
