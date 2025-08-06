import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import LocationSection from "@/components/LocationSection";
import MacroSection from "@/components/MacroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FormSection from "@/components/FormSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <LocationSection />
      <MacroSection />
      <TestimonialsSection />
      <FormSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
