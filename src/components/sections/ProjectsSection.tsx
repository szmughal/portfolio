'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, ProjectCategory } from '@/data/projects';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { TiltCard } from '@/components/motion/TiltCard';
import { Globe } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.categories.includes(activeCategory);
  });

  const categories: Array<{ id: ProjectCategory; label: string }> = [
    { id: 'all', label: `All (${projectsData.length})` },
    { id: 'website', label: 'Website' },
    { id: 'on-page', label: 'On-Page SEO' },
    { id: 'off-page', label: 'Off-Page SEO' },
    { id: 'social', label: 'Social Media' },
  ];

  return (
    <section className="flex flex-col gap-8 sm:gap-10" id="work" aria-labelledby="work-heading">
      {/* Section Header & Accessible Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase text-[#0369A1] tracking-widest font-bold">
              DEPLOYMENT PORTFOLIO
            </span>
          </div>
          <h2
            id="work-heading"
            className="font-headline text-2xl sm:text-3xl lg:text-[36px] text-[#0F172A] font-bold tracking-tight"
          >
            Production Web Architecture
          </h2>
        </div>

        {/* Interactive Filter Buttons */}
        <div
          className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs self-start md:self-auto"
          role="group"
          aria-label="Filter projects by discipline"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] ${
                  isSelected
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen-reader announcement for filter updates */}
      <p className="sr-only" aria-live="polite">
        Showing {filteredProjects.length} projects
      </p>

      {/* 6 Browser Frame Project Cards with 3D Spring Tilt */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredProjects.map((project) => (
          <motion.div key={project.id} layout className="h-full">
            <TiltCard maxTilt={4} className="h-full">
              <BrowserFrame
                urlDomain={project.domain}
                externalHref={project.url}
                title={project.name}
                description={project.description}
                tags={project.tags}
                imageSrc={project.imageUrl}
                imageAlt={project.imageAlt}
                accentColor={project.accentColor}
              />
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
