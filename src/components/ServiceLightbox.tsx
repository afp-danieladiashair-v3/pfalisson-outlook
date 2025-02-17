
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createWhatsAppLink } from '@/utils/whatsapp';

interface ServiceLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subservices: {
    name: string;
    description: string;
  }[];
}

const ServiceLightbox = ({ isOpen, onClose, title, subservices }: ServiceLightboxProps) => {
  const handleSchedule = () => {
    const message = `Olá! Gostaria de agendar um horário para ${title.toLowerCase()}.`;
    window.open(createWhatsAppLink(message), '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-serif mb-6">{title}</h2>

            <div className="space-y-6">
              {subservices.map((subservice, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="text-lg font-medium mb-2">{subservice.name}</h3>
                  <p className="text-gray-600">{subservice.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleSchedule}
                className="inline-flex items-center px-8 py-3 bg-[rgb(244,235,255)] text-black hover:bg-primary-600 hover:text-white 
                         transition-all duration-300 rounded-full group"
              >
                Agende seu horário AGORA
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceLightbox;
