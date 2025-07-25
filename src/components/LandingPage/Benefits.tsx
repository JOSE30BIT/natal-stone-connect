import { CheckCircle, Truck, Sparkles, MessageCircle, Shield } from "lucide-react";
const Benefits = () => {
  const benefits = [{
    icon: <CheckCircle className="w-8 h-8 text-gold-elegant" />,
    title: "Instalação Inclusa",
    description: "Instalação profissional especializada incluída no serviço"
  }, {
    icon: <Sparkles className="w-8 h-8 text-gold-elegant" />,
    title: "Acabamento Sofisticado",
    description: "Acabamento de alto padrão com qualidade garantida"
  }, {
    icon: <MessageCircle className="w-8 h-8 text-gold-elegant" />,
    title: "Atendimento Rápido",
    description: "Atendimento direto via WhatsApp com resposta imediata"
  }, {
    icon: <Truck className="w-8 h-8 text-gold-elegant" />,
    title: "Mais de 30 Tipos de Pedras",
    description: "Ampla variedade de mármores, granitos e pedras especiais"
  }, {
    icon: <Shield className="w-8 h-8 text-gold-elegant" />,
    title: "Garantia de Qualidade",
    description: "Qualidade e durabilidade garantidas em todos os projetos"
  }];
  return <section className="py-20 bg-stone-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-stone-dark">
            Por que escolher a <span className="text-gold-elegant">Marmonic</span>?
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-slate-950">
            Somos especialistas em transformar ambientes com as melhores pedras naturais do mercado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3 text-orange-200">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-50">
                {benefit.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Benefits;