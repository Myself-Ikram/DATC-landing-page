import { motion } from 'framer-motion';

export function BrandsHeading() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex flex-wrap justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              Experience{"\u00A0"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our{"\u00A0"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: [1, 1.1, 1] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 },
                scale: { duration: 2, delay: 1.8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-primary-500 font-semibold"
            >
              Finest{"\u00A0"}Tea{"\u00A0"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Collection{"\u00A0"}
            </motion.span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
