
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4 pt-32">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-wider mb-4 text-white"
      >
        Bem-vinda
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-light mb-6"
      >
        Daniela Dias Hair
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl mb-8 text-white"
      >
        Transforme seu visual com nossa expertise em coloração, mechas e tratamentos capilares
      </motion.p>
    </div>
  );
};

export default HeroContent;
