import { motion } from 'framer-motion';
import { IMAGES } from '../../data/imageConstants';

export function BrandMahekElachi() {
  return (
    <section className="py-12 md:py-16 bg-green-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Content - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {/* Brand Name */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Mahek Elachi Tea
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Rich cardamom flavored tea made with premium quality elachi seeds for authentic aromatic experience.
              A delightful blend that perfectly balances robust tea leaves with the fragrant essence of cardamom.
              Traditional recipe passed down through generations to deliver genuine taste that reminds you of home.
            </p>
          </motion.div>

          {/* Image - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={IMAGES.brands.productGroup}
              alt="Mahek Elachi Tea"
              className="w-3/4 md:w-2/3 lg:w-1/2 h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
