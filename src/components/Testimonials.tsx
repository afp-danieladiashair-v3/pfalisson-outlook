
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Melhor experiência em transformação de cabelo que já tive!",
    image: "/placeholder.svg"
  },
  {
    name: "Ana Santos",
    text: "Profissionais incríveis e ambiente acolhedor.",
    image: "/placeholder.svg"
  },
  {
    name: "Julia Costa",
    text: "Resultados surpreendentes, super recomendo!",
    image: "/placeholder.svg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white/80 to-[#FFDEE2]/50">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold text-primary-600 text-center mb-4"
          >
            O Que Nossas Clientes Dizem
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-primary-500 text-center mb-12"
          >
            Histórias reais de transformação e satisfação
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <Heart className="w-8 h-8 text-primary-600 mb-4" />
                <p className="text-primary-500 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <span className="font-semibold text-primary-600">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
