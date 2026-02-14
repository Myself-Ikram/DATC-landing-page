import { IMAGES } from '../../data/imageConstants';

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What people say about Us?
        </h2>

        {/* Testimonial Cards - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'fill-primary-500 text-primary-500' : 'fill-gray-300 text-gray-300'}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-1.91-5.82-2.79-6.53-6.7-8.72-2.61 2.23 0 6.56 3.23 11.61 2.46 4.69 1.77 4.69-.61 6.23-2.79 8.72-6.7 5.82 1.91L22 9.27l-3.09 6.26L12 22z" />
                    </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed">
                "This tea exceeded all my expectations! The flavor is rich and authentic. I will definitely be ordering again soon."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
