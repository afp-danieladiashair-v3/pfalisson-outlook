
import { MapPin, Star, Clock, Shield, Heart, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Star,
    title: "Expertise Comprovada",
    description: "Mais de 1000 clientes satisfeitas com nossas transformações capilares"
  },
  {
    icon: Shield,
    title: "Resultados Garantidos",
    description: "Satisfação garantida ou seu dinheiro de volta, sem burocracia"
  },
  {
    icon: Heart,
    title: "Atendimento Premium",
    description: "Experiência personalizada com foco total em sua transformação"
  },
  {
    icon: Clock,
    title: "Agenda Flexível",
    description: "Horários exclusivos que se adaptam à sua rotina"
  },
  {
    icon: Sparkles,
    title: "Produtos Premium",
    description: "Utilizamos apenas as melhores marcas do mercado"
  },
  {
    icon: MapPin,
    title: "Ambiente Exclusivo",
    description: "Espaço pensado para seu conforto e privacidade"
  }
]

const Benefits = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white/80 to-primary-50/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
            Por Que Escolher Nossa Expertise?
          </h2>
          <p className="text-primary-500 text-lg">
            Combinamos tecnologia, expertise e cuidado para oferecer a melhor experiência em transformação capilar do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <benefit.icon className="w-12 h-12 text-primary-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-primary-600">
                {benefit.title}
              </h3>
              <p className="text-primary-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
