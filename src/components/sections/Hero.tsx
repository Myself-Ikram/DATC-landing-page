import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { IMAGES } from '../../data/imageConstants';

export function Hero() {
  const headline = "Open up your senses with a cup of";
  const tagline = "awesome tea";
  const description = "Experience the finest quality Assam teas, carefully selected and crafted to deliver an unforgettable tea experience.";

  // Calculate delay: header logo completes at ~1s, start hero at 0.8s
  const baseDelay = 0.8;

  const headlineWords = headline.split(' ');
  const taglineWords = tagline.split(' ');

  return (
    <section className="bg-white py-20">
      <div className="container flex flex-col items-center">
        {/* Image - First Row */}
        <div className="flex-1 flex justify-center mb-8">
          <motion.div
            className="flex-1 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: baseDelay }}
          >
            {/* Green diamond shape decoration */}
            <div className="absolute -inset-2 bg-primary-500 transform rotate-45 opacity-10"></div>
            <img
              src={IMAGES.hero.main}
              alt="Diamond Assam Tea Company"
              className="relative z-10 w-full max-w-md h-auto rounded-lg"
            />
          </motion.div>
        </div>

        {/* Text Content - Second Row */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {headlineWords.map((word, index) => (
              <span key={index}>
                {index > 0 && ' '}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: baseDelay + index * 0.15 }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
            {' '}
            <span className="text-primary-500">
              {taglineWords.map((word, index) => (
                <span key={index}>
                  {index > 0 && ' '}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: baseDelay + (headlineWords.length + 1) * 0.15 + index * 0.15 }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            {description.split(' ').map((word, index) => (
              <span key={index}>
                {index > 0 && ' '}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: baseDelay + (headlineWords.length + taglineWords.length + 1) * 0.1 }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <motion.a
              href="#products"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: baseDelay + 2.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded font-medium hover:bg-primary-50 transition-colors inline-block text-center scroll-smooth"
            >
              Discover
            </motion.a>
            <motion.a
              href="tel:+919985342783"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: [1, 1.08, 1] }}
              transition={{
                opacity: { duration: 0.5, delay: baseDelay + 2.3, ease: "easeOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 text-white px-8 py-3 rounded font-medium hover:bg-primary-600 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
