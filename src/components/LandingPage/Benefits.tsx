import { MessageCircle, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [{
    icon: <MessageCircle className="w-8 h-8 text-gold-elegant" />,
    title: "Atendimento Rápido",
    description: "Atendimento direto via WhatsApp"
  }, {
    icon: <Shield className="w-8 h-8 text-gold-elegant" />,
    title: "Garantia de Qualidade",
    description: "Qualidade e durabilidade garantidas em todos os projetos"
  }];

  return (
    <section className="py-20 bg-stone-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-stone-dark">
            Por que escolher a <span className="text-gold-elegant">Pedra Potiguar</span>?
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-slate-950">
            Somos especialistas em transformar ambientes com as melhores pedras naturais do mercado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3 text-orange-200">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-50">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;