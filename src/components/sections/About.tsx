import { Sparkles, Calendar, Award, CheckCircle } from 'lucide-react';
import { timeline } from '../../data/company';

const stats = [
  { value: '25+', label: 'Years of Heritage', sub: 'Serving Since 2000' },
  { value: '5+', label: 'Districts Reached', sub: 'Telangana & Beyond' },
  { value: '2', label: 'Flagship Masterpieces', sub: 'Mahek & Star GoodLuck' },
  { value: '100%', label: 'Assam Origin', sub: 'Estate Garden Quality' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#050706] text-white overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-xs tracking-widest uppercase mb-4">
            <Sparkles size={14} />
            Our Heritage & Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-bold mb-4 tracking-tight">
            A Quarter Century of <span className="text-amber-400">Pure Assam Legacy</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            From our roots in Mahbubnagar to homes and tea lovers across Telangana, our mission is to deliver the uncompromising warmth of authentic Assam tea.
          </p>
        </div>

        {/* Top Story & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Visual Showcase - Duo Packets Highlight */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 sm:p-8 bg-gradient-to-br from-white/5 via-black/40 to-black/80 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-4 sm:gap-6 py-6">
                <img
                  src="/mahek.png"
                  alt="Mahek Elachi Tea"
                  className="w-1/2 max-h-64 object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="/star-goodluck-tea-big.png"
                  alt="Star GoodLuck Tea"
                  className="w-1/2 max-h-64 object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Award Badge */}
              <div className="mt-4 p-4 rounded-xl bg-black/60 border border-amber-500/30 backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct-From-Garden CTC</h4>
                  <p className="text-xs text-white/60">Blended and calibrated for the regional South Indian palate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Heritage Narrative - Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold mb-5">
              The Journey of a Thousand Brews
            </h3>
            <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
              <p>
                At Diamond Assam Tea Company, our commitment has remained steadfast since 2000: to bring the rich, robust spirit of India's famed Assam valley directly to tea lovers, daily households, and establishments.
              </p>
              <p>
                Starting in Mahbubnagar, we dedicated ourselves to two signature blends that meet every mood: <strong>Mahek Elachi Tea</strong>, offering the calming fragrance of genuine crushed cardamom, and <strong>Star GoodLuck Tea</strong>, delivering an energizing malty brew with deep golden color.
              </p>
              <p>
                Every pouch is packed under stringent hygiene standards, ensuring the freshest aroma and unadulterated flavor from first boil to the last sip.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="text-white text-sm font-semibold">100% Garden Fresh</h5>
                  <p className="text-xs text-white/50">Handpicked tea estate CTC</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="text-white text-sm font-semibold">Decades of Trust</h5>
                  <p className="text-xs text-white/50">Reliable quality since 2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center hover:border-amber-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-white/50">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Key Milestones Through The Years
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-white/10">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row pl-12 sm:pl-0`}
                >
                  {/* Center Node */}
                  <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-black z-10" />

                  {/* Card */}
                  <div className={`w-full sm:w-[45%] ${isEven ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                        <Calendar size={12} />
                        {item.year}
                      </span>
                      <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
