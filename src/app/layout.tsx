import type { Metadata } from 'next';
import { spaceGrotesk, inter, jetbrainsMono } from './fonts';
import './globals.css';

const siteUrl = 'https://szmughal.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Saad Zafar // Senior IT Manager & Enterprise Solutions Architect',
    template: '%s | Saad Zafar',
  },
  description:
    'Senior IT Manager with 8+ years directing enterprise infrastructure, Cisco networks, Odoo ERP, in-house OCR document extraction pipelines for QuickBooks, and top-ranking SEO web portals.',
  keywords: [
    'Saad Zafar',
    'Senior IT Manager',
    'Enterprise Solutions Architect',
    'Cisco CCNA',
    'Odoo ERP',
    'OCR Automation QuickBooks',
    'Karachi Pakistan',
    'Infrastructure Leadership',
    'AEO GEO SEO',
  ],
  authors: [{ name: 'Saad Zafar', url: 'https://linkedin.com/in/szmughal' }],
  creator: 'Saad Zafar',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Saad Zafar // Senior IT Manager & Enterprise Solutions Architect',
    description:
      '8+ years directing enterprise infrastructure, Cisco network topology, Odoo ERP, and building in-house OCR pipelines for QuickBooks cutting entry time by 85%.',
    url: siteUrl,
    siteName: 'Saad Zafar Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Saad Zafar - Enterprise Architecture & Systems Leadership',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saad Zafar // Senior IT Manager & Enterprise Solutions Architect',
    description:
      'Enterprise IT leadership, in-house OCR automation pipelines for QuickBooks, and top-ranking web deployments.',
    creator: '@szmughal',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Person & Professional Service Schema
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Saad Zafar',
  alternateName: 'Saad Zafar Mughal',
  jobTitle: 'Senior IT Manager & Enterprise Solutions Architect',
  url: siteUrl,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4TVKdmkzhx_VTQvc4JZx-QojFzz6kCTqulNQ9ZC4DA6p9GbbfaBGJ7hAqWTAFi5tLO5qroefyxo4lRTfp6lhzhuxmSq-qMQFvaWc-SehGaGSGt4u3UuMiPKvDPAgPKHh0YDOzRFkm3EJ_OzbOfXEs2AyOklbSI9sqIwK72S5CNw5twmVbjOqkPA0alMlN-KjDcsYUGwUTN-zu364xs0UjiU6KiE_jtrV5wdTpUg_G',
  email: 'saad.zafar060@gmail.com',
  telephone: '+92-333-3415230',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Karachi',
    addressCountry: 'PK',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'University of Karachi',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Master of Computer Science (MCS)',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Cisco Certified Network Associate (CCNA) Curriculum',
    },
  ],
  sameAs: [
    'https://linkedin.com/in/szmughal',
    'https://github.com/szmughal',
  ],
  knowsAbout: [
    'Enterprise IT Infrastructure & Networks',
    'Cisco Routing & Switching',
    'Odoo ERP Architecture & PostgreSQL',
    'Python In-House OCR Document Extraction for QuickBooks',
    'On-Page & Off-Page SEO',
    'Answer Engine Optimization (AEO/GEO)',
    'Zero-Trust Cybersecurity & Disaster Recovery',
    'Standard Chartered & Soneri Banking SLA Support',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="blueprint-bg font-sans text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 min-h-screen">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-xl focus:shadow-lg focus:font-mono focus:text-xs"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
