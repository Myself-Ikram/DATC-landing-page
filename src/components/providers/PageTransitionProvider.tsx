'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from '../ui/Preloader';
import { chaiQuotes } from '@/data/chaiQuotes';

interface TransitionMeta {
  title: string;
  tagline: string;
}

interface PageTransitionContextType {
  navigateTo: (path: string, customMeta?: TransitionMeta) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
}

function getDefaultMeta(path: string): TransitionMeta {
  if (path === '/about') {
    return {
      title: 'About Us',
      tagline: `“${chaiQuotes[4]}”`,
    };
  }
  if (path === '/contact') {
    return {
      title: 'Contact Us',
      tagline: 'Get in Touch & Wholesale Inquiries',
    };
  }
  return {
    title: 'Our Products',
    tagline: `“${chaiQuotes[1]}”`,
  };
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [initialLoading, setInitialLoading] = useState(true);
  const [transitioningTo, setTransitioningTo] = useState<{ path: string; meta: TransitionMeta } | null>(null);

  const navigateTo = useCallback(
    (targetPath: string, customMeta?: TransitionMeta) => {
      // Normalize targetPath and current pathname
      const current = !pathname || pathname === '/' ? '/' : pathname.replace(/\/$/, '');
      const target = targetPath === '/' ? '/' : targetPath.replace(/\/$/, '');

      if (target === current || transitioningTo) return;

      const meta = customMeta || getDefaultMeta(target);
      setTransitioningTo({ path: target, meta });

      // Pre-navigate at 600ms while the curtain covers the viewport
      setTimeout(() => {
        router.push(target);
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        }
      }, 600);
    },
    [pathname, transitioningTo, router]
  );

  const handleTransitionComplete = useCallback(() => {
    setTransitioningTo(null);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <PageTransitionContext.Provider
      value={{
        navigateTo,
        isTransitioning: transitioningTo !== null || initialLoading,
      }}
    >
      {/* Global Preloader Layer for Initial Load & Page Transitions */}
      <AnimatePresence mode="wait">
        {initialLoading && (
          <Preloader
            key="initial-preloader"
            onComplete={() => setInitialLoading(false)}
          />
        )}
        {transitioningTo && (
          <Preloader
            key={`page-transition-${transitioningTo.path}`}
            title={transitioningTo.meta.title}
            tagline={transitioningTo.meta.tagline}
            isPageTransition={true}
            onComplete={handleTransitionComplete}
          />
        )}
      </AnimatePresence>

      {children}
    </PageTransitionContext.Provider>
  );
}
