
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ana Silva",
    image: "/placeholder.svg",
    text: "Transformação incrível! As mechas ficaram exatamente como eu sonhava. A Daniela tem um dom especial.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    image: "/placeholder.svg",
    text: "O melhor lugar para cuidar dos cabelos. Profissionalismo e qualidade incomparáveis.",
    rating: 5,
  },
  {
    name: "Julia Costa",
    image: "/placeholder.svg",
    text: "Ambiente acolhedor e resultados surpreendentes. Recomendo especialmente para quem quer fazer ruivos.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            O Que Nossas Clientes Dizem
          </h2>
          <p className="text-lg text-neutral-600">
            Histórias reais de transformação e satisfação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-neutral-50 p-6 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-4 text-primary/20 w-8 h-8" />
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-neutral-800">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
