import { motion } from 'framer-motion';
import { IMAGES } from '../../data/imageConstants';

export function Header() {

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo - Left */}
        <motion.a
          href="/"
          className="flex flex-row items-center gap-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <img
            src={IMAGES.footer.logo}
            alt="Diamond Assam Tea Company"
            className="h-12 w-auto"
          />
          <p className="text-base md:text-xl lg:text-2xl text-gray-900 font-serif">
            {["Diamond", "Assam", "Tea", "Company"].map((word, index) => (
              <span key={index}>
                {index > 0 && ' '}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
        </motion.a>

        {/* Navigation Menu - Center */}
        <ul className="hidden md:flex items-center gap-8">
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Home</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Shop</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Products</a>
          </motion.li>
             </ul>
      </nav>
    </header>
  );
}
