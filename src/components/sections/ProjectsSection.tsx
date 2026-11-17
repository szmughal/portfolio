'use client';

import React, { useState } from 'react';
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

  const categories: Array<{ id: ProjectCategory; label: string; count: number }> = [
    { id: 'all', label: 'All (6)', count: 6 },
    { id: 'website', label: 'Website', count: 6 },
    { id: 'on-page', label: 'On-Page SEO', count: 2 },
    { id: 'off-page', label: 'Off-Page SEO', count: 3 },
  ];

  return (
    <section className="flex flex-col gap-8 sm:gap-10" id="work">
      {/* Section Header & Interactive Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-700" />
            <span className="font-mono text-[11px] uppercase text-cyan-700 tracking-widest font-bold">
              DEPLOYMENT PORTFOLIO
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mt-1">
            Production Web Architecture
          </h2>
        </div>

        {/* Filter Buttons Bar */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 rounded-lg font-mono text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 6 Hyper-Realistic Browser Chrome Project Cards with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <TiltCard key={project.id} maxTilt={5} className="project-card">
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
        ))}
      </div>
    </section>
  );
};

