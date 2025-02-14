
import { Sparkles, Palette, Heart, Star, Shield, Clock, Zap, MessageCircle } from "lucide-react";
import { KeywordTag } from "./ui/keyword-tag";
import { socialLinks } from "@/data/social";

const footerKeywords = {
  features: [
    { text: "Especialista em Mechas", icon: Sparkles },
    { text: "Coloração Premium", icon: Palette },
    { text: "Ruivos Naturais", icon: Heart }
  ],
  benefits: [
    { text: "Atendimento VIP", icon: Star },
    { text: "Resultados Garantidos", icon: Shield }
  ],
  social: [
    { text: "Antes e Depois", icon: Clock },
    { text: "Dicas de Cabelo", icon: Zap }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-primary-100/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary-600 mb-6">Daniela Dias Hair</h3>
            <p className="text-primary-500 mb-4">Transformando visual e autoestima</p>
            <div className="flex flex-wrap gap-4">
              {footerKeywords.features.map((keyword, index) => (
                <KeywordTag key={index} keyword={keyword} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary-600 mb-6">Contato</h4>
            <a
              href="https://wa.me/5534999659886"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-500 hover:text-primary-600 mb-4"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              +55 (34) 99965-9886
            </a>
            <p className="text-primary-500 mt-4">
              Agende sua transformação e descubra como podemos realçar sua beleza natural
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {footerKeywords.benefits.map((keyword, index) => (
                <KeywordTag key={index} keyword={keyword} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary-600 mb-6">Redes Sociais</h4>
            <div className="flex space-x-6 mb-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-500 hover:text-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
            <p className="text-primary-500">
              Siga-nos para inspirações, dicas e resultados incríveis
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {footerKeywords.social.map((keyword, index) => (
                <KeywordTag key={index} keyword={keyword} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
