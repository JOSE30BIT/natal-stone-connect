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
              <span className="text-gold-elegant">Pedra Potiguar</span> Mármores e Granitos
            </h3>
            <p className="text-stone-light mb-6 leading-relaxed">
              Especialistas em mármores e granitos. Qualidade, acabamento profissional 
              e atendimento direto com quem entende do assunto.
            </p>
            
            <Button variant="cta" onClick={() => window.open(whatsappUrl, '_blank')} className="mb-4">
              <MessageCircle className="w-4 h-4" />
              Solicitar Orçamento
            </Button>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-elegant">Contatos para Vendas</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-elegant flex-shrink-0" />
                <span className="text-stone-light">(84) 3027-4482</span>
              </div>
              <div className="text-stone-light text-sm">
                <p className="font-medium text-white">Manoel:</p>
                <p>(84) 98623-5054</p>
              </div>
              <div className="text-stone-light text-sm">
                <p className="font-medium text-white">Robson:</p>
                <p>(84) 99413-7954</p>
              </div>
              <div className="flex items-start gap-2 mt-4">
                <MapPin className="w-4 h-4 text-gold-elegant flex-shrink-0 mt-1" />
                <div className="text-stone-light">
                  <p>Rua das Violetas, nº 12</p>
                  <p>Bairro Cidade Bela</p>
                  <p>São José de Mipibu – RN</p>
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
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
              <p className="text-sm font-medium text-green-400 mb-1">💬 WhatsApp Oficial</p>
              <p className="text-stone-light text-sm">Manoel – (84) 98623-5054</p>
            </div>
          </div>
        </div>
        
        {/* Linha de separação */}
        <div className="border-t border-stone-medium mt-8 pt-8">
          <div className="text-center mb-6">
            <p className="text-gold-elegant font-semibold text-lg">
              ATENDEMOS EM TODO O RN
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-light text-sm mb-4 md:mb-0">
              © 2024 Pedra Potiguar Mármores e Granitos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-stone-light">
              <span>✓ Orçamento Gratuito</span>
              <span>✓ Garantia de Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
