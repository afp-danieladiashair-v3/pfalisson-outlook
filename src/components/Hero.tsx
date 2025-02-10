
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "5534999659886";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de transformar meu visual com a Daniela Dias Hair.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50/80 to-secondary/50">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20 animate-pulse" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-base mb-6"
          >
            ✨ Transforme seu Visual com Especialistas
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
            Desperte sua Beleza Natural com
            <span className="text-6xl md:text-8xl text-primary block mt-2">
              Daniela Dias Hair
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed"
          >
            <span className="text-2xl md:text-3xl font-semibold block mb-4">
              Especialistas em Transformação Capilar
            </span>
            Mechas • Coloração • Tratamentos • Alisamentos
            <br />
            <span className="text-primary font-medium">
              Resultados extraordinários que destacam sua beleza única
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white font-semibold py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Agende sua Transformação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-neutral-600 mt-4">
              ⚡ Atendimento Personalizado | 🎨 Produtos Premium | ⭐ Resultados Garantidos
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
