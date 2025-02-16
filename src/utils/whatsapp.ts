
export const createWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/5534999659886?text=${encodedMessage}`;
};

export const formatWhatsAppMessage = (data: {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}): string => {
  return `*Nova mensagem do site*\n\n${
    data.name ? `*Nome:* ${data.name}\n` : ""
  }${data.email ? `*Email:* ${data.email}\n` : ""}${
    data.phone ? `*Telefone:* ${data.phone}\n` : ""
  }${data.message ? `*Mensagem:* ${data.message}` : ""}`;
};
