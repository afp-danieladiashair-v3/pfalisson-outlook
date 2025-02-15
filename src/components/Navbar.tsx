
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-semibold text-xl">
            Daniela Dias Hair
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
              <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
              <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
              <a href="#galeria" className="hover:text-primary transition-colors">Galeria</a>
              <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.instagram.com/danieladias_hair" target="_blank" rel="noopener noreferrer" 
               className="hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/@DanielaDiasHair" target="_blank" rel="noopener noreferrer"
               className="hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://wa.me/5534999659886" target="_blank" rel="noopener noreferrer"
               className="hover:text-primary transition-colors">
              <Phone size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="block px-3 py-2 hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="block px-3 py-2 hover:text-primary transition-colors">Sobre</a>
            <a href="#galeria" className="block px-3 py-2 hover:text-primary transition-colors">Galeria</a>
            <a href="#contato" className="block px-3 py-2 hover:text-primary transition-colors">Contato</a>
          </div>
          <div className="px-5 pb-3 flex space-x-4">
            <a href="https://www.instagram.com/danieladias_hair" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/@DanielaDiasHair" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} />
            </a>
            <a href="https://wa.me/5534999659886" target="_blank" rel="noopener noreferrer">
              <Phone size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
