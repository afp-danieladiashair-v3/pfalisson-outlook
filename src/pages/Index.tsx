
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TopBar from "@/components/TopBar";
import Brands from "@/components/Brands";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Suspense } from "react";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary-50/10 to-white">
        <TopBar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Suspense fallback={<LoadingSpinner />}>
            <div className="flex flex-col">
              <section id="home" className="scroll-mt-20">
                <Hero />
              </section>
              
              <section id="benefits" className="scroll-mt-20 bg-white/80">
                <Benefits />
              </section>
              
              <section id="services" className="scroll-mt-20 bg-primary-50/20">
                <Pricing />
              </section>
              
              <section id="testimonials" className="scroll-mt-20 bg-white/80">
                <Testimonials />
              </section>
              
              <section id="brands" className="scroll-mt-20 bg-primary-50/20">
                <Brands />
              </section>
              
              <section id="faq" className="scroll-mt-20 bg-white/80">
                <FAQ />
              </section>
              
              <section className="bg-gradient-to-b from-primary-50/20 to-white">
                <CTA />
              </section>
            </div>
          </Suspense>
        </motion.main>
      </div>
    </LazyMotion>
  );
};

export default Index;
