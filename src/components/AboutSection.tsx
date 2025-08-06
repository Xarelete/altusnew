import { Home, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import PlantasSection from "@/components/PlantasSection";

const newDesignShowcase = "/altus-uploads/00498ab3-73b2-4513-9365-9cbc8ce6bb5f.png";

const AboutSection = () => {

  return (
    <section id="empreendimento" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         {/* Main heading */}
         <div className="text-center mb-12 lg:mb-16">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 title-font">
             SOBRE O EMPREENDIMENTO
           </h2>
           <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             Um projeto moderno, integrado à natureza, com plantas amplas e mais de 30 opções de lazer para toda a família.
           </p>
         </div>

          {/* Features */}
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 lg:mb-16">
           <div className="text-center group transition-all duration-500 hover:scale-105">
             <div className="flex justify-center mb-4 p-6 bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl w-24 h-24 mx-auto items-center shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50">
               <Home className="w-10 h-10 sm:w-12 sm:h-12 text-primary transition-all duration-300" />
             </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-primary mb-2 transition-colors duration-300">
                Plantas Integradas
              </h3>
           </div>
           
           <div className="text-center group transition-all duration-500 hover:scale-105">
             <div className="flex justify-center mb-4 p-6 bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl w-24 h-24 mx-auto items-center shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50">
               <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-primary transition-all duration-300" />
             </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-primary mb-2 transition-colors duration-300">
                Localização Privilegiada
              </h3>
           </div>
           
           <div className="text-center group transition-all duration-500 hover:scale-105">
             <div className="flex justify-center mb-4 p-6 bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl w-24 h-24 mx-auto items-center shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50">
               <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary transition-all duration-300" />
             </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-primary mb-2 transition-colors duration-300">
                +de 2000m² de lazer
              </h3>
           </div>
         </div>

        {/* Plantas Section */}
        <PlantasSection />

         {/* CTA Section */}
         <div className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl transition-all duration-500 hover:shadow-3xl">
           <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
             {/* Image */}
             <div className="order-2 lg:order-1">
                <img 
                  src={newDesignShowcase} 
                  alt="Design showcase" 
                  className="w-full h-auto rounded-2xl shadow-xl transition-all duration-500 hover:scale-105"
                />
             </div>
             
             {/* Content */}
             <div className="order-1 lg:order-2 text-center lg:text-left">
               <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white title-font">
                 ANTECIPE-SE AO LANÇAMENTO EXCLUSIVO
               </h3>
               <p className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed text-white/95">
                 Seja um dos primeiros a receber todos os detalhes desse projeto único, 
                 preencha o formulário e entraremos em contato com você de forma prioritária.
               </p>
               <ContactForm 
                 trigger={
                   <Button 
                     variant="green"
                     size="lg"
                     className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold w-full sm:w-auto transition-all duration-500 hover:scale-105 shadow-xl"
                   >
                     ANTECIPE-SE AO LANÇAMENTO
                   </Button>
                 }
               />
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

export default AboutSection;