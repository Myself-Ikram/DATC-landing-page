import React from 'react';
import { flagshipProducts, company } from '../../data/company';
import { Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

export const SensoryComparison: React.FC = () => {
  const mahek = flagshipProducts[0];
  const star = flagshipProducts[1];

  const handleInquire = (productName: string) => {
    const text = encodeURIComponent(
      `Hello Diamond Assam Tea Company! I would like more information and wholesale pricing for ${productName}.`
    );
    window.open(`https://wa.me/${company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="sensory-comparison" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#070B09] text-white overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-950/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-950/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Two Master Blends • One Quality Promise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-serif tracking-tight text-white mb-4">
            Choose Your Daily Ritual
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Crafted for discerning palates across Telangana. Whether you crave the fragrant cardamom ecstasy of Mahek or the robust golden malt of Star GoodLuck, each cup is an authentic Assam experience.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Mahek Elachi */}
          <div className="relative group rounded-3xl p-6 sm:p-8 border border-emerald-500/20 bg-gradient-to-b from-emerald-950/40 via-[#071F14]/60 to-[#04120C] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/40 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-2">
                  Fragrant & Aromatic
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-white">
                  {mahek.name}
                </h3>
                <p className="text-emerald-400/90 text-sm font-medium mt-1">
                  "{mahek.tagline}"
                </p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-1 bg-black/40 rounded-2xl border border-white/10">
                <img src={mahek.image} alt={mahek.name} className="h-full w-auto object-contain drop-shadow" />
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {mahek.description}
            </p>

            {/* Profile Bars */}
            <div className="space-y-3.5 mb-8 bg-black/30 p-4 rounded-2xl border border-white/5">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-white/80">Cardamom Aroma</span>
                  <span className="text-emerald-400">96%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-white/80">Liquor Strength</span>
                  <span className="text-emerald-400">85%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500/80 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-white/80">Fullness & Body</span>
                  <span className="text-emerald-400">90%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500/70 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-8 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real crushed cardamom seeds blended into CTC</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant soothing stress-relief aroma</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pack sizes: 250g, 500g, 1kg pouches</span>
              </li>
            </ul>

            {/* Inquire CTA */}
            <button
              onClick={() => handleInquire(mahek.name)}
              className="w-full py-3 px-6 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Inquire for Mahek Elachi</span>
            </button>
          </div>

          {/* Card 2: Star Goodluck */}
          <div className="relative group rounded-3xl p-6 sm:p-8 border border-amber-500/20 bg-gradient-to-b from-amber-950/40 via-[#1C1205]/60 to-[#100B03] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-amber-500/40 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-2">
                  Rich & Golden Malt
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-white">
                  {star.name}
                </h3>
                <p className="text-amber-400/90 text-sm font-medium mt-1">
                  "{star.tagline}"
                </p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-1 bg-black/40 rounded-2xl border border-white/10">
                <img src={star.image} alt={star.name} className="h-full w-auto object-contain drop-shadow" />
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {star.description}
            </p>

            {/* Profile Bars */}
            <div className="space-y-3.5 mb-8 bg-black/30 p-4 rounded-2xl border border-white/5">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-white/80">Liquor Strength & Kadak</span>
                  <span className="text-amber-400">98%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '98%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-white/80">Malty Sweetness</span>
                  <span className="text-amber-400">92%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500/80 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-white/80">Golden Cup Color</span>
                  <span className="text-amber-400">95%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500/70 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-8 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Selected Assam CTC Granules</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Deep reddish-gold liquor with dense milk froth</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pack sizes: 250g, 500g, 1kg pouches</span>
              </li>
            </ul>

            {/* Inquire CTA */}
            <button
              onClick={() => handleInquire(star.name)}
              className="w-full py-3 px-6 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Inquire for Star GoodLuck</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
