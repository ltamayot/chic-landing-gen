import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Servicios", id: "servicios" },
    { name: "Método Saori", id: "metodo" }, 
    { name: "Dra Sara Tamayo", id: "doctora" },
    { name: "Primera Consulta", id: "consulta" },
    { name: "Testimonios", id: "testimonios" },
    { name: "Contacto", id: "contacto" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
            </div>
            <span className={`text-2xl font-serif font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-primary-foreground'
            }`}>
              SAORI
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 hover:scale-105 transform ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-primary-foreground hover:text-primary-lighter'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>

          {/* CTA Button - Desktop */}
          <Button 
            variant={isScrolled ? "outline" : "secondary"} 
            size="sm" 
            className="hidden lg:flex font-medium tracking-wide"
            onClick={() => scrollToSection('contacto')}
          >
            AGENDAR CITA
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 font-medium tracking-wide self-start"
                onClick={() => scrollToSection('contacto')}
              >
                AGENDAR CITA
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;