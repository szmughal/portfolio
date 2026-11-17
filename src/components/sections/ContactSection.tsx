'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations/contact';
import { personalData } from '@/data/personal';
import { Send, Mail, Linkedin, MapPin, Terminal, CheckCircle2, AlertCircle, Lock, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      scope: 'enterprise-role',
      message: '',
      website_honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setToast(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (!response.ok) {
        throw new Error(resJson.error || 'Failed to dispatch packet transmission.');
      }

      setToast({
        type: 'success',
        message: resJson.message || '>>> Packet received. Saad Zafar has been notified via priority relay. Expect response within 2-4 hours.',
      });
      reset();
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : 'An error occurred during dispatch.';
      setToast({
        type: 'error',
        message: errMsg,
      });
    }
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Honeypot field (hidden from genuine users, visible only to bots) */}
            <input
              type="text"
              {...register('website_honeypot')}
              tabIndex={-1}
              autoComplete="off"
              className="hidden pointer-events-none opacity-0 h-0 w-0 absolute"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[11px] text-slate-600 uppercase font-bold" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Alex Henderson"
                  {...register('name')}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 text-slate-900 text-sm transition-colors placeholder:text-slate-400 font-sans"
                />
                {errors.name && (
                  <span className="font-mono text-[11px] text-rose-600">{errors.name.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[11px] text-slate-600 uppercase font-bold" htmlFor="email">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="alex@enterprise.com"
                  {...register('email')}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 text-slate-900 text-sm transition-colors placeholder:text-slate-400 font-sans"
                />
                {errors.email && (
                  <span className="font-mono text-[11px] text-rose-600">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-mono text-[11px] text-slate-600 uppercase font-bold" htmlFor="scope">
                Project / Inquiry Scope
              </label>
              <select
                id="scope"
                {...register('scope')}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 text-slate-900 text-sm transition-colors font-sans"
              >
                <option value="enterprise-role">Senior IT Manager / Architecture Role</option>
                <option value="automation">Python Agentic OCR &amp; Workflow Automation</option>
                <option value="erp-odoo">Odoo ERP Implementation &amp; Tuning</option>
                <option value="infrastructure">Disaster Recovery &amp; Network Infrastructure</option>
                <option value="seo-web">Web Engineering &amp; Technical SEO / AEO</option>
              </select>
              {errors.scope && (
                <span className="font-mono text-[11px] text-rose-600">{errors.scope.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-mono text-[11px] text-slate-600 uppercase font-bold" htmlFor="message">
                Transmission Packet (Message)
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Describe your architecture requirements, timeline, and deliverables..."
                {...register('message')}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 text-slate-900 text-sm transition-colors placeholder:text-slate-400 resize-none font-sans"
              />
              {errors.message && (
                <span className="font-mono text-[11px] text-rose-600">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl font-mono text-sm text-white bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-[0_4px_16px_rgba(79,70,229,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Packet...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Message to NOC</span>
                  <Terminal className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Toast Alerts matching Figma Glass styling */}
            {toast && (
              <div
                className={`p-3.5 rounded-xl font-mono text-xs text-center font-medium flex items-center justify-center gap-2 transition-all ${
                  toast.type === 'success'
                    ? 'bg-cyan-50 border border-cyan-300 text-cyan-800'
                    : 'bg-rose-50 border border-rose-300 text-rose-800'
                }`}
              >
                {toast.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
                <span>{toast.message}</span>
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
};
