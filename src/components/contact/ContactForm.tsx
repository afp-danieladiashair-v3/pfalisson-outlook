import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { createWhatsAppLink, formatWhatsAppMessage } from '@/utils/whatsapp';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        variant: "destructive",
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos.",
      });
      setLoading(false);
      return;
    }

    const whatsappLink = createWhatsAppLink(formatWhatsAppMessage(formData));
    window.open(whatsappLink, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato.",
    });

    setLoading(false);
  };

  return (
    <div className="bg-[rgb(249,250,251)] p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Seu nome completo"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="seu@email.com"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="(00) 00000-0000"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
            placeholder="Como podemos ajudar?"
          />
        </motion.div>

        <button 
          type="submit" 
          className="w-full bg-[rgb(244,235,255)] text-black hover:bg-primary-600 hover:text-white 
                 transition-all duration-300 rounded-full py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
