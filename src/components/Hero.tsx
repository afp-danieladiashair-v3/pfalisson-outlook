
import { motion } from "framer-motion";
import { Sparkles, Palette, Star, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { KeywordTag } from "./ui/keyword-tag";

const heroKeywords = [
  { text: "Expertise em Mechas", icon: Sparkles },
  { text: "Coloração Profissional", icon: Palette },
  { text: "Tratamentos Avançados", icon: Star },
  { text: "Beleza Autêntica", icon: Heart }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4 flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover object-left-top"
          loading="eager"
        />
      </div>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto text-center relative z-10"
      >
        <motion.h1 variants={item} className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-primary-600">Realce Sua Beleza</span>
          <motion.span 
            variants={item}
            className="text-5xl md:text-7xl text-primary-600 block mt-2"
          >
            Daniela Dias Hair
          </motion.span>
          <motion.span 
            variants={item}
            className="text-2xl md:text-3xl font-serif font-bold text-primary-600 mb-8 block mt-4"
          >
            Transformação e Arte em Cada Fio
          </motion.span>
        </motion.h1>

        <motion.div 
          variants={container}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
        >
          {heroKeywords.map((keyword, index) => (
            <motion.div key={index} variants={item}>
              <KeywordTag keyword={keyword} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          variants={item}
          className="text-xl md:text-2xl text-primary-500 mb-8 max-w-2xl mx-auto font-light"
        >
          Descubra a <span className="font-semibold text-primary-600">excelência</span> em coloração e tratamentos capilares personalizados
        </motion.p>

        <motion.p 
          variants={item}
          className="text-lg md:text-xl text-primary-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Especialista em técnicas exclusivas que transformam seu cabelo com respeito à sua natureza e personalidade
        </motion.p>

        <motion.a
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/5534999659886"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary group"
        >
          Agende sua Transformação AGORA
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.a>

        <motion.div 
          variants={container}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 text-sm text-primary-500"
        >
          {["Atendimento VIP", "Produtos Premium", "Satisfação Garantida"].map((text, index) => (
            <motion.span 
              key={index}
              variants={item}
              className="flex items-center gap-1"
            >
              <CheckCircle className="w-4 h-4 text-primary-600" />
              {text}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
