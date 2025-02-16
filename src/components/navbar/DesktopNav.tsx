
import { motion } from 'framer-motion';
import { Instagram, Youtube, MessageSquare } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/social';

interface DesktopNavProps {
  navigation: Array<{ name: string; href: string }>;
  activeSection: string;
  isAtTop: boolean;
  isScrolled: boolean;
  onNavigate: (href: string) => void;
}

const DesktopNav = ({ 
  navigation, 
  activeSection, 
  isAtTop, 
  isScrolled, 
  onNavigate 
}: DesktopNavProps) => {
  const linkClasses = (section: string) => `
    nav-link transition-colors relative 
    ${isAtTop && !isScrolled ? 'text-white hover:text-white/80' : 'hover:text-primary'}
    ${activeSection === section ? 'after:scale-x-100' : 'after:scale-x-0'}
  `;

  const iconClasses = `transition-colors ${
    isAtTop && !isScrolled ? 'text-white hover:text-white/80' : 'hover:text-primary'
  }`;

  const hoverAnimation = {
    scale: 1.1,
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="ml-10 flex items-center space-x-8">
          {navigation.map((section) => (
            <motion.button
              key={section.name}
              onClick={() => onNavigate(section.href.substring(1))}
              className={linkClasses(section.name.toLowerCase())}
              whileHover={hoverAnimation}
              whileTap={{ scale: 0.95 }}
            >
              {section.name}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <motion.a 
          href={SOCIAL_LINKS.INSTAGRAM} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={iconClasses}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram size={20} />
        </motion.a>
        <motion.a 
          href={SOCIAL_LINKS.TIKTOK} 
          target="_blank" 
          rel="noopener noreferrer"
          className={iconClasses}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        </motion.a>
        <motion.a 
          href={SOCIAL_LINKS.YOUTUBE} 
          target="_blank" 
          rel="noopener noreferrer"
          className={iconClasses}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.95 }}
        >
          <Youtube size={20} />
        </motion.a>
        <motion.a 
          href={SOCIAL_LINKS.WHATSAPP} 
          target="_blank" 
          rel="noopener noreferrer"
          className={iconClasses}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.95 }}
        >
          <MessageSquare size={20} />
        </motion.a>
      </div>
    </>
  );
};

export default DesktopNav;
