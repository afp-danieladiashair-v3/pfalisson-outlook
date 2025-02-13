
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const whatsappConfig = {
  number: "5534999659886",
  defaultMessage: "Olá! Gostaria de agendar um horário.",
  getWhatsappUrl: (message?: string) => {
    const finalMessage = encodeURIComponent(message || whatsappConfig.defaultMessage);
    return `https://wa.me/${whatsappConfig.number}?text=${finalMessage}`;
  }
};
