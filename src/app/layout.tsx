import type { Metadata } from 'next';
import { spaceGrotesk, inter, jetbrainsMono } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saad Zafar // Senior IT Manager & Enterprise Solutions Architect',
  description:
    'Hands-on Senior IT Manager with 8+ years directing enterprise infrastructure, Cisco networks, Odoo ERP, in-house OCR document extraction pipelines for QuickBooks, and top-ranking SEO web portals.',
  keywords: [
    'Saad Zafar',
    'Senior IT Manager',
    'Enterprise Solutions Architect',
    'Cisco CCNA',
    'Odoo ERP',
    'OCR Automation QuickBooks',
    'Karachi Pakistan',
  ],
  authors: [{ name: 'Saad Zafar', url: 'https://linkedin.com/in/szmughal' }],
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
      <body className="blueprint-bg font-sans text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
