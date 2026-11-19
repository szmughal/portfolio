'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const whole = Math.floor(seconds);
  const mins = Math.floor(whole / 60);
  const secs = whole % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function HeroVideoShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(14);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        video.pause();
        setIsPlaying(false);
      }
    };
    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const nextTime = Number(event.target.value);
    setCurrentTime(nextTime);
    if (video && Number.isFinite(nextTime)) {
      video.currentTime = nextTime;
    }
  };

  const progressPct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div className="relative w-full max-w-[460px] rounded-2xl bg-[#0B1120] border border-slate-800 shadow-overlay overflow-hidden flex flex-col">
      {/* Obsidian Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/90 bg-slate-950/70 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 motion-safe:animate-pulse' : 'bg-sky-400'}`}
            aria-hidden="true"
          />
          <span className="text-slate-200 uppercase tracking-wider font-semibold">
            SHOWREEL // ENTERPRISE OPS
          </span>
        </div>
        <span className="text-emerald-400 font-semibold tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      {/* 1:1 Showreel Video Viewport */}
      <div
        id="hero-video-container"
        className="relative aspect-square w-full bg-[#0B1120] overflow-hidden group cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src="/hero-showreel.webm"
          poster="/hero-showreel-poster.png"
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={(e) => {
            const d = e.currentTarget.duration;
            if (Number.isFinite(d) && d > 0) setDuration(d);
          }}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          aria-label="14-second showreel covering enterprise IT infrastructure, OCR accounting pipeline, Odoo ERP, and 8 production websites"
          className="w-full h-full object-cover block"
        />

        {/* Paused Overlay Affordance (supports prefers-reduced-motion & manual pause) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/35 transition-opacity">
            <span className="w-14 h-14 rounded-full bg-slate-950/85 border border-sky-400/60 text-sky-400 flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 ml-0.5" aria-hidden="true" />
            </span>
          </div>
        )}
      </div>

      {/* Accessible Controls & Timeline Footer Bar */}
      <div className="px-4 py-2.5 border-t border-slate-800/90 bg-slate-950/85 flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause showreel video' : 'Play showreel video'}
          className="w-7 h-7 rounded-md bg-slate-900 border border-slate-700 hover:border-sky-400 text-slate-200 hover:text-sky-400 flex items-center justify-center transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5" aria-hidden="true" />
          ) : (
            <Play className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
          )}
        </button>

        {/* Interactive Click & Keyboard Seek Progress Track */}
        <div className="relative flex-1 h-4 flex items-center">
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-[width] duration-75"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={Math.min(currentTime, duration)}
            onChange={handleSeek}
            aria-label="Seek showreel timeline"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline shrink-0">
          Infra • OCR • ERP • 8 Sites
        </span>
      </div>
    </div>
  );
}
