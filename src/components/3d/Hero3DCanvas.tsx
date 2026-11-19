'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { NetworkTopology } from './NetworkTopology';

const LightweightTopology: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center relative select-none" aria-hidden="true">
    <div className="relative w-56 h-56 flex items-center justify-center">
      <div className="absolute inset-2 rounded-full border border-sky-400/25" />
      <div className="absolute inset-8 rounded-full border border-dashed border-emerald-400/35" />
      <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0369A1] border border-sky-400/40 text-white flex items-center justify-center font-mono text-[11px] font-bold shadow-lg shadow-sky-500/20">
        CORE
      </div>
      <span className="absolute top-0 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-mono text-sky-300">
        Cisco
      </span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-mono text-emerald-300">
        OCR::85%
      </span>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-300">
        Odoo
      </span>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-mono text-emerald-300">
        99.9%
      </span>
    </div>
  </div>
);

export const Hero3DCanvas: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [webglReady, setWebglReady] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionHandler);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Verify WebGL availability so non-GPU contexts render the crisp schematic
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
      if (!gl) {
        setWebglReady(false);
      }
    } catch {
      setWebglReady(false);
    }

    return () => {
      motionQuery.removeEventListener('change', motionHandler);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile || !webglReady) {
    return <LightweightTopology />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.1} />
        <pointLight position={[-4, -3, -2]} color="#38BDF8" intensity={1.8} />
        <pointLight position={[3, 4, 3]} color="#10B981" intensity={1.4} />

        <NetworkTopology reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
};

export default Hero3DCanvas;
