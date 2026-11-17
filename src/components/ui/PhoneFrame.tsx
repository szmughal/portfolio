import React from 'react';
import { cn } from '@/lib/utils';

export interface PhoneFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  imageAlt?: string;
  statusTime?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  className,
  imageSrc,
  imageAlt = 'Mobile app preview',
  statusTime = '09:41',
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[44px] p-3 bg-slate-900 border-4 border-slate-700/80 shadow-2xl overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Dynamic Island / Speaker Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-between px-3">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
        <div className="w-2 h-2 rounded-full bg-indigo-950 border border-indigo-700/60" />
      </div>

      {/* Screen Container */}
      <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-white flex flex-col">
        {/* Status Bar */}
        <div className="h-9 px-6 pt-1 flex items-center justify-between text-[11px] font-mono text-slate-900 font-bold z-10">
          <span>{statusTime}</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px]">5G</span>
          </div>
        </div>

        {/* Content Viewport */}
        <div className="flex-1 overflow-y-auto">
          {imageSrc ? (
            <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
          ) : (
            children
          )}
        </div>

        {/* Home Bar */}
        <div className="h-4 flex items-center justify-center">
          <div className="w-28 h-1 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};
