import { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Phone } from 'lucide-react';
import { company, type FlagshipProduct } from '../../data/company';

type NavTab = 'products' | 'about' | 'contact';

const NAV_TABS = [
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

interface HeaderProps {
  activeProduct?: FlagshipProduct;
}

export function Header({ activeProduct }: HeaderProps) {
  const [activeNav, setActiveNav] = useState<NavTab>('products');

  // Dynamic theme accent color synchronized with current showcase product
  const currentAccent = activeProduct?.accentColor || '#10B981';

  const handleNavClick = (tab: NavTab) => {
    setActiveNav(tab);
  };

  return (
    <>
      {/* Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-8 pt-1 sm:pt-2 md:pt-0 pb-2 sm:pb-3 bg-transparent pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between relative">
          {/* Row 1 for sm & lower: Brand Logo on Top Left */}
          <div className="flex items-center justify-start pointer-events-auto">
            <a
              href="/"
              className="flex items-center group"
              aria-label={company.name}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav('products');
              }}
            >
              <img
                src="/main.png"
                alt={company.name}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 object-contain filter drop-shadow-[0_6px_18px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Row 2 for sm & lower (Centered Below Logo) | Single Row Centered for md+ */}
          {/* Unified Single Background Section with Premium Sliding Tab Effect */}
          <div className="pointer-events-auto flex justify-center mt-1.5 sm:mt-2 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            <LayoutGroup id="header-nav-tabs">
              <nav
                aria-label="Primary Navigation"
                className="relative inline-flex items-center p-1 sm:p-1.5 rounded-full bg-neutral-950/70 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] select-none"
              >
                {NAV_TABS.map((tab) => {
                  const isActive = activeNav === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleNavClick(tab.id)}
                      className="relative rounded-full px-5 min-[380px]:px-6 sm:px-7 md:px-7 lg:px-5 py-2 sm:py-2.5 md:py-2.5 lg:py-1.5 text-sm sm:text-base md:text-base lg:text-sm font-semibold whitespace-nowrap transition-colors duration-200 active:scale-95 cursor-pointer select-none"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="header-active-pill"
                          className="absolute inset-0 rounded-full"
                          style={{
                            backgroundColor: currentAccent,
                            boxShadow: `0 4px 20px ${currentAccent}80, inset 0 1px 1px rgba(255,255,255,0.35)`,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 450,
                            damping: 34,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 block transition-colors duration-200 ${
                          isActive
                            ? 'text-white font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                            : 'text-neutral-300 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </LayoutGroup>
          </div>
        </div>
      </header>

      {/* Floating Bottom-Right Call Button with In & Out Animations */}
      <div className="fixed bottom-10 sm:bottom-30 md:bottom-10 right-5 sm:right-8 md:right-10 z-50 flex items-center group">
        {/* Expanding call tooltip on hover (desktop) */}
        <span
          className="hidden sm:inline-block absolute right-full mr-3 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-black/85 backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl"
        >
          Call: {company.phoneDisplay}
        </span>

        {/* Concentric Animated Ripple Halo 1 (Expanding In & Out) */}
        <span
          className="absolute inset-0 rounded-full animate-call-ring pointer-events-none"
          style={{
            backgroundColor: currentAccent,
            animationDelay: '0s',
          }}
        />

        {/* Concentric Animated Ripple Halo 2 (Offset expansion) */}
        <span
          className="absolute inset-0 rounded-full animate-call-ring pointer-events-none"
          style={{
            backgroundColor: currentAccent,
            animationDelay: '1.2s',
          }}
        />

        {/* Main Floating Call Action Button */}
        <a
          href={`tel:${company.phone}`}
          aria-label={`Call Diamond Assam Tea Company at ${company.phoneDisplay}`}
          className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 animate-call-pulse cursor-pointer"
          style={{
            backgroundColor: currentAccent,
            boxShadow: `0 8px 30px ${currentAccent}88, 0 2px 10px rgba(0,0,0,0.5)`,
          }}
        >
          <Phone className="w-6 h-6 sm:w-6.5 sm:h-6.5 animate-call-wiggle text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
        </a>
      </div>
    </>
  );
}
