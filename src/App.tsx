import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ToastProvider } from './components/ui/Toast';
import { Preloader } from './components/ui/Preloader';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { flagshipProducts } from './data/company';
import { chaiQuotes } from './data/chaiQuotes';

export type Page = 'home' | 'about' | 'contact';

function getPageFromPath(): Page {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname;
  if (path === '/about') return 'about';
  if (path === '/contact') return 'contact';
  return 'home';
}

function getPathForPage(page: Page): string {
  if (page === 'about') return '/about';
  if (page === 'contact') return '/contact';
  return '/';
}

function getPageTransitionMeta(page: Page) {
  switch (page) {
    case 'about':
      return {
        title: 'About Us',
        tagline: `“${chaiQuotes[4]}”`,
      };
    case 'contact':
      return {
        title: 'Contact Us',
        tagline: 'Get in Touch & Wholesale Inquiries',
      };
    case 'home':
    default:
      return {
        title: 'Our Products',
        tagline: `“${chaiQuotes[1]}”`,
      };
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath);
  const [initialLoading, setInitialLoading] = useState(true);
  const [transitioningTo, setTransitioningTo] = useState<Page | null>(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const activeProduct = flagshipProducts[currentProductIndex] || flagshipProducts[0];

  // Handle browser back/forward history navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: Page) => {
    if (page === currentPage || transitioningTo) return;
    setTransitioningTo(page);

    // Pre-mount target page at 600ms while Preloader curtain is still holding at top: 0
    // Identical to portfolio-advance pattern: assets & videos settle behind the curtain
    setTimeout(() => {
      setCurrentPage(page);
      window.history.pushState({}, '', getPathForPage(page));
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }, 600);
  };

  const handleTransitionComplete = () => {
    setTransitioningTo(null);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  };

  const transitionMeta = transitioningTo ? getPageTransitionMeta(transitioningTo) : null;

  return (
    <ToastProvider>
      <div className={`relative w-full ${currentPage === 'home' ? 'h-[100dvh] overflow-hidden overscroll-none touch-none' : 'min-h-screen'} bg-[#050706] text-white`}>
        {/* Global Page Load & Transition Preloader Layer */}
        <AnimatePresence mode="wait">
          {initialLoading && (
            <Preloader
              key="initial-preloader"
              onComplete={() => setInitialLoading(false)}
            />
          )}
          {transitioningTo && transitionMeta && (
            <Preloader
              key={`page-transition-${transitioningTo}`}
              title={transitionMeta.title}
              tagline={transitionMeta.tagline}
              isPageTransition={true}
              onComplete={handleTransitionComplete}
            />
          )}
        </AnimatePresence>

        {/* Active Page View */}
        {currentPage === 'home' && (
          <Home
            activeProduct={activeProduct}
            onProductChange={setCurrentProductIndex}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            activeProduct={activeProduct}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            activeProduct={activeProduct}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </ToastProvider>
  );
}

export default App;


