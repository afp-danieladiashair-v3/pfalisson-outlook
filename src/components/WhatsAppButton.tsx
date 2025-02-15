
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5534999659886"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      aria-label="Contato via WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
