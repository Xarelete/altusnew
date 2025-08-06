import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Moradora há 3 anos",
      text: "Excelente qualidade de construção e acabamento. Superou nossas expectativas em todos os aspectos. A localização é perfeita e a estrutura de lazer é incrível.",
      rating: 5,
      avatar: "MS"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Família Santos",
      text: "Localização perfeita e plantas bem pensadas. Nossa família está muito feliz com a escolha. O investimento valeu cada centavo e recomendamos para todos.",
      rating: 5,
      avatar: "JS"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Proprietária",
      text: "Atendimento excepcional desde o primeiro contato. Profissionais muito competentes e sempre dispostos a esclarecer todas as dúvidas. Experiência incrível!",
      rating: 5,
      avatar: "AC"
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      role: "Investidor",
      text: "Investimento que valeu a pena. Qualidade de vida que sempre sonhamos ter. A valorização do imóvel superou nossas expectativas em poucos anos.",
      rating: 5,
      avatar: "CO"
    },
    {
      id: 5,
      name: "Lucia Ferreira",
      role: "Moradora satisfeita",
      text: "Entrega pontual e dentro do prometido. Recomendo a MACRO para todos os amigos. A qualidade dos materiais e acabamentos é excepcional.",
      rating: 5,
      avatar: "LF"
    }
  ];

   return (
     <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 opacity-30">
         <div className="absolute inset-0" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.02'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
         }}></div>
       </div>
       
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
         <div className="text-center mb-12 lg:mb-16">
           <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
             <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
               <Quote className="w-6 h-6 text-primary-foreground" />
             </div>
           </div>
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 title-font">
             DEPOIMENTOS REAIS
           </h2>
           <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             Histórias de quem já escolheu viver com qualidade e confiou na nossa experiência
           </p>
         </div>

         <div className="max-w-6xl mx-auto px-4 sm:px-0">
           <Carousel className="w-full">
             <CarouselContent className="-ml-4">
                 {testimonials.map((testimonial) => (
                   <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                     <Card className="bg-background border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full group overflow-hidden">
                       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                       
                       <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                         {/* Quote icon */}
                         <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                           <Quote className="w-6 h-6 text-primary" />
                         </div>
                         
                         {/* Rating */}
                         <div className="flex items-center mb-4">
                           {[...Array(testimonial.rating)].map((_, i) => (
                             <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                           ))}
                         </div>
                         
                         {/* Testimonial text */}
                         <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow group-hover:text-foreground/80 transition-colors">
                           "{testimonial.text}"
                         </p>
                         
                         {/* Author info */}
                         <div className="flex items-center">
                           <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 group-hover:scale-110 transition-transform shadow-lg">
                             {testimonial.avatar}
                           </div>
                           <div>
                             <h4 className="font-bold text-primary group-hover:text-primary/90 transition-colors">
                               {testimonial.name}
                             </h4>
                             <p className="text-sm text-muted-foreground">
                               {testimonial.role}
                             </p>
                           </div>
                         </div>
                      </CardContent>
                    </Card>
                </CarouselItem>
              ))}
             </CarouselContent>
              <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 -left-4 sm:-left-12 border-0" />
              <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 -right-4 sm:-right-12 border-0" />
           </Carousel>
         </div>

         {/* Trust indicators */}
         <div className="flex justify-center mt-16">
           <div className="bg-primary/5 rounded-2xl p-6 text-center max-w-md">
             <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
             <div className="text-muted-foreground mb-3">Avaliação média dos clientes</div>
             <div className="flex justify-center">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mx-0.5" />
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>
  );
};

export default TestimonialsSection;