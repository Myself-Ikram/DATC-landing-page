import { motion } from 'framer-motion';

export function BrandsHeading() {
  const words = ["Experience", "Our", "Finest", "Tea", "Collection"];

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
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={word === "Finest" || word === "Tea" ? "text-primary-500 font-semibold" : ""}
              >
                {word}{"\u00A0"}
              </motion.span>
            ))}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
