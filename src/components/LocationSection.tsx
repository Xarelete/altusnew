import { MapPin, Clock, ShoppingBag, Dumbbell, GraduationCap, Car, Trees, Heart } from "lucide-react";

const LocationSection = () => {
  const nearbyPlaces = [
    {
      icon: ShoppingBag,
      name: "Vale Sul Shopping",
      time: "7 min",
      type: "Shopping Center",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ShoppingBag,
      name: "Shopping Jardim Oriente",
      time: "6 min",
      type: "Centro comercial",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      name: "Centro da Juventude",
      time: "5 min",
      type: "Educação e cultura",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Dumbbell,
      name: "Academia Panobianco",
      time: "3 min",
      type: "Fitness e bem-estar",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const locationHighlights = [
    {
      icon: MapPin,
      title: "Jardim América",
      description: "Um dos bairros mais valorizados de São José dos Campos"
    },
    {
      icon: Car,
      title: "Fácil Acesso",
      description: "Próximo às principais vias e rodovias da região"
    },
    {
      icon: Trees,
      title: "Área Verde",
      description: "Rodeado por natureza e espaços de lazer ao ar livre"
    },
    {
      icon: Heart,
      title: "Qualidade de Vida",
      description: "Região tranquila e segura, ideal para famílias"
    }
  ];

   return (
     <section id="localizacao" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12 lg:mb-16">
           <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
             <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
               <MapPin className="w-6 h-6 text-primary-foreground" />
             </div>
           </div>
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 title-font">
             LOCALIZAÇÃO PRIVILEGIADA
           </h2>
           <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             No coração do Jardim América, com acesso fácil a tudo que você precisa para viver bem
           </p>
         </div>

         {/* Map and highlights */}
         <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto mb-16">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-background rounded-3xl p-4 shadow-xl border border-border/50">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8956789!2d-45.8877644!3d-23.2170639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a0c739b6acb%3A0x8b3b47b8b8b8b8b8!2sJardim%20Am%C3%A9rica%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1642345678901!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização - Jardim América, São José dos Campos"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>

           {/* Location highlights */}
           <div className="order-1 lg:order-2 space-y-6">
             {locationHighlights.map((highlight, index) => (
               <div key={index} className="flex items-start space-x-4 group">
                 <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   <highlight.icon className="w-6 h-6 text-primary-foreground" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/90 transition-colors">
                     {highlight.title}
                   </h3>
                   <p className="text-muted-foreground leading-relaxed">
                     {highlight.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>

         {/* Nearby places */}
         <div>
           <div className="text-center mb-12">
             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 title-font">
               TUDO PERTO DE VOCÊ
             </h3>
             <p className="text-lg text-muted-foreground">
               Principais estabelecimentos a poucos minutos de distância
             </p>
           </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
              {nearbyPlaces.map((place, index) => (
                <div key={index} className="bg-background rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-border/50 text-center group">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${place.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <place.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <div className="mb-2 sm:mb-3">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                      {place.time}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">
                      de distância
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-sm sm:text-base text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight">
                    {place.name}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {place.type}
                  </p>
                </div>
              ))}
           </div>
         </div>
      </div>
    </section>
  );
};

export default LocationSection;