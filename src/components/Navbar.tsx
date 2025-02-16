
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, MessageSquare } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/social';

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
      const sections = ['inicio', 'servicos', 'sobre', 'galeria', 'marcas', 'contato'];
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
    const element = document.getElementById(sectionId);
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

  const linkClasses = (section: string) => `
    nav-link transition-colors relative 
    ${isAtTop && !isScrolled ? 'text-white hover:text-white/80' : 'hover:text-primary'}
    ${activeSection === section ? 'after:scale-x-100' : 'after:scale-x-0'}
  `;

  const iconClasses = `transition-colors ${
    isAtTop && !isScrolled ? 'text-white hover:text-white/80' : 'hover:text-primary'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Daniela Dias Hair Logo"
              className={`h-8 w-auto transition-all duration-300 ${
                isAtTop && !isScrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['inicio', 'servicos', 'sobre', 'galeria', 'marcas', 'contato'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={linkClasses(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" 
               className={`${iconClasses} hover-lift`}>
              <Instagram size={20} />
            </a>
            <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer"
               className={`${iconClasses} hover-lift`}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer"
               className={`${iconClasses} hover-lift`}>
              <Youtube size={20} />
            </a>
            <a href={SOCIAL_LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer"
               className={`${iconClasses} hover-lift`}>
              <MessageSquare size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`interactive-element inline-flex items-center justify-center p-2 rounded-md transition-colors ${iconClasses}`}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['inicio', 'servicos', 'sobre', 'galeria', 'marcas', 'contato'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-3 py-2 hover:text-primary transition-colors ${
                  activeSection === section ? 'text-primary' : 'text-gray-900'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="px-5 pb-3 flex space-x-4">
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover-lift">
              <Instagram size={20} />
            </a>
            <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer" className="hover-lift">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="hover-lift">
              <Youtube size={20} />
            </a>
            <a href={SOCIAL_LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover-lift">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
