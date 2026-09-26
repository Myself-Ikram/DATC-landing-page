import { motion, type Variants } from 'framer-motion';
import {
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { company } from '../../data/company';

export interface DealershipCtaSectionProps {
  id?: string;
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

const cardItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

interface ScatteredPacket {
  src: string;
  alt: string;
  top: string;
  left: string;
  size: string;
  rotate: number;
  opacity: string;
  duration: number;
  delay: number;
}

const scatteredBackgroundPackets: ScatteredPacket[] = [
  // =========================================================================
  // 1. UNIQUE 5KG WHOLESALE BAGS (Only 1 image per bag, ~3x scale: w-28 to w-52)
  // =========================================================================
  // Bag 1: 5kg Sultan Family Mixture Bag (Upper-Left Flank)
  { src: '/sultan-bag.png', alt: '5kg Sultan Family Mixture Bag', top: '14%', left: '8%', size: 'w-28 sm:w-36 md:w-44 lg:w-52', rotate: -12, opacity: 'opacity-80', duration: 6.2, delay: 0 },
  // Bag 2: 5kg Diamond Mixture Bag (Upper-Right Flank)
  { src: '/dmt-bag.png', alt: '5kg Diamond Mixture Bag', top: '18%', left: '88%', size: 'w-28 sm:w-36 md:w-44 lg:w-52', rotate: 14, opacity: 'opacity-80', duration: 5.8, delay: 0.4 },
  // Bag 3: 5kg Telangana Mixture Bag (Lower-Center Behind Button / Cards)
  { src: '/telangana-bag.png', alt: '5kg Telangana Mixture Bag', top: '78%', left: '48%', size: 'w-28 sm:w-36 md:w-44 lg:w-50', rotate: -6, opacity: 'opacity-80', duration: 6.6, delay: 1.0 },

  // =========================================================================
  // 2. REPEATED RETAIL PACKETS (Standard ~1/3 scale: w-10 to w-18)
  // =========================================================================
  // Top Row
  { src: '/mahek.png', alt: 'Mahek Elaichi Pouch', top: '5%', left: '30%', size: 'w-11 sm:w-13 md:w-15 lg:w-17', rotate: 12, opacity: 'opacity-80', duration: 5.5, delay: 0.8 },
  { src: '/star-goodluck-tea-big.png', alt: 'Star GoodLuck Pack', top: '4%', left: '66%', size: 'w-11 sm:w-13 md:w-15 lg:w-18', rotate: -10, opacity: 'opacity-80', duration: 6.0, delay: 1.2 },

  // Upper-Mid (Around & Behind Heading)
  { src: '/star.png', alt: 'Star Brick Pack', top: '22%', left: '25%', size: 'w-10 sm:w-12 md:w-14 lg:w-16', rotate: -14, opacity: 'opacity-80', duration: 6.5, delay: 1.5 },
  { src: '/dmt-cutout.png', alt: 'Diamond Mixture Pouch', top: '18%', left: '48%', size: 'w-11 sm:w-13 md:w-15 lg:w-17', rotate: 12, opacity: 'opacity-80', duration: 5.2, delay: 0.3 },
  { src: '/mahek.png', alt: 'Mahek Elaichi Pouch', top: '24%', left: '72%', size: 'w-11 sm:w-13 md:w-15 lg:w-17', rotate: -8, opacity: 'opacity-80', duration: 5.7, delay: 0.6 },

  // Center / Mid-Lower (Behind Subheading & Pillar Cards)
  { src: '/star-goodluck-tea-big.png', alt: 'Star GoodLuck Pack', top: '46%', left: '12%', size: 'w-11 sm:w-13 md:w-15 lg:w-18', rotate: 15, opacity: 'opacity-80', duration: 5.6, delay: 0.7 },
  { src: '/dmt-cutout.png', alt: 'Diamond Mixture Pouch', top: '44%', left: '34%', size: 'w-11 sm:w-13 md:w-15 lg:w-17', rotate: -12, opacity: 'opacity-80', duration: 6.1, delay: 1.3 },
  { src: '/star.png', alt: 'Star Brick Pack', top: '43%', left: '64%', size: 'w-10 sm:w-12 md:w-14 lg:w-16', rotate: 8, opacity: 'opacity-80', duration: 5.9, delay: 0.2 },
  { src: '/mahek.png', alt: 'Mahek Elaichi Pouch', top: '48%', left: '86%', size: 'w-11 sm:w-13 md:w-15 lg:w-17', rotate: -16, opacity: 'opacity-80', duration: 5.8, delay: 0.5 },

  // Lower Area (Around & Behind Action Button)
  { src: '/star.png', alt: 'Star Brick Pack', top: '74%', left: '10%', size: 'w-10 sm:w-12 md:w-14 lg:w-16', rotate: 10, opacity: 'opacity-80', duration: 6.3, delay: 1.6 },
  { src: '/star-goodluck-tea-big.png', alt: 'Star GoodLuck Pack', top: '76%', left: '26%', size: 'w-11 sm:w-13 md:w-15 lg:w-18', rotate: -12, opacity: 'opacity-80', duration: 5.4, delay: 0.9 },
  { src: '/dmt-cutout.png', alt: 'Diamond Mixture Pouch', top: '74%', left: '74%', size: 'w-11 sm:w-13 md:w-15 lg:w-17', rotate: 14, opacity: 'opacity-80', duration: 6.7, delay: 1.1 },
  { src: '/star-goodluck-tea-big.png', alt: 'Star GoodLuck Pack', top: '80%', left: '88%', size: 'w-11 sm:w-13 md:w-15 lg:w-18', rotate: -8, opacity: 'opacity-80', duration: 6.0, delay: 1.4 },
  { src: '/mahek.png', alt: 'Mahek Elaichi Pouch', top: '86%', left: '62%', size: 'w-11 sm:w-13 md:w-15 lg:w-17', rotate: 12, opacity: 'opacity-80', duration: 5.5, delay: 0.3 },
];

export function DealershipCtaSection({ id = 'dealership' }: DealershipCtaSectionProps) {
  return (
    <section
      id={id}
      className="relative w-full min-h-[100dvh] py-20 sm:py-28 px-4 sm:px-8 bg-white flex items-center justify-center text-center overflow-hidden"
    >
      {/* Scattered Product Packets & Bags Field (Lowest z-index) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Soft radial overlay to ensure crystal-clear text readability in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.25)_65%,transparent_100%)] z-[1]" />

        {/* Scattered Mini Packets */}
        {scatteredBackgroundPackets.map((pkt, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -8, 0],
              rotate: [pkt.rotate, pkt.rotate + (idx % 2 === 0 ? 2 : -2), pkt.rotate],
            }}
            transition={{
              duration: pkt.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: pkt.delay,
            }}
            style={{
              top: pkt.top,
              left: pkt.left,
              transform: `translate(-50%, -50%) rotate(${pkt.rotate}deg)`,
            }}
            className={`absolute ${pkt.size} ${pkt.opacity} filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-opacity`}
          >
            <img
              src={pkt.src}
              alt={pkt.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Heading */}
        <motion.h2
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-950 font-bold tracking-tight mb-2 sm:mb-3 leading-tight max-w-3xl"
        >
          Do You Need Dealership For Our Brands? Partner With Us.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal"
        >
          Join South India&apos;s trusted 25-year tea family. We are actively welcoming authorized dealers,
          wholesalers, and distributors looking for fast-moving blends with high consumer loyalty.
        </motion.p>

        {/* Compact Pillar Cards (Title Only) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10 w-full max-w-2xl">
          <motion.div
            variants={cardItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-sm text-neutral-800 text-xs sm:text-sm font-semibold hover:border-neutral-300 transition-colors"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-amber-500/10 text-amber-700 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
            <span>25+ Years Legacy</span>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-sm text-neutral-800 text-xs sm:text-sm font-semibold hover:border-neutral-300 transition-colors"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-amber-500/10 text-amber-700 shrink-0">
              <TrendingUp className="w-3.5 h-3.5" />
            </span>
            <span>Profitable Margins</span>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-sm text-neutral-800 text-xs sm:text-sm font-semibold hover:border-neutral-300 transition-colors"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-amber-500/10 text-amber-700 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </span>
            <span>Estate Direct Freshness</span>
          </motion.div>
        </div>

        {/* Action Button: Call For Dealership */}
        <div className="flex items-center justify-center w-full sm:w-auto">
          <a
            href={`tel:${company.phone}`}
            className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-neutral-950 text-white font-bold text-sm sm:text-base hover:bg-neutral-800 transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-neutral-950 transition-transform group-hover:scale-110">
              <Phone className="w-4 h-4 animate-pulse" />
            </span>
            <div className="text-left">
              <div className="text-[10px] sm:text-xs text-amber-400 uppercase tracking-wider font-semibold">
                Call For Dealership
              </div>
              <div className="text-sm sm:text-base font-bold">+91 {company.phoneDisplay}</div>
            </div>
            <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
