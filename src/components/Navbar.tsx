
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './navbar/Logo';
import DesktopNav from './navbar/DesktopNav';
import MobileMenu from './navbar/MobileMenu';

const navigation = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Contato', href: '#contato' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < window.innerHeight;
      setIsAtTop(isTop);
      setIsScrolled(window.scrollY > 0);

      // Detectar seção ativa
      const sections = navigation.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Remove o # do início do href se estiver presente
    const cleanSectionId = sectionId.replace('#', '');
    const element = document.getElementById(cleanSectionId);
    
    if (element) {
      const offset = 80; // Altura do header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false);
    }
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo isAtTop={isAtTop} isScrolled={isScrolled} />
          
          <DesktopNav 
            navigation={navigation}
            activeSection={activeSection}
            isAtTop={isAtTop}
            isScrolled={isScrolled}
            onNavigate={scrollToSection}
          />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`interactive-element inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isAtTop && !isScrolled ? 'text-white hover:text-white/80' : 'hover:text-primary'
              }`}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        activeSection={activeSection}
        navigation={navigation}
        onNavigate={scrollToSection}
      />
    </nav>
  );
};

export default Navbar;
