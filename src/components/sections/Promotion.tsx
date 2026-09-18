import { Sparkles, Phone, MessageCircle, MapPin, Building2, ExternalLink } from 'lucide-react';
import { company } from '../../data/company';

export function Promotion() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#060807] text-white overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column - Dealership & Partnership Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-xs tracking-widest uppercase mb-4">
                <Sparkles size={14} />
                Dealership & Wholesale Desk
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
                Stock the Flagship Blends <span className="text-amber-400">in Your Store</span>
              </h2>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                Join our regional distribution network across South India. Supply your retailers, hotels, and stalls with high-demand <strong>Mahek Elachi Tea</strong> and <strong>Star GoodLuck Tea</strong> backed by 25+ years of verified brand trust.
              </p>

              {/* Partnership Highlights */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      Distributor & Wholesale Benefits
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Competitive wholesale margins, fresh consignment dispatch, point-of-sale branding, and dedicated account support.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      Packaging Plant & Central Distribution
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {company.location}. Prompt logistics to Mahbubnagar, Vikarabad, Narayanpet, and adjoining regions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${company.phone}`}
                className="px-6 py-3 rounded-full font-bold text-sm bg-amber-500 hover:bg-amber-400 text-black inline-flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Phone size={16} />
                <span>Call: {company.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Diamond Assam Tea Company, I am interested in wholesale/distribution for Mahek Elachi and Star GoodLuck.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-bold text-sm bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-2 transition-all"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Wholesale Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column - Google Map Embed in Luxury Frame */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="rounded-3xl p-3 border border-white/10 shadow-2xl flex-1 flex flex-col min-h-[420px] bg-black/40 backdrop-blur-xl relative overflow-hidden">
              {/* Map Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/60 rounded-t-2xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>Packaging & Distribution Location</span>
                </div>
                <a
                  href="https://maps.google.com/maps?q=16.747330,77.985944&z=18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  Open in Google Maps <ExternalLink size={12} />
                </a>
              </div>

              {/* Iframe */}
              <div className="relative flex-1 w-full rounded-b-2xl overflow-hidden min-h-[350px]">
                <iframe
                  title="Diamond Assam Tea Company Location"
                  src="https://maps.google.com/maps?q=16.747330,77.985944&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[25%] contrast-[1.05] filter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}