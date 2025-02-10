
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TopBar from "@/components/TopBar";
import Brands from "@/components/Brands";
import { motion, LazyMotion, domAnimation } from "framer-motion";

const Index = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>
          <section id="benefits" className="scroll-mt-20 bg-gradient-to-b from-primary-50/90 to-secondary/60">
            <Benefits />
          </section>
          <section id="services" className="scroll-mt-20 bg-gradient-to-b from-secondary/60 to-primary-100/50">
            <Pricing />
          </section>
          <section id="testimonials" className="scroll-mt-20 bg-gradient-to-b from-primary-100/50 to-secondary/40">
            <Testimonials />
          </section>
          <section id="brands" className="scroll-mt-20 bg-gradient-to-b from-secondary/40 to-primary-50/70">
            <Brands />
          </section>
          <section id="faq" className="scroll-mt-20 bg-gradient-to-b from-primary-50/70 to-secondary/50">
            <FAQ />
          </section>
          <section className="bg-accent/70 text-white">
            <CTA />
          </section>
        </motion.main>
      </div>
    </LazyMotion>
  );
};

export default Index;
