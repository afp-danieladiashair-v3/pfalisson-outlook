
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quanto tempo dura uma sessão de mechas?",
    answer: "O processo completo de mechas pode levar entre 3 a 4 horas, dependendo do comprimento e volume do cabelo, bem como da técnica escolhida.",
  },
  {
    question: "Com qual frequência devo retocar a coloração?",
    answer: "Recomendamos o retoque da coloração a cada 30-40 dias, dependendo do crescimento do cabelo e da cor escolhida.",
  },
  {
    question: "Quais cuidados devo ter após o alisamento?",
    answer: "Após o alisamento, evite lavar os cabelos por 72 horas, use produtos específicos para cabelos quimicamente tratados e evite prender o cabelo nos primeiros dias.",
  },
  {
    question: "Vocês trabalham com todas as marcas de produtos?",
    answer: "Trabalhamos com as melhores marcas do mercado, selecionadas criteriosamente para garantir resultados excepcionais e segurança para seus cabelos.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-neutral-600">
            Encontre respostas para suas principais dúvidas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-neutral-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
