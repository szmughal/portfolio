'use client';

import React, { useState, useEffect } from 'react';
import { navItems } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { NavPill } from '@/components/ui/NavPill';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll-spy using IntersectionObserver for section navigation highlighting
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.4],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close mobile drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="h-16 sm:h-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left Brand Identity & Availability */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="group flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors hover:bg-slate-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#0369A1]" aria-hidden="true" />
            <span className="font-headline text-sm sm:text-base tracking-tight text-[#0F172A] uppercase font-bold group-hover:text-[#0369A1] transition-colors">
              SZ <span className="text-slate-400">//</span> ARCHITECT
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
            </span>
            <span className="font-mono text-[11px] uppercase text-[#047857] font-semibold tracking-wider">
              Available
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const targetId = item.href.replace('#', '');
            return (
              <NavPill
                key={item.pathId}
                label={item.label}
                href={item.href}
                isActive={activeId === targetId}
              />
            );
          })}
        </nav>

        {/* Right Actions + Accessible Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex font-mono text-xs font-semibold min-h-[40px]"
          >
            Get in Touch
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 bg-white text-[#0F172A] hover:bg-slate-50 hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-overlay"
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-1">
            {navItems.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeId === targetId;
              return (
                <a
                  key={item.pathId}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`min-h-[44px] px-4 py-2.5 rounded-lg font-mono text-sm font-medium flex items-center justify-between transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] ${
                    isActive
                      ? 'bg-[#0F172A] text-white'
                      : 'text-[#334155] hover:bg-slate-100 hover:text-[#0F172A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
                  )}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100 sm:hidden">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full font-mono text-xs font-semibold"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
