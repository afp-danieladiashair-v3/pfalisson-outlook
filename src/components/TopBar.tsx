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
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 102 102"
          className="w-5 h-5"
          id="instagram"
        >
          <defs>
            <radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
              <stop offset=".09" stopColor="#fa8f21"></stop>
              <stop offset=".78" stopColor="#d82d7e"></stop>
            </radialGradient>
            <radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
              <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#8c3aaa"></stop>
            </radialGradient>
          </defs>
          <path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
          <path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
          <path fill="#fff" d="M38.477 51.018a12.631 12.631 0 1 1 25.262 0 12.631 12.631 0 0 1-25.262 0m-6.829 0a19.458 19.458 0 1 0 38.916 0 19.458 19.458 0 0 0-38.916 0m35.139-20.229a4.547 4.547 0 1 0 4.549-4.545h0a4.549 4.549 0 0 0-4.547 4.545m-30.99 51.074a20.943 20.943 0 0 1-7.037-1.3 12.547 12.547 0 0 1-7.193-7.19 20.923 20.923 0 0 1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082 21.082 0 0 1 1.3-7.037 12.54 12.54 0 0 1 7.193-7.193 20.924 20.924 0 0 1 7.037-1.3c3.994-.184 5.194-.22 15.309-.22s11.316.039 15.314.221a21.082 21.082 0 0 1 7.037 1.3 12.541 12.541 0 0 1 7.193 7.193 20.926 20.926 0 0 1 1.3 7.037c.184 4 .22 5.194.22 15.314s-.037 11.316-.22 15.314a21.023 21.023 0 0 1-1.3 7.037 12.547 12.547 0 0 1-7.193 7.19 20.925 20.925 0 0 1-7.037 1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786 27.786 0 0 0-9.2 1.76 19.373 19.373 0 0 0-11.083 11.083 27.794 27.794 0 0 0-1.76 9.2c-.187 4.04-.229 5.332-.229 15.623s.043 11.582.229 15.623a27.793 27.793 0 0 0 1.76 9.2 19.374 19.374 0 0 0 11.083 11.083 27.813 27.813 0 0 0 9.2 1.76c4.042.184 5.332.229 15.623.229s11.582-.043 15.623-.229a27.8 27.8 0 0 0 9.2-1.76 19.374 19.374 0 0 0 11.083-11.083 27.716 27.716 0 0 0 1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786 27.786 0 0 0-1.76-9.2 19.379 19.379 0 0 0-11.08-11.083 27.748 27.748 0 0 0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"/>
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 313.6"
          className="w-5 h-5"
          id="youtube">
          <g transform="translate(-32 -99.2)">
            <g stroke-width="2.404" transform="translate(314.594 428.651)scale(.41603)">
              <path fill="#fff" d="M -248.52492,-576.52087 32.650165,-414.99475 -248.52492,-253.4686 Z"></path>
              <path fill="#fe0000" d="m 373.64966,-675.23131 c -11.96482,-44.86836 -47.85953,-80.76301 -92.7279,-95.7192 -83.75426,-20.93853 -421.76258,-20.93853 -421.76258,-20.93853 0,0 -338.00826,0 -421.76265,20.93853 -44.8683,14.95619 -80.76302,50.85084 -92.7279,95.7192 -23.92983,83.75432 -23.92983,260.23656 -23.92983,260.23656 0,0 0,173.49097 23.92983,260.2365 11.96488,44.86836 47.8596,80.763051 92.7279,92.727916 83.75439,23.929827 421.76265,23.929827 421.76265,23.929827 0,0 338.00832,0 421.76258,-23.929827 44.86837,-11.964865 80.76308,-47.859556 92.7279,-92.727916 23.92984,-86.74553 23.92984,-260.2365 23.92984,-260.2365 0,0 0,-176.48224 -23.92984,-260.23656 z m -622.17457,421.76266 c 0,-323.05221 0,-323.05221 0,-323.05221 281.175075,161.52611 281.175075,161.52611 281.175075,161.52611 z"></path>
            </g>
          </g>
        </svg>
      ),
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
