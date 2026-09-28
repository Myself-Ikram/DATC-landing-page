'use client';

import { motion, type Variants } from 'framer-motion';

export interface BrandPortfolioSectionProps {
  id?: string;
  quote?: string;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function BrandPortfolioSection({
  id = 'portfolio',
}: BrandPortfolioSectionProps) {
  return (
    <section
      id={id}
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-12 bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden select-none">
        <span
          style={{ letterSpacing: '-3px' }}
          className="text-[18vw] font-black uppercase leading-none text-neutral-900/[0.03] font-serif select-none whitespace-nowrap"
        >
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Row 1: Product Showcase Image */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center"
        >
          <div className="absolute -inset-6 sm:-inset-12 rounded-full bg-amber-500/15 blur-3xl pointer-events-none -z-10" />

          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl flex items-center justify-center"
          >
            <img
              src="/all-products.png"
              alt="Diamond Assam Tea Company All Brand Portfolio"
              className="w-full h-auto object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
            />
          </motion.div>
        </motion.div>

        {/* Row 2: Eyebrow, Heading & Subtitle */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center"
        >
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-amber-800 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-3">
            The House of Diamond Assam Tea Company
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-950 font-bold tracking-tight leading-tight text-center">
            One Heritage. Master Expressions of Assam.
          </h2>
          <p className="mt-3 text-neutral-600 text-xs sm:text-sm md:text-base max-w-xl font-normal leading-relaxed text-center">
            Blended with pride in Mahbubnagar (Mahaboobnagar), Telangana. Home to our flagship Star GoodLuck Tea, Mahek Elaichi, Diamond Mixture (DMT), Sultan Tea, and time-honored hotel chai blends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default BrandPortfolioSection;
