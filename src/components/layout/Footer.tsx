import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { company, flagshipProducts } from '../../data/company';
import { useToast } from '../ui/ToastContext';

export function Footer() {
  const { showToast } = useToast();

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, network: string) => {
    e.preventDefault();
    showToast(
      `Our official ${network} profile will be launching soon! Stay tuned.`,
      'Coming Soon'
    );
  };

  const navLinks = [
    { label: 'Flagship Showcase', href: '#flagship-showcase' },
    { label: 'Tasting Profiles', href: '#sensory-comparison' },
    { label: 'Our Heritage', href: '#about' },
    { label: 'Wholesale & Map', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#040605] text-white/60 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Intro - 4 cols */}
          <div className="lg:col-span-4">
            <a href="#flagship-showcase" className="inline-flex items-center gap-3 mb-6 group">
              <img
                src="/main.png"
                alt={company.name}
                className="h-10 w-auto object-contain filter drop-shadow"
              />
              <span className="text-base font-serif font-bold text-white tracking-wide">
                {company.name}
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
              Bringing India's finest garden-fresh Assam CTC teas directly to homes, tea stalls, and regional distributors since {company.founded}.
            </p>

            {/* Social Icons with Coming Soon toast */}
            <div>
              <span className="text-xs uppercase tracking-wider text-white/40 block mb-3 font-medium">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#facebook"
                  onClick={(e) => handleSocialClick(e, 'Facebook')}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#instagram"
                  onClick={(e) => handleSocialClick(e, 'Instagram')}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="#twitter"
                  onClick={(e) => handleSocialClick(e, 'X (Twitter)')}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                  aria-label="X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Flagship Blends Column - 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Flagship Packets
            </h4>
            <ul className="space-y-3 text-sm">
              {flagshipProducts.map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#flagship-showcase"
                    className="hover:text-amber-300 transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: prod.accentColor }}
                    />
                    <span className="text-white/80 group-hover:text-white font-medium">{prod.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column - 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 group text-white/70 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column - 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Headquarters
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-white/70">
                  {company.location}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-amber-300 transition-colors text-white/70"
                >
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-amber-300 transition-colors break-all text-white/70"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-white/40">
            Registered FSSAI & Trademark Certified Tea Blender
          </p>
        </div>
      </div>
    </footer>
  );
}
