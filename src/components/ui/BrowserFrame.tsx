import React from 'react';
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
  accentColor?: 'indigo' | 'cyan' | 'amber';
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
      accentColor = 'cyan',
      children,
      ...props
    },
    ref
  ) => {
    const borderHover = {
      indigo: 'hover:border-indigo-400',
      cyan: 'hover:border-cyan-400',
      amber: 'hover:border-amber-400',
    }[accentColor];

    const btnHover = {
      indigo: 'hover:bg-indigo-600 hover:text-white hover:border-indigo-600',
      cyan: 'hover:bg-cyan-600 hover:text-white hover:border-cyan-600',
      amber: 'hover:bg-amber-600 hover:text-white hover:border-amber-600',
    }[accentColor];

    return (
      <div
        ref={ref}
        className={cn(
          'group rounded-2xl bg-white/88 backdrop-blur-[16px] border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between',
          borderHover,
          className
        )}
        {...props}
      >
        <div>
          {/* Browser Chrome Header */}
          <div className="px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            <div className="px-3 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-mono text-slate-600 truncate max-w-[200px] shadow-xs">
              {urlDomain}
            </div>

            <Lock className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Screenshot / Visual Viewport */}
          <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              children
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Content Block */}
          {(title || description) && (
            <div className="p-4 flex flex-col gap-1.5">
              {title && (
                <h3 className="font-headline text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
              )}
            </div>
          )}
        </div>

        {/* Footer Badges & CTA */}
        <div className="p-4 pt-0 flex flex-col gap-3 border-t border-slate-100 mt-2">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3">
              {tags.map((tag) => (
                <TagPill
                  key={tag}
                  variant={
                    tag.toLowerCase().includes('on-page')
                      ? 'cyan'
                      : tag.toLowerCase().includes('off-page')
                      ? 'amber'
                      : 'indigo'
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
              className={cn(
                'w-full py-2 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border border-slate-200/80',
                btnHover
              )}
            >
              <span>Visit live site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    );
  }
);

BrowserFrame.displayName = 'BrowserFrame';
