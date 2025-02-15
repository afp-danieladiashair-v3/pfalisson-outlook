
import { Scissors, Sparkles, Palette, Wand2, Heart, Zap, Crown } from "lucide-react";
import { services } from "@/data/services";
import { KeywordTag } from "./ui/keyword-tag";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white/80 to-[#FFDEE2]/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center text-primary-600 mb-8">
          Nossos Serviços
        </h2>
        <p className="text-center text-primary-500 mb-16 max-w-2xl mx-auto">
          Descubra nossa coleção de serviços exclusivos, desenvolvidos para transformar seu cabelo e elevar sua autoestima
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <service.icon className="w-12 h-12 text-primary-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-primary-600">{service.title}</h3>
              <p className="text-primary-500 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-3">
                {service.keywords.map((keyword, idx) => (
                  <KeywordTag key={idx} keyword={keyword} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
