import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  TOP_TORN_FILL,
  TOP_TORN_LINE,
  BOT_TORN_FILL,
  BOT_TORN_LINE,
} from '../../data/tornEdges';

export interface TornPaperQuoteSectionProps {
  id: string;
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  quote: string;
  subtext?: string;
  flipHorizontal?: boolean;
  filterId?: string;
  gradientId?: string;
  bgColorClass?: string;
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

export function TornPaperQuoteSection({
  id,
  badgeText,
  badgeIcon = <Sparkles className="w-3.5 h-3.5 text-amber-800" />,
  quote,
  subtext,
  flipHorizontal = false,
  filterId = 'tear-shadow',
  bgColorClass = 'bg-[#FAF6ED]',
}: TornPaperQuoteSectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-16 sm:py-20 md:py-24 ${bgColorClass} flex items-center justify-center overflow-hidden`}
    >
      {/* ========================================================================= */}
      {/* 1. TOP TORN SVG DIVIDER (~1 inch / 96px height)                           */}
      {/* Outer fill matches page bg (#FFFFFF), with a crisp black/dark deckled line */}
      {/* ========================================================================= */}
      <div
        className={`absolute top-0 left-0 right-0 w-full h-[72px] sm:h-[84px] md:h-[96px] pointer-events-none select-none z-10 overflow-hidden ${flipHorizontal ? 'scale-x-[-1]' : ''
          }`}
      >
        <svg
          viewBox="0 0 480 96"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <filter id={`${filterId}-top`} x="-5%" y="-10%" width="110%" height="135%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Solid fill matching page background (#FFFFFF) merging seamlessly */}
          <path
            d={TOP_TORN_FILL}
            fill="#FFFFFF"
            filter={`url(#${filterId}-top)`}
          />

          {/* Crisp black / dark deckled border line along the rip */}
          <path
            d={TOP_TORN_LINE}
            fill="none"
            stroke="#262626"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />

          {/* Soft inner paper fiber highlight */}
          <path
            d={TOP_TORN_LINE}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeOpacity="0.6"
            transform="translate(0, 0.6)"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. BOTTOM TORN SVG DIVIDER (~1 inch / 96px height)                        */}
      {/* Outer fill matches page bg (#FFFFFF), with a crisp black/dark deckled line */}
      {/* ========================================================================= */}
      <div
        className={`absolute bottom-0 left-0 right-0 w-full h-[72px] sm:h-[84px] md:h-[96px] pointer-events-none select-none z-10 overflow-hidden ${flipHorizontal ? 'scale-x-[-1]' : ''
          }`}
      >
        <svg
          viewBox="0 0 480 96"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <filter id={`${filterId}-bot`} x="-5%" y="-10%" width="110%" height="135%">
              <feDropShadow dx="0" dy="-4" stdDeviation="5" floodColor="#000000" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Solid fill matching page background (#FFFFFF) merging seamlessly */}
          <path
            d={BOT_TORN_FILL}
            fill="#FFFFFF"
            filter={`url(#${filterId}-bot)`}
          />

          {/* Crisp black / dark deckled border line along the rip */}
          <path
            d={BOT_TORN_LINE}
            fill="none"
            stroke="#262626"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />

          {/* Soft inner paper fiber highlight */}
          <path
            d={BOT_TORN_LINE}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeOpacity="0.6"
            transform="translate(0, -0.6)"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. CONTENT INSIDE TORN SECTION (Full width quote, zero padding or margin) */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center p-0 m-0">
        {/* Badge */}
        {badgeText && (
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/10 text-amber-950 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
          >
            {badgeIcon}
            <span>{badgeText}</span>
          </motion.div>
        )}

        {/* Full Width Quote Line with zero padding and zero margin */}
        <motion.h2
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-neutral-950 font-bold italic tracking-wide leading-tight sm:leading-snug m-0 p-0"
        >
          <span className="text-amber-800 text-3xl sm:text-4xl md:text-5xl font-serif mr-1.5 select-none">“</span>
          {quote}
          <span className="text-amber-800 text-3xl sm:text-4xl md:text-5xl font-serif ml-1.5 select-none">”</span>
        </motion.h2>
      </div>
    </section>
  );
}
export default TornPaperQuoteSection;
