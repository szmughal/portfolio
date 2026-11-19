'use client';

import React from 'react';
import { Header } from '@/components/sections/Header';
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
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { ScrollAnimations } from '@/components/motion/ScrollAnimations';

export default function HomePage() {
  return (
    <SmoothScroll>
      <ScrollAnimations />
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="w-full pt-16 sm:pt-20 flex-1">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col gap-20 sm:gap-28">
            <HeroSection />
            <MetricsSection />
            <AboutSection />
            <SkillsSection />
            <CaseStudySection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
