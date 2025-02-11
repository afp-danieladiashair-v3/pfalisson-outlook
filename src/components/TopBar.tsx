
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
      icon: <Instagram className="w-5 h-5 text-[#E4405F]" />,
      url: "https://www.instagram.com/danieladias_hair",
      label: "Instagram",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.51 38.51"
          className="w-5 h-5"
        >
          <defs>
            <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#69C9D0" />
              <stop offset="100%" stopColor="#EE1D52" />
            </linearGradient>
          </defs>
          <rect width="38.51" height="38.51" fill="url(#tiktok-gradient)" rx="6.97" ry="6.97" />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M23.84,14.29c1.79,1.28,3.99,2.03,6.35,2.03v-3.59c-1.32-.28-2.49-.97-3.37-1.93-1.51-.94-2.59-2.49-2.91-4.31h-3.32v18.2c0,2.12-1.73,3.84-3.86,3.84-1.25,0-2.36-.6-3.07-1.52-1.26-.63-2.12-1.94-2.12-3.44,0-2.13,1.73-3.85,3.86-3.85.41,0,.8.06,1.17.18v-3.63c-4.57.09-8.25,3.83-8.25,8.42,0,2.29.92,4.37,2.4,5.89,1.34.9,2.96,1.42,4.69,1.42,4.65,0,8.43-3.77,8.43-8.42v-9.3Z"
          />
        </svg>
      ),
      url: "https://www.tiktok.com/@danieladiashair",
      label: "TikTok",
    },
    {
      icon: <Youtube className="w-5 h-5 text-[#FF0000]" />,
      url: "https://www.youtube.com/@DanielaDiasHair",
      label: "YouTube",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#25D366]" />,
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
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
