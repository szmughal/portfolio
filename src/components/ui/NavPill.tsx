import React from 'react';
import { cn } from '@/lib/utils';

export interface NavPillProps {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavPill: React.FC<NavPillProps> = ({
  label,
  href,
  isActive = false,
  onClick,
  className,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'px-3 py-1 font-mono text-xs transition-all duration-200 rounded-lg font-medium select-none',
        isActive
          ? 'bg-indigo-600 text-white shadow-xs'
          : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600',
        className
      )}
    >
      {label}
    </a>
  );
};
