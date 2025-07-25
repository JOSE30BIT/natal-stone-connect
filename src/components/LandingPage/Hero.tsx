import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bancada-marmore.jpg";
const Hero = () => {
  const whatsappUrl = "https://wa.me/5584986235054?text=Olá,+gostaria+de+um+orçamento+de+mármore+ou+granito.";
  return <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-dark/90 via-stone-dark/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme sua casa ou comércio com 
            <span className="text-gold-elegant"> pedras de alto padrão</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-stone-light leading-relaxed">
            Mármores, granitos e quartzitos com entrega rápida, instalação especializada 
            e atendimento direto via WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="cta" size="lg" onClick={() => window.open(whatsappUrl, '_blank')} className="text-lg px-8 py-6 h-auto text-slate-50">
              <Phone className="w-5 h-5" />
              SOLICITAR ORÇAMENTO GRÁTIS
            </Button>
            
            
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-elegant" />
              <span>(84) 98623-5054</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-elegant" />
              <span>Candelária, Natal/RN</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-elegant" />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-13h</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;