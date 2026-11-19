'use client';

import React, { useState, useEffect } from 'react';
import { personalData } from '@/data/personal';
import { Clock, ShieldCheck, Linkedin, Code, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [karachiTime, setKarachiTime] = useState<string>('PKT (UTC+5)');

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setKarachiTime(`${formatted} PKT (UTC+5)`);
      } catch {
        setKarachiTime('PKT (UTC+5)');
      }
    };

    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-headline text-sm sm:text-base uppercase text-[#0F172A] font-bold">
              Saad Zafar
            </span>
            <span className="font-mono text-xs text-[#475569] uppercase tracking-wider font-medium">
              // IT Manager &amp; Systems Architect
            </span>
          </div>
          <span className="font-mono text-xs text-[#475569]">
            &copy; {new Date().getFullYear()} Saad Zafar. Karachi, Pakistan.
          </span>
        </div>

        {/* Live Telemetry & Karachi Clock Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 bg-[#F8FAFC] border border-slate-200 px-4 py-2 rounded-xl font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" aria-hidden="true" />
            <span className="text-[#475569]">Uptime SLA:</span>
            <span className="text-[#047857] font-semibold">99.9%</span>
          </div>
          <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#0369A1]" aria-hidden="true" />
            <span className="text-[#475569]">Local Time:</span>
            <span className="text-[#0F172A] font-semibold tabular-nums">{karachiTime}</span>
          </div>
        </div>

        {/* Accessible 44x44px Social Links */}
        <div className="flex items-center gap-2">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Saad Zafar on LinkedIn (opens in a new tab)"
            className="w-11 h-11 rounded-lg text-[#475569] hover:text-[#0369A1] hover:bg-slate-100 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Saad Zafar on GitHub (opens in a new tab)"
            className="w-11 h-11 rounded-lg text-[#475569] hover:text-[#0369A1] hover:bg-slate-100 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
          >
            <Code className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Send email to Saad Zafar"
            className="w-11 h-11 rounded-lg text-[#475569] hover:text-[#0369A1] hover:bg-slate-100 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </footer>
  );
};
