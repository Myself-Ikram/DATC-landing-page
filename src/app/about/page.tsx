import type { Metadata } from 'next';
import { AboutClient } from '@/components/pages/AboutClient';

export const metadata: Metadata = {
  title: 'About Our 25-Year Blending Legacy',
  description:
    "Discover the story of Diamond Assam Tea Company (DATC). Founded in 2000 in Mahbubnagar, crafting authentic garden-fresh Assam CTC teas directly from Upper Assam's premier tea gardens.",
  keywords: [
    'About Diamond Assam Tea Company',
    'Assam Tea Heritage',
    'DATC Story',
    'Tea Blenders Telangana',
    'Mahbubnagar Tea History',
    'Assam CTC Tea Gardens',
    'Star GoodLuck Tea Makers',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Our 25-Year Blending Legacy | Diamond Assam Tea Company',
    description:
      'A quarter century of pure Assam tea legacy. Discover our founding story, master blenders, and flagship tea brands.',
    url: 'https://diamondassamtea.com/about',
    type: 'website',
    images: [
      {
        url: '/all-products-with-bg.png',
        width: 1200,
        height: 630,
        alt: 'Diamond Assam Tea Company Heritage and Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Diamond Assam Tea Company | 25+ Years Legacy',
    description:
      'A quarter century of pure Assam tea legacy. Discover our founding story and master blends.',
    images: ['/all-products-with-bg.png'],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
