
import { useState, useEffect } from "react";
import { Instagram, Star, Youtube, MessageCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="Daniela Dias Hair" className="h-12 transition-transform duration-300 hover:scale-105" />
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-600 hover:text-primary-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">Início</a>
            <a href="#services" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">Serviços</a>
            <a href="#testimonials" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">Depoimentos</a>
            <a href="#brands" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">Marcas</a>
            <a href="#faq" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">FAQ</a>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="https://www.instagram.com/danieladias_hair" target="_blank" rel="noopener noreferrer" 
               className="text-primary-500 hover:text-primary-600 transition-all duration-300 hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@danieladiashair" target="_blank" rel="noopener noreferrer" 
               className="text-primary-500 hover:text-primary-600 transition-all duration-300 hover:scale-110">
              <Star size={24} />
            </a>
            <a href="https://www.youtube.com/@DanielaDiasHair" target="_blank" rel="noopener noreferrer" 
               className="text-primary-500 hover:text-primary-600 transition-all duration-300 hover:scale-110">
              <Youtube size={24} />
            </a>
            <a href="https://wa.me/5534999659886" target="_blank" rel="noopener noreferrer" 
               className="text-primary-500 hover:text-primary-600 transition-all duration-300 hover:scale-110">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 space-y-4">
            <a href="#" className="block text-primary-600 hover:text-primary-700 font-medium">Início</a>
            <a href="#services" className="block text-primary-600 hover:text-primary-700 font-medium">Serviços</a>
            <a href="#testimonials" className="block text-primary-600 hover:text-primary-700 font-medium">Depoimentos</a>
            <a href="#brands" className="block text-primary-600 hover:text-primary-700 font-medium">Marcas</a>
            <a href="#faq" className="block text-primary-600 hover:text-primary-700 font-medium">FAQ</a>
          </div>
          <div className="flex space-x-6 py-4">
            <a href="https://www.instagram.com/danieladias_hair" target="_blank" rel="noopener noreferrer" 
               className="text-primary-500 hover:text-primary-600">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@danieladiashair" target="_blank" rel="noopener noreferrer" 
               className="text-primary-500 hover:text-primary-600">
              <Star size={24} />
            </a>
            <a href="https://www.youtube.com/@DanielaDiasHair" target="_blank" rel="noopener noreferrer" 
               className="text-primary-500 hover:text-primary-600">
              <Youtube size={24} />
            </a>
            <a href="https://wa.me/5534999659886" target="_blank" rel="noopener noreferrer" 
               className="text-primary-500 hover:text-primary-600">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
