
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/constants/social';
import SocialLinks from './SocialLinks';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[rgb(249,250,251)] p-8 rounded-lg shadow-sm">
        <motion.h3 
          className="text-2xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Informações
        </motion.h3>
        
        <div className="space-y-6">
          <motion.a 
            href={`https://wa.me/${CONTACT.PHONE.replace(/\D/g, '')}`}
            className="flex items-center gap-4 text-secondary hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ x: 5 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>{CONTACT.PHONE}</span>
          </motion.a>
          
          <motion.div 
            className="flex items-center gap-4 text-secondary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <MapPin className="w-5 h-5" />
            <span>{CONTACT.ADDRESS}</span>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4 text-secondary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Mail className="w-5 h-5" />
            <span>{CONTACT.EMAIL}</span>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h4 className="text-lg mb-4">Siga-nos</h4>
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfo;
