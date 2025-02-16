
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/gallery/loiro1.jpg",
    alt: "Transformação Loiro",
    category: "Mechas"
  },
  {
    src: "/gallery/ruivo1.jpg",
    alt: "Transformação Ruivo",
    category: "Coloração"
  },
  {
    src: "/gallery/loiro2.jpg",
    alt: "Loiro Iluminado",
    category: "Mechas"
  },
  {
    src: "/gallery/ruivo2.jpg",
    alt: "Ruivo Natural",
    category: "Coloração"
  },
  {
    src: "/gallery/iluminado1.jpg",
    alt: "Mechas Iluminadas",
    category: "Mechas"
  },
  {
    src: "/gallery/tratamento1.jpg",
    alt: "Tratamento Capilar",
    category: "Tratamentos"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="heading-2 text-primary-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Galeria de Transformações
          </motion.h2>
          <motion.p 
            className="body-large text-primary-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Inspirações e resultados reais dos nossos trabalhos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold">{image.alt}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="https://www.instagram.com/danieladias_hair"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Ver Mais no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
