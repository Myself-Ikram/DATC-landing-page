import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { ToastContext } from './ToastContext';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ id: number; title?: string; message: string } | null>(null);

  const showToast = useCallback((message: string, title?: string) => {
    const id = Date.now();
    setToast({ id, title, message });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 6000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div id="toast-container" className="fixed bottom-8 right-8 z-[9999] pointer-events-none flex flex-col items-end gap-3 max-w-sm w-full px-4 sm:px-0">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="pointer-events-auto w-full bg-dark-900 border-2 border-gold-400/80 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-2xl flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                <Sparkles size={20} />
              </div>
              <div className="flex-1 min-w-0">
                {toast.title && (
                  <h4 className="text-base font-serif font-bold text-white tracking-wide mb-1 flex items-center gap-2">
                    {toast.title}
                  </h4>
                )}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => setToast(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0"
                aria-label="Close notification"
              >
                <X size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
