import type { Metadata } from 'next';
import { AboutClient } from '@/components/pages/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Diamond Assam Tea Company',
  description:
    "A quarter century of pure Assam legacy. Founded in 2000 in Mahbubnagar, Diamond Assam Tea Company brings authentic garden-fresh CTC teas directly from Upper Assam's premier estates.",
  openGraph: {
    title: 'About Us | Diamond Assam Tea Company',
    description:
      'A quarter century of pure Assam legacy. Discover our story, heritage, and master blends.',
    images: ['/all-products-with-bg.png'],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
