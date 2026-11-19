'use client';

import React, { useState, useRef } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations/contact';
import { personalData } from '@/data/personal';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Send,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Terminal,
  CheckCircle2,
  AlertCircle,
  Lock,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, submitCount },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      scope: 'enterprise-role',
      message: '',
      website_honeypot: '',
    },
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback: ignore if clipboard access blocked
    }
  };

  const onInvalid = (formErrors: FieldErrors<ContactFormData>) => {
    if (Object.keys(formErrors).length > 0) {
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 20);
    }
  };

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
        message:
          resJson.message ||
          '>>> Packet received. Saad Zafar has been notified via priority relay. Expect response within 2-4 hours.',
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

  const errorEntries = Object.entries(errors).filter(
    ([key]) => key !== 'website_honeypot'
  ) as Array<[keyof ContactFormData, { message?: string }]>;

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <GlassCard variant="high" className="p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Dispatch Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Send className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase text-[#0369A1] tracking-widest font-bold">
                  TRANSMIT PACKET // CONTACT
                </span>
              </div>
              <h2
                id="contact-heading"
                className="font-headline text-2xl sm:text-3xl lg:text-[36px] text-[#0F172A] font-bold leading-tight"
              >
                Let&apos;s build something reliable.
              </h2>
              <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
                Whether you need a hands-on IT Manager to stabilize enterprise networks, an Odoo ERP administrator, or custom QuickBooks OCR automation, my console is open.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              
              {/* Direct Email with Copy Button */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0369A1] shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-[#475569] uppercase font-bold tracking-wider">
                      DIRECT EMAIL
                    </span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="font-mono text-xs sm:text-sm text-[#0F172A] hover:text-[#0369A1] font-medium truncate transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                  className="min-w-[40px] min-h-[40px] px-2.5 rounded-lg border border-slate-200 bg-white hover:border-[#0369A1] text-[#475569] hover:text-[#0369A1] inline-flex items-center justify-center gap-1 font-mono text-[11px] font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#059669]" aria-hidden="true" />
                      <span className="text-[#047857]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Phone */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] shrink-0">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#475569] uppercase font-bold tracking-wider">
                    PHONE / WHATSAPP
                  </span>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="font-mono text-xs sm:text-sm text-[#0F172A] hover:text-[#0369A1] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0F172A] shrink-0">
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#475569] uppercase font-bold tracking-wider">
                    LINKEDIN
                  </span>
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs sm:text-sm text-[#0F172A] hover:text-[#0369A1] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded"
                  >
                    linkedin.com/in/szmughal
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#475569] shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#475569] uppercase font-bold tracking-wider">
                    LOCATION
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-[#0F172A] font-medium">
                    {personalData.coordinates}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Accessible Interactive Session Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
              <span className="font-mono text-xs sm:text-sm text-[#0369A1] font-bold">
                &gt;_ INITIATE_SESSION()
              </span>
              <div className="flex items-center gap-1.5 text-[#475569] font-mono text-[11px] font-semibold">
                <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>TLS ENCRYPTED</span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="space-y-4">
              {/* Focusable Error Summary for Keyboard & Screen Reader Users */}
              {submitCount > 0 && errorEntries.length > 0 && (
                <div
                  ref={errorSummaryRef}
                  role="alert"
                  tabIndex={-1}
                  aria-labelledby="contact-error-summary-title"
                  className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase mb-2">
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <h3 id="contact-error-summary-title">Please fix the following fields:</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs font-sans">
                    {errorEntries.map(([field, err]) => (
                      <li key={field}>
                        <a
                          href={`#${field}`}
                          className="underline font-medium hover:text-[#7F1D1D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] rounded"
                        >
                          {err?.message}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-[#334155] uppercase font-bold" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Alex Henderson"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...register('name')}
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-white border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] text-[#0F172A] text-sm transition-colors placeholder:text-slate-400 font-sans ${
                      errors.name ? 'border-[#DC2626]' : 'border-slate-300 focus:border-[#0369A1]'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="font-mono text-[11px] text-[#B91C1C]">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-[#334155] uppercase font-bold" htmlFor="email">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@enterprise.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email')}
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-white border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] text-[#0F172A] text-sm transition-colors placeholder:text-slate-400 font-sans ${
                      errors.email ? 'border-[#DC2626]' : 'border-slate-300 focus:border-[#0369A1]'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="font-mono text-[11px] text-[#B91C1C]">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#334155] uppercase font-bold" htmlFor="scope">
                  Project / Inquiry Scope
                </label>
                <select
                  id="scope"
                  aria-invalid={Boolean(errors.scope)}
                  aria-describedby={errors.scope ? 'scope-error' : undefined}
                  {...register('scope')}
                  className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:border-[#0369A1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] text-[#0F172A] text-sm transition-colors font-sans"
                >
                  <option value="enterprise-role">IT Manager / Enterprise Architecture Role</option>
                  <option value="automation">In-House OCR &amp; QuickBooks Automation</option>
                  <option value="erp-odoo">Odoo ERP Administration &amp; BI Dashboards</option>
                  <option value="infrastructure">Cisco Networks, Security &amp; Disaster Recovery</option>
                  <option value="seo-web">Web Engineering &amp; Technical SEO / AEO</option>
                </select>
                {errors.scope && (
                  <p id="scope-error" className="font-mono text-[11px] text-[#B91C1C]">
                    {errors.scope.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#334155] uppercase font-bold" htmlFor="message">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your infrastructure goals, automation requirements, or timeline..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  {...register('message')}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] text-[#0F172A] text-sm transition-colors placeholder:text-slate-400 resize-none font-sans ${
                    errors.message ? 'border-[#DC2626]' : 'border-slate-300 focus:border-[#0369A1]'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="font-mono text-[11px] text-[#B91C1C]">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] py-3 px-5 rounded-lg font-mono text-sm text-white bg-[#0369A1] hover:bg-[#075985] font-semibold shadow-xs active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Transmitting Packet...</span>
                  </>
                ) : (
                  <>
                    <span>Dispatch Message</span>
                    <Terminal className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>

              {/* Accessible Toast Alert */}
              <div aria-live="polite">
                {toast && (
                  <div
                    role="status"
                    className={`p-3.5 rounded-xl font-mono text-xs text-center font-medium flex items-center justify-center gap-2 ${
                      toast.type === 'success'
                        ? 'bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857]'
                        : 'bg-[#FEF2F2] border border-[#FECACA] text-[#B91C1C]'
                    }`}
                  >
                    {toast.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    )}
                    <span>{toast.message}</span>
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>
      </GlassCard>
    </section>
  );
};
