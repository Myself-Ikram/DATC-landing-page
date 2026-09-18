import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { flagshipProducts } from '../../data/company';

interface MultiProductShowcaseProps {
  onProductChange?: (index: number) => void;
}

export const MultiProductShowcase: React.FC<MultiProductShowcaseProps> = ({ onProductChange }) => {
  const [current, setCurrent] = useState<number>(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const packetsRef = useRef<(HTMLDivElement | null)[]>([]);
  const wordsRef = useRef<(HTMLDivElement | null)[]>([]);
  const propsGroupRef = useRef<(HTMLDivElement | null)[]>([]);
  const infoRef = useRef<(HTMLDivElement | null)[]>([]);

  const animatingRef = useRef<boolean>(false);
  const idleTweensRef = useRef<gsap.core.Tween[]>([]);
  const currentRef = useRef<number>(0);
  currentRef.current = current;

  // Kill continuous idle floating loops
  const killIdle = useCallback(() => {
    idleTweensRef.current.forEach((t) => t.kill());
    idleTweensRef.current = [];
  }, []);

  // Start continuous breathing float loop on the active packet's props
  const startIdle = useCallback((slideIndex: number) => {
    killIdle();
    const group = propsGroupRef.current[slideIndex];
    if (!group) return;

    const propElements = group.querySelectorAll<HTMLElement>('.floating-prop');
    propElements.forEach((el, j) => {
      const tween = gsap.to(el, {
        y: j % 2 === 0 ? 12 : -12,
        x: j % 2 === 0 ? -8 : 8,
        rotation: j % 2 === 0 ? 6 : -6,
        duration: 2.6 + (j % 3) * 0.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: j * 0.2,
      });
      idleTweensRef.current.push(tween);
    });

    // Subtle packet breathing
    const packet = packetsRef.current[slideIndex];
    if (packet) {
      const packetTween = gsap.to(packet, {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      idleTweensRef.current.push(packetTween);
    }
  }, [killIdle]);

  // Kinetic Letter-by-Letter Wave & Brand-Tuned Momentum Animation for All Brands
  const animateProductIn = useCallback((productIdx: number, timeline: gsap.core.Timeline, startTime: number = 0.3) => {
    const info = infoRef.current[productIdx];
    if (!info) return;

    gsap.set(info, { opacity: 1, y: 0 });

    const isLeft = productIdx % 2 === 0;
    const slideX = isLeft ? -35 : 35;
    const taglineX = isLeft ? -20 : 20;

    const letters = info.querySelectorAll('.info-letter-wave');
    const tagline = info.querySelector('.info-tagline');
    const desc = info.querySelector('.info-desc-slide');

    // 1. Kinetic Letter Wave
    if (letters.length > 0) {
      gsap.set(letters, { y: 40, scale: 0.7, opacity: 0, rotateZ: 6 });
      timeline.to(
        letters,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotateZ: 0,
          duration: 0.5,
          ease: 'back.out(2.2)',
          stagger: 0.025,
        },
        startTime
      );
    }

    // 2. Tagline Slide (Directly Below Brand Title)
    if (tagline) {
      gsap.set(tagline, { x: taglineX, opacity: 0 });
      timeline.to(
        tagline,
        {
          x: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out',
        },
        startTime + 0.1
      );
    }

    // 3. Horizontal Momentum Description Slide
    if (desc) {
      gsap.set(desc, { x: slideX, opacity: 0 });
      timeline.to(
        desc,
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          ease: 'power3.out',
        },
        startTime + 0.18
      );
    }
  }, []);

  // Master Slide Transition (Instant triggers on tiny 5% scroll or flick)
  const goTo = useCallback((nextIndex: number, dir: number) => {
    if (animatingRef.current || nextIndex === currentRef.current || nextIndex < 0 || nextIndex >= flagshipProducts.length) {
      return false;
    }

    animatingRef.current = true;
    killIdle();
    onProductChange?.(nextIndex);

    const prevIndex = currentRef.current;
    const nextProduct = flagshipProducts[nextIndex];
    const prevSlide = slidesRef.current[prevIndex];
    const nextSlide = slidesRef.current[nextIndex];
    const prevPacket = packetsRef.current[prevIndex];
    const nextPacket = packetsRef.current[nextIndex];
    const prevWord = wordsRef.current[prevIndex];
    const nextWord = wordsRef.current[nextIndex];
    const prevProps = propsGroupRef.current[prevIndex]?.querySelectorAll('.floating-prop');
    const nextProps = propsGroupRef.current[nextIndex]?.querySelectorAll('.floating-prop');
    const prevInfo = infoRef.current[prevIndex];
    const nextInfo = infoRef.current[nextIndex];

    if (!prevSlide || !nextSlide) {
      animatingRef.current = false;
      return false;
    }

    // Set z-indices
    nextSlide.style.zIndex = '15';
    prevSlide.style.zIndex = '12';
    nextSlide.style.pointerEvents = 'auto';
    prevSlide.style.pointerEvents = 'none';

    // Prepare next slide initial positions
    if (nextPacket) {
      gsap.set(nextPacket, {
        xPercent: 120 * dir,
        rotation: 90 * dir,
        scale: 0.65,
        opacity: 0,
      });
    }

    if (nextWord) {
      gsap.set(nextWord, {
        xPercent: 70 * dir,
        opacity: 0,
      });
    }

    if (nextProps) {
      gsap.set(nextProps, {
        scale: 0.25,
        opacity: 0,
        x: 50 * dir,
      });
    }

    if (nextInfo) {
      gsap.set(nextInfo, {
        opacity: 0,
        y: 25,
      });
    }

    const DUR = 0.85;
    const EASING = 'power3.inOut';

    const tl = gsap.timeline({
      onComplete: () => {
        animatingRef.current = false;
        setCurrent(nextIndex);
        startIdle(nextIndex);
        if (prevPacket) gsap.set(prevPacket, { opacity: 0 });
        if (prevWord) gsap.set(prevWord, { opacity: 0 });
        if (prevSlide) prevSlide.style.zIndex = '5';
      },
    });

    // 1. Fluid Background Gradient Transition
    if (rootRef.current) {
      tl.to(
        rootRef.current,
        {
          '--bg-inner': nextProduct.gradientInner,
          '--bg-outer': nextProduct.gradientOuter,
          duration: DUR,
          ease: EASING,
        },
        0
      );
    }

    // 2. 3D Single Typography Watermark Behind Packet
    if (prevWord) {
      tl.to(
        prevWord,
        {
          xPercent: -70 * dir,
          opacity: 0,
          duration: DUR * 0.8,
          ease: EASING,
        },
        0
      );
    }
    if (nextWord) {
      tl.to(
        nextWord,
        {
          xPercent: 0,
          opacity: 1,
          duration: DUR,
          ease: EASING,
        },
        0.05
      );
    }

    // 3. Central Packet Spin & Scale
    if (prevPacket) {
      tl.to(
        prevPacket,
        {
          xPercent: -120 * dir,
          rotation: -90 * dir,
          scale: 0.6,
          opacity: 0,
          duration: DUR,
          ease: EASING,
        },
        0
      );
    }
    if (nextPacket) {
      tl.to(
        nextPacket,
        {
          xPercent: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: DUR,
          ease: EASING,
        },
        0.05
      );
    }

    // 4. Floating Ingredients Burst
    if (prevProps && prevProps.length > 0) {
      tl.to(
        prevProps,
        {
          scale: 0.2,
          opacity: 0,
          duration: 0.35,
          ease: 'power2.in',
          stagger: 0.02,
        },
        0
      );
    }
    if (nextProps && nextProps.length > 0) {
      tl.to(
        nextProps,
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 0.45,
          ease: 'back.out(1.5)',
          stagger: 0.04,
        },
        0.3
      );
    }

    // 5. Product Title, Description & Action Elements
    if (prevInfo) {
      tl.to(
        prevInfo,
        {
          opacity: 0,
          y: -25 * dir,
          duration: 0.25,
          ease: 'power2.in',
        },
        0
      );
    }
    if (nextInfo) {
      animateProductIn(nextIndex, tl, 0.3);
    }

    return true;
  }, [killIdle, startIdle, animateProductIn]);

  // Natural Scroll & Touch Listener (Triggers on tiny 5% scroll or flick)
  useEffect(() => {
    let wheelAccumulator = 0;
    let wheelLocked = false;
    let wheelTimer: ReturnType<typeof setTimeout> | null = null;
    const WHEEL_THRESHOLD = 25; // Tiny threshold - fires with 5% scroll

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (wheelLocked || animatingRef.current) return;

      wheelAccumulator += e.deltaY;

      if (Math.abs(wheelAccumulator) < WHEEL_THRESHOLD) return;

      wheelLocked = true;
      if (wheelTimer) clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        wheelLocked = false;
        wheelAccumulator = 0;
      }, 700);

      if (wheelAccumulator > 0) {
        // Scroll down -> next product
        if (currentRef.current < flagshipProducts.length - 1) {
          goTo(currentRef.current + 1, 1);
        }
      } else {
        // Scroll up -> previous product
        if (currentRef.current > 0) {
          goTo(currentRef.current - 1, -1);
        }
      }
      wheelAccumulator = 0;
    };

    // Touch Swipe (Mobile)
    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStartX || !touchStartY || animatingRef.current) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      const SWIPE_THRESHOLD = 25; // Quick responsive flick

      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > SWIPE_THRESHOLD) {
        if (dy < 0 && currentRef.current < flagshipProducts.length - 1) {
          goTo(currentRef.current + 1, 1);
        } else if (dy > 0 && currentRef.current > 0) {
          goTo(currentRef.current - 1, -1);
        }
      } else if (Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0 && currentRef.current < flagshipProducts.length - 1) {
          goTo(currentRef.current + 1, 1);
        } else if (dx > 0 && currentRef.current > 0) {
          goTo(currentRef.current - 1, -1);
        }
      }

      touchStartX = 0;
      touchStartY = 0;
    };

    // Keyboard Arrow Keys
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (currentRef.current < flagshipProducts.length - 1) goTo(currentRef.current + 1, 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (currentRef.current > 0) goTo(currentRef.current - 1, -1);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
      if (wheelTimer) clearTimeout(wheelTimer);
    };
  }, [goTo]);

  // Initial State Setup
  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.setProperty('--bg-inner', flagshipProducts[0].gradientInner);
      rootRef.current.style.setProperty('--bg-outer', flagshipProducts[0].gradientOuter);
    }

    flagshipProducts.forEach((_, idx) => {
      const slide = slidesRef.current[idx];
      const packet = packetsRef.current[idx];
      const word = wordsRef.current[idx];
      const props = propsGroupRef.current[idx]?.querySelectorAll('.floating-prop');
      const info = infoRef.current[idx];

      if (slide) {
        slide.style.zIndex = idx === 0 ? '12' : '5';
        slide.style.pointerEvents = idx === 0 ? 'auto' : 'none';
      }

      if (packet) {
        gsap.set(packet, {
          xPercent: idx === 0 ? 0 : 120,
          rotation: idx === 0 ? 0 : 90,
          scale: idx === 0 ? 1 : 0.65,
          opacity: idx === 0 ? 1 : 0,
        });
      }

      if (word) {
        gsap.set(word, {
          xPercent: idx === 0 ? 0 : 70,
          opacity: idx === 0 ? 1 : 0,
        });
      }

      if (props && props.length > 0) {
        gsap.set(props, {
          scale: idx === 0 ? 1 : 0.25,
          opacity: idx === 0 ? 1 : 0,
        });
      }

      if (info) {
        gsap.set(info, {
          opacity: idx === 0 ? 1 : 0,
          y: 0,
        });
      }
    });

    startIdle(0);

    // Initial entrance choreography for Brand 1
    const introTl = gsap.timeline({ delay: 0.25 });
    animateProductIn(0, introTl, 0);

    return () => {
      introTl.kill();
      killIdle();
    };
  }, [killIdle, startIdle, animateProductIn]);

  const activeProduct = flagshipProducts[current];

  return (
    <div
      ref={rootRef}
      id="flagship-showcase"
      className="relative w-full h-[100dvh] overflow-hidden select-none"
      style={{
        background: 'radial-gradient(circle at center center, var(--bg-outer) 0%, var(--bg-inner) 85%)',
      }}
    >
      {/* Dynamic ambient color glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 blur-3xl transition-colors duration-700"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${activeProduct.accentColor} 0%, transparent 60%)`,
        }}
      />

      {/* Slide Containers */}
      {flagshipProducts.map((product, idx) => {
        return (
          <div
            key={product.id}
            ref={(el) => { slidesRef.current[idx] = el; }}
            className="absolute inset-0 w-full h-full flex flex-col justify-between items-center px-4 sm:px-0 pt-20 sm:pt-0 pb-6 sm:pb-0 overflow-hidden"
          >
            {/* 3D Typography - Single Continuous Watermark Word Centered Directly Behind Packet */}
            <div
              ref={(el) => { wordsRef.current[idx] = el; }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
            >
              <span
                style={{ letterSpacing: '-3px' }}
                className="text-[22vw] sm:text-[18vw] md:text-[16vw] font-black uppercase leading-none text-white/[0.14] font-serif select-none whitespace-nowrap text-center tracking-[-3px]"
              >
                {product.watermarkWord}
              </span>
            </div>

            {/* Central Stage: Packet + Floating Props */}
            <div className="relative z-10 w-full flex-1 sm:flex-none sm:absolute sm:inset-0 flex flex-col items-center justify-center pointer-events-none">
              {/* Central Packet & Props */}
              <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl h-[48vh] sm:h-[62vh] md:h-[70vh] flex items-center justify-center">
                {/* Floating Props */}
                <div
                  ref={(el) => { propsGroupRef.current[idx] = el; }}
                  className="absolute inset-0 pointer-events-none z-10"
                >
                  {product.id === 'mahek' ? (
                    <>
                      <div className="floating-prop absolute top-2 left-4 sm:left-6 w-14 sm:w-22 drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]">
                        <img src="/props/cardamom.svg" alt="Cardamom" className="w-full h-auto transform -rotate-12" />
                      </div>
                      <div className="floating-prop absolute top-6 right-4 sm:right-6 w-16 sm:w-26 drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]">
                        <img src="/props/tea-leaf-green.svg" alt="Tea Leaf" className="w-full h-auto transform rotate-45" />
                      </div>
                      <div className="floating-prop absolute bottom-6 left-6 sm:left-8 w-12 sm:w-18 drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
                        <img src="/props/cardamom.svg" alt="Cardamom" className="w-full h-auto transform rotate-45 scale-90" />
                      </div>
                      <div className="floating-prop absolute bottom-4 right-6 sm:right-8 w-14 sm:w-22 drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
                        <img src="/props/tea-leaf-green.svg" alt="Tea Leaf" className="w-full h-auto transform -rotate-30 scale-85" />
                      </div>
                    </>
                  ) : product.id === 'star-goodluck' ? (
                    <>
                      <div className="floating-prop absolute top-2 left-4 sm:left-6 w-16 sm:w-26 drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]">
                        <img src="/props/tea-leaf-gold.svg" alt="Golden Leaf" className="w-full h-auto transform -rotate-25" />
                      </div>
                      <div className="floating-prop absolute top-6 right-4 sm:right-6 w-12 sm:w-18 drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]">
                        <img src="/props/sparkle-gold.svg" alt="Gold Sparkle" className="w-full h-auto transform rotate-12" />
                      </div>
                      <div className="floating-prop absolute bottom-6 left-6 sm:left-8 w-14 sm:w-22 drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
                        <img src="/props/tea-leaf-gold.svg" alt="Golden Leaf" className="w-full h-auto transform rotate-60 scale-90" />
                      </div>
                      <div className="floating-prop absolute bottom-4 right-6 sm:right-8 w-10 sm:w-16 drop-shadow-[0_0_16px_rgba(245,158,11,0.7)]">
                        <img src="/props/sparkle-gold.svg" alt="Gold Sparkle" className="w-full h-auto transform -rotate-12 scale-85" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="floating-prop absolute top-3 left-4 sm:left-6 w-14 sm:w-20 drop-shadow-[0_14px_28px_rgba(0,0,0,0.85)]">
                        <img src="/props/diamond-gem.svg" alt="Diamond Gem" className="w-full h-auto transform -rotate-12" />
                      </div>
                      <div className="floating-prop absolute top-4 right-4 sm:right-8 w-16 sm:w-24 drop-shadow-[0_12px_26px_rgba(0,0,0,0.9)]">
                        <img src="/props/tea-leaf-black.svg" alt="Roasted Black Leaf" className="w-full h-auto transform rotate-45" />
                      </div>
                      <div className="floating-prop absolute bottom-6 left-6 sm:left-8 w-14 sm:w-22 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]">
                        <img src="/props/tea-leaf-black.svg" alt="Roasted Black Leaf" className="w-full h-auto transform -rotate-30 scale-95" />
                      </div>
                      <div className="floating-prop absolute bottom-5 right-6 sm:right-10 w-12 sm:w-18 drop-shadow-[0_14px_28px_rgba(0,0,0,0.85)]">
                        <img src="/props/diamond-gem.svg" alt="Diamond Gem" className="w-full h-auto transform rotate-15 scale-90" />
                      </div>
                    </>
                  )}
                </div>

                {/* Central Packet */}
                <div
                  ref={(el) => { packetsRef.current[idx] = el; }}
                  className="relative z-20 flex items-center justify-center cursor-pointer group pointer-events-auto"
                  onClick={() => {
                    const next = (idx + 1) % flagshipProducts.length;
                    goTo(next, 1);
                  }}
                >
                  <div
                    className="absolute w-72 sm:w-[28rem] md:w-[34rem] h-72 sm:h-[28rem] md:h-[34rem] rounded-full blur-3xl opacity-45 -z-10 transition-transform duration-700 group-hover:scale-125"
                    style={{ backgroundColor: product.accentColor }}
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`${
                      product.id === 'mahek'
                        ? 'max-h-[46vh] sm:max-h-[62vh] md:max-h-[68vh] lg:max-h-[72vh]'
                        : product.id === 'diamond-mixture'
                        ? 'max-h-[48vh] sm:max-h-[64vh] md:max-h-[70vh] lg:max-h-[74vh]'
                        : 'max-h-[50vh] sm:max-h-[66vh] md:max-h-[72vh] lg:max-h-[76vh]'
                    } w-auto object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>
              </div>
            </div>

            {/* Product Info Block */}
            {/* Desktop (sm+): Alternating left/right sides */}
            {/* Mobile (<sm): Centered below packet, NO description, NO tick badges, NO buttons */}
            <div
              ref={(el) => { infoRef.current[idx] = el; }}
              className={`relative z-20 w-full px-4 sm:px-0 pb-4 sm:pb-0 flex flex-col pointer-events-auto sm:absolute sm:bottom-12 md:bottom-16 sm:max-w-md lg:max-w-lg ${
                idx % 2 === 0
                  ? 'items-center text-center sm:items-start sm:text-left sm:left-10 md:left-16'
                  : 'items-center text-center sm:items-end sm:text-right sm:right-10 md:right-16'
              }`}
            >
              {/* Brand Title: Kinetic Letter-by-Letter Wave in Pure White */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-serif mb-0">
                {product.name.split(' ').map((word, wIdx) => (
                  <span key={wIdx} className="inline-block whitespace-nowrap mr-2.5 sm:mr-3.5 last:mr-0">
                    {word.split('').map((char, cIdx) => (
                      <span
                        key={cIdx}
                        className="info-letter-wave inline-block text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </h2>

              {/* Tagline directly after the Brand Name for all screen sizes (No top margin/padding) */}
              <p className="info-tagline font-serif italic text-sm sm:text-base md:text-lg text-white/95 font-medium tracking-wide mt-0 pt-0 mb-2 sm:mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                &ldquo;{product.tagline}&rdquo;
              </p>

              {/* Description: Hidden on mobile (<sm), shown on desktop (sm+) */}
              <p className="info-desc-slide hidden sm:block text-white/80 text-sm md:text-base leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        );
      })}

      {/* Bottom Center Scroll/Swipe Hint */}
      <div className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-[10px] sm:text-xs text-white/40 tracking-widest uppercase items-center gap-1.5 pointer-events-none">
        <span>Scroll or swipe to switch blend</span>
      </div>
    </div>
  );
};
