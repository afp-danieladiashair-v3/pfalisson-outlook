
import { Star, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>

          {/* Conteúdo */}
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl mb-6">Sobre Daniela Dias Hair</h2>
            <p className="text-secondary mb-8">
              Com mais de 15 anos de experiência em coloração e transformação capilar, 
              nos dedicamos a realçar a beleza única de cada cliente. Nossa missão é 
              proporcionar uma experiência personalizada e resultados excepcionais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-secondary-light rounded-lg">
                <Star className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold">Expertise</h4>
                <p className="text-sm text-secondary">Profissionais altamente qualificados</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-secondary-light rounded-lg">
                <Award className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold">Qualidade</h4>
                <p className="text-sm text-secondary">Produtos premium e técnicas avançadas</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-secondary-light rounded-lg">
                <Users className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold">Experiência</h4>
                <p className="text-sm text-secondary">Atendimento personalizado</p>
              </div>
            </div>

            <a href="#contato" className="btn-primary inline-flex items-center">
              Conheça Nosso Trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
