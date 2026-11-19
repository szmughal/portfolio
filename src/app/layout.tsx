import type { Metadata } from 'next';
import { spaceGrotesk, inter, jetbrainsMono } from './fonts';
import './globals.css';

const siteUrl = 'https://szmughal.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Saad Zafar | IT Manager, Enterprise Systems & Automation Architect',
    template: '%s | Saad Zafar',
  },
  description:
    'Hands-on IT Manager with 8+ years directing enterprise IT infrastructure, Cisco networking, Odoo ERP, in-house OCR pipelines for QuickBooks, and production SEO web systems.',
  keywords: [
    'Saad Zafar',
    'IT Manager',
    'Enterprise Systems Architect',
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
    title: 'Saad Zafar | IT Manager, Enterprise Systems & Automation Architect',
    description:
      '8+ years directing enterprise IT infrastructure, Cisco network topology, Odoo ERP, and engineering in-house OCR pipelines for QuickBooks cutting data-entry time by 85%.',
    url: siteUrl,
    siteName: 'Saad Zafar Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Saad Zafar - IT Manager & Enterprise Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saad Zafar | IT Manager & Enterprise Systems Architect',
    description:
      'Enterprise IT leadership, in-house OCR automation pipelines for QuickBooks, and production web deployments.',
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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Saad Zafar',
  alternateName: 'Saad Zafar Mughal',
  jobTitle: 'IT Manager | Infrastructure, Enterprise Systems & Automation',
  url: siteUrl,
  image: `${siteUrl}/saad-portrait.jpg`,
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
    'Odoo ERP Administration & PostgreSQL',
    'In-House OCR Document Extraction for QuickBooks',
    'On-Page & Off-Page SEO',
    'Answer Engine Optimization (AEO/GEO)',
    'Symantec Endpoint Protection & Hybrid Disaster Recovery',
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
      <body className="swiss-grid-bg font-sans text-[#0F172A] antialiased selection:bg-sky-100 selection:text-sky-950 min-h-screen">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#0369A1] focus:text-white focus:rounded-lg focus:shadow-lg focus:font-mono focus:text-xs focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
