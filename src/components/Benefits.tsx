import { MapPin, Star, Clock } from "lucide-react";

const Benefits = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white/80 to-[#FFDEE2]/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          Por que Escolher Nossa Expertise?
        </h2>
        <p className="text-center text-primary-500 mb-16 max-w-2xl mx-auto">
          Combinamos arte, técnica e cuidado para oferecer uma experiência única em transformação capilar
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="glass-card p-8 text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <MapPin className="w-14 h-14 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Ambiente Sofisticado</h3>
            <p className="text-primary-500">Espaço pensado para seu conforto e bem-estar durante toda sua transformação</p>
          </div>
          <div className="glass-card p-8 text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <Star className="w-14 h-14 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Equipe Especializada</h3>
            <p className="text-primary-500">Profissionais altamente capacitados e em constante atualização</p>
          </div>
          <div className="glass-card p-8 text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <Clock className="w-14 h-14 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Atendimento Premium</h3>
            <p className="text-primary-500">Agendamento personalizado para dedicar atenção exclusiva à sua transformação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
