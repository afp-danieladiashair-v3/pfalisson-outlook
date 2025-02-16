
import { Star, Award, Users, Heart, Trophy, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-[url('/dani4.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-primary/10" />
          </motion.div>
          
          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Sobre Daniela Dias Hair</h2>
              <p className="text-secondary mb-8">
                Com mais de 10 anos de experiência em coloração e transformação capilar, 
                nos dedicamos a realçar a beleza única de cada cliente. Nossa missão é 
                proporcionar uma experiência personalizada e resultados excepcionais, 
                utilizando produtos de alta qualidade e técnicas avançadas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="flex flex-col items-center text-center p-4 bg-secondary-light rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Trophy className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold">Especialização</h4>
                <p className="text-sm text-secondary">Profissional certificada</p>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center text-center p-4 bg-secondary-light rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Heart className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold">Cuidado</h4>
                <p className="text-sm text-secondary">Atendimento exclusivo</p>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center text-center p-4 bg-secondary-light rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Clock className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold">Experiência</h4>
                <p className="text-sm text-secondary">+10 anos no mercado</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="https://www.instagram.com/danieladias_hair"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center"
              >
                Conheça Nosso Trabalho
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
