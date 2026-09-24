import { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Truck
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { company, flagshipProducts, type FlagshipProduct } from '../data/company';

interface ContactPageProps {
  activeProduct?: FlagshipProduct;
  onNavigate?: (page: 'home' | 'about' | 'contact') => void;
}

export function ContactPage({ activeProduct, onNavigate }: ContactPageProps) {
  // Use Star GoodLuck as brand anchor for warm roasted amber & golden malt palette
  const starProduct = flagshipProducts[1];
  const currentProduct = activeProduct || starProduct;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 280,
        damping: 26,
      },
    },
  };

  const mapVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 240,
        damping: 25,
        delay: 0.05,
      },
    },
  };

  // Exact Google Maps Pin provided by user
  const exactPinUrl = company.googleMapUrl || 'https://maps.app.goo.gl/NLrYzwxVEsbgeesc7';

  return (
    <div
      className="relative min-h-screen w-full text-white selection:bg-amber-500/30 selection:text-amber-200 overflow-x-clip flex flex-col justify-between"
      style={{
        background: `radial-gradient(circle at 50% 15%, ${starProduct.gradientOuter} 0%, ${starProduct.gradientInner} 55%, #150C03 100%)`,
      }}
    >
      {/* Ambient warm golden amber glow halos */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.48, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] pointer-events-none blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, ${starProduct.accentColor} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[650px] h-[500px] pointer-events-none blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, ${starProduct.highlightColor} 0%, transparent 70%)`,
        }}
      />

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

      {/* Main Content Area - Clean Document Flow for Normal Scrolling */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-36 sm:pt-36 md:pt-28 pb-20 sm:pb-24 flex-1 flex flex-col justify-start lg:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center w-full my-0 lg:my-auto">
          
          {/* LEFT COLUMN: Sourcing Hub, Phone Support & Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Intro Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-300 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 font-light"
            >
              Have questions about wholesale supply, dealership distribution across South India, or our signature blends? Reach out to our central team in Mahbubnagar directly.
            </motion.p>

            {/* Direct Contact Cards Stack */}
            <div className="flex flex-col gap-4 mb-6">
              
              {/* TOP CARD: Sourcing Hub (Mentioning only Sourcing Hub) */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-white/[0.05] border border-amber-500/25 hover:border-amber-400/50 backdrop-blur-xl transition-all shadow-[0_4px_25px_rgba(0,0,0,0.4)] group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                      Sourcing Hub
                    </div>
                    <div className="text-lg sm:text-xl font-serif text-white font-semibold mb-1">
                      {company.name}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-3">
                      Mahbubnagar, Telangana - 509001, India
                      <span className="block text-amber-300/70 text-xs mt-1">
                        Direct estate-sourcing hub & dispatch network serving Mahbubnagar, Vikarabad, Narayanpet, and South India.
                      </span>
                    </p>
                    <a
                      href={exactPinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>View Exact Pin on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: Direct Phone Support */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-amber-500/25 hover:border-amber-400/50 backdrop-blur-xl transition-all shadow-[0_4px_25px_rgba(0,0,0,0.4)] flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-300/80 font-medium uppercase tracking-wider mb-0.5">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${company.phone}`}
                      className="text-lg sm:text-xl font-bold font-serif text-white hover:text-amber-300 transition-colors tracking-wide"
                    >
                      +91 {company.phoneDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${company.phone}`}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-md shadow-amber-500/20 hover:scale-105 shrink-0"
                >
                  Call Now
                </a>
              </motion.div>

              {/* CARD 3: Operating Hours & Direct Email */}
              <motion.div
                variants={itemVariants}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-300"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Hours:</span> Mon – Sat, 9:00 AM – 8:00 PM IST
                  </div>
                </div>

                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{company.email}</span>
                </a>
              </motion.div>

            </div>

            {/* Assurance Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-light"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>25+ Years Proven Trust</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-yellow-400" />
                <span>Direct Estate Dispatch</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Google Maps Interactive Exact Pin Card */}
          <motion.div
            variants={mapVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative group w-full rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-amber-500/25 via-white/[0.08] to-amber-600/20 border border-amber-500/30 backdrop-blur-2xl shadow-[0_0_80px_rgba(245,158,11,0.22),0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-amber-400/50">
              
              {/* Map Header Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    DIAMOND ASSAM TEA CO
                  </span>
                  <span className="text-[11px] text-amber-300/70 hidden sm:inline-block">
                    • Exact Pin Location
                  </span>
                </div>

                <a
                  href={exactPinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500 hover:text-black text-amber-300 border border-amber-500/30 transition-all duration-300"
                >
                  <span>Open Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Interactive Google Map with Exact Pin (Smooth Scroll Friendly on Mobile) */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#150C03]">
                <iframe
                  title="Diamond Assam Tea Company Exact Pin Location Map"
                  src={company.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full pointer-events-none md:pointer-events-auto"
                />
                {/* On mobile touch screens: tap overlay opens exact pin in Google Maps app, allowing touch drag to scroll page normally without iframe trapping */}
                <a
                  href={exactPinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden absolute inset-0 z-10"
                  aria-label="Open Diamond Assam Tea Co exact location in Google Maps"
                />
              </div>

              {/* Bottom Quick Info Bar with Link to Exact Pin */}
              <div className="flex items-center justify-end px-3 sm:px-4 py-2.5 text-[11px]">
                <a
                  href={exactPinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Subtle Copyright Footer at Bottom */}
      <footer className="relative z-10 w-full text-center py-4 text-xs text-amber-200/40 border-t border-white/[0.04]">
        © {new Date().getFullYear()} {company.name} • Pure Assam Tea Heritage Since {company.founded}
      </footer>
    </div>
  );
}
