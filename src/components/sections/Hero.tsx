import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { company } from '../../data/company';
import gsap from 'gsap';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax tilt on mouse move (desktop only)
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      gsap.to(imageRef.current, {
        rotateY: xPercent * 5,
        rotateX: -yPercent * 5,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headlineWords = company.tagline.split(' ');

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900 z-[1]" />

      {/* Radial glow behind product */}
      <div className="absolute inset-0 z-[2]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center pt-20">
        {/* Subtitle */}
        <motion.p
          className="text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Since {company.founded} · Premium Export Quality
        </motion.p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          {headlineWords.map((word, index) => (
            <span key={index}>
              {index > 0 && ' '}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.15,
                  ease: 'easeOut',
                }}
                className="inline-block shimmer"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {company.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a href="#brands" className="btn-gold" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#brands')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Brands
          </a>
          <a href={`tel:${company.phone}`} className="btn-outline-gold inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Call Us
          </a>
        </motion.div>

        {/* Product Image with 3D tilt effect */}
        <motion.div
          ref={imageRef}
          className="relative perspective-[1000px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img
            src="/all-products-with-bg.png"
            alt="Diamond Assam Tea Company Products"
            className="w-full max-w-2xl h-auto product-glow rounded-2xl"
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-8 scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          <a
            href="#brands"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#brands')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-gold-500/50 hover:text-gold-400 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
