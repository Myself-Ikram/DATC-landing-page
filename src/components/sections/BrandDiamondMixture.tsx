import { motion } from 'framer-motion';
import { IMAGES } from '../../data/imageConstants';

export function BrandDiamondMixture() {
  return (
    <section className="py-12 md:py-16 bg-gray-200">
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
              Diamond Mixture Tea
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Finest mixture of premium Assam tea leaves selected for their rich character and depth.
              A carefully crafted blend that delivers exceptional taste with a robust full-bodied flavor profile.
              Perfect for tea connoisseurs who appreciate the bold authentic taste of traditional black tea.
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
              alt="Diamond Mixture Tea"
              className="w-3/4 md:w-2/3 lg:w-1/2 h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
