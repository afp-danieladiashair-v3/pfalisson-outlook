import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const whatsappNumber = "5534999659886";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <ScrollLink to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
            <img src="/logo.png" alt="Daniela Dias Hair" className="h-12 w-auto" />
          </ScrollLink>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <SocialLinks />
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-primary hover:bg-primary-hover text-white"
            >
              Agendar Horário
            </Button>
          </div>

          <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>
      </div>
    </motion.header>
  );
};

export default TopBar;
