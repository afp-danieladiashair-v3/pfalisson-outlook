
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Daniela Dias Hair</h3>
            <p className="text-secondary text-sm">
              Transformando vidas através da beleza e autoestima.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-secondary hover:text-primary transition-colors">Início</a>
              <a href="#servicos" className="block text-secondary hover:text-primary transition-colors">Serviços</a>
              <a href="#sobre" className="block text-secondary hover:text-primary transition-colors">Sobre</a>
              <a href="#galeria" className="block text-secondary hover:text-primary transition-colors">Galeria</a>
              <a href="#contato" className="block text-secondary hover:text-primary transition-colors">Contato</a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/danieladias_hair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@DanielaDiasHair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Daniela Dias Hair. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
