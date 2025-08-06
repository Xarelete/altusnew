import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('formulario');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="inline-block p-3 rounded-lg" style={{ backgroundColor: '#F4F1EB' }}>
              <img 
                src="/altus-uploads/77c6b236-603f-4c1f-b35f-cc74b8756be8.png" 
                alt="Altus America" 
                className="h-16 md:h-12 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-sm opacity-90 mb-4">
              Antecipe-se ao lançamento exclusivo
            </p>
            <Button 
              onClick={scrollToForm}
              variant="secondary" 
              className="font-semibold"
            >
              Quero Conhecer o Altus
            </Button>
          </div>

          {/* Contato */}
          <div className="text-center md:text-right">
            <div className="space-y-2 text-sm opacity-90">
              <p>📞 (12) 3921-4000</p>
              <p>📍 Jardim América, SJC</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4 text-center">
          <p className="text-sm opacity-90">© 2024 Altus America. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;