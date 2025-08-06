import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const newPlantaA = "/altus-uploads/466adc58-a1e7-4b92-bbe2-90f55d3f8202.png";
const newPlantaB = "/altus-uploads/04bf92b6-f9b3-4545-80b7-9f4012c8b736.png";

const PlantasSection = () => {
  const [selectedPlanta, setSelectedPlanta] = useState<string | null>(null);

  const plantas = [
    {
      id: 'A',
      area: '66m²',
      image: newPlantaA,
      title: 'PLANTA A'
    },
    {
      id: 'B', 
      area: '87m²',
      image: newPlantaB,
      title: 'PLANTA B'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 title-font">
          Plantas
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Conheça as plantas disponíveis, cada uma pensada para oferecer máximo conforto e funcionalidade.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {plantas.map((planta) => (
            <div key={planta.id} className="bg-primary rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden p-4 sm:p-6 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-foreground mb-2 lg:mb-3 title-font">
                  {planta.title}
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground mb-4 sm:mb-6 lg:mb-8 font-semibold">
                  {planta.area}
                </p>
                
                <div className="bg-background rounded-xl sm:rounded-2xl lg:rounded-3xl p-2 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8 shadow-inner">
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedPlanta(planta.image)}
                  >
                     <img 
                       src={planta.image} 
                       alt={`Planta ${planta.id}`}
                       className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg lg:rounded-xl group-hover:opacity-90 transition-all duration-500 shadow-lg"
                       key={`planta-${planta.id}-updated`}
                     />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg lg:rounded-xl transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                        <Button variant="secondary" size="lg" className="text-sm lg:text-base font-semibold shadow-xl">
                          Ver em tamanho completo
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4 lg:mt-6">
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 p-2 lg:p-3 transition-all duration-300">
                      <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                    </Button>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-primary/30 rounded-full"></div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 p-2 lg:p-3 transition-all duration-300">
                      <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size planta view */}
      <Dialog open={!!selectedPlanta} onOpenChange={() => setSelectedPlanta(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 z-10"
              onClick={() => setSelectedPlanta(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            {selectedPlanta && (
              <img 
                src={selectedPlanta} 
                alt="Planta ampliada"
                className="w-full h-auto"
                key="modal-planta-view"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlantasSection;