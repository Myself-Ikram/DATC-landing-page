import { motion } from 'framer-motion';
import { IMAGES } from '../../data/imageConstants';

export function About() {
  const baseDelay = 0.3;

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image - Left */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: baseDelay }}
          >
            <img
                src={IMAGES.about.teaPreparation}
                alt="Diamond Assam Tea Company"
                className="h-auto rounded-lg shadow-md"
              />
          </motion.div>

          {/* Content - Right */}
          <div className="flex-1">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: baseDelay + 0.2 }}
            >
              <span className="text-gray-900">About</span>{' '}
              <span className="text-primary-500">Our Legacy</span>
            </motion.h2>
            <div className="space-y-4 text-gray-600">
              {[
                "With 20+ years of dedicated service, we have established our presence across Mahbubnagar, Vikarabad, Nagar Kurnool, and beyond.",
                "Our tea journey began in 2000, supplying premium products across all these regions. We prioritize customer satisfaction by testing various blends to ensure premium quality in every package.",
                "Starting from a small town from Mahbubnagar, we grew step by step - blending samples, testing them ourselves, and incorporating valuable customer reviews to continuously improve our offerings across several districts."
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: baseDelay + 0.3 + index * 0.15 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
