import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ToastProvider } from '../components/ui/Toast';
import { Header } from '../components/layout/Header';
import { MultiProductShowcase } from '../components/sections/MultiProductShowcase';
import { Preloader } from '../components/ui/Preloader';
import { flagshipProducts } from '../data/company';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const activeProduct = flagshipProducts[currentProductIndex] || flagshipProducts[0];

  return (
    <ToastProvider>
      <div className="relative w-full h-[100dvh] overflow-hidden bg-[#050706] text-white selection:bg-amber-500/30 selection:text-amber-200">
        {/* Page Load Preloader */}
        <AnimatePresence mode="wait">
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {/* Global Navigation Header with Synchronized Dynamic Brand Colors */}
        <Header activeProduct={activeProduct} />

        {/* Multi-Brand Flagship Showcase */}
        <main className="w-full h-full">
          <MultiProductShowcase onProductChange={setCurrentProductIndex} />
        </main>
      </div>
    </ToastProvider>
  );
}

