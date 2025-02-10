import { Instagram, Youtube, MessageCircle, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Button } from "./ui/button";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "5534999659886";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/danieladias_hair",
      label: "Instagram",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a9 9 0 0 1 9 9" />
        </svg>
      ),
      url: "https://www.tiktok.com/@danieladiashair",
      label: "TikTok",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      url: "https://www.youtube.com/@DanielaDiasHair",
      label: "YouTube",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      url: whatsappUrl,
      label: "WhatsApp",
    },
  ];

  const navLinks = [
    { to: "home", label: "Início" },
    { to: "services", label: "Serviços" },
    { to: "testimonials", label: "Depoimentos" },
    { to: "brands", label: "Marcas" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="Daniela Dias Hair"
              className="h-10 md:h-12 w-auto"
            />
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-neutral-600 hover:text-primary cursor-pointer transition-colors font-medium"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-neutral-600 hover:text-primary cursor-pointer transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </ScrollLink>
              ))}
              <div className="flex justify-center space-x-6 pt-4 border-t">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default TopBar;
