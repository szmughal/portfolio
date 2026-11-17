'use client';

import React from 'react';
import { navItems } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-center p-2 pointer-events-none">
      <div className="h-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo & Status */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="group flex items-center gap-2 control-glass px-4 py-1.5 rounded-xl transition-all hover:bg-white hover:shadow-md"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
            <span className="font-headline text-[15px] sm:text-[16px] tracking-tight text-slate-900 uppercase font-bold group-hover:text-indigo-600 transition-colors">
              SZ <span className="text-indigo-500">//</span> ARCHITECT
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-1.5 control-glass px-3 py-1.5 rounded-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] uppercase text-emerald-700 font-semibold tracking-wider">
              Available for Opportunities
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <div className="control-glass px-4 py-1.5 rounded-xl hidden lg:flex items-center">
          <nav className="flex items-center gap-1">
            {navItems.map((item, idx) => (
              <a
                key={item.pathId}
                href={item.href}
                className={`px-3 py-1 font-mono text-xs rounded-lg transition-all font-medium ${
                  idx === 0
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Action & Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            className="font-headline text-xs sm:text-sm font-medium tracking-tight"
          >
            Get in Touch
          </Button>
          <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center shadow-xs">
            <User className="w-4 h-4" />
          </div>
        </div>

      </div>
    </header>
  );
};
