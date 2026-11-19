'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        allowMotion: '(prefers-reduced-motion: no-preference)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions || {};

        if (reduceMotion) {
          gsap.set('.bento-card, section', { opacity: 1, y: 0, clearProps: 'transform' });
          gsap.set('#timeline-line', { scaleY: 1 });
          return;
        }

        // 1. Subtle Section Reveals (small y offset to avoid visual jumpiness)
        const sections = ['#about', '#case-study', '#work', '#experience', '#credentials', '#contact'];
        sections.forEach((sec) => {
          const el = document.querySelector(sec);
          if (!el) return;
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
            opacity: 0,
            y: 16,
            duration: 0.45,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          });
        });

        // 2. Bento Grid Wave Stagger (metrics, skills, credentials)
        const bentoGroups = ['#metrics', '#skills', '#credentials'];
        bentoGroups.forEach((groupSelector) => {
          const group = document.querySelector(groupSelector);
          if (!group) return;
          const items = group.querySelectorAll('.bento-card');
          if (items.length === 0) return;

          gsap.from(items, {
            scrollTrigger: {
              trigger: group,
              start: 'top 86%',
              once: true,
            },
            opacity: 0,
            y: 14,
            duration: 0.4,
            stagger: { each: 0.06, from: 'start', grid: 'auto' },
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          });
        });

        // 3. Animated Metrics Count-Up
        const metricCards = document.querySelectorAll<HTMLElement>('.counter-metric');
        if (metricCards.length > 0) {
          ScrollTrigger.create({
            trigger: '#metrics',
            start: 'top 85%',
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
                  duration: 1.6,
                  ease: 'power2.out',
                  onUpdate: () => {
                    const formatted = isPercentage
                      ? counter.val.toFixed(target % 1 === 0 ? 0 : 1) + '%'
                      : Math.floor(counter.val) + (isPlus ? '+' : '');
                    el.innerText = formatted;
                  },
                });
              });
            },
          });
        }

        // 4. Timeline Line Drawing on Scroll
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
                start: 'top 72%',
                end: 'bottom 80%',
                scrub: 0.5,
              },
            }
          );
        }
      }
    );

    return () => mm.revert();
  }, []);

  return null;
};
