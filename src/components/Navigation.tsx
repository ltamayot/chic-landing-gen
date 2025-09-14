import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    "Servicios",
    "Método Saori", 
    "Dra Sara Tamayo",
    "Primera Consulta",
    "Testimonios",
    "Contacto"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
            </div>
            <span className="text-2xl font-serif font-semibold text-primary tracking-wide">
              SAORI
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="outline" size="sm" className="font-medium tracking-wide">
            BOOK NOW
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;