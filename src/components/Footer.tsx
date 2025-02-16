
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Daniela Dias Hair</h3>
            <p className="text-secondary text-sm mb-6">
              Transformando vidas através da beleza e autoestima.
            </p>
            <a 
              href="https://wa.me/5534999659886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
            >
              Agendar Horário
            </a>
          </div>

          {/* Links Rápidos */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-secondary hover:text-primary transition-colors">Início</a>
              <a href="#servicos" className="block text-secondary hover:text-primary transition-colors">Serviços</a>
              <a href="#sobre" className="block text-secondary hover:text-primary transition-colors">Sobre</a>
              <a href="#galeria" className="block text-secondary hover:text-primary transition-colors">Galeria</a>
              <a href="#marcas" className="block text-secondary hover:text-primary transition-colors">Marcas</a>
              <a href="#contato" className="block text-secondary hover:text-primary transition-colors">Contato</a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-end">
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
                href="https://www.tiktok.com/@danieladiashair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
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
