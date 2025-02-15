
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200/80"
        >
          <Navbar />
        </motion.header>

        <main className="flex-grow bg-gradient-to-br from-[#FFF0F4] via-[#FFF4F6] to-[#FFF9FB]">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 mb-20"
          >
            <Hero />
          </motion.div>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 py-16 md:py-24"
          >
            <Benefits />
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 py-16 md:py-24 bg-white/50"
          >
            <Services />
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 py-16 md:py-24"
          >
            <Testimonials />
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 py-16 md:py-24 bg-white/50"
          >
            <Brands />
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 py-16 md:py-24"
          >
            <FAQ />
          </motion.section>
        </main>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative z-30 bg-white"
        >
          <Footer />
        </motion.footer>
      </div>
    </AnimatePresence>
  );
};

export default Index;
