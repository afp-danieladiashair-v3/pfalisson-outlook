
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "5534999659886";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de transformar meu visual com a Daniela Dias Hair.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50/80 to-secondary/50">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-left-top bg-no-repeat opacity-20" />
      <div className="container mx-auto px-4 py-12 lg:py-20 z-10 mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6 leading-tight">
            Realce Sua Beleza
            <span className="text-5xl md:text-7xl text-primary block mt-2">
              Daniela Dias Hair
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed"
          >
            <span className="text-2xl md:text-3xl font-semibold block mb-4">
              Transforme Seu Visual com Nossa Expertise
            </span>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary w-5 h-5" />
                <span>Mechas Exclusivas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary w-5 h-5" />
                <span>Coloração Especial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary w-5 h-5" />
                <span>Tratamentos VIP</span>
              </div>
            </div>
            <span className="text-primary font-medium block mt-4">
              Resultados extraordinários que destacam sua beleza única
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Agende sua Transformação AGORA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 text-sm text-neutral-600">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" />
                Atendimento VIP
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" />
                Produtos Premium
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" />
                Satisfação Garantida
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
