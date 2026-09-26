import { Header } from '../components/layout/Header';
import { MultiProductShowcase } from '../components/sections/MultiProductShowcase';
import { flagshipProducts, type FlagshipProduct } from '../data/company';

interface HomeProps {
  activeProduct?: FlagshipProduct;
  onProductChange?: (index: number) => void;
  onNavigate?: (page: 'home' | 'about' | 'contact') => void;
}

export function Home({
  activeProduct = flagshipProducts[0],
  onProductChange,
  onNavigate,
}: HomeProps) {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden select-none">
      {/* Global Navigation Header with Synchronized Dynamic Brand Colors */}
      <Header
        activeProduct={activeProduct}
        activeTab="products"
        onTabChange={(tab) => {
          if (tab === 'about') {
            onNavigate?.('about');
          } else if (tab === 'contact') {
            onNavigate?.('contact');
          }
        }}
      />

      {/* Multi-Brand Flagship Showcase */}
      <main className="w-full h-full">
        <MultiProductShowcase onProductChange={onProductChange} />
      </main>
    </div>
  );
}


