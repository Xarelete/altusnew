import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/altus-uploads/77c6b236-603f-4c1f-b35f-cc74b8756be8.png" 
              alt="Altus America" 
              className="h-8 w-auto md:h-8 transition-all duration-300 hover:scale-105"
            />
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary text-sm lg:text-base"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('empreendimento')}
              className="text-foreground hover:text-primary text-sm lg:text-base"
            >
              Empreendimento
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('localizacao')}
              className="text-foreground hover:text-primary text-sm lg:text-base"
            >
              Localização
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary text-sm lg:text-base"
            >
              Contato
            </Button>
          </div>

          
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-foreground hover:text-primary"
              >
                Início
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('empreendimento')}
                className="block w-full text-left text-foreground hover:text-primary"
              >
                Empreendimento
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('localizacao')}
                className="block w-full text-left text-foreground hover:text-primary"
              >
                Localização
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-foreground hover:text-primary"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;