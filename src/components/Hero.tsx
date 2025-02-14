
import { Sparkles, Palette, Star, Heart } from "lucide-react";
import { KeywordTag } from "./ui/keyword-tag";

const heroKeywords = [
  { text: "Expertise em Mechas", icon: Sparkles },
  { text: "Coloração Profissional", icon: Palette },
  { text: "Tratamentos Avançados", icon: Star },
  { text: "Beleza Autêntica", icon: Heart }
];

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20 object-left-top"
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-600 mb-8 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          Transformação e Arte em Cada Fio
        </h1>
        <p className="text-xl md:text-2xl text-primary-500 mb-8 animate-slideUp max-w-2xl mx-auto font-light">
          Descubra a <span className="font-semibold text-primary-600">excelência</span> em coloração e tratamentos capilares personalizados
        </p>
        <p className="text-lg md:text-xl text-primary-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Especialistas em técnicas exclusivas que transformam seu cabelo com respeito à sua natureza e personalidade
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {heroKeywords.map((keyword, index) => (
            <KeywordTag key={index} keyword={keyword} />
          ))}
        </div>
        <a
          href="https://wa.me/5534999659886"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Agende sua Transformação
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
