import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bancada-marmore.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5584986235054?text=Olá,+gostaria+de+um+orçamento+de+mármore+ou+granito.";
  
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-dark/90 via-stone-dark/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-gold-elegant">Pedra Potiguar</span> Mármores e Granitos
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Especialistas em mármores e granitos
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-stone-light leading-relaxed">
            Qualidade, acabamento profissional e atendimento direto com quem entende do assunto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="cta" size="lg" onClick={() => window.open(whatsappUrl, '_blank')} className="px-8 py-6 h-auto text-slate-50 bg-green-600 hover:bg-green-500 text-xl">
              <Phone className="w-5 h-5" />
              SOLICITAR ORÇAMENTO GRÁTIS
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-elegant" />
              <span>(84) 3027-4482</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-elegant" />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
