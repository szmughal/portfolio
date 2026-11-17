'use client';

import React, { useState } from 'react';
import { Header } from '@/components/sections/Header';
import { CommandStrip } from '@/components/sections/CommandStrip';
import { HeroSection } from '@/components/sections/HeroSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const viewportMaxWidths = {
    desktop: 'max-w-7xl',
    tablet: 'max-w-[834px]',
    mobile: 'max-w-[390px]',
  }[viewportMode];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. FIXED GLASS TOP NAVIGATION */}
      <Header />

      <main className="w-full pt-20 flex-1">
        <div className="flex flex-col w-full">
          
          {/* 2. COMMAND STRIP / VIEWPORT EMULATOR BAR */}
          <CommandStrip
            currentViewport={viewportMode}
            onViewportChange={(vp) => setViewportMode(vp)}
          />

          {/* 3. SIMULATOR STAGE WRAPPER */}
          <div className="w-full transition-all duration-500 ease-out flex justify-center relative overflow-hidden" id="viewport-canvas-wrapper">
            <div
              id="viewport-frame"
              className={`w-full ${viewportMaxWidths} mx-auto transition-all duration-500 ease-out flex flex-col gap-16 sm:gap-24 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative`}
            >
              {/* SECTION 1: HERO */}
              <HeroSection />

              {/* SECTION 2: METRICS */}
              <MetricsSection />

              {/* SECTION 3: ABOUT */}
              <AboutSection />

              {/* SECTION 4: SKILLS (BENTO) */}
              <SkillsSection />

              {/* SECTION 5: OCR CASE STUDY */}
              <CaseStudySection />

              {/* SECTION 6: PROJECTS / WORK (WITH CATEGORY FILTER) */}
              <ProjectsSection />

              {/* SECTION 7: EXPERIENCE TIMELINE */}
              <ExperienceSection />

              {/* SECTION 8: EDUCATION & CREDENTIALS */}
              <EducationSection />

              {/* SECTION 9: CONTACT & TERMINAL */}
              <ContactSection />
            </div>
          </div>

        </div>
      </main>

      {/* 4. FOOTER */}
      <Footer />
    </div>
  );
}
