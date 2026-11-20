import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Lock, ExternalLink } from 'lucide-react';
import { TagPill } from './TagPill';

export interface BrowserFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  urlDomain: string;
  externalHref?: string;
  title?: string;
  description?: string;
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
  accentColor?: 'cobalt' | 'emerald' | 'slate';
}

export const BrowserFrame = React.forwardRef<HTMLDivElement, BrowserFrameProps>(
  (
    {
      className,
      urlDomain,
      externalHref,
      title,
      description,
      tags = [],
      imageSrc,
      imageAlt = 'Project screenshot',
      accentColor = 'cobalt',
      children,
      ...props
    },
    ref
  ) => {
    const borderHover = {
      cobalt: 'hover:border-[#0369A1]/50',
      emerald: 'hover:border-[#059669]/50',
      slate: 'hover:border-slate-400',
    }[accentColor];

    return (
      <article
        ref={ref}
        className={cn(
          'group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-resting transition-all duration-300 hover:shadow-raised flex flex-col justify-between h-full',
          borderHover,
          className
        )}
        {...props}
      >
        <div>
          {/* Clean Swiss Browser Chrome Header */}
          <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-rose-400 transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
            </div>

            <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-[#475569] truncate max-w-[200px]">
              {urlDomain}
            </div>

            <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
          </div>

          {/* Screenshot / Visual Viewport */}
          <div className="relative overflow-hidden aspect-[16/10] bg-white border-b border-slate-100">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1280}
                height={800}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-contain object-top group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              children
            )}
          </div>

          {/* Content Block */}
          {(title || description) && (
            <div className="p-5 flex flex-col gap-2">
              {title && (
                <h3 className="font-headline text-lg font-bold text-[#0F172A] group-hover:text-[#0369A1] transition-colors">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-[13px] sm:text-sm text-[#475569] leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer Badges & Accessible CTA */}
        <div className="p-5 pt-0 flex flex-col gap-3.5 mt-auto">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              {tags.map((tag) => (
                <TagPill
                  key={tag}
                  variant={
                    tag.toLowerCase().includes('on-page')
                      ? 'cobalt'
                      : tag.toLowerCase().includes('off-page')
                      ? 'emerald'
                      : tag.toLowerCase().includes('social')
                      ? 'obsidian'
                      : 'slate'
                  }
                  size="sm"
                >
                  {tag}
                </TagPill>
              ))}
            </div>
          )}

          {externalHref && (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title || urlDomain} live website (opens in a new tab)`}
              className="w-full min-h-[44px] py-2.5 px-4 rounded-lg bg-[#F8FAFC] hover:bg-[#0369A1] text-[#0F172A] hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-200 hover:border-[#0369A1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2"
            >
              <span>Visit live site</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    );
  }
);

BrowserFrame.displayName = 'BrowserFrame';
