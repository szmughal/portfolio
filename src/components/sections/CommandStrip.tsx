'use client';

import React, { useState } from 'react';
import { Terminal, Monitor, Tablet, Smartphone, SlidersHorizontal, X } from 'lucide-react';

export interface CommandStripProps {
  currentViewport: 'desktop' | 'tablet' | 'mobile';
  onViewportChange: (vp: 'desktop' | 'tablet' | 'mobile') => void;
}

export const CommandStrip: React.FC<CommandStripProps> = ({
  currentViewport,
  onViewportChange,
}) => {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <>
      <div className="w-full bg-white/90 backdrop-blur-xl border-b border-slate-200/80 sticky top-20 z-40 px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        
        {/* Left Telemetry Label */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 text-cyan-700 border border-slate-200 font-mono text-xs font-semibold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>NOC // Telemetry Sandbox</span>
          </div>
          <div className="h-3.5 w-px bg-slate-300 hidden sm:block" />
          <span className="font-mono text-xs text-slate-500 hidden md:inline">Viewport Simulator:</span>
        </div>

        {/* Viewport Switcher Controls */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => onViewportChange('desktop')}
            className={`px-2.5 py-1 rounded font-mono text-xs flex items-center gap-1 font-medium transition-all ${
              currentViewport === 'desktop'
                ? 'text-white bg-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop (1440px)</span>
          </button>

          <button
            onClick={() => onViewportChange('tablet')}
            className={`px-2.5 py-1 rounded font-mono text-xs flex items-center gap-1 font-medium transition-all ${
              currentViewport === 'tablet'
                ? 'text-white bg-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet (834px)</span>
          </button>

          <button
            onClick={() => onViewportChange('mobile')}
            className={`px-2.5 py-1 rounded font-mono text-xs flex items-center gap-1 font-medium transition-all ${
              currentViewport === 'mobile'
                ? 'text-white bg-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (390px)</span>
          </button>

          <div className="h-4 w-px bg-slate-300 mx-1" />

          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="px-2 py-1 rounded font-mono text-xs text-cyan-700 hover:bg-cyan-50 flex items-center gap-1 font-semibold"
            title="Toggle 3D & Motion Easing Specs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Specs HUD</span>
          </button>
        </div>
      </div>

      {/* DEV MOTION / 3D SPEC HUD OVERLAY */}
      {showSpecs && (
        <div className="fixed top-32 right-6 z-50 max-w-sm w-full bg-white/95 backdrop-blur-2xl border border-cyan-300/80 rounded-xl p-4 shadow-xl transition-all">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping" />
              <span className="font-mono text-xs text-cyan-800 uppercase font-bold tracking-wider">
                3D Space &amp; Motion Spec
              </span>
            </div>
            <button
              onClick={() => setShowSpecs(false)}
              className="text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 font-mono text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Easing Curve:</span>
              <span className="text-indigo-600 font-semibold">cubic-bezier(0.22, 1, 0.36, 1)</span>
            </div>
            <div className="flex justify-between">
              <span>Glass Surface:</span>
              <span className="text-slate-800">rgba(255, 255, 255, 0.88)</span>
            </div>
            <div className="flex justify-between">
              <span>Perspective Tilt:</span>
              <span className="text-cyan-700">rotateX(3deg) rotateY(-2deg)</span>
            </div>
            <div className="flex justify-between">
              <span>Blur Density:</span>
              <span className="text-slate-800">backdrop-blur-2xl (24px)</span>
            </div>
            <div className="flex justify-between">
              <span>Target Engine:</span>
              <span className="text-indigo-600 font-semibold">Three.js R3F Core v173</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
