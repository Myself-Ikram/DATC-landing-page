import { motion, type Variants } from 'framer-motion';

export interface MiniCardItem {
  title: string;
  subtitle: string;
}

export interface PowderConfig {
  alt: string;
  desktopSrc: string;
  desktopSide: 'left' | 'right';
  mobileSrc: string;
}

export interface TopPowderConfig {
  alt?: string;
  desktopSrc: string;
  desktopSide: 'left' | 'right';
  mobileSrc: string;
}

export interface BrandStorySectionProps {
  id: string;
  sectionPaddingClass?: string;
  watermark: string;
  tag: string;
  tagColorClass?: string;
  heading: string;
  isH1?: boolean;
  story: string;
  videoSrc: string;
  glowColorClass?: string;
  reverseLayout?: boolean; // false = video left / text right; true = video right / text left
  cards: MiniCardItem[];
  powder: PowderConfig;
  topPowder?: TopPowderConfig;
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

const powderZoomVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function BrandStorySection({
  id,
  sectionPaddingClass = 'py-14 sm:py-18 md:py-16 px-4 sm:px-8 lg:px-12',
  watermark,
  tag,
  tagColorClass = 'text-amber-900/90',
  heading,
  isH1 = false,
  story,
  videoSrc,
  glowColorClass = 'bg-[#F59E0B]/20',
  reverseLayout = false,
  cards,
  powder,
  topPowder,
}: BrandStorySectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full min-h-[100dvh] flex items-center justify-center ${sectionPaddingClass} bg-white overflow-hidden`}
    >
      {/* Subtle Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden select-none">
        <span
          style={{ letterSpacing: '-3px' }}
          className="text-[18vw] font-black uppercase leading-none text-neutral-900/[0.03] font-serif select-none whitespace-nowrap"
        >
          {watermark}
        </span>
      </div>

      <div
        className={`relative z-10 w-full max-w-7xl mx-auto flex flex-col ${
          reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center justify-center gap-6 sm:gap-10 lg:gap-16`}
      >
        {/* Video Half */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <div className="relative group w-full max-w-[340px] sm:max-w-md md:max-w-none">
            {/* Subtle Background Glow */}
            <div className={`absolute -inset-4 sm:-inset-8 rounded-full ${glowColorClass} blur-2xl pointer-events-none -z-10`} />

            {/* Video Container */}
            <motion.div
              animate={{ y: reverseLayout ? [4, -4, 4] : [-4, 4, -4] }}
              transition={{ duration: reverseLayout ? 5.2 : 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-neutral-300 transition-colors duration-500"
            >
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>

        {/* Story Half */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative z-10 w-full md:w-1/2 flex flex-col justify-center text-left"
        >
          <div className={`${tagColorClass} text-xs sm:text-sm font-bold tracking-widest uppercase mb-1.5 sm:mb-2`}>
            {tag}
          </div>

          {isH1 ? (
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-950 font-bold tracking-tight mb-2 sm:mb-3 leading-tight">
              {heading}
            </h1>
          ) : (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-950 font-bold tracking-tight mb-2 sm:mb-3 leading-tight">
              {heading}
            </h2>
          )}

          <p className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-normal max-w-xl">
            {story}
          </p>

          {/* Mini Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="grid grid-cols-3 gap-2 sm:gap-3"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.03 }}
                className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/90 border border-neutral-200/90 shadow-sm cursor-default"
              >
                <div className="text-neutral-900 text-xs sm:text-sm font-bold mb-0.5">{card.title}</div>
                <div className="text-[10px] sm:text-[11px] text-neutral-600 leading-tight">{card.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Grounding CTC Tea Powder Scatter Layer — Anchored to Section Root (z-0 behind all content) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Small devices (< md): Anchored on the LEFT */}
        <motion.div
          variants={powderZoomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="block md:hidden absolute -bottom-1 left-0 w-[64vw] sm:w-[54vw] max-w-[380px] pointer-events-none origin-bottom-left"
        >
          <img
            src={powder.mobileSrc}
            alt={powder.alt}
            className="w-full h-auto object-contain filter drop-shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
          />
        </motion.div>

        {/* Desktop (md+): Anchored on desktopSide */}
        <motion.div
          variants={powderZoomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className={`hidden md:block absolute -bottom-1 md:bottom-0 ${
            powder.desktopSide === 'left' ? 'left-0 origin-bottom-left' : 'right-0 origin-bottom-right'
          } w-[44vw] md:w-[36vw] max-w-[540px] pointer-events-none`}
        >
          <img
            src={powder.desktopSrc}
            alt={powder.alt}
            className="w-full h-auto object-contain filter drop-shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
          />
        </motion.div>
      </div>

      {/* Top Tea Powder Scatter Layer — Anchored to Section Root (z-0 behind all content) */}
      {topPowder && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Small devices (< md): Always anchored on TOP-RIGHT opposite to bottom-left */}
          <motion.div
            variants={powderZoomVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="block md:hidden absolute -top-1 right-0 w-[64vw] sm:w-[54vw] max-w-[380px] pointer-events-none origin-top-right"
          >
            <img
              src={topPowder.mobileSrc || '/tea-powder-r-t.png'}
              alt={topPowder.alt || 'Assam CTC Tea Powder Scatter Top Right'}
              className="w-full h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            />
          </motion.div>

          {/* Desktop (md+): Anchored on topPowder.desktopSide */}
          <motion.div
            variants={powderZoomVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className={`hidden md:block absolute -top-1 md:top-0 ${
              topPowder.desktopSide === 'left' ? 'left-0 origin-top-left' : 'right-0 origin-top-right'
            } w-[44vw] md:w-[36vw] max-w-[540px] pointer-events-none`}
          >
            <img
              src={topPowder.desktopSrc}
              alt={topPowder.alt || 'Assam CTC Tea Powder Scatter Top'}
              className="w-full h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
