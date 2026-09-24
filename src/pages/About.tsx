import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { company, flagshipProducts, type FlagshipProduct } from '../data/company';
import { chaiQuotes } from '../data/chaiQuotes';

interface AboutPageProps {
  activeProduct?: FlagshipProduct;
  onNavigate?: (page: 'home' | 'about' | 'contact') => void;
}

export function AboutPage({
  activeProduct,
  onNavigate,
}: AboutPageProps) {
  // Use Star GoodLuck as the brand benchmark palette (matching DATC brand logo)
  const starProduct = flagshipProducts[1];
  const currentProduct = activeProduct || starProduct;

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const animatingRef = useRef<boolean>(false);
  const currentRef = useRef<number>(0);
  currentRef.current = currentSlide;

  const goToSlide = useCallback((nextIndex: number, dir: number) => {
    if (animatingRef.current || nextIndex === currentRef.current || nextIndex < 0 || nextIndex > 1) {
      return;
    }
    animatingRef.current = true;
    setDirection(dir);
    setCurrentSlide(nextIndex);

    // Release animation lock after transition
    setTimeout(() => {
      animatingRef.current = false;
    }, 600);
  }, []);

  // Wheel, Touch, and Keyboard Event Listeners for Modern Full-Viewport Slide Snapping
  useEffect(() => {
    let wheelAccumulator = 0;
    let wheelTimer: ReturnType<typeof setTimeout> | null = null;
    const WHEEL_THRESHOLD = 30;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (animatingRef.current) return;

      wheelAccumulator += e.deltaY;
      if (wheelTimer) clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        wheelAccumulator = 0;
      }, 150);

      if (Math.abs(wheelAccumulator) < WHEEL_THRESHOLD) return;

      if (wheelAccumulator > 0) {
        if (currentRef.current < 1) {
          goToSlide(1, 1);
        }
      } else {
        if (currentRef.current > 0) {
          goToSlide(0, -1);
        }
      }
      wheelAccumulator = 0;
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStartY || animatingRef.current) return;
      const dy = e.changedTouches[0].clientY - touchStartY;
      const SWIPE_THRESHOLD = 35;

      if (Math.abs(dy) > SWIPE_THRESHOLD) {
        if (dy < 0) {
          if (currentRef.current < 1) {
            goToSlide(1, 1);
          }
        } else if (dy > 0) {
          if (currentRef.current > 0) {
            goToSlide(0, -1);
          }
        }
      }
      touchStartY = 0;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentRef.current < 1) {
          goToSlide(1, 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentRef.current > 0) {
          goToSlide(0, -1);
        }
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      // Prevent browser elastic bounce / native viewport pull-up on mobile swipe
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
      if (wheelTimer) clearTimeout(wheelTimer);
    };
  }, [goToSlide]);

  // Framer Motion Variants similar to Home screen kinetic design
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        y: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  const contentStaggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { type: 'spring', stiffness: 280, damping: 26 },
        opacity: { duration: 0.25, ease: 'easeOut' },
      },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.88, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 320,
        damping: 24,
      },
    },
  };

  const videoEntranceVariants: Variants = {
    hidden: (isReverse: boolean) => ({
      opacity: 0,
      x: isReverse ? 40 : -40,
      scale: 0.94,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 240,
        damping: 26,
        delay: 0.05,
      },
    },
  };

  return (
    <div
      className="relative w-full h-[100dvh] overflow-hidden text-white selection:bg-amber-500/30 selection:text-amber-200 select-none flex flex-col justify-between touch-none overscroll-none"
      style={{
        background: `radial-gradient(circle at 50% 20%, ${starProduct.gradientOuter} 0%, ${starProduct.gradientInner} 60%, #150C03 100%)`,
      }}
    >
      {/* Ambient warm golden amber glow halos with subtle breathing pulse */}
      <motion.div
        animate={{
          scale: [1, 1.14, 1],
          opacity: [0.35, 0.48, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, ${starProduct.accentColor} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          scale: [1.1, 0.96, 1.1],
          opacity: [0.25, 0.38, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, ${starProduct.highlightColor} 0%, transparent 70%)`,
        }}
      />

      {/* Global Navigation Header synchronized with Star GoodLuck brand colors */}
      <Header
        activeProduct={currentProduct}
        activeTab="about"
        onTabChange={(tab) => {
          if (tab === 'products') {
            onNavigate?.('home');
          } else if (tab === 'contact') {
            onNavigate?.('contact');
          }
        }}
      />

      {/* Full-Viewport Modern Slide Showcase */}
      <main className="relative z-10 w-full h-full flex items-center justify-center pt-20 sm:pt-24 md:pt-20 pb-12 sm:pb-14 px-4 sm:px-8 lg:px-12">
        <AnimatePresence custom={direction} mode="wait">
          {currentSlide === 0 ? (
            /* SLIDE 0: Star GoodLuck & Pure Assam Legacy */
            <motion.div
              key="slide-0-legacy"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-14"
            >
              {/* Video Half: Star GoodLuck with Breathing Idle Float & Glow */}
              <motion.div
                custom={false}
                variants={videoEntranceVariants}
                className="w-full md:w-1/2 flex items-center justify-center"
              >
                <div className="relative group w-full max-w-[340px] min-[390px]:max-w-[370px] sm:max-w-md md:max-w-none">
                  {/* Breathing Behind-Video Glow Halo */}
                  <motion.div
                    animate={{
                      scale: [0.96, 1.08, 0.96],
                      opacity: [0.35, 0.58, 0.35],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -inset-2 sm:-inset-6 rounded-3xl bg-gradient-to-r from-amber-500/30 via-yellow-500/25 to-amber-600/30 blur-xl sm:blur-2xl pointer-events-none -z-10"
                  />

                  {/* Continuous Idle Floating Container */}
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/30 bg-[#2A1805]/60 backdrop-blur-xl shadow-[0_0_35px_rgba(245,158,11,0.2)] md:shadow-[0_0_70px_rgba(245,158,11,0.25),0_25px_60px_rgba(0,0,0,0.7)] hover:border-amber-400/50 transition-colors duration-500"
                  >
                    <video
                      src="/star-goodluck.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Story Half: Pure Assam Legacy with Kinetic Stagger */}
              <motion.div
                variants={contentStaggerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full md:w-1/2 flex flex-col justify-center text-left"
              >
                <motion.div
                  variants={textItemVariants}
                  className="hidden sm:block text-amber-400/90 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1.5 sm:mb-2"
                >
                  Established 2000 • Mahbubnagar
                </motion.div>

                <h1
                  className="text-[25.5px] sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold tracking-tight mb-2 sm:mb-3 leading-tight"
                >
                  A Quarter Century of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 inline-block transform-gpu backface-hidden">
                    Pure Assam Legacy
                  </span>
                </h1>

                <motion.p
                  variants={textItemVariants}
                  className="text-neutral-200 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 font-light"
                >
                  Founded in 2000 in Mahbubnagar, Diamond Assam Tea Company brings authentic,
                  garden-fresh CTC teas directly from Upper Assam&apos;s premier estates to daily households,
                  tea stalls, and tea lovers across South India.
                </motion.p>

                {/* Mini Cards (hidden on mobile, visible on sm+) */}
                <motion.div
                  variants={textItemVariants}
                  className="hidden sm:grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6"
                >
                  <motion.div
                    variants={cardItemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-amber-500/20 hover:border-amber-400/50 transition-colors backdrop-blur-sm cursor-default"
                  >
                    <div className="text-amber-400 text-xs sm:text-sm font-bold mb-0.5">Est. 2000</div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-300 leading-tight">25+ years unbroken trust</div>
                  </motion.div>

                  <motion.div
                    variants={cardItemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-amber-500/20 hover:border-amber-400/50 transition-colors backdrop-blur-sm cursor-default"
                  >
                    <div className="text-yellow-400 text-xs sm:text-sm font-bold mb-0.5">Upper Assam</div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-300 leading-tight">Estate-direct CTC gardens</div>
                  </motion.div>

                  <motion.div
                    variants={cardItemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-amber-500/20 hover:border-amber-400/50 transition-colors backdrop-blur-sm cursor-default"
                  >
                    <div className="text-white text-xs sm:text-sm font-bold mb-0.5">Golden Liquor</div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-300 leading-tight">Malty richness in every cup</div>
                  </motion.div>
                </motion.div>

                {/* Integrated Punchy Chai Line with Subtle Shimmer */}
                <motion.div
                  variants={textItemVariants}
                  className="pt-3 sm:pt-4 border-t border-amber-500/20 relative text-center"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100px' }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                  />
                  <p className="text-center text-lg sm:text-xl md:text-2xl font-serif font-bold text-amber-100/95 italic tracking-wide leading-snug">
                    <span className="text-2xl sm:text-3xl md:text-4xl text-amber-400 font-serif font-bold select-none mr-1">“</span>
                    {chaiQuotes[1]}
                    <span className="text-2xl sm:text-3xl md:text-4xl text-amber-400 font-serif font-bold select-none ml-1">”</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            /* SLIDE 1: Mahek Elaichi — A New Gem in Our Legacy */
            <motion.div
              key="slide-1-mahek"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-4 sm:gap-8 lg:gap-14"
            >
              {/* Video Half: Mahek Elaichi with Breathing Idle Float & Glow */}
              <motion.div
                custom={true}
                variants={videoEntranceVariants}
                className="w-full md:w-1/2 flex items-center justify-center"
              >
                <div className="relative group w-full max-w-[340px] min-[390px]:max-w-[370px] sm:max-w-md md:max-w-none">
                  {/* Breathing Behind-Video Glow Halo */}
                  <motion.div
                    animate={{
                      scale: [0.96, 1.08, 0.96],
                      opacity: [0.35, 0.58, 0.35],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -inset-2 sm:-inset-6 rounded-3xl bg-gradient-to-r from-yellow-500/25 via-amber-400/30 to-amber-600/25 blur-xl sm:blur-2xl pointer-events-none -z-10"
                  />

                  {/* Continuous Idle Floating Container */}
                  <motion.div
                    animate={{
                      y: [5, -5, 5],
                    }}
                    transition={{
                      duration: 5.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/30 bg-[#2A1805]/60 backdrop-blur-xl shadow-[0_0_35px_rgba(245,158,11,0.2)] md:shadow-[0_0_70px_rgba(245,158,11,0.25),0_25px_60px_rgba(0,0,0,0.7)] hover:border-amber-400/50 transition-colors duration-500"
                  >
                    <video
                      src="/mahek.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Story Half: Mahek Elaichi with Kinetic Stagger */}
              <motion.div
                variants={contentStaggerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full md:w-1/2 flex flex-col justify-center text-left"
              >
                <motion.div
                  variants={textItemVariants}
                  className="hidden sm:block text-amber-400/90 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1.5 sm:mb-2"
                >
                  The New Master Blend • Cardamom Infused
                </motion.div>

                <h2
                  className="text-[25.5px] sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold tracking-tight mb-2 sm:mb-3 leading-tight"
                >
                  Mahek Elaichi{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 inline-block transform-gpu backface-hidden">
                    — A New Gem in Our Legacy
                  </span>
                </h2>

                <motion.p
                  variants={textItemVariants}
                  className="text-neutral-200 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 font-light"
                >
                  Our newest master blend crafted for an elevated aromatic experience. Infused with whole crushed green cardamom pods directly blended with selected Assam leaves, Mahek brings a royal fragrance and heartwarming sweetness to our 25-year tea tradition.
                </motion.p>

                {/* Mini Cards (hidden on mobile, visible on sm+) */}
                <motion.div
                  variants={textItemVariants}
                  className="hidden sm:grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6"
                >
                  <motion.div
                    variants={cardItemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-amber-500/20 hover:border-amber-400/50 transition-colors backdrop-blur-sm cursor-default"
                  >
                    <div className="text-amber-400 text-xs sm:text-sm font-bold mb-0.5">New Creation</div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-300 leading-tight">Latest master innovation</div>
                  </motion.div>

                  <motion.div
                    variants={cardItemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-amber-500/20 hover:border-yellow-400/50 transition-colors backdrop-blur-sm cursor-default"
                  >
                    <div className="text-yellow-400 text-xs sm:text-sm font-bold mb-0.5">Real Spices</div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-300 leading-tight">Whole crushed elaichi pods</div>
                  </motion.div>

                  <motion.div
                    variants={cardItemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-amber-500/20 hover:border-amber-400/50 transition-colors backdrop-blur-sm cursor-default"
                  >
                    <div className="text-white text-xs sm:text-sm font-bold mb-0.5">Royal Aroma</div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-300 leading-tight">Sweet & refreshing scent</div>
                  </motion.div>
                </motion.div>

                {/* Integrated Soothing Chai Line with Subtle Shimmer */}
                <motion.div
                  variants={textItemVariants}
                  className="pt-3 sm:pt-4 border-t border-amber-500/20 relative text-center"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100px' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                  />
                  <p className="text-center text-lg sm:text-xl md:text-2xl font-serif font-bold text-amber-100/95 italic tracking-wide leading-snug">
                    <span className="text-2xl sm:text-3xl md:text-4xl text-amber-400 font-serif font-bold select-none mr-1">“</span>
                    {chaiQuotes[0]}
                    <span className="text-2xl sm:text-3xl md:text-4xl text-amber-400 font-serif font-bold select-none ml-1">”</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modern Floating Slide Pagination Indicator (Right Side) */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => goToSlide(0, -1)}
          className={`group flex items-center gap-2 cursor-pointer transition-all duration-300 ${
            currentSlide === 0 ? 'scale-110' : 'opacity-60 hover:opacity-100'
          }`}
          aria-label="Pure Assam Legacy"
        >
          <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wider text-amber-200/80 group-hover:text-amber-300 transition-colors">
            Legacy
          </span>
          <motion.div
            animate={
              currentSlide === 0
                ? {
                    boxShadow: [
                      '0 0 8px rgba(251,191,36,0.6)',
                      '0 0 20px rgba(251,191,36,0.95)',
                      '0 0 8px rgba(251,191,36,0.6)',
                    ],
                  }
                : {
                    boxShadow: 'none',
                  }
            }
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className={`w-2.5 sm:w-3 h-6 sm:h-7 rounded-full transition-all duration-300 ${
              currentSlide === 0
                ? 'bg-amber-400'
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => goToSlide(1, 1)}
          className={`group flex items-center gap-2 cursor-pointer transition-all duration-300 ${
            currentSlide === 1 ? 'scale-110' : 'opacity-60 hover:opacity-100'
          }`}
          aria-label="Mahek Elaichi - New Gem"
        >
          <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wider text-amber-200/80 group-hover:text-amber-300 transition-colors">
            New Gem
          </span>
          <motion.div
            animate={
              currentSlide === 1
                ? {
                    boxShadow: [
                      '0 0 8px rgba(251,191,36,0.6)',
                      '0 0 20px rgba(251,191,36,0.95)',
                      '0 0 8px rgba(251,191,36,0.6)',
                    ],
                  }
                : {
                    boxShadow: 'none',
                  }
            }
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className={`w-2.5 sm:w-3 h-6 sm:h-7 rounded-full transition-all duration-300 ${
              currentSlide === 1
                ? 'bg-amber-400'
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        </button>
      </div>

      {/* Subtle Copyright Stamp at Bottom Left */}
      <div className="fixed bottom-3 left-4 sm:left-8 z-20 pointer-events-none hidden sm:block text-[11px] text-amber-200/40">
        © {new Date().getFullYear()} {company.name}
      </div>
    </div>
  );
}
