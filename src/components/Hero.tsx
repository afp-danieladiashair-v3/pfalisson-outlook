
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      url: '/dani1.jpg',
      title: "Transformação e Arte",
      subtitle: "Coloração Profissional"
    },
    {
      url: '/dani2.jpg',
      title: "Expertise em Mechas",
      subtitle: "Técnicas Exclusivas"
    },
    {
      url: '/dani3.jpg',
      title: "Beleza Autêntica",
      subtitle: "Resultados Únicos"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          currentImage === index && (
            <motion.div
              key={image.url}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.p 
            className="text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bem-vinda
          </motion.p>

          <motion.h1 
            className="font-serif text-5xl md:text-7xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Daniela Dias Hair
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentImage}
              className="text-2xl md:text-3xl font-serif mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {images[currentImage].title}
              <span className="block text-xl md:text-2xl mt-2 text-white/80">
                {images[currentImage].subtitle}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://wa.me/5534999659886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white/10 text-white hover:bg-primary-600 
                       transition-all duration-300 rounded-full group backdrop-blur-sm"
            >
              Agende seu horário
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
