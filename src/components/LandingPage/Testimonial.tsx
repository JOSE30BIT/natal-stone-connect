import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Candelária, Natal/RN",
      text: "Serviço de excelência! A bancada da minha cozinha ficou perfeita. O acabamento é impecável e a instalação foi muito profissional.",
      rating: 5
    },
    {
      name: "João Santos",
      location: "Tirol, Natal/RN", 
      text: "Recomendo a Marmonic! Fizeram toda a escada em granito da minha casa. Qualidade excepcional e prazo cumprido à risca.",
      rating: 5
    },
    {
      name: "Ana Costa",
      location: "Ponta Negra, Natal/RN",
      text: "Atendimento via WhatsApp muito rápido e eficiente. O mármore do meu banheiro ficou um luxo. Superou minhas expectativas!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-stone-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-stone-dark">
            O que nossos <span className="text-gold-elegant">clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja alguns depoimentos de quem já transformou seus ambientes conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-0">
                <Quote className="w-8 h-8 text-gold-elegant mb-4 opacity-50" />
                
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-elegant fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-stone-dark">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-gold-elegant mb-2">500+</div>
            <p className="text-muted-foreground">Projetos Realizados</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-elegant mb-2">30+</div>
            <p className="text-muted-foreground">Tipos de Pedras</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-elegant mb-2">15</div>
            <p className="text-muted-foreground">Anos de Experiência</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-elegant mb-2">100%</div>
            <p className="text-muted-foreground">Satisfação Garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;