
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Crown, Droplet, Wind, ShieldCheck, ArrowRight } from 'lucide-react';
import ServiceLightbox from './ServiceLightbox';

const serviceDetails = {
  "Mechas": [
    { name: "LOIRAS", description: "Técnica especializada para alcançar o loiro dos seus sonhos, com procedimentos que mantêm a saúde dos fios." },
    { name: "MORENA ILUMINADA", description: "Iluminação sutil e natural que realça a beleza do cabelo escuro, criando dimensão e movimento." },
    { name: "MOCHA MOUSSE", description: "Técnica exclusiva que combina tons quentes e frios, criando um visual moderno e sofisticado." },
    { name: "COLORIDOS", description: "Mechas coloridas personalizadas, desde tons pastéis até cores vibrantes, sempre respeitando a saúde do cabelo." }
  ],
  "Coloração": [
    { name: "COBERTURA DE BRANCOS", description: "Técnica especial para cobrir os fios brancos de forma natural, mantendo um resultado duradouro." },
    { name: "COLORAÇÃO EM GERAL", description: "Diversas opções de coloração, desde as mais naturais até as mais ousadas, sempre com produtos de alta qualidade." }
  ],
  "Ruivo": [
    { name: "APLICAÇÃO", description: "Técnica especializada para criar ruivos vibrantes e duradouros, desde os mais naturais até os mais intensos." },
    { name: "CORREÇÃO DE COR", description: "Correção profissional para ajustar tons e uniformizar a cor, garantindo o ruivo perfeito." },
    { name: "MANUTENÇÃO", description: "Cuidados específicos para manter a vivacidade e durabilidade da cor ruiva." }
  ],
  "Alisamento": [
    { name: "BOTOX", description: "Tratamento que reduz o volume e recupera a saúde dos fios, proporcionando brilho e maciez." },
    { name: "SELAGEM", description: "Tratamento que sela as cutículas, reduzindo o frizz e proporcionando um liso natural." },
    { name: "PROGRESSIVA", description: "Alisamento duradouro que elimina o frizz e facilita a manutenção diária dos fios." }
  ],
  "Tratamentos": [
    { name: "TRATAMENTO SIMPLES", description: "Tratamento básico para hidratar e nutrir os fios, devolvendo brilho e maciez ao cabelo." },
    { name: "TERAPIA CAPILAR", description: "Tratamento intensivo personalizado que combate problemas específicos do couro cabeludo e fios." },
    { name: "TRATAMENTO LOREAL PARA RETIRADA DE METAIS", description: "Procedimento especializado que remove resíduos metálicos dos fios, preparando o cabelo para outros procedimentos químicos." }
  ],
  "Finalização": [
    { name: "ESCOVA E PRANCHA", description: "Técnica que combina escova e prancha para um liso perfeito e duradouro." },
    { name: "ESCOVA E BABYLISS", description: "Combinação que cria ondas e movimento naturais, ideal para ocasiões especiais." },
    { name: "ESCOVA INTELIGENTE", description: "Técnica exclusiva que reduz o tempo de secagem e mantém o penteado por mais tempo." }
  ],
  "Corte com Visagismo": [
    { name: "CORTE SIMPLES", description: "Corte básico que valoriza o formato do rosto e o tipo de cabelo." },
    { name: "CORTE COM VISAGISMO", description: "Análise completa das características faciais para criar um corte personalizado que realça sua beleza natural." }
  ]
};

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
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
              onClick={() => setSelectedService(service.title)}
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

      {selectedService && (
        <ServiceLightbox
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={selectedService}
          subservices={serviceDetails[selectedService as keyof typeof serviceDetails] || []}
        />
      )}
    </section>
  );
};

export default Services;
