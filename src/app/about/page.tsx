import type { Metadata } from 'next';
import { AboutClient } from '@/components/pages/AboutClient';

export const metadata: Metadata = {
  title: 'About Our 25-Year Legacy — Best Assam Tea Blenders in Mahbubnagar',
  description:
    "Discover Diamond Assam Tea Company (DATC), founded in 2000 in Mahbubnagar (Mahaboobnagar). Master blenders of Star GoodLuck Tea, Mahek Elachi, and Diamond Mixture — crafted from pure Upper Assam CTC tea gardens for the finest kadak chai across Telangana.",
  keywords: [
    'best tea in mahbubnagar',
    'best tea in mahaboobnagar',
    'best tea powder in mahboobnagar',
    'best tea brand in mahbubnagar',
    'diamond assam tea mahbubnagar',
    'star goodluck tea makers',
    'mahek elachi tea',
    'assam tea mahbubnagar',
    'tea blenders telangana',
    'chai patti mahbubnagar',
    'kadak chai history mahbubnagar',
    'about diamond assam tea company',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Our 25-Year Blending Legacy — Best Tea in Mahbubnagar',
    description:
      'A quarter century of pure Assam tea legacy. Discover our founding in Mahbubnagar in 2000, master blenders, and iconic brands Star GoodLuck Tea & Mahek Elachi.',
    url: 'https://stargoodlucktea.datc.space/about',
    type: 'website',
    images: [
      {
        url: '/all-products-with-bg.png',
        width: 1200,
        height: 630,
        alt: 'Diamond Assam Tea Company Heritage - Best Tea in Mahbubnagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Diamond Assam Tea Company | 25+ Years Legacy Mahbubnagar',
    description:
      'A quarter century of pure Assam tea legacy in Mahbubnagar. Master blenders of Star GoodLuck Tea and Mahek Elachi.',
    images: ['/all-products-with-bg.png'],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
