'use client';

import React from 'react';
import { caseStudyData } from '@/data/caseStudy';
import { Sparkles, FileText, BrainCircuit, CheckCircle2 } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    receipt_long: <FileText className="w-4 h-4 text-rose-500" />,
    neurology: <BrainCircuit className="w-4 h-4 text-cyan-600" />,
    verified: <CheckCircle2 className="w-4 h-4 text-indigo-600" />,
  };

  return (
    <section
      className="p-6 sm:p-10 lg:p-12 rounded-3xl control-glass-high border border-amber-200 relative overflow-hidden shadow-lg"
      id="case-study"
    >
      {/* Ambient Top Light */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col gap-8 relative z-10">
        
        {/* Header Row & Highlight Stat */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="font-mono text-[11px] uppercase text-amber-700 tracking-widest font-bold">
                {caseStudyData.badge}
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mt-1">
              {caseStudyData.title}
            </h2>
          </div>

          {/* Highlight Stat Badge */}
          <div className="flex items-center gap-4 bg-amber-50/90 border border-amber-300 px-5 py-3 rounded-2xl shadow-xs self-start lg:self-auto">
            <div className="text-amber-700 font-headline text-3xl sm:text-4xl font-bold font-mono">
              {caseStudyData.efficiencyHighlight.percentage}
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-amber-800 uppercase font-bold tracking-wider">
                {caseStudyData.efficiencyHighlight.label}
              </span>
              <span className="font-mono text-xs text-slate-800 font-medium">
                {caseStudyData.efficiencyHighlight.sublabel}
              </span>
            </div>
          </div>
        </div>

        {/* Before -> Engine -> After 3-Phase Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {caseStudyData.phases.map((phase) => (
            <div
              key={phase.phase}
              className={`p-6 rounded-2xl bg-white border flex flex-col justify-between shadow-xs ${
                phase.isEngineCore
                  ? 'border-2 border-cyan-400 relative shadow-[0_4px_20px_rgba(8,145,178,0.12)]'
                  : 'border-slate-200'
              }`}
            >
              {phase.isEngineCore && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-600 text-white font-mono text-[10px] tracking-wider uppercase font-bold shadow-xs">
                  ENGINE CORE
                </div>
              )}

              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3 mt-0.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      phase.isEngineCore
                        ? 'text-cyan-700'
                        : phase.phase.includes('INPUT')
                        ? 'text-rose-600'
                        : 'text-indigo-700'
                    }`}
                  >
                    {phase.phase}
                  </span>
                  {iconMap[phase.icon]}
                </div>

                <h4 className="font-headline text-base sm:text-lg text-slate-900 font-semibold">
                  {phase.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div
                className={`mt-4 p-2.5 rounded font-mono text-[11px] font-medium border ${
                  phase.isEngineCore
                    ? 'bg-cyan-50 border-cyan-200 text-cyan-800 font-semibold'
                    : phase.phase.includes('INPUT')
                    ? 'bg-rose-50 border-rose-100 text-rose-700'
                    : 'bg-indigo-50 border-indigo-100 text-indigo-700'
                }`}
              >
                {phase.metrics}
              </div>
            </div>
          ))}
        </div>

        {/* Live Code / Telemetry Terminal */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 shadow-md overflow-hidden text-slate-100">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="font-mono text-xs text-slate-400 ml-2">
                {caseStudyData.terminal.filename}
              </span>
            </div>
            <span className="font-mono text-xs text-cyan-400 font-semibold">
              {caseStudyData.terminal.status}
            </span>
          </div>

          <pre className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto">
            <code>
              <span className="text-amber-400">import</span> cv2, pytesseract, re, json{'\n'}
              <span className="text-slate-400"># Preprocess invoice scan: adaptive thresholding &amp; deskewing</span>{'\n'}
              <span className="text-indigo-400">def</span> <span className="text-cyan-400">extract_invoice_telemetry</span>(doc_stream):{'\n'}
              {'    '}preprocessed = cv2.bilateralFilter(cv2.cvtColor(doc_stream, cv2.COLOR_BGR2GRAY), 9, 75, 75){'\n'}
              {'    '}ocr_payload = pytesseract.image_to_data(preprocessed, output_type=pytesseract.Output.DICT){'\n'}
              {'    '}{'\n'}
              {'    '}<span className="text-slate-400"># Regex schema matching line-items and tax vouchers</span>{'\n'}
              {'    '}ledger_items = parse_tax_table(ocr_payload, regex=r<span className="text-emerald-400">&quot;(\d&#123;2&#125;/\d&#123;2&#125;/\d&#123;4&#125;)\s+([A-Z0-9\s]+)\s+(\$?\d+\.\d&#123;2&#125;)&quot;</span>){'\n'}
              {'    '}<span className="text-amber-400">return</span> erp_client.post(<span className="text-emerald-400">&quot;/v1/accounting/direct-sync&quot;</span>, json=&#123;&quot;batch_id&quot;: <span className="text-cyan-400">&quot;SZ-8849&quot;</span>, &quot;records&quot;: ledger_items&#125;){'\n'}
              <span className="text-cyan-400">&gt;&gt;&gt; [OK 200] 142 records ingested into Odoo/QuickBooks in 1.48s. Drift: 0.00%</span>
            </code>
          </pre>
        </div>

      </div>
    </section>
  );
};
