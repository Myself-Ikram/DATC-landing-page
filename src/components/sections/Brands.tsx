import { motion } from 'framer-motion';
import { Star, Diamond, Sparkles } from 'lucide-react';

export function Brands() {
  const brands = [
    {
      name: 'Star GoodLuck Tea',
      icon: Star,
      description: 'Premium blended tea for good fortune',
    },
    {
      name: 'Diamond Misture Tea',
      icon: Diamond,
      description: 'Finest mixture of Assam tea leaves',
    },
    {
      name: 'Star Tea',
      icon: Star,
      description: 'Quality tea for everyday enjoyment',
    },
    {
      name: 'Mahek Elachi Tea',
      icon: Sparkles,
      description: 'Rich cardamom flavored tea',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Our Brands
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Discover our premium tea brands crafted with care
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="bg-primary-500 rounded-full p-2 md:p-3">
                  <brand.icon size={24} className="text-white md:w-8 md:h-8" />
                </div>
              </div>

              {/* Brand Name */}
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 text-center">
                {brand.name}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600 text-center">
                {brand.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
