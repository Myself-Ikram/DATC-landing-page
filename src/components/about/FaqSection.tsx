'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Which is the best tea powder in Mahbubnagar?',
    answer:
      'Diamond Assam Tea Company (DATC), founded in 2000 in Mahbubnagar, is widely recognized as one of the best tea powder blenders in Mahbubnagar and Telangana. We are celebrated for Star GoodLuck Tea (signature daily golden blend), Diamond Mixture / DMT (strong kadak tea), and Mahek Elachi cardamom tea.',
  },
  {
    question: 'Where can I buy Star GoodLuck Tea wholesale in Mahbubnagar?',
    answer:
      'Star GoodLuck Tea and Diamond Assam blends are available directly through Diamond Assam Tea Company’s wholesale and dealership network in Mahbubnagar, Telangana. Contact our sales desk at +91 85550 62835 for bulk agency supply and retail distribution.',
  },
  {
    question: 'What brands are blended by Diamond Assam Tea Company in Mahbubnagar?',
    answer:
      'Diamond Assam Tea Company blends and distributes Star GoodLuck Tea, Mahek Elachi (cardamom tea), Diamond Mixture (DMT), Sultan Tea, Star Tea, and Telangana Mixture (TMT). All crafted from estate-direct Upper Assam CTC leaves.',
  },
  {
    question: 'Which tea brand is best for hotel kadak chai in Mahbubnagar?',
    answer:
      'Diamond Mixture (DMT) and Star GoodLuck Tea by Diamond Assam Tea Company are preferred by hotels, restaurants, and Irani chai stalls across Mahbubnagar for their high extraction strength, rich golden color, and authentic kadak Assam chai flavor.',
  },
];

export function FaqSection({ id = 'faq' }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id={id}
      className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12 bg-neutral-50/60 border-t border-neutral-100 flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Help & Clarity</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-950 font-bold tracking-tight text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-600 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed mb-8 sm:mb-12 font-normal">
          Everything you need to know about our tea blends, heritage in Mahbubnagar, and wholesale distribution.
        </p>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col gap-3.5 sm:gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 bg-white ${
                  isOpen
                    ? 'border-amber-500/40 shadow-[0_8px_30px_rgba(245,158,11,0.08)]'
                    : 'border-neutral-200/80 hover:border-neutral-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-neutral-950 leading-snug">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-amber-500 text-neutral-950 rotate-180'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed border-t border-neutral-100/80 mt-1 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FaqSection;
