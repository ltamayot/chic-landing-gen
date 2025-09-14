import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-primary flex items-center justify-center px-6 py-20">
      <div className="container mx-auto text-center text-primary-foreground">
        {/* Etiqueta superior */}
        <div className="mb-8">
          <span className="text-primary-lighter uppercase tracking-wider text-sm font-medium">
            NUESTRO MÉTODO
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-serif font-normal mb-6 leading-tight">
          Cuidado Médico
          <br />
          Integral
        </h1>

        {/* Subtítulo */}
        <h2 className="text-xl md:text-2xl text-primary-lighter mb-12 font-light tracking-wide">
          Medicina Oriental y Occidental
        </h2>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          En Saori, combinamos la medicina tradicional con las últimas innovaciones
          <br />
          para brindarte el mejor cuidado médico personalizado usando un enfoque
          <br />
          integrativo de la medicina oriental.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-48">
            AGENDAR CITA
          </Button>
          <Button variant="outline" size="lg" className="min-w-48">
            NUESTROS SERVICIOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;