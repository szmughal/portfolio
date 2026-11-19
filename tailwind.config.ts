import type { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F8FAFC',
        surface: '#FFFFFF',
        obsidian: '#0B1120',
        line: '#E2E8F0',
        ink: {
          DEFAULT: '#0F172A',
          secondary: '#334155',
          muted: '#475569',
        },
        accent: {
          DEFAULT: '#0369A1',
          hover: '#075985',
          soft: '#F0F9FF',
          border: '#BAE6FD',
        },
        signal: {
          DEFAULT: '#059669',
          soft: '#ECFDF5',
          border: '#A7F3D0',
        },
        destructive: {
          DEFAULT: '#DC2626',
          soft: '#FEF2F2',
          border: '#FECACA',
        },
        background: '#F8FAFC',
        primary: {
          DEFAULT: '#0F172A',
          hover: '#1E293B',
        },
        secondary: {
          DEFAULT: '#0369A1',
          hover: '#075985',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        headline: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        code: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      spacing: {
        gutter: '1.5rem',
        'gutter-mobile': '1rem',
        margin: '2.5rem',
        'margin-mobile': '1.25rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        resting: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.07)',
        raised: '0 12px 32px -8px rgba(3, 105, 161, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
        overlay: '0 24px 48px -12px rgba(15, 23, 42, 0.22), 0 4px 12px -2px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [formsPlugin],
};

export default config;
