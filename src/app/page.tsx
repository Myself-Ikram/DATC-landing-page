import type { Metadata } from 'next';
import { HomeClient } from '@/components/pages/HomeClient';

export const metadata: Metadata = {
  title: 'Star GoodLuck Tea — Best Tea Powder & Kadak Chai in Mahbubnagar',
  description:
    'Diamond Assam Tea Company (DATC) — Celebrated as the best tea brand and tea powder blenders in Mahbubnagar (Mahaboobnagar) since 2000. Master blenders of Star GoodLuck Tea, Mahek Elachi, and Diamond Mixture. Leading Assam CTC chai & wholesale tea agency in Telangana.',
  keywords: [
    'best tea in mahbubnagar',
    'best tea in mahaboobnagar',
    'best tea in mahabubnagar',
    'best tea powder in mahbubnagar',
    'best tea powder in mahboobnagar',
    'best tea brand in mahbubnagar',
    'tea mahbubnagar',
    'assam tea mahbubnagar',
    'diamond assam',
    'star goodluck tea',
    'mahek elachi',
    'kadak chai powder mahbubnagar',
    'tea powder wholesale in mahbubnagar',
    'chai patti mahbubnagar',
  ],
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
