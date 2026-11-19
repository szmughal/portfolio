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
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'px-3 py-1.5 font-mono text-xs transition-colors duration-150 rounded-md font-medium select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-1',
        isActive
          ? 'bg-[#0F172A] text-white shadow-xs'
          : 'text-[#475569] hover:bg-slate-100 hover:text-[#0F172A]',
        className
      )}
    >
      {label}
    </a>
  );
};
