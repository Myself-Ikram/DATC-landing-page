'use client';

import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { company, flagshipProducts } from '@/data/company';
import { chaiQuotes } from '@/data/chaiQuotes';
import {
  BrandStorySection,
  TornPaperQuoteSection,
  BrandPortfolioSection,
  DealershipCtaSection,
  FaqSection,
} from '@/components/about';
import { usePageTransition } from '@/components/providers/PageTransitionProvider';

export function AboutClient() {
  const starProduct = flagshipProducts[1];
  const { navigateTo } = usePageTransition();

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white text-neutral-900 selection:bg-amber-500/20 selection:text-amber-900 overflow-x-hidden flex flex-col justify-between">
      {/* Global Navigation Header */}
      <Header
        activeProduct={starProduct}
        activeTab="about"
        onTabChange={(tab) => {
          if (tab === 'products') {
            navigateTo('/');
          } else if (tab === 'contact') {
            navigateTo('/contact');
          }
        }}
      />

      {/* Main Content: Normal Vertical Scrolling Flow */}
      <main className="w-full flex flex-col">
        <h2 className="sr-only">
          About Diamond Assam Tea Company — 25 Years of Blending the Best Tea Powder & Chai in Mahbubnagar
        </h2>
        {/* ========================================================================= */}
        {/* SECTION 1: Star GoodLuck Legacy (Brand Story Showcase)                     */}
        {/* ========================================================================= */}
        <BrandStorySection
          id="legacy"
          isH1={true}
          sectionPaddingClass="pt-20 sm:pt-24 md:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12"
          watermark="LEGACY"
          tag="Established 2000 • Mahbubnagar"
          tagColorClass="text-amber-900/90"
          heading="A Quarter Century of Pure Assam Legacy"
          story="In 2000, Diamond Assam Tea Company was established in Mahbubnagar with a singular mission: sourcing authentic CTC teas directly from Upper Assam's premier estates. Under this parent vision, our flagship household brand Star GoodLuck Tea was born, earning the reputation as the best tea powder and beloved daily chai across Mahbubnagar, Mahaboobnagar, and South India."
          videoSrc="/star-goodluck.mp4"
          glowColorClass="bg-[#F59E0B]/20"
          reverseLayout={false}
          cards={[
            { title: 'Est. 2000', subtitle: '25+ years unbroken trust' },
            { title: 'Upper Assam', subtitle: 'Estate-direct CTC gardens' },
            { title: 'Golden Liquor', subtitle: 'Malty richness in every cup' },
          ]}
          powder={{
            alt: 'Pure Assam CTC Tea Powder Scatter',
            desktopSrc: '/tea-powder-r.png',
            desktopSide: 'right',
            mobileSrc: '/tea-powder-l.png',
          }}
          topPowder={{
            alt: 'Assam CTC Tea Powder Scatter Top',
            desktopSrc: '/tea-powder-l-t.png',
            desktopSide: 'left',
            mobileSrc: '/tea-powder-r-t.png',
          }}
        />

        {/* ========================================================================= */}
        {/* SECTION 2: 🧾 Paper Tear Interstitial #1 — Chai Sukoon                     */}
        {/* ========================================================================= */}
        <TornPaperQuoteSection
          id="sukoon"
          quote={chaiQuotes[0]}
          filterId="tear-shadow-1"
          gradientId="paper-grad-1"
          flipHorizontal={false}
        />

        {/* ========================================================================= */}
        {/* SECTION 3: Mahek Elaichi (Brand Story Showcase)                           */}
        {/* ========================================================================= */}
        <BrandStorySection
          id="mahek"
          sectionPaddingClass="py-14 sm:py-18 md:py-16 px-4 sm:px-8 lg:px-12"
          watermark="MAHEK"
          tag="The New Master Blend • Cardamom Infused"
          tagColorClass="text-emerald-900/90"
          heading="Mahek Elaichi — A New Gem in Our Legacy"
          isH1={false}
          story="Our newest master blend crafted for an elevated aromatic experience. Infused with whole crushed green cardamom pods directly blended with selected Assam leaves, Mahek brings a royal fragrance and heartwarming sweetness to our 25-year tea tradition."
          videoSrc="/mahek.mp4"
          glowColorClass="bg-[#22C55E]/20"
          reverseLayout={true}
          cards={[
            { title: 'New Creation', subtitle: 'Latest master innovation' },
            { title: 'Real Spices', subtitle: 'Whole crushed elaichi pods' },
            { title: 'Royal Aroma', subtitle: 'Sweet & refreshing scent' },
          ]}
          powder={{
            alt: 'Assam CTC Tea Powder with Green Cardamom Pods',
            desktopSrc: '/tea-powder-elachi-l.png',
            desktopSide: 'left',
            mobileSrc: '/tea-powder-elachi-l.png',
          }}
          topPowder={{
            alt: 'Assam CTC Tea Powder Scatter Top Right',
            desktopSrc: '/tea-powder-r-t.png',
            desktopSide: 'right',
            mobileSrc: '/tea-powder-r-t.png',
          }}
        />

        {/* ========================================================================= */}
        {/* SECTION 4: 🧾 Paper Tear Interstitial #2 — Chai & Kisse                   */}
        {/* ========================================================================= */}
        <TornPaperQuoteSection
          id="dost"
          quote={chaiQuotes[3]}
          filterId="tear-shadow-2"
          gradientId="paper-grad-2"
          flipHorizontal={true}
        />

        {/* ========================================================================= */}
        {/* SECTION 5: 🏆 Complete Portfolio & 25-Year Legacy Showcase                */}
        {/* ========================================================================= */}
        <BrandPortfolioSection
          id="portfolio"
        />

        {/* ========================================================================= */}
        {/* SECTION 6: 🧾 Paper Tear Interstitial #3 — Zindagi & Chai                  */}
        {/* ========================================================================= */}
        <TornPaperQuoteSection
          id="zindagi"
          quote={chaiQuotes[2]}
          filterId="tear-shadow-3"
          gradientId="paper-grad-3"
          flipHorizontal={false}
        />

        {/* ========================================================================= */}
        {/* SECTION 7: 🤝 Dealership & Distribution Partnership CTA                   */}
        {/* ========================================================================= */}
        <DealershipCtaSection
          id="dealership"
        />

        {/* ========================================================================= */}
        {/* SECTION 8: ❓ Frequently Asked Questions (Schema.org Aligned)              */}
        {/* ========================================================================= */}
        <FaqSection
          id="faq"
        />
      </main>

      {/* Clean, Decent Footer */}
      <footer className="relative z-10 w-full text-center py-6 text-xs text-neutral-500 bg-white border-t border-neutral-100">
        © {new Date().getFullYear()} Star GoodLuck Tea • Blended by Diamond Assam Tea Co. • Since {company.founded}
      </footer>
    </div>
  );
}
