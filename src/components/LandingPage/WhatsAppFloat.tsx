import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/5584986235054?text=Olá,+gostaria+de+um+orçamento+de+mármore+ou+granito.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
        onClick={() => window.open(whatsappUrl, '_blank')}
        aria-label="Enviar mensagem no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;