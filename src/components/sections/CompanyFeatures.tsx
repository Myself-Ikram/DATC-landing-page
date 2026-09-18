import { Award, ShieldCheck, Sparkles, Leaf, Truck } from 'lucide-react';

const featureList = [
  {
    icon: Award,
    badge: 'Certified Heritage',
    title: 'Direct Garden Sourcing',
    description: 'Procured straight from the lush tea gardens of Assam, ensuring only prime grade CTC granules reach your cup with unadulterated freshness.',
  },
  {
    icon: ShieldCheck,
    badge: '25+ Years Legacy',
    title: 'Purity & Trust',
    description: 'Registered and certified tea blender with over two decades of uncompromising dedication to consistency, hygiene, and authentic flavor.',
  },
  {
    icon: Leaf,
    badge: 'Two Flagship Blends',
    title: 'Crafted For Connoisseurs',
    description: 'Our two iconic master blends — Mahek Elachi and Star GoodLuck — formulated specifically to delight daily tea lovers and discerning palates.',
  },
  {
    icon: Truck,
    badge: 'Rapid Distribution',
    title: 'Wide Regional Reach',
    description: 'Reliable distribution network across Mahbubnagar, Vikarabad, Narayanpet, and beyond, serving wholesale partners and retail outlets.',
  },
];

export function CompanyFeatures() {
  return (
    <section className="relative py-24 bg-[#070908] text-white overflow-hidden" id="features">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs tracking-widest uppercase mb-4">
            <Sparkles size={14} />
            Why Choose Diamond Assam
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-bold mb-4 tracking-tight">
            Rooted in Tradition, <span className="text-amber-400">Perfected by Passion</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Discover the hallmarks that make Diamond Assam Tea Company the household gold standard for thousands of mornings.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl relative group overflow-hidden border border-white/10 bg-white/[0.02] hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
            >
              {/* Card shimmer glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block text-[11px] font-semibold tracking-widest text-amber-400 uppercase mb-3">
                  {item.badge}
                </span>

                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                  <item.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors font-serif">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
