import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  label?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  label = "NUESTRO MÉTODO",
  title = "Bienvenidos a Saori",
  titleHighlight = "Integral",
  subtitle = "Centro de Medicina Funcional Y Medicina Tradicional China",
  description = "Reconecta con tu bienestar desde la naturaleza y la ciencia",
  primaryButtonText = "AGENDAR CITA",
  secondaryButtonText = "NUESTROS SERVICIOS",
  backgroundImage,
}: HeroSectionProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background with overlay */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </>
      )}

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-lighter/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto text-center text-primary-foreground relative z-10">
        {/* Etiqueta superior */}
        {label && (
          <div className="mb-8 animate-fade-in">
            <span className="text-primary-lighter uppercase tracking-[0.2em] text-sm font-medium border border-primary-lighter/30 px-6 py-2 rounded-full backdrop-blur-sm">
              {label}
            </span>
          </div>
        )}

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mb-6 leading-tight animate-fade-in delay-200">
          {title}
          {titleHighlight && (
            <>
              <br />
              <span className="text-primary-lighter">{titleHighlight}</span>
            </>
          )}
        </h1>

        {/* Subtítulo */}
        {subtitle && (
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-lighter mb-12 font-light tracking-wide animate-fade-in delay-400">
            {subtitle}
          </h2>
        )}

        {/* Descripción */}
        {description && (
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in delay-600">
            {description}
          </p>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-800">
          <Button
            variant="hero"
            size="lg"
            className="min-w-48 hover:scale-105 transform transition-all duration-300"
            onClick={() => window.open("https://wa.me/573107539221", "_blank")}
          >
            {primaryButtonText}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-48 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transform transition-all duration-300"
            onClick={() => {
              // Check if we're on a non-home page
              if (window.location.pathname !== "/") {
                // Navigate to home first
                window.location.href = "/#servicios";
              } else {
                // Already on home, just scroll
                scrollToSection("servicios");
              }
            }}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
