
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amanda Silva",
    text: "A Daniela é incrível! Transformou completamente meu cabelo, respeitando a saúde dos fios. Super recomendo!",
    rating: 5,
    image: "/dani1.jpg"
  },
  {
    name: "Carla Oliveira",
    text: "Profissional excepcional! As mechas ficaram exatamente como eu queria. O atendimento é impecável.",
    rating: 5,
    image: "/dani2.jpg"
  },
  {
    name: "Patricia Santos",
    text: "Encontrei a profissional que realmente entende de cabelos. Os resultados são sempre surpreendentes!",
    rating: 5,
    image: "/dani3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="heading-2 text-primary-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            O Que Nossas Clientes Dizem
          </motion.h2>
          <motion.p 
            className="body-large text-primary-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Histórias reais de transformação e satisfação
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-primary-800">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary-400 text-primary-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 italic">{testimonial.text}</p>
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
            className="button-secondary"
          >
            Ver Mais Depoimentos no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
