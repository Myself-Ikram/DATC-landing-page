import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Send, Check } from 'lucide-react';
import { useToast } from '../ui/ToastContext';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    showToast(
      'Thank you for subscribing! You will receive our latest tea blends and wholesale updates.',
      'Subscription Confirmed'
    );
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative py-20 bg-dark-900 overflow-hidden border-t border-b border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-gold-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/25 bg-gold-500/10 text-gold-400 text-xs tracking-widest uppercase mb-4">
            <Sparkles size={14} />
            Exclusive Updates
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-bold mb-3 tracking-tight">
            Stay Steeped in <span className="text-gradient-gold">Excellence</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Receive seasonal harvest releases, regional blend announcements, and commercial dealer opportunities directly in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-400/80 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="btn-gold !py-3 !px-6 text-sm flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {submitted ? (
                <>
                  <Check size={16} /> Subscribed
                </>
              ) : (
                <>
                  <Send size={16} /> Subscribe
                </>
              )}
            </button>
          </form>

          <p className="text-[11px] text-gray-400 mt-3">
            We value your privacy. Unsubscribe at any time with one click.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
