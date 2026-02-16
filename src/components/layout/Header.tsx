import { motion } from 'framer-motion';
import { company } from '../../data/company';

export function Header() {

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo - Left */}
        <div className="flex flex-col gap-3">
          <motion.div
            className="text-primary-500 font-bold text-xl md:text-2xl  overflow-hidden"
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            {company.name.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.04,
                  ease: "easeOut"
                }}
                className="inline-block"
                style={{ whiteSpace: 'pre' }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

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
