
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const whatsappNumber = "5534999659886";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50/80 to-secondary/50">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
            Transforme seu Visual
            <span className="text-6xl md:text-8xl text-primary block mt-2">Daniela Dias Hair</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            <span className="text-2xl md:text-3xl font-semibold">
              Especialista em mechas, ruivos, colorações, alisamentos e tratamentos capilares.
            </span>
            <br />
            Realce sua beleza natural com nossos tratamentos exclusivos.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-white font-semibold py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            Agende seu Horário
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

