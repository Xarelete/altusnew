import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const newHeroBuilding = "/altus-uploads/122bde05-93e1-4634-8f8a-82c8d415e80f.png";
const newLogo = "/altus-uploads/36b24114-1e5b-45ca-b68d-60bdf29e207f.png";

const HeroSection = () => {

  return (
    <section 
      id="inicio" 
      className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center bg-cover bg-center pt-16 overflow-hidden"
      style={{ backgroundImage: `url(${newHeroBuilding})` }}
    >
      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
         <div className="mb-6">
            <img 
             src={newLogo} 
             alt="Altus America Logo" 
             className="mx-auto h-32 sm:h-36 md:h-44 lg:h-52 xl:h-60 object-contain filter drop-shadow-2xl transition-all duration-700 hover:scale-105"
           />
         </div>

         {/* Main heading */}
         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg title-font">
           BREVE LANÇAMENTO<br />
           NO JARDIM AMÉRICA
         </h1>

         {/* Subtitle */}
         <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-white/95 drop-shadow-md text-nunito">
           Apartamentos de 2 e 3 dormitórios com suíte,<br className="hidden sm:block" />
           <span className="sm:hidden"> </span>com metragens de 66m² a 87m²
         </p>

        {/* CTA Button */}
        <Button 
          variant="green"
          size="lg"
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold w-full sm:w-auto transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl"
          onClick={() => {
            document.getElementById('formulario')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          ANTECIPE-SE AO LANÇAMENTO
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;