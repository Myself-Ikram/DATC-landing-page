import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  'Hello',      // English
  'नमस्ते',     // Hindi
  'నమస్కారం',  // Telugu
  'Hola',       // Spanish
  'مرحبا',      // Arabic
];

function getTimeOfDayWord(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'subah';
  if (hour >= 12 && hour < 17) return 'dopaher';
  if (hour >= 17 && hour < 21) return 'shaam';
  return 'raat';
}

interface PreloaderProps {
  onComplete: () => void;
  title?: string;
  tagline?: string;
  isPageTransition?: boolean;
}

export function Preloader({
  onComplete,
  title,
  tagline,
  isPageTransition = false,
}: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [timeWord, setTimeWord] = useState<string>('subah');
  const [dimension, setDimension] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });

  useEffect(() => {
    setTimeWord(getTimeOfDayWord());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // For page transition, wait 1100ms and then call onComplete
  // For initial page load, cycle through greetings then trigger exit animation
  useEffect(() => {
    if (isPageTransition || title) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1100);
      return () => clearTimeout(timer);
    }

    if (index === words.length - 1) {
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 550);
      return () => clearTimeout(finishTimeout);
    }

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 1100 : 340
    );

    return () => clearTimeout(timeout);
  }, [index, onComplete, isPageTransition, title]);

  // Dennis Snellenberg's iconic SVG Bezier curve exit
  const w = dimension.width;
  const h = dimension.height;

  const initialPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h + 300} 0 ${h} L0 0`;
  const targetPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h} L0 0`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as const, delay: 0.08 },
    },
  };

  const slideUpVariants = {
    initial: { top: 0, opacity: isPageTransition ? 0 : 1 },
    animate: { top: 0, opacity: 1, transition: { duration: 0.25 } },
    exit: {
      top: '-100vh',
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.08 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' as const },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const displayText = title || words[index];

  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none"
    >
      {/* Center Logo, Greeting & Tagline */}
      <div className="relative z-10 flex flex-col items-center justify-center select-none pointer-events-auto px-4 text-center">
        {/* Central Brand Logo (Significantly larger size) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-center mb-6 sm:mb-8"
        >
          <img
            src="/main.png"
            alt="Diamond Assam Tea Company"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain filter drop-shadow-[0_12px_36px_rgba(0,0,0,0.95)]"
          />
        </motion.div>

        {/* Title or Greeting Text */}
        <motion.p
          key={displayText}
          variants={textVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 sm:mb-5"
        >
          {displayText}
        </motion.p>

        {/* Dynamic Tagline or Custom Subtitle */}
        {tagline !== undefined ? (
          tagline ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="italic text-sm sm:text-base md:text-lg text-white/85 font-serif font-normal tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-lg mt-1"
            >
              {tagline}
            </motion.p>
          ) : null
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="italic text-sm sm:text-base md:text-lg text-white/85 font-serif font-normal tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-lg mt-1"
          >
            &ldquo;Saari duniya ek taraf,{' '}
            <span className="text-amber-400 font-semibold not-italic drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)]">
              {timeWord}
            </span>{' '}
            ki chai ek taraf&rdquo;
          </motion.p>
        )}
      </div>

      {/* Dennis Snellenberg curved SVG background (Rich Black) */}
      {w > 0 && (
        <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#08090A]">
          <motion.path
            variants={curveVariants}
            initial="initial"
            exit="exit"
          />
        </svg>
      )}
    </motion.div>
  );
}

export default Preloader;
