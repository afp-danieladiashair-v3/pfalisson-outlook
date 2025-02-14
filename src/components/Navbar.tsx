
import { Instagram, Star, Youtube, MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-primary-200/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Daniela Dias Hair" className="h-12" />
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Início</a>
          <a href="#services" className="text-primary-600 hover:text-primary-700 font-medium">Serviços</a>
          <a href="#testimonials" className="text-primary-600 hover:text-primary-700 font-medium">Depoimentos</a>
          <a href="#brands" className="text-primary-600 hover:text-primary-700 font-medium">Marcas</a>
          <a href="#faq" className="text-primary-600 hover:text-primary-700 font-medium">FAQ</a>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/danieladias_hair" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@danieladiashair" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
            <Star size={24} />
          </a>
          <a href="https://www.youtube.com/@DanielaDiasHair" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
            <Youtube size={24} />
          </a>
          <a href="https://wa.me/5534999659886" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
