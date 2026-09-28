import type { Metadata } from 'next';
import { ContactClient } from '@/components/pages/ContactClient';

export const metadata: Metadata = {
  title: 'Wholesale Tea Powder & Dealership in Mahbubnagar | Contact DATC',
  description:
    'Contact Diamond Assam Tea Company in Mahbubnagar (Mahaboobnagar), Telangana for bulk wholesale Assam CTC tea powder, hotel chai patti supply, and Star GoodLuck Tea dealership.',
  keywords: [
    'tea powder wholesale in mahbubnagar',
    'tea distributors mahbubnagar',
    'tea agency in mahbubnagar',
    'hotel tea powder suppliers mahbubnagar',
    'best tea in mahbubnagar contact',
    'star goodluck tea wholesale',
    'diamond assam contact',
    'tea dealership telangana',
    'bulk assam ctc tea mahbubnagar',
    'chai patti wholesale mahbubnagar',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Wholesale Tea Powder & Dealership in Mahbubnagar | DATC',
    description:
      'Connect with Diamond Assam Tea Company in Mahbubnagar for regional tea powder distributorship, bulk hotel chai orders, and dealership partnerships.',
    url: 'https://stargoodlucktea.datc.space/contact',
    type: 'website',
    images: [
      {
        url: '/all-products-with-bg.png',
        width: 1200,
        height: 630,
        alt: 'Contact Diamond Assam Tea Company Mahbubnagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tea Powder Wholesale & Dealership Mahbubnagar | DATC',
    description:
      'Partner with Diamond Assam Tea Company for regional tea distribution across Telangana and South India.',
    images: ['/all-products-with-bg.png'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
