
import { Sparkles, Check, Clock, Heart, Star, Shield, Scissors } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Expertise Profissional",
    description: "Equipe especializada com anos de experiência em transformações capilares",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Produtos Premium",
    description: "Marcas renomadas e produtos de alta qualidade para resultados excepcionais",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Horários Flexíveis",
    description: "Agendamento conveniente, incluindo horários estendidos e aos sábados",
  },
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Resultados Garantidos",
    description: "Satisfação garantida com transformações que realçam sua beleza natural",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Ambiente Acolhedor",
    description: "Espaço confortável e acolhedor para sua transformação",
  },
  {
    icon: <Scissors className="w-8 h-8 text-primary" />,
    title: "Técnicas Modernas",
    description: "Últimas tendências e técnicas inovadoras em coloração e tratamentos",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Por que escolher a Daniela Dias Hair?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Descubra como nosso compromisso com a excelência faz a diferença
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
