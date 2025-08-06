import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  paisWhatsapp: z.string().min(1, "País é obrigatório"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos"),
  email: z.string().email("Email inválido"),
  renda: z.string().min(1, "Renda é obrigatória"),
});

type FormData = z.infer<typeof formSchema>;

const FormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Dados do formulário:", data);
    
    toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
    
    setIsSubmitting(false);
    reset();
  };

  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Formata o número
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return numbers.slice(0, 11).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const formatCurrency = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Converte para número e formata como moeda
    const amount = parseFloat(numbers) / 100;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount);
  };

  return (
    <section id="formulario" className="py-16 md:py-24 bg-primary relative overflow-hidden w-full">
      {/* Solid green background with subtle texture */}
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
      
      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 title-font tracking-tight">
            ANTECIPE-SE AO LANÇAMENTO EXCLUSIVO
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Seja um dos primeiros a receber todos os detalhes desse projeto único, 
            preencha o formulário e entraremos em contato com você de forma prioritária.
          </p>
        </div>

        <div className="bg-primary/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 max-w-2xl mx-auto transition-all duration-300 hover:shadow-3xl border border-white/20">
          <div className="mb-6 md:mb-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
              Garanta seu apartamento
            </h3>
            <p className="text-primary-foreground/80 text-sm md:text-base">
              Preencha seus dados e receba informações exclusivas
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-sm font-semibold text-primary-foreground">
                  Nome completo *
                </Label>
                <Input
                  id="nome"
                  placeholder="Seu nome completo"
                  {...register("nome")}
                  className={`h-12 border-2 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-white/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/60 ${
                    errors.nome 
                      ? "border-destructive focus:border-destructive" 
                      : "border-white/30 focus:border-white hover:border-white/50"
                  }`}
                />
                {errors.nome && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <span>⚠</span> {errors.nome.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="paisWhatsapp" className="text-sm font-semibold text-primary-foreground">
                    País *
                  </Label>
                  <select
                    id="paisWhatsapp"
                    {...register("paisWhatsapp")}
                    className={`h-12 border-2 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-white/20 bg-white/10 text-primary-foreground w-full px-3 ${
                      errors.paisWhatsapp 
                        ? "border-destructive focus:border-destructive" 
                        : "border-white/30 focus:border-white hover:border-white/50"
                    }`}
                  >
                    <option value="" className="text-gray-800">Selecione</option>
                    <option value="+55" className="text-gray-800">🇧🇷 Brasil (+55)</option>
                    <option value="+1" className="text-gray-800">🇺🇸 EUA (+1)</option>
                    <option value="+351" className="text-gray-800">🇵🇹 Portugal (+351)</option>
                    <option value="+34" className="text-gray-800">🇪🇸 Espanha (+34)</option>
                    <option value="+33" className="text-gray-800">🇫🇷 França (+33)</option>
                    <option value="+44" className="text-gray-800">🇬🇧 Reino Unido (+44)</option>
                    <option value="+49" className="text-gray-800">🇩🇪 Alemanha (+49)</option>
                    <option value="+39" className="text-gray-800">🇮🇹 Itália (+39)</option>
                    <option value="+54" className="text-gray-800">🇦🇷 Argentina (+54)</option>
                    <option value="+56" className="text-gray-800">🇨🇱 Chile (+56)</option>
                  </select>
                  {errors.paisWhatsapp && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <span>⚠</span> {errors.paisWhatsapp.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-sm font-semibold text-primary-foreground">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    placeholder="(11) 99999-9999"
                    {...register("whatsapp")}
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      e.target.value = formatted;
                    }}
                    className={`h-12 border-2 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-white/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/60 ${
                      errors.whatsapp 
                        ? "border-destructive focus:border-destructive" 
                        : "border-white/30 focus:border-white hover:border-white/50"
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <span>⚠</span> {errors.whatsapp.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-primary-foreground">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className={`h-12 border-2 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-white/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/60 ${
                    errors.email 
                      ? "border-destructive focus:border-destructive" 
                      : "border-white/30 focus:border-white hover:border-white/50"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <span>⚠</span> {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="renda" className="text-sm font-semibold text-primary-foreground">
                  Renda familiar *
                </Label>
                <Input
                  id="renda"
                  placeholder="R$ 0,00"
                  {...register("renda")}
                  onChange={(e) => {
                    const formatted = formatCurrency(e.target.value);
                    e.target.value = formatted;
                  }}
                  className={`h-12 border-2 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-white/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/60 ${
                    errors.renda 
                      ? "border-destructive focus:border-destructive" 
                      : "border-white/30 focus:border-white hover:border-white/50"
                  }`}
                />
                {errors.renda && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <span>⚠</span> {errors.renda.message}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="green"
                disabled={isSubmitting}
                className="w-full h-12 md:h-14 text-base md:text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl rounded-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ENVIANDO...
                  </span>
                ) : (
                  "ANTECIPE-SE AO LANÇAMENTO"
                )}
              </Button>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-primary-foreground/70">
                * Campos obrigatórios. Seus dados estão seguros conosco.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;