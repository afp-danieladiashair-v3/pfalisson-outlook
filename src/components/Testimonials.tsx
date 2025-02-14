
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-primary-800 mb-12">
          Depoimentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6">
              <Heart className="w-8 h-8 text-primary-600 mb-4" />
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <span className="font-semibold">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
