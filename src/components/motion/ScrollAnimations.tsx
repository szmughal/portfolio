'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Ensure all elements are visible without motion
      gsap.set('.reveal-fade, .reveal-stagger', { opacity: 1, y: 0 });
      gsap.set('#timeline-line', { scaleY: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Staggered Fade-Up Reveals for Sections
      const sections = ['#metrics', '#about', '#skills', '#case-study', '#work', '#experience', '#credentials', '#contact'];
      sections.forEach((sec) => {
        gsap.from(sec, {
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // 2. Animated Metrics Count-Up
      const metricCards = document.querySelectorAll<HTMLElement>('.counter-metric');
      if (metricCards.length > 0) {
        ScrollTrigger.create({
          trigger: '#metrics',
          start: 'top 80%',
          once: true,
          onEnter: () => {
            metricCards.forEach((el) => {
              const target = parseFloat(el.getAttribute('data-target') || '0');
              const text = el.innerText;
              const isPercentage = text.includes('%');
              const isPlus = text.includes('+');

              const counter = { val: 0 };
              gsap.to(counter, {
                val: target,
                duration: 2.0,
                ease: 'power2.out',
                onUpdate: () => {
                  let formatted = isPercentage
                    ? counter.val.toFixed(target % 1 === 0 ? 0 : 1) + '%'
                    : Math.floor(counter.val) + (isPlus ? '+' : '');
                  el.innerText = formatted;
                },
              });
            });
          },
        });
      }

      // 3. Timeline Line that Draws on Scroll
      const timelineLine = document.getElementById('timeline-line');
      const experienceSec = document.getElementById('experience');
      if (timelineLine && experienceSec) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: experienceSec,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 0.6,
            },
          }
        );
      }

      // 4. Subtle Parallax on Browser Project Frames
      const projectCards = document.querySelectorAll('.project-card');
      if (projectCards.length > 0) {
        projectCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 20 },
            {
              y: -15,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                end: 'bottom 10%',
                scrub: 1 + (index % 3) * 0.2,
              },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
};
