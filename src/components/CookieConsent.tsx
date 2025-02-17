
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 py-2 shadow-lg z-50"
        >
          <div className="container mx-auto max-w-4xl flex items-center justify-between gap-4 px-4">
            <p className="text-sm text-gray-600">
              Utilizamos cookies para melhorar sua experiência em nosso site.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={handleAccept}
                className="text-sm bg-[rgb(249,250,251)] text-gray-600 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                Aceitar
              </button>
              <button
                onClick={handleAccept}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
