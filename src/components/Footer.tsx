
import { Instagram, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const hoverAnimation = {
    scale: 1.1,
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  const scrollToSection = (sectionId: string) => {
    const cleanSectionId = sectionId;
    
    if (cleanSectionId === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(cleanSectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-secondary-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Daniela Dias Hair</h3>
            <p className="text-secondary text-sm mb-6">
              Transformando vidas através da beleza e autoestima
            </p>
            <motion.a 
              href="https://wa.me/5534999659886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[rgb(244,235,255)] text-black hover:bg-primary-600 hover:text-white 
                       transition-all duration-300 rounded-full group"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Agende seu horário
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              {[
                { name: 'Início', href: 'inicio' },
                { name: 'Serviços', href: 'servicos' },
                { name: 'Sobre', href: 'sobre' },
                { name: 'Galeria', href: 'gallery' },
                { name: 'Depoimentos', href: 'testimonials' },
                { name: 'Contato', href: 'contato' }
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-secondary hover:text-primary transition-colors"
                  whileHover={hoverAnimation}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.instagram.com/danieladias_hair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@danieladiashair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@DanielaDiasHair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Daniela Dias Hair. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
