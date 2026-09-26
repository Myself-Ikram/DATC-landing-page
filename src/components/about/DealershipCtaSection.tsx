import { motion, type Variants } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Phone,
  MessageCircle,
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

export function DealershipCtaSection({ id = 'dealership' }: DealershipCtaSectionProps) {
  return (
    <section
      id={id}
      className="relative w-full min-h-[100dvh] py-20 sm:py-28 px-4 sm:px-8 bg-neutral-50/70 border-t border-neutral-200/70 flex items-center justify-center text-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Badge */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 sm:mb-4"
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Business & Dealership Inquiries</span>
        </motion.div>

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

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-4xl mb-6 sm:mb-8 text-left">
          <motion.div
            variants={cardItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-3 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-300 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="font-bold text-neutral-900 text-xs sm:text-sm mb-1">25+ Years Legacy</div>
            <div className="text-[11px] sm:text-xs text-neutral-600 leading-snug">
              Unmatched customer trust and repeat household demand across districts.
            </div>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-3 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-300 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-2">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="font-bold text-neutral-900 text-xs sm:text-sm mb-1">Profitable Margins</div>
            <div className="text-[11px] sm:text-xs text-neutral-600 leading-snug">
              Attractive distributor pricing, fast order turnover & marketing support.
            </div>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-3 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-300 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="font-bold text-neutral-900 text-xs sm:text-sm mb-1">Estate Direct Freshness</div>
            <div className="text-[11px] sm:text-xs text-neutral-600 leading-snug">
              Consistent prime Upper Assam harvest with unbroken supply chain.
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
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

          <a
            href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
              'Hello Diamond Assam Tea Company, I am interested in dealership and distribution opportunities for your tea brands.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20ba59] transition-all duration-300 shadow-[0_12px_30px_rgba(37,211,102,0.25)] hover:shadow-[0_16px_36px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="mt-4 sm:mt-5 text-[11px] sm:text-xs text-neutral-500">
          Serving Telangana & South India • Direct Factory Dispatch from Mahbubnagar
        </div>
      </div>
    </section>
  );
}
