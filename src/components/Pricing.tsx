import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const services = [
  {
    name: "Mechas",
    features: [
      "Mechas personalizadas",
      "Técnicas modernas",
      "Matização profissional",
      "Hidratação pós-química",
    ],
  },
  {
    name: "Coloração",
    features: [
      "Coloração profissional",
      "Tons personalizados",
      "Tratamento especializado",
      "Manutenção da cor",
    ],
  },
  {
    name: "Ruivo",
    features: [
      "Ruivos personalizados",
      "Tons exclusivos",
      "Tratamento especial",
      "Manutenção da cor",
    ],
  },
  {
    name: "Alisamento",
    features: [
      "Alisamento definitivo",
      "Tratamento reconstrutor",
      "Hidratação intensiva",
      "Finalização premium",
    ],
  },
  {
    name: "Tratamentos",
    features: [
      "Hidratação profunda",
      "Reconstrução capilar",
      "Nutrição intensiva",
      "Cauterização",
    ],
  },
  {
    name: "Finalização",
    features: [
      "Escova modeladora",
      "Prancha moderna",
      "Finalização premium",
      "Produtos profissionais",
    ],
  },
  {
    name: "Corte com Visagismo",
    features: [
      "Análise facial",
      "Corte personalizado",
      "Acabamento perfeito",
      "Dicas de estilo",
    ],
  },
];

const brands = [
  {
    name: "L'Oréal",
    logo: "/images/brands/loreal.png",
  },
  {
    name: "Sebastian",
    logo: "/images/brands/sebastian.png",
  },
  {
    name: "Wella",
    logo: "/images/brands/wella.png",
  },
  {
    name: "Igora",
    logo: "/images/brands/igora.png",
  },
  {
    name: "Burana",
    logo: "/images/brands/burana.png",
  },
  {
    name: "Zartte",
    logo: "/images/brands/zartte.png",
  },
  {
    name: "Yellow",
    logo: "/images/brands/yellow.png",
  },
];

const Pricing = () => {
  const whatsappNumber = "5534999659886";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="py-20 bg-neutral-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Escolha o tratamento perfeito para realçar sua beleza natural
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-neutral-800 mb-4">{service.name}</h3>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-neutral-600">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-primary hover:bg-primary-hover text-white transition-colors duration-300"
                size="lg"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Consultar Valores
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
