import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  paisWhatsapp: z.string().min(1, "País é obrigatório"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos"),
  email: z.string().email("Email inválido"),
  renda: z.string().min(1, "Renda é obrigatória"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  trigger: React.ReactNode;
}

const ContactForm = ({ trigger }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-primary">
            Interesse no Altus America
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              {...register("nome")}
              className={errors.nome ? "border-destructive" : ""}
            />
            {errors.nome && (
              <p className="text-sm text-destructive">{errors.nome.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="paisWhatsapp">País</Label>
              <select
                id="paisWhatsapp"
                {...register("paisWhatsapp")}
                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.paisWhatsapp ? "border-destructive" : ""}`}
              >
                <option value="">Selecione</option>
                <option value="+55">🇧🇷 Brasil (+55)</option>
                <option value="+1">🇺🇸 EUA (+1)</option>
                <option value="+351">🇵🇹 Portugal (+351)</option>
                <option value="+34">🇪🇸 Espanha (+34)</option>
                <option value="+33">🇫🇷 França (+33)</option>
                <option value="+44">🇬🇧 Reino Unido (+44)</option>
                <option value="+49">🇩🇪 Alemanha (+49)</option>
                <option value="+39">🇮🇹 Itália (+39)</option>
                <option value="+54">🇦🇷 Argentina (+54)</option>
                <option value="+56">🇨🇱 Chile (+56)</option>
              </select>
              {errors.paisWhatsapp && (
                <p className="text-sm text-destructive">{errors.paisWhatsapp.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                placeholder="(11) 99999-9999"
                {...register("whatsapp")}
                onChange={(e) => {
                  const formatted = formatPhone(e.target.value);
                  e.target.value = formatted;
                }}
                className={errors.whatsapp ? "border-destructive" : ""}
              />
              {errors.whatsapp && (
                <p className="text-sm text-destructive">{errors.whatsapp.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="renda">Renda familiar</Label>
            <Input
              id="renda"
              placeholder="R$ 0,00"
              {...register("renda")}
              onChange={(e) => {
                const formatted = formatCurrency(e.target.value);
                e.target.value = formatted;
              }}
              className={errors.renda ? "border-destructive" : ""}
            />
            {errors.renda && (
              <p className="text-sm text-destructive">{errors.renda.message}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="green"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;