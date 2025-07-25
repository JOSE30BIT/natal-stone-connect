import Hero from "@/components/LandingPage/Hero";
import Benefits from "@/components/LandingPage/Benefits";
import Services from "@/components/LandingPage/Services";
import Testimonial from "@/components/LandingPage/Testimonial";
import CTA from "@/components/LandingPage/CTA";
import Footer from "@/components/LandingPage/Footer";
import WhatsAppFloat from "@/components/LandingPage/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Services />
      <Testimonial />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
