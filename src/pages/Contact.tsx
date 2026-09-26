import { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { company, flagshipProducts, type FlagshipProduct } from '../data/company';

interface ContactPageProps {
  activeProduct?: FlagshipProduct;
  onNavigate?: (page: 'home' | 'about' | 'contact') => void;
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
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 24,
    },
  },
};

export function ContactPage({ activeProduct, onNavigate }: ContactPageProps) {
  const starProduct = flagshipProducts[1];
  const currentProduct = activeProduct || starProduct;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const exactPinUrl = company.googleMapUrl || 'https://maps.app.goo.gl/NLrYzwxVEsbgeesc7';

  return (
    <div className="relative w-full min-h-screen bg-white text-neutral-900 selection:bg-amber-500/20 selection:text-amber-900 overflow-x-hidden flex flex-col justify-between">
      {/* Global Navigation Header */}
      <Header
        activeProduct={currentProduct}
        activeTab="contact"
        onTabChange={(tab) => {
          if (tab === 'products') {
            onNavigate?.('home');
          } else if (tab === 'about') {
            onNavigate?.('about');
          }
        }}
      />

      {/* Main Content Area */}
      <main className="relative w-full flex-1 flex flex-col justify-center">
        {/* ========================================================================= */}
        {/* Contact & Map Showcase Section                                            */}
        {/* ========================================================================= */}
        <section className="relative w-full pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-8 lg:px-12 flex items-center justify-center overflow-hidden">
          {/* Subtle Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden select-none">
            <span
              style={{ letterSpacing: '-3px' }}
              className="text-[18vw] font-black uppercase leading-none text-neutral-900/[0.03] font-serif select-none whitespace-nowrap"
            >
              CONNECT
            </span>
          </div>

          {/* Warm Ambient Golden Halo */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-amber-500/[0.06] blur-[140px] pointer-events-none -z-10" />

          {/* Natural Assam Tea Powder Scatters for tactile authenticity */}
          <img
            src="/tea-powder-r-t.png"
            alt="Assam CTC Tea Leaves Scatter"
            className="absolute -top-6 right-0 w-[26vw] max-w-[340px] pointer-events-none opacity-45 select-none -z-10"
          />
          <img
            src="/tea-powder-l.png"
            alt="Assam CTC Tea Leaves Scatter Left"
            className="absolute bottom-4 left-0 w-[22vw] max-w-[280px] pointer-events-none opacity-35 select-none -z-10"
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            {/* Top Headline & Intro Header */}
            <div className="max-w-3xl mb-10 sm:mb-12 text-left">
              {/* Main Heading */}
              <motion.h1
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-950 font-bold tracking-tight mb-4 leading-[1.12]"
              >
                Let&apos;s Share a Cup of Tea & Talk Business.
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
              >
                Have questions regarding dealership distribution across South India, bulk wholesale orders,
                or our signature blends? Connect directly with our team in Mahbubnagar.
              </motion.p>
            </div>

            {/* Two-Column Grid: Communication Cards (Left) & Luxury Interactive Map (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* LEFT COLUMN: Clean Editorial Contact Cards Stack (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
                {/* CARD 1: Office Location */}
                <motion.div
                  variants={cardItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-amber-500/40 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-serif text-neutral-950 font-bold mb-1">
                        {company.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        Mahbubnagar, Telangana - 509001, India
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 2: Direct Dealership Phone Support */}
                <motion.div
                  variants={cardItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-amber-500/40 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 shrink-0 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-amber-900/80 font-bold uppercase tracking-wider mb-0.5">
                        Direct Dealership Helpline
                      </div>
                      <a
                        href={`tel:${company.phone}`}
                        className="text-xl sm:text-2xl font-bold font-serif text-neutral-950 hover:text-amber-800 transition-colors tracking-wide"
                      >
                        +91 {company.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`tel:${company.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md hover:scale-[1.02] shrink-0"
                  >
                    <span>Call Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>

                {/* CARD 3: Operating Hours & Direct Email */}
                <motion.div
                  variants={cardItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-4 sm:p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-700"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-900">Working Hours:</span> Mon – Sat, 9:00 AM – 8:00 PM IST
                    </div>
                  </div>

                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-900 hover:text-amber-700 font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{company.email}</span>
                  </a>
                </motion.div>
              </div>

              {/* RIGHT COLUMN: Luxury Google Maps Showcase Frame (6 cols) */}
              <motion.div
                variants={cardItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 flex flex-col"
              >
                <div className="relative group w-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white border border-neutral-200/90 shadow-[0_12px_45px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_16px_50px_rgba(245,158,11,0.1)]">
                  {/* Map Header Bar */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs sm:text-sm font-serif font-bold text-neutral-950 tracking-wide">
                        DIAMOND ASSAM TEA CO
                      </span>
                      <span className="text-[11px] text-neutral-500 hidden sm:inline-block">
                        • Mahbubnagar, Telangana
                      </span>
                    </div>

                    <a
                      href={exactPinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-900 hover:text-neutral-950 border border-amber-500/20 transition-all duration-200"
                    >
                      <span>Open Maps App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Embedded Interactive Google Map with Exact Pin */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
                    <iframe
                      title="Diamond Assam Tea Company Exact Pin Location Map"
                      src={company.googleMapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'contrast(1.02) saturate(1.05)' }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full pointer-events-none md:pointer-events-auto"
                    />
                    {/* On mobile screens: tap opens exact pin in Google Maps app, allowing normal page scrolling */}
                    <a
                      href={exactPinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:hidden absolute inset-0 z-10"
                      aria-label="Open Diamond Assam Tea Co exact location in Google Maps"
                    />
                  </div>

                  {/* Bottom Quick Info Bar */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 text-[11px] text-neutral-500">
                    <span>Mahbubnagar, Telangana</span>
                    <a
                      href={exactPinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 font-semibold transition-colors"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean, Decent Footer */}
      <footer className="relative z-10 w-full text-center py-6 text-xs text-neutral-500 bg-white border-t border-neutral-100">
        © {new Date().getFullYear()} {company.name} • Pure Assam Tea Heritage Since {company.founded}
      </footer>
    </div>
  );
}

export default ContactPage;
