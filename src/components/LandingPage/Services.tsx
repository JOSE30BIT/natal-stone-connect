import { Card, CardContent } from "@/components/ui/card";
import escadaImage from "@/assets/escada-granito.jpg";
import bancadaImage from "@/assets/bancada-banheiro.jpg";
import workshopImage from "@/assets/workshop-pedras.jpg";

const Services = () => {
  const marbleServices = [
    "Bancadas e mesas de mármore",
    "Escadas, divisórias e peitoris", 
    "Pisantes, soleiras e revestimentos",
    "Móveis em mármore",
    "Projeto e fabricação sob medida",
    "Túmulo em mármore"
  ];

  const graniteServices = [
    "Bancada em granito",
    "Escada em granito",
    "Mesa de granito", 
    "Pia e piso em granito",
    "Portal, fachada e borda de piscina",
    "Superfície de quartzo"
  ];

  const stoneTypes = [
    "Mármores nacionais e importados",
    "Granitos premium",
    "Quartzitos naturais",
    "Ônix exclusivo",
    "Supernanos",
    "Pedras exóticas"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Nossos <span className="text-gold-elegant">Serviços</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Soluções completas em pedras naturais para residências e comércios
          </p>
        </div>
        
        {/* Galeria de Imagens */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/f15e3a0e-f44c-4fcd-858a-0cc43682ee86.png" 
              alt="Fachada residencial em granito" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-lg">Fachada Elegante</h3>
              <p className="text-sm opacity-90">Sofisticação e durabilidade em granito</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img 
              src={bancadaImage} 
              alt="Bancada de banheiro" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-lg">Bancadas de Mármore</h3>
              <p className="text-sm opacity-90">Sofisticação única</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img 
              src={workshopImage} 
              alt="Workshop de pedras" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-lg">Variedade de Pedras</h3>
              <p className="text-sm opacity-90">Mais de 30 opções</p>
            </div>
          </div>
        </div>
        
        {/* Serviços Detalhados - Layout Horizontal */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Serviços em Mármore */}
          <Card className="p-6 shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-4 text-white text-center">
                Serviços em <span className="text-gold-elegant">Mármore</span>
              </h3>
              <ul className="space-y-3">
                {marbleServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gold-elegant rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Serviços em Granito */}
          <Card className="p-6 shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-4 text-white text-center">
                Serviços em <span className="text-gold-elegant">Granito</span>
              </h3>
              <ul className="space-y-3">
                {graniteServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gold-elegant rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Tipos de Pedras */}
          <Card className="p-6 shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-4 text-white text-center">
                Tipos de <span className="text-gold-elegant">Pedras</span>
              </h3>
              <ul className="space-y-3">
                {stoneTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gold-elegant rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-sm">{type}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;