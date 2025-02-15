
import { Service } from "@/types/common";
import { Sparkles, Palette, Heart, Wand2, Crown, Zap, Star, Shield, Droplet, Clock, Smile, Scissors } from "lucide-react";

export const services: Service[] = [
  {
    title: "Mechas Exclusivas",
    description: "Design personalizado de mechas que realçam sua beleza natural. Técnicas inovadoras para um resultado único e duradouro.",
    icon: Sparkles,
    keywords: [
      { text: "Iluminação natural", icon: Star },
      { text: "Dimensão", icon: Palette },
      { text: "Personalização", icon: Heart }
    ]
  },
  {
    title: "Coloração Premium",
    description: "Cores vibrantes e duradouras com produtos de alta performance. Transforme seu visual com tecnologia de ponta.",
    icon: Palette,
    keywords: [
      { text: "Cobertura perfeita", icon: Shield },
      { text: "Brilho intenso", icon: Sparkles },
      { text: "Proteção", icon: Heart }
    ]
  },
  {
    title: "Ruivos Deslumbrantes",
    description: "Especialistas em tons ruivos que harmonizam com seu tom de pele. Do cobre suave ao vermelho intenso.",
    icon: Heart,
    keywords: [
      { text: "Tons personalizados", icon: Palette },
      { text: "Durabilidade", icon: Clock },
      { text: "Vivacidade", icon: Sparkles }
    ]
  },
  {
    title: "Alisamento Inteligente",
    description: "Técnicas avançadas de alisamento que mantêm a saúde dos fios. Resultado natural com máximo cuidado.",
    icon: Wand2,
    keywords: [
      { text: "Sem formol", icon: Shield },
      { text: "Redução de volume", icon: Droplet },
      { text: "Proteção", icon: Heart }
    ]
  },
  {
    title: "Tratamentos Personalizados",
    description: "Protocolos exclusivos de tratamento para recuperação e fortalecimento dos fios. Resultados visíveis desde a primeira sessão.",
    icon: Crown,
    keywords: [
      { text: "Hidratação profunda", icon: Droplet },
      { text: "Reconstrução", icon: Shield },
      { text: "Nutrição", icon: Heart }
    ]
  },
  {
    title: "Finalização Expert",
    description: "Técnicas profissionais de finalização que realçam seu estilo. Aprenda a manter o visual do salão em casa.",
    icon: Zap,
    keywords: [
      { text: "Durabilidade", icon: Clock },
      { text: "Praticidade", icon: Star },
      { text: "Estilo", icon: Smile }
    ]
  },
  {
    title: "Corte com Visagismo",
    description: "Análise facial para um corte personalizado com acabamento perfeito e dicas de estilo.",
    icon: Scissors,
    keywords: [
      { text: "Identidade visual", icon: Smile },
      { text: "Correção de imperfeições", icon: Wand2 },
      { text: "Estilo pessoal", icon: Star }
    ]
  }
];
