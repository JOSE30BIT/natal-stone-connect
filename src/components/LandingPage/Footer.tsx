import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/5584986235054?text=Olá,+gostaria+de+um+orçamento+de+mármore+ou+granito.";

  return (
    <footer className="bg-stone-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gold-elegant">Marmonic</span> Granitos e Mármores
            </h3>
            <p className="text-stone-light mb-6 leading-relaxed">
              Especialistas em transformar ambientes com as melhores pedras naturais do mercado. 
              Qualidade, durabilidade e acabamento sofisticado em todos os projetos.
            </p>
            
            <Button 
              variant="cta" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="mb-4"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar Orçamento
            </Button>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-elegant">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-elegant flex-shrink-0" />
                <span className="text-stone-light">(84) 98623-5054</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-elegant flex-shrink-0 mt-1" />
                <div className="text-stone-light">
                  <p>Largo Interventor Ubaldo Bezerra, 1949</p>
                  <p>Candelária, Natal/RN, 59064-620</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horários */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-elegant">Horário de Funcionamento</h4>
            <div className="space-y-2 text-stone-light">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-elegant flex-shrink-0" />
                <div>
                  <p>Segunda a sexta: 08h às 18h</p>
                  <p>Sábado: 08h às 13h</p>
                  <p>Domingo e feriados: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha de separação */}
        <div className="border-t border-stone-medium mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-light text-sm mb-4 md:mb-0">
              © 2024 Marmonic Granitos e Mármores. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-stone-light">
              <span>✓ Orçamento Gratuito</span>
              <span>✓ Garantia de Qualidade</span>
              <span>✓ Instalação Inclusa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;