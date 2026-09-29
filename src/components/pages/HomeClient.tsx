'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { MultiProductShowcase } from '@/components/sections/MultiProductShowcase';
import { flagshipProducts } from '@/data/company';
import { usePageTransition } from '@/components/providers/PageTransitionProvider';

export function HomeClient() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const { navigateTo } = usePageTransition();
  const activeProduct = flagshipProducts[currentProductIndex] || flagshipProducts[0];

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden overscroll-none touch-none select-none bg-[#050706] text-white">
      {/* Global Navigation Header with Synchronized Dynamic Brand Colors */}
      <Header
        activeProduct={activeProduct}
        activeTab="products"
        onTabChange={(tab) => {
          if (tab === 'about') {
            navigateTo('/about');
          } else if (tab === 'contact') {
            navigateTo('/contact');
          }
        }}
      />

      {/* Multi-Brand Flagship Showcase */}
      <main className="w-full h-full">
        <h1 className="sr-only">
          Star GoodLuck Tea & Diamond Assam Tea Company — Best Tea Powder & Kadak Chai in Mahbubnagar
        </h1>
        <div className="sr-only">
          <h2>Best Tea in Mahbubnagar, Mahaboobnagar, and Telangana</h2>
          <p>
            Diamond Assam Tea Company (DATC), founded in Mahbubnagar in 2000, is acclaimed as the best tea brand and master blender of garden-fresh Assam CTC tea powder across South India.
          </p>
          <p>
            Discover our celebrated household and commercial blends: Star GoodLuck Tea (our signature golden malted morning chai), Mahek Elachi (aromatic cardamom chai), and Diamond Mixture (DMT kadak hotel tea powder). Recognized as the best tea powder in Mahbubnagar (Mahaboobnagar / Mahabubnagar) for rich flavor, deep liquor, and energizing kadak chai patti.
          </p>
          <p>
            Looking for wholesale tea distributors or a tea agency in Mahbubnagar and Jadcherla? Contact Diamond Assam Tea Company at +91 85550 62835 for bulk hotel tea powder and authorized dealership opportunities.
          </p>
        </div>
        <MultiProductShowcase onProductChange={setCurrentProductIndex} />
      </main>
    </div>
  );
}
