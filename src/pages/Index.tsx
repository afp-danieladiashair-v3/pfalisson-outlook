
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Testimonials />
      <Brands />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
