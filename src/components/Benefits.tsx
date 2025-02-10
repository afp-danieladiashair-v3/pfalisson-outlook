
import { Check, Sparkles, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Expertise Profissional",
    description: "Equipe altamente qualificada e especializada em transformações capilares",
  },
  {
    icon: <Check className="w-8 h-8 text-primary" />,
    title: "Produtos Premium",
    description: "Utilizamos as melhores marcas do mercado para resultados excepcionais",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Atendimento Flexível",
    description: "Horários adaptados à sua rotina, inclusive aos sábados",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Experiência Única",
    description: "Ambiente acolhedor e atendimento personalizado para cada cliente",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            Por que escolher a Daniela Dias Hair?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Descubra os diferenciais que fazem nosso salão ser referência em beleza capilar
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600">
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
