import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-lighter/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto text-center text-primary-foreground relative z-10">
        {/* Etiqueta superior */}
        <div className="mb-8 animate-fade-in">
          <span className="text-primary-lighter uppercase tracking-[0.2em] text-sm font-medium border border-primary-lighter/30 px-6 py-2 rounded-full backdrop-blur-sm">
            NUESTRO MÉTODO
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mb-6 leading-tight animate-fade-in delay-200">
          Cuidado Médico
          <br />
          <span className="text-primary-lighter">Integral</span>
        </h1>

        {/* Subtítulo */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-lighter mb-12 font-light tracking-wide animate-fade-in delay-400">
          Medicina Oriental y Occidental
        </h2>

        {/* Descripción */}
        <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in delay-600">
          En Saori, combinamos la medicina tradicional con las últimas innovaciones
          <br className="hidden md:block" />
          para brindarte el mejor cuidado médico personalizado usando un enfoque
          <br className="hidden md:block" />
          integrativo de la medicina oriental.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-800">
          <Button 
            variant="hero" 
            size="lg" 
            className="min-w-48 hover:scale-105 transform transition-all duration-300"
            onClick={() => scrollToSection('contacto')}
          >
            AGENDAR CITA
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-48 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transform transition-all duration-300"
            onClick={() => scrollToSection('servicios')}
          >
            NUESTROS SERVICIOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;