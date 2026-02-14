import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Nur Tea */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Nur Tea</h3>
            <p className="text-sm leading-relaxed">
              Premium Assam teas delivered to your doorstep. Experience the finest quality teas from India's tea gardens.
            </p>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Column 3: Community */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Forums</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 pt-8 border-t border-gray-700">
          <a href="#" className="hover:text-primary-500 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-primary-500 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-primary-500 transition-colors">
            <Twitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm pt-8 mt-8">
          <p>&copy; 2025 Nur Tea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
