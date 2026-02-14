import { IMAGES } from '../../data/imageConstants';

export function Promotion() {
  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${IMAGES.promotion.background})` }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-primary-500 opacity-90"></div>

      <div className="container relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Want to Be Part of Our Journey?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+911234567890"
            className="bg-white text-primary-500 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7h-1v1h1V7zm0 2h-1v1h1V9zm-3-2H9v1h2V7zm0 2H9v1h2V9z" />
            </svg>
            Become a Distributor
          </a>
          <a
            href="tel:+911234567890"
            className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-primary-500 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H6a1 1 0 01-1-1V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
            </svg>
            Franchise
          </a>
        </div>
      </div>
    </section>
  );
}
