'use client';

import React, { useState } from 'react';
import { personalData } from '@/data/personal';
import { Send, Mail, Linkedin, MapPin, Terminal, CheckCircle2, Lock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'enterprise-role',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', scope: 'enterprise-role', message: '' });
    }, 1200);
  };

  return (
    <section
      className="p-6 sm:p-10 lg:p-12 rounded-3xl control-glass-high relative overflow-hidden shadow-lg"
      id="contact"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        
        {/* Left Column: Direct Dispatch Channels */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-700" />
              <span className="font-mono text-[11px] uppercase text-cyan-700 tracking-widest font-bold">
                TRANSMIT PACKET // CONTACT
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mt-1">
              Let&apos;s build something reliable.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Whether you need a Senior IT Manager to orchestrate multi-branch networks, an enterprise Odoo architect, or custom Python automation pipelines, my console is open.
            </p>
          </div>

          {/* Contact Channels List */}
          <div className="space-y-3 pt-2">
            
            {/* Email Channel */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="font-mono text-xs sm:text-sm text-slate-800 hover:text-cyan-700 font-medium transition-colors"
                >
                  {personalData.email}
                </a>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                  LINKEDIN DISPATCH
                </span>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm text-slate-800 hover:text-indigo-600 font-medium transition-colors"
                >
                  linkedin.com/in/szmughal
                </a>
              </div>
            </div>

            {/* Physical NOC Channel */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                  PHYSICAL NOC
                </span>
                <span className="font-mono text-xs sm:text-sm text-slate-800 font-medium">
                  {personalData.coordinates}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Glass Interactive Session Form */}
        <div className="w-full lg:w-7/12 rounded-2xl bg-white/95 border border-slate-200 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
            <span className="font-mono text-xs sm:text-sm text-cyan-700 font-bold">
              &gt;_ INITIATE_SESSION()
            </span>
            <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px] font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>SSL 256-BIT ENCRYPTED</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-slate-600 uppercase font-bold" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none text-slate-900 text-sm transition-colors placeholder:text-slate-400 font-sans"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-slate-600 uppercase font-bold" htmlFor="email">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none text-slate-900 text-sm transition-colors placeholder:text-slate-400 font-sans"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-slate-600 uppercase font-bold" htmlFor="scope">
                Project / Inquiry Scope
              </label>
              <select
                id="scope"
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none text-slate-900 text-sm transition-colors font-sans"
              >
                <option value="enterprise-role">Senior IT Manager / Architecture Role</option>
                <option value="automation">Python Agentic OCR &amp; Workflow Automation</option>
                <option value="erp-odoo">Odoo ERP Implementation &amp; Tuning</option>
                <option value="infrastructure">Disaster Recovery &amp; Network Infrastructure</option>
                <option value="seo-web">Web Engineering &amp; Technical SEO / AEO</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-slate-600 uppercase font-bold" htmlFor="message">
                Transmission Packet (Message)
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Describe your architecture requirements, timeline, and deliverables..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none text-slate-900 text-sm transition-colors placeholder:text-slate-400 resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl font-mono text-sm text-white bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-[0_4px_16px_rgba(79,70,229,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Transmitting Packet...</span>
              ) : (
                <>
                  <span>Dispatch Message to NOC</span>
                  <Terminal className="w-4 h-4" />
                </>
              )}
            </button>

            {isSubmitted && (
              <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-300 text-cyan-800 font-mono text-xs text-center font-medium flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>
                  &gt;&gt;&gt; Packet received. Saad Zafar has been notified via priority relay. Expect response within 2-4 hours.
                </span>
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
};
