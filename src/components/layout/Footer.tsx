export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container text-center">
        {/* Company Name and Description */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">Diamond Assam Tea Company</h3>
          <p className="text-sm leading-relaxed">
            Premium Assam teas delivered to your doorstep. Experience the finest quality teas from India's tea gardens.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 pt-6">
          {/* Facebook */}
          <span className="text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-1.136-.088c-.961-.059-1.969.197-2.615.842-.636.636-.87 1.65-.842 2.637v1.768h3.931l-.43 3.667h-3.501v7.98C17.697 22.905 23.5 18.382 23.5 12.5 23.5 5.872 18.128.5 11.5.5S-.5 5.872-.5 12.5c0 5.882 5.803 10.405 9.601 11.191z"/>
            </svg>
          </span>
          {/* Instagram */}
          <span className="text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </span>
          {/* X (Twitter) */}
          <span className="text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </span>
        </div>

        {/* Copyright */}
        <div className="text-sm pt-6 mt-6">
          <p>&copy; 2025 Diamond Assam Tea Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
