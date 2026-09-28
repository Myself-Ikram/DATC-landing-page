import type { Metadata } from 'next';
import { ContactClient } from '@/components/pages/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Diamond Assam Tea Company',
  description:
    'Have questions regarding dealership distribution across South India, bulk wholesale orders, or our signature blends? Connect directly with our team in Mahbubnagar.',
  openGraph: {
    title: 'Contact Us | Diamond Assam Tea Company',
    description:
      'Get in touch for wholesale dealership distribution and partnership inquiries across South India.',
    images: ['/all-products-with-bg.png'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
