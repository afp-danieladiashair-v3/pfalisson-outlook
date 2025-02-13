
export const WHATSAPP_CONFIG = {
  number: "5534999659886",
  defaultMessage: "Olá! Gostaria de agendar um horário.",
  getUrl: (message?: string) => {
    const finalMessage = encodeURIComponent(message || WHATSAPP_CONFIG.defaultMessage);
    return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${finalMessage}`;
  }
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/danieladias_hair",
  tiktok: "https://www.tiktok.com/@danieladiashair",
  youtube: "https://www.youtube.com/@DanielaDiasHair",
} as const;

export const NAV_LINKS = [
  { to: "home", label: "Início" },
  { to: "services", label: "Serviços" },
  { to: "testimonials", label: "Depoimentos" },
  { to: "brands", label: "Marcas Premium" },
] as const;
