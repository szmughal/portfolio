'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { caseStudyData } from '@/data/caseStudy';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Sparkles,
  FileText,
  BrainCircuit,
  CheckCircle2,
  Terminal,
  MonitorCheck,
  Maximize2,
  X,
} from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('preview');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const iconMap: Record<string, React.ReactNode> = {
    receipt_long: <FileText className="w-4 h-4 text-[#0F172A]" aria-hidden="true" />,
    neurology: <BrainCircuit className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />,
    verified: <CheckCircle2 className="w-4 h-4 text-[#059669]" aria-hidden="true" />,
  };

  return (
    <section id="case-study" aria-labelledby="case-study-heading">
      <GlassCard variant="high" className="p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="flex flex-col gap-8">
          
          {/* Header Row & Emerald Efficiency Metric */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#059669]" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase text-[#047857] tracking-widest font-bold">
                  {caseStudyData.badge}
                </span>
              </div>
              <h2
                id="case-study-heading"
                className="font-headline text-2xl sm:text-3xl lg:text-[36px] text-[#0F172A] font-bold leading-tight"
              >
                {caseStudyData.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569] mt-2.5 leading-relaxed">
                {caseStudyData.subtitle}
              </p>
            </div>

            {/* Signal Emerald Impact Callout */}
            <div className="flex items-center gap-4 bg-[#ECFDF5] border border-[#A7F3D0] px-5 py-4 rounded-2xl shrink-0 self-start lg:self-auto">
              <div className="text-[#059669] font-headline text-3xl sm:text-4xl font-bold font-mono tabular-nums">
                {caseStudyData.efficiencyHighlight.percentage}
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#047857] uppercase font-bold tracking-wider">
                  {caseStudyData.efficiencyHighlight.label}
                </span>
                <span className="font-mono text-xs text-[#0F172A] font-medium">
                  {caseStudyData.efficiencyHighlight.sublabel}
                </span>
              </div>
            </div>
          </div>

          {/* 3-Phase Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudyData.phases.map((phase) => (
              <div
                key={phase.phase}
                className={`p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border flex flex-col justify-between relative ${
                  phase.isEngineCore
                    ? 'border-[#0369A1] bg-white shadow-resting'
                    : 'border-slate-200'
                }`}
              >
                {phase.isEngineCore && (
                  <div className="absolute -top-2.5 left-5 px-2.5 py-0.5 rounded-md bg-[#0369A1] text-white font-mono text-[10px] tracking-wider uppercase font-bold">
                    ENGINE CORE
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80 mb-3 mt-1">
                    <span
                      className={`font-mono text-xs font-bold ${
                        phase.isEngineCore ? 'text-[#0369A1]' : 'text-[#475569]'
                      }`}
                    >
                      {phase.phase}
                    </span>
                    {iconMap[phase.icon]}
                  </div>

                  <h3 className="font-headline text-base sm:text-lg text-[#0F172A] font-semibold">
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div
                  className={`mt-4 px-3 py-2 rounded-lg font-mono text-[11px] font-medium border ${
                    phase.isEngineCore
                      ? 'bg-[#F0F9FF] border-[#BAE6FD] text-[#0369A1]'
                      : phase.phase.includes('EXPORT')
                      ? 'bg-[#ECFDF5] border-[#A7F3D0] text-[#047857]'
                      : 'bg-white border-slate-200 text-[#475569]'
                  }`}
                >
                  {phase.metrics}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Obsidian Console (Code + QuickBooks Export Preview Tabs) */}
          <div className="rounded-2xl bg-[#0B1120] border border-slate-800 shadow-overlay overflow-hidden text-slate-100">
            
            {/* Console Tab Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-950/90 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                <div
                  role="tablist"
                  aria-label="OCR pipeline console views"
                  className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800"
                >
                  <button
                    type="button"
                    role="tab"
                    id="tab-preview"
                    aria-selected={activeTab === 'preview'}
                    aria-controls="panel-preview"
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1.5 rounded-md font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      activeTab === 'preview'
                        ? 'bg-[#0369A1] text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <MonitorCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Statement Ops — Live UI</span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    id="tab-code"
                    aria-selected={activeTab === 'code'}
                    aria-controls="panel-code"
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1.5 rounded-md font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      activeTab === 'code'
                        ? 'bg-[#0369A1] text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{caseStudyData.terminal.filename}</span>
                  </button>
                </div>
              </div>

              <span className="font-mono text-[11px] text-emerald-400 font-semibold">
                {caseStudyData.terminal.status}
              </span>
            </div>

            {/* Tab Panel 1: Statement Ops Production UI Showcase */}
            {activeTab === 'preview' && (
              <div
                id="panel-preview"
                role="tabpanel"
                aria-labelledby="tab-preview"
                className="p-5 sm:p-6 space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs text-sky-400 font-semibold">
                      {caseStudyData.showcase.appName}
                    </p>
                    <p className="font-mono text-xs text-slate-400 mt-0.5">
                      {caseStudyData.showcase.documentLabel}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      className="min-h-[40px] px-3.5 py-2 rounded-lg bg-[#0369A1] hover:bg-sky-600 text-white font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Inspect Full Screen</span>
                    </button>
                  </div>
                </div>

                {/* Real Production Screenshot */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="Open Statement Ops interface screenshot in full-screen view"
                  className="group relative block w-full bg-white rounded-xl overflow-hidden border border-slate-700/80 shadow-xl cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <Image
                    src={caseStudyData.showcase.imageUrl}
                    alt={caseStudyData.showcase.imageAlt}
                    width={1024}
                    height={726}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="w-full h-auto block"
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-950/85 border border-slate-700 text-slate-100 font-mono text-[11px] font-semibold inline-flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-sky-400" aria-hidden="true" />
                    <span>Click to zoom</span>
                  </span>
                </button>

                {/* Authentic Production Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {caseStudyData.showcase.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/75 border border-slate-800 text-xs font-mono text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Panel 2: Python Statement Ops Source View */}
            {activeTab === 'code' && (
              <div
                id="panel-code"
                role="tabpanel"
                aria-labelledby="tab-code"
              >
                <pre className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto">
                  <code>
                    <span className="text-amber-400">import</span> cv2, pytesseract, pandas <span className="text-amber-400">as</span> pd{'\n'}
                    <span className="text-slate-400"># Statement Ops: extract multi-page bank statement tables &amp; flag variance</span>{'\n'}
                    <span className="text-sky-400">def</span> <span className="text-emerald-400">extract_bank_statement</span>(pdf_pages, opening_balance, stated_closing):{'\n'}
                    {'    '}txns = parse_ocr_transactions(pdf_pages){'\n'}
                    {'    '}computed = opening_balance + txns[<span className="text-emerald-400">&quot;credit&quot;</span>].sum() - txns[<span className="text-emerald-400">&quot;debit&quot;</span>].sum(){'\n'}
                    {'    '}variance = round(computed - stated_closing, 2){'\n\n'}
                    {'    '}<span className="text-slate-400"># Flag running-balance mismatches &amp; inverted credit/debit rows for review</span>{'\n'}
                    {'    '}validated, needs_review = verify_running_balance(txns, variance){'\n'}
                    {'    '}export_accounting_workbook(validated, xlsx=<span className="text-emerald-400">&quot;statement_ops_ready.xlsx&quot;</span>){'\n'}
                    <span className="text-sky-400">&gt;&gt;&gt; [OK] 31 validated • 9 flagged for review • Balance audit complete</span>
                  </code>
                </pre>
              </div>
            )}

          </div>

        </div>
      </GlassCard>

      {/* Accessible Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Statement Ops full-size production interface"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-slate-950 border-b border-slate-800">
              <div className="font-mono text-xs sm:text-sm text-slate-200 font-semibold truncate">
                {caseStudyData.showcase.appName} — {caseStudyData.showcase.documentLabel}
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close full-screen preview"
                className="min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shrink-0"
              >
                <X className="w-4 h-4" aria-hidden="true" />
                <span>Close</span>
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-white max-h-[82vh] overflow-auto">
              <Image
                src={caseStudyData.showcase.imageUrl}
                alt={caseStudyData.showcase.imageAlt}
                width={1024}
                height={726}
                sizes="100vw"
                className="w-full h-auto rounded-lg block"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
