
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 102 102"
          className="w-5 h-5"
        >
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a3ab9" />
              <stop offset="50%" stopColor="#e95950" />
              <stop offset="100%" stopColor="#fccc63" />
            </linearGradient>
          </defs>
          <rect width="102" height="102" fill="url(#instagram-gradient)" rx="25" />
          <circle cx="51" cy="51" r="28" fill="none" stroke="#fff" strokeWidth="6" />
          <circle cx="74" cy="28" r="6" fill="#fff" />
        </svg>
      ),
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 61.94 61.94"
          className="w-5 h-5"
        >
          <rect width="61.94" height="61.94" fill="#25D366" rx="16.96" />
          <path
            fill="#fff"
            d="M48.31,21a18.26,18.26,0,0,0-13.23-9.41A17.9,17.9,0,0,0,24.5,12.9a18.42,18.42,0,0,0-8.74,7.94,18.6,18.6,0,0,0,0,18.21.8.8,0,0,1,.07.69q-.67,2.34-1.33,4.7l-1.17,4.19.36-.08c2.92-.75,5.84-1.49,8.76-2.25a1,1,0,0,1,.83.09A18.6,18.6,0,0,0,43.9,44.23a18.22,18.22,0,0,0,6.66-13.12A17.6,17.6,0,0,0,48.31,21ZM36.55,44.71A15.18,15.18,0,0,1,23.8,43.05a1.08,1.08,0,0,0-.92-.13l-4.43,1.15c-.61.15-.61.15-.43-.47.4-1.44.81-2.87,1.22-4.3a.84.84,0,0,0-.11-.77,15.46,15.46,0,0,1,2.18-19.75,15.22,15.22,0,0,1,8.76-4.19c.64-.08,1.28-.1,1.68-.13a15.47,15.47,0,0,1,4.8,30.25Z"
          />
          <path
            fill="#fff"
            d="M40.91,33.88c-1.22-.53-2.43-1.1-3.63-1.67a.81.81,0,0,0-1.16.3c-.41.58-.87,1.13-1.3,1.69-.2.25-.4.42-.76.28a12.54,12.54,0,0,1-6.58-5.55A.72.72,0,0,1,27.6,28c.39-.44.76-.9,1.16-1.33a1,1,0,0,0,.2-1.14c-.54-1.22-1.05-2.45-1.58-3.68-.08-.19-.17-.43-.38-.47a2.72,2.72,0,0,0-2.44.18,4.69,4.69,0,0,0-2,3.63,7,7,0,0,0,.68,3.34,19.31,19.31,0,0,0,12,10.1c2.62.78,5.64-.37,6.13-3.65A.86.86,0,0,0,40.91,33.88Z"
          />
        </svg>
      ),
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
