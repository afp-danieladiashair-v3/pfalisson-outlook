const faqs = [
  {
    question: "Quanto tempo dura uma sessão de transformação?",
    answer: "O tempo varia de acordo com o serviço escolhido, geralmente entre 2 a 4 horas. Cada procedimento é personalizado para garantir o melhor resultado."
  },
  {
    question: "Com qual frequência devo fazer a manutenção da cor?",
    answer: "Recomendamos manutenção a cada 30-45 dias para preservar a vivacidade da cor e a saúde dos fios. O intervalo pode variar conforme sua rotina de cuidados."
  },
  {
    question: "Como funciona o agendamento?",
    answer: "Trabalhamos exclusivamente com agendamento prévio para garantir atendimento personalizado. Entre em contato via WhatsApp para verificar disponibilidade."
  },
  {
    question: "Quais produtos são utilizados nos procedimentos?",
    answer: "Utilizamos apenas produtos premium de marcas reconhecidas internacionalmente, garantindo segurança e qualidade em todos os procedimentos."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-white to-[#FFE4E6]/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          Dúvidas Frequentes
        </h2>
        <p className="text-center text-primary-500 mb-12 max-w-2xl mx-auto">
          Esclarecemos suas principais dúvidas para proporcionar a melhor experiência
        </p>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-700">{faq.question}</h3>
              <p className="text-primary-500 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
