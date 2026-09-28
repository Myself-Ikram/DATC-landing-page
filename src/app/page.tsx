import type { Metadata } from 'next';
import { HomeClient } from '@/components/pages/HomeClient';

export const metadata: Metadata = {
  title: 'Star GoodLuck Tea | Blended by Diamond Assam Tea Co.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
