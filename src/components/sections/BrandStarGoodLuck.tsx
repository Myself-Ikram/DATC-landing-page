import { motion } from 'framer-motion';
import { IMAGES } from '../../data/imageConstants';

export function BrandStarGoodLuck() {
  return (
    <section className="py-12 md:py-16 bg-yellow-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={IMAGES.brands.productGroup}
              alt="Star GoodLuck Tea"
              className="w-3/4 md:w-2/3 lg:w-1/2 h-auto"
            />
          </motion.div>

          {/* Content - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            {/* Brand Name */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Star GoodLuck Tea
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Premium blended tea for good fortune. Experience the perfect balance of flavor and aroma in every cup.
              Crafted from the finest Assam tea leaves to bring prosperity and warmth to your daily tea moments.
              A harmonious blend that delivers rich taste and exceptional quality with every sip.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
