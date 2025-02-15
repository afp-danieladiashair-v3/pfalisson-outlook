
import { Scissors, Palette, Sparkles, Crown } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Corte com Visagismo",
    description: "Cortes personalizados que valorizam seus traços e realçam sua beleza natural."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Coloração e Mechas",
    description: "Técnicas exclusivas de coloração para um resultado único e deslumbrante."
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Tratamentos Capilares",
    description: "Restauração e cuidados especializados para a saúde dos seus cabelos."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Finalização",
    description: "Penteados e estilos que destacam sua personalidade e elevam sua autoestima."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Nossos Serviços</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Transforme seu visual com nossos serviços especializados, 
            criados para realçar sua beleza natural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow 
                        group hover:-translate-y-1 duration-300 cursor-pointer"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl mb-2">{service.title}</h3>
              <p className="text-secondary text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contato"
            className="btn-primary inline-flex items-center"
          >
            Agendar Horário
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
