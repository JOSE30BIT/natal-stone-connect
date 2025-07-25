import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
const CTA = () => {
  const whatsappUrl = "https://wa.me/5584986235054?text=Olá,+gostaria+de+um+orçamento+de+mármore+ou+granito.";
  return <section className="py-20 bg-gradient-to-r from-stone-dark to-stone-medium text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar seu <span className="text-gold-elegant">ambiente</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-stone-light max-w-3xl mx-auto">
            Solicite seu orçamento agora no WhatsApp e receba atendimento personalizado com nossa equipe especializada
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => window.open(whatsappUrl, '_blank')}>
              <MessageCircle className="w-6 h-6" />
              SOLICITAR ORÇAMENTO GRÁTIS
            </Button>
            
            <Button variant="whatsapp" size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => window.open('tel:+5584986235054', '_self')}>
              <Phone className="w-6 h-6" />
              LIGAR AGORA
            </Button>
          </div>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Phone className="w-8 h-8 text-gold-elegant mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Telefone/WhatsApp</h3>
            <p className="text-stone-light">(84) 98623-5054</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 text-gold-elegant mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Localização</h3>
            <p className="text-stone-light">Largo Interventor Ubaldo Bezerra, 1949</p>
            <p className="text-stone-light">Candelária, Natal/RN</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-gold-elegant mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Horário de Funcionamento</h3>
            <p className="text-stone-light">Segunda a sexta: 08h às 18h</p>
            <p className="text-stone-light">Sábado: 08h às 13h</p>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-stone-light mb-4">✓ Orçamento Gratuito • ✓ Visita Técnica  • ✓ Garantia de Qualidade</p>
          <p className="text-sm text-stone-light">Atendemos toda Natal e Parnamirim • Mais de 15 anos de experiência • Instalação profissional</p>
        </div>
      </div>
    </section>;
};
export default CTA;