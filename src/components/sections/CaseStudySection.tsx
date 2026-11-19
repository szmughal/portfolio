'use client';

import React, { useState } from 'react';
import { caseStudyData } from '@/data/caseStudy';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Sparkles,
  FileText,
  BrainCircuit,
  CheckCircle2,
  Play,
  Download,
  Terminal,
  Table2,
  Loader2,
} from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('preview');
  const [simState, setSimState] = useState<'idle' | 'running' | 'complete'>('complete');

  const iconMap: Record<string, React.ReactNode> = {
    receipt_long: <FileText className="w-4 h-4 text-[#0F172A]" aria-hidden="true" />,
    neurology: <BrainCircuit className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />,
    verified: <CheckCircle2 className="w-4 h-4 text-[#059669]" aria-hidden="true" />,
  };

  const runExtractionDemo = () => {
    setSimState('running');
    setTimeout(() => {
      setSimState('complete');
    }, 850);
  };

  const totalExtracted = caseStudyData.sampleExtractionRows.reduce(
    (sum, row) => sum + row.lineTotal,
    0
  );

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
                    <Table2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>QuickBooks Export Preview</span>
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

            {/* Tab Panel 1: QuickBooks Export Preview */}
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
                      INPUT: Vendor_Hardware_Invoice_Scan_300DPI.pdf (Page 1/4)
                    </p>
                    <p className="font-mono text-xs text-slate-400 mt-0.5">
                      Extracted structured line items ready for QuickBooks batch import
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={runExtractionDemo}
                      disabled={simState === 'running'}
                      className="min-h-[40px] px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      {simState === 'running' ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                          <span>Parsing PDF...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Run Sample Extraction</span>
                        </>
                      )}
                    </button>

                    <a
                      href={caseStudyData.csvDownloadPath}
                      download
                      className="min-h-[40px] px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <Download className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                      <span>Download CSV</span>
                    </a>
                  </div>
                </div>

                {/* Extracted Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="border-b border-slate-800 text-slate-400 text-[11px] uppercase">
                      <tr>
                        <th className="py-3 px-4">Item Description</th>
                        <th className="py-3 px-3 text-center">Qty</th>
                        <th className="py-3 px-3 text-right">Unit Price</th>
                        <th className="py-3 px-3 text-right">Line Total</th>
                        <th className="py-3 px-4 text-right">QuickBooks Account</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-200 tabular-nums">
                      {simState === 'running' ? (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-sky-400">
                            Deskewing scan, detecting table boundaries, and mapping QuickBooks accounts...
                          </td>
                        </tr>
                      ) : (
                        caseStudyData.sampleExtractionRows.map((row) => (
                          <tr key={row.description} className="hover:bg-slate-900/60">
                            <td className="py-3 px-4 font-medium text-white">{row.description}</td>
                            <td className="py-3 px-3 text-center">{row.quantity}</td>
                            <td className="py-3 px-3 text-right">${row.unitPrice.toFixed(2)}</td>
                            <td className="py-3 px-3 text-right text-emerald-400 font-semibold">
                              ${row.lineTotal.toFixed(2)}
                            </td>
                            <td className="py-3 px-4 text-right text-sky-400">{row.account}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pt-1">
                  <span className="text-slate-400">
                    Reconciled Batch Total:{' '}
                    <strong className="text-white tabular-nums">${totalExtracted.toFixed(2)}</strong>
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    <span>100% Reconciled • Zero Manual Re-keying</span>
                  </span>
                </div>
              </div>
            )}

            {/* Tab Panel 2: Python OCR Source View */}
            {activeTab === 'code' && (
              <div
                id="panel-code"
                role="tabpanel"
                aria-labelledby="tab-code"
              >
                <pre className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto">
                  <code>
                    <span className="text-amber-400">import</span> cv2, pytesseract, re, pandas <span className="text-amber-400">as</span> pd{'\n'}
                    <span className="text-slate-400"># Preprocess scanned PDF page: grayscale conversion &amp; noise filtering</span>{'\n'}
                    <span className="text-sky-400">def</span> <span className="text-emerald-400">extract_invoice_to_quickbooks</span>(page_image):{'\n'}
                    {'    '}gray = cv2.cvtColor(page_image, cv2.COLOR_BGR2GRAY){'\n'}
                    {'    '}cleaned = cv2.bilateralFilter(gray, 9, 75, 75){'\n'}
                    {'    '}ocr_data = pytesseract.image_to_data(cleaned, output_type=pytesseract.Output.DICT){'\n\n'}
                    {'    '}<span className="text-slate-400"># Parse structured line items &amp; assign QuickBooks Chart of Accounts</span>{'\n'}
                    {'    '}rows = parse_line_items(ocr_data, pattern=r<span className="text-emerald-400">&quot;([A-Z0-9\s\-\+]+)\s+(\d+)\s+(\d+\.\d&#123;2&#125;)&quot;</span>){'\n'}
                    {'    '}df = map_quickbooks_accounts(pd.DataFrame(rows)){'\n'}
                    {'    '}df.to_excel(<span className="text-emerald-400">&quot;quickbooks_import_batch_ready.xlsx&quot;</span>, index=<span className="text-amber-400">False</span>){'\n'}
                    <span className="text-sky-400">&gt;&gt;&gt; [OK] Batch exported in 1.48s • Monthly accounting entry time cut by 85%</span>
                  </code>
                </pre>
              </div>
            )}

          </div>

        </div>
      </GlassCard>
    </section>
  );
};
