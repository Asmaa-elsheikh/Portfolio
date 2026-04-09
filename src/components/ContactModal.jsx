import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);

    try {
      // THE USER NEEDS TO REPLACE 'YOUR_FORMSPREE_ID' WITH THEIR ACTUAL ID
      // Example: https://formspree.io/f/mqkvvovy
      const response = await fetch('https://formspree.io/f/mqegjdjg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        const errorText = await response.text();
        console.error("Formspree error response:", errorText);
        setErrorMessage(`Formspree error: ${errorText.substring(0, 50)}... Please check console.`);
        setStatus('error');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setErrorMessage("Network error. Please check your connection.");
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-panel p-8 rounded-3xl border border-outline-variant/20 shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-headline text-3xl font-extrabold mb-2">Send a Message</h2>
                <p className="font-body text-on-surface-variant text-sm">I'll get back to you as soon as possible.</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-surface-container-highest transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="font-headline text-2xl font-bold">Message Sent!</h3>
                <p className="font-body text-on-surface-variant">Thank you for reaching out. I'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="How can I help you?"
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-error text-xs ml-1 font-medium">{errorMessage || "Something went wrong. Please check your connection and try again."}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-gradient-to-br from-primary-dim to-primary text-white font-label text-sm uppercase tracking-widest font-bold shadow-lg shadow-primary-dim/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
