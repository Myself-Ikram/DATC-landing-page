import type { Metadata } from 'next';
import { ContactClient } from '@/components/pages/ContactClient';

export const metadata: Metadata = {
  title: 'Wholesale & Dealership Contact',
  description:
    'Connect with Diamond Assam Tea Company for dealership distribution across Telangana & South India, bulk wholesale tea inquiries, or direct orders.',
  keywords: [
    'Contact Diamond Assam Tea Company',
    'Tea Dealership Telangana',
    'Wholesale Tea Distributorship',
    'Bulk Assam Tea Orders',
    'DATC Mahbubnagar Phone',
    'Tea Suppliers South India',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Wholesale & Dealership Contact | Diamond Assam Tea Company',
    description:
      'Connect with our team in Mahbubnagar for regional distributorship, bulk orders, and dealership partnerships.',
    url: 'https://diamondassamtea.com/contact',
    type: 'website',
    images: [
      {
        url: '/all-products-with-bg.png',
        width: 1200,
        height: 630,
        alt: 'Contact Diamond Assam Tea Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dealership & Wholesale Inquiries | Diamond Assam Tea Company',
    description:
      'Partner with Diamond Assam Tea Company for regional tea distribution across South India.',
    images: ['/all-products-with-bg.png'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
