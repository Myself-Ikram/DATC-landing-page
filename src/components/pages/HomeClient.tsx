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
          Diamond Assam Tea Company — Master Blenders of Premium Assam CTC Teas Since 2000
        </h1>
        <MultiProductShowcase onProductChange={setCurrentProductIndex} />
      </main>
    </div>
  );
}
