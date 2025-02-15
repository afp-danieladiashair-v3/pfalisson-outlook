
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image - Replace URL with actual image */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-wider mb-4 animate-fade-up">
          Bem-vinda ao
        </p>
        <h1 className="text-4xl md:text-6xl font-light mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
          Daniela Dias Hair
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
          Transforme seu visual com nossa expertise em coloração, mechas e tratamentos capilares
        </p>
        <a
          href="#contato"
          className="inline-flex items-center px-8 py-3 bg-white text-black hover:bg-primary hover:text-white transition-colors rounded-full animate-fade-up"
          style={{ animationDelay: '600ms' }}
        >
          Agende seu horário
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-white rotate-90" />
      </div>
    </section>
  );
};

export default Hero;
