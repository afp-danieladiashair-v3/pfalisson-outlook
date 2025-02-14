
import { Sparkles, Palette, Star, Heart } from "lucide-react"
import { KeywordTag } from "./ui/keyword-tag"

const heroKeywords = [
  { text: "Transformação Total", icon: Sparkles },
  { text: "Técnicas Exclusivas", icon: Palette },
  { text: "Resultados Garantidos", icon: Star },
  { text: "Atendimento VIP", icon: Heart }
]

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/90 via-primary-100/80 to-primary-200/70" />
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20 object-center"
          loading="eager"
        />
      </div>
      
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 leading-tight">
          Desperte Sua Beleza Natural Com Nossa Expertise em Transformação Capilar
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-primary-600 mb-8 animate-slideUp max-w-3xl mx-auto font-light leading-relaxed">
          Descubra como nossos tratamentos exclusivos podem realçar sua beleza única e elevar sua autoestima. Resultado garantido ou seu dinheiro de volta.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {heroKeywords.map((keyword, index) => (
            <KeywordTag 
              key={index} 
              keyword={keyword}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        
        <div className="space-y-6">
          <a
            href="https://wa.me/5534999659886"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Agende Sua Transformação
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
          
          <p className="text-primary-500 text-sm">
            Vagas Limitadas | Atendimento Exclusivo
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
