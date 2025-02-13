
import { MessageSquare, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  const whatsappNumber = "5534999659886";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de transformar meu visual com profissionais especializados.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block mb-6">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
            Transforme Seu Visual Hoje Mesmo!
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Agende agora e garanta um atendimento personalizado que vai destacar sua beleza natural
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atendimento Exclusivo</h3>
              <p className="text-neutral-600">Experiência exclusiva e personalizada para cada cliente</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resultados Garantidos</h3>
              <p className="text-neutral-600">Satisfação garantida com nossos serviços especializados</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-full transition-all duration-300 mb-8"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <MessageSquare className="mr-2" />
            Agende sua Consulta Gratuita
          </Button>

          <div className="space-y-2 text-center">
            <p className="text-sm text-neutral-600">
              ✨ Atendimento Personalizado de Terça a Sábado
            </p>
            <p className="text-sm text-neutral-600">
              ⏰ Horário Flexível das 8h às 19h
            </p>
            <p className="text-sm font-medium text-primary animate-pulse">
              Vagas Limitadas - Garanta seu Horário!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
