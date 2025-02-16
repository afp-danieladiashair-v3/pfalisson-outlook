import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Crown, Droplet, Wind, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Mechas",
    description: "Técnicas exclusivas para um resultado único e personalizado."
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Coloração",
    description: "Transformação e realce da sua beleza natural."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Ruivo",
    description: "Especialistas em tons ruivos e acobreados."
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Alisamento",
    description: "Tratamentos para cabelos mais lisos e disciplinados."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Tratamentos",
    description: "Restauração e cuidados especializados para a saúde dos seus cabelos."
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Finalização",
    description: "Penteados que destacam sua personalidade."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Corte com Visagismo",
    description: "Cortes personalizados que valorizam seus traços."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary-light">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Nossos Serviços</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Transforme seu visual com nossos serviços especializados, 
            criados para realçar sua beleza natural.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl mb-2">{service.title}</h3>
              <p className="text-secondary text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-3 bg-[rgb(244,235,255)] text-black hover:bg-primary-600 hover:text-white 
                     transition-all duration-300 rounded-full group"
          >
            Agendar Horário
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
