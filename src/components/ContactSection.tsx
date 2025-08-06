import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {

   return (
     <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-8 sm:mb-12">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 title-font">
             Contato
           </h2>
           <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
             Entre em contato conosco e seja um dos primeiros a conhecer todos os detalhes do Altus America
           </p>
         </div>

         <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
           {/* Contact Info */}
           <div className="space-y-4 sm:space-y-6">
             <div className="flex items-center space-x-3 sm:space-x-4">
               <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
               <div>
                 <h3 className="font-semibold text-sm sm:text-base">Telefone</h3>
                 <p className="opacity-90 text-sm sm:text-base">(12) 3921-4000</p>
               </div>
             </div>
             
             <div className="flex items-center space-x-3 sm:space-x-4">
               <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
               <div>
                 <h3 className="font-semibold text-sm sm:text-base">E-mail</h3>
                 <p className="opacity-90 text-sm sm:text-base break-all">contato@altusamerica.com.br</p>
               </div>
             </div>
             
             <div className="flex items-center space-x-3 sm:space-x-4">
               <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
               <div>
                 <h3 className="font-semibold text-sm sm:text-base">Localização</h3>
                 <p className="opacity-90 text-sm sm:text-base">Jardim América, São José dos Campos - SP</p>
               </div>
             </div>
           </div>

            {/* Additional Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                Horário de Atendimento
              </h3>
              <div className="space-y-2 opacity-90 text-sm sm:text-base">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 16h</p>
                <p>Domingo e Feriados: Fechado</p>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default ContactSection;