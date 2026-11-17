'use client';

import React from 'react';
import { personalData } from '@/data/personal';
import { Zap, Clock, Share2, Code, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white/90 border-t border-slate-200/90 backdrop-blur-xl mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-headline text-sm sm:text-base uppercase text-slate-900 font-bold">
              Saad Zafar
            </span>
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest font-semibold">
              // Enterprise Telemetry
            </span>
          </div>
          <span className="font-mono text-xs text-slate-600">
            &copy; 2026 Saad Zafar. Enterprise Architecture &amp; Systems Leadership.
          </span>
        </div>

        {/* Center: Live Telemetry Metrics Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 bg-slate-100/90 border border-slate-200 px-4 py-2 rounded-xl shadow-xs font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-600" />
            <span className="text-slate-600 font-medium">NOC Latency:</span>
            <span className="text-cyan-700 font-bold">12ms</span>
          </div>
          <div className="h-3 w-px bg-slate-300" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-slate-600 font-medium">Karachi, PK:</span>
            <span className="text-indigo-700 font-bold">UTC+5 // Active</span>
          </div>
        </div>

        {/* Right: Social & Direct Dispatch Links */}
        <div className="flex items-center gap-2">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-all flex items-center justify-center"
            title="LinkedIn Dispatch"
          >
            <Share2 className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/szmughal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-all flex items-center justify-center"
            title="GitHub Repositories"
          >
            <Code className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="w-9 h-9 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-all flex items-center justify-center"
            title="Direct Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
