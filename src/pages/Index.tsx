
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GitHubLogoIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleGitHubConnect = () => {
    // This would be replaced with actual GitHub OAuth flow
    setIsConnected(true);
  };

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-soft-accent text-sm font-medium mb-4 animate-fadeIn">
            Bem-vindo ao seu novo projeto
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Comece seu projeto com estilo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Uma base moderna e elegante para seu próximo projeto, com integração
            perfeita com GitHub e animações suaves.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handleGitHubConnect}
              className="group flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              <GitHubLogoIcon className="w-5 h-5" />
              {isConnected ? "Conectado ao GitHub" : "Conectar ao GitHub"}
              <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <div className="w-12 h-12 rounded-full bg-soft-accent flex items-center justify-center">🚀</div>,
    title: "Início Rápido",
    description: "Configure seu projeto em minutos com nossa estrutura otimizada.",
  },
  {
    icon: <div className="w-12 h-12 rounded-full bg-soft-accent flex items-center justify-center">⚡</div>,
    title: "Integração GitHub",
    description: "Sincronize seu código facilmente com repositórios GitHub.",
  },
  {
    icon: <div className="w-12 h-12 rounded-full bg-soft-accent flex items-center justify-center">✨</div>,
    title: "Design Moderno",
    description: "Interface elegante com animações suaves e responsivas.",
  },
];

export default Index;
