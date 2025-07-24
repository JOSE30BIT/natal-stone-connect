import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual o prazo médio de entrega?",
      answer: "O prazo varia de acordo com o projeto. Para bancadas simples, geralmente é de 7 a 10 dias úteis. Projetos mais complexos podem levar até 15 dias. Fornecemos prazo exato após a medição do local."
    },
    {
      question: "Fazem visita técnica?",
      answer: "Sim! Fazemos visita técnica gratuita para medição e orçamento. Nossa equipe especializada vai até o local para avaliar o projeto e oferecer a melhor solução em pedras naturais."
    },
    {
      question: "Trabalham com parcelamento?",
      answer: "Sim, oferecemos diversas opções de pagamento, incluindo parcelamento no cartão de crédito. Entre em contato via WhatsApp para conhecer as condições especiais disponíveis."
    },
    {
      question: "Atendem reformas residenciais?",
      answer: "Atendemos tanto residências quanto estabelecimentos comerciais. Temos experiência em projetos de todos os tamanhos, desde pequenas reformas até grandes construções."
    },
    {
      question: "A instalação está incluída no serviço?",
      answer: "Sim, a instalação profissional está incluída em todos os nossos serviços. Nossa equipe especializada garante o acabamento perfeito e a durabilidade do projeto."
    },
    {
      question: "Quais tipos de pedras vocês trabalham?",
      answer: "Trabalhamos com mais de 30 tipos de pedras: mármores nacionais e importados, granitos premium, quartzitos, ônix, supernanos e pedras exóticas. Temos opções para todos os gostos e orçamentos."
    },
    {
      question: "Oferecem garantia nos serviços?",
      answer: "Sim, oferecemos garantia em todos os nossos serviços. A garantia inclui qualidade do material e da instalação. Os detalhes específicos são informados no orçamento."
    },
    {
      question: "Como solicitar um orçamento?",
      answer: "É muito simples! Clique no botão do WhatsApp e envie sua solicitação. Nossa equipe responderá rapidamente e agendará a visita técnica gratuita para medição e orçamento detalhado."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-stone-dark">
            Perguntas <span className="text-gold-elegant">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-[var(--shadow-elegant)] px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-stone-dark hover:text-gold-elegant transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;