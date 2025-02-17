
import { motion } from 'framer-motion';
import { Instagram, Youtube, MessageSquare } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/social';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  navigation: Array<{ name: string; href: string }>;
  onNavigate: (href: string) => void;
}

const MobileMenu = ({ isOpen, activeSection, navigation, onNavigate }: MobileMenuProps) => {
  return (
    <div 
      className={`md:hidden fixed top-16 left-0 right-0 transition-all duration-300 ${
        isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="py-2">
          {navigation.map((section) => (
            <button
              key={section.name}
              onClick={() => onNavigate(section.href)}
              className={`block w-full text-left px-6 py-2 hover:text-primary transition-colors ${
                activeSection === section.href.substring(1) ? 'text-primary' : 'text-gray-900'
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
        <div className="px-6 py-3 border-t border-gray-100 flex justify-center space-x-6">
          <motion.a 
            href={SOCIAL_LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover-lift text-gray-600 hover:text-primary"
            whileHover={{ scale: 1.1 }}
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a 
            href={SOCIAL_LINKS.TIKTOK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-lift text-gray-600 hover:text-primary"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </motion.a>
          <motion.a 
            href={SOCIAL_LINKS.YOUTUBE} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-lift text-gray-600 hover:text-primary"
            whileHover={{ scale: 1.1 }}
          >
            <Youtube size={20} />
          </motion.a>
          <motion.a 
            href={SOCIAL_LINKS.WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-lift text-gray-600 hover:text-primary"
            whileHover={{ scale: 1.1 }}
          >
            <MessageSquare size={20} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
