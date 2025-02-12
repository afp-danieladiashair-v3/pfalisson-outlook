
import { FC } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const whatsappNumber = "5534999659886";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-neutral-600"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-white border-b border-neutral-200 p-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              <NavLinks />
              <div className="pt-4 border-t border-neutral-200">
                <div className="flex justify-center items-center space-x-6">
                  <SocialLinks />
                </div>
              </div>
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Agendar Horário
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
