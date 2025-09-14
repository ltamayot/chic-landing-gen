import { Button } from "@/components/ui/button";

const BookingSection = () => {
  return (
    <section id="contacto" className="py-20 bg-sage">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
          Agenda tu cita en línea o
          <br />
          contáctanos
        </h2>
        
        <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Estamos disponibles para citas en clínica y virtuales siete días a la semana,
          <br />
          con horarios disponibles todo el día. Tenemos ubicaciones en Manhattan y
          <br />
          Brooklyn, y también ofrecemos visitas a domicilio.{" "}
          <span className="text-accent underline cursor-pointer">
            Ver Todas las Ubicaciones
          </span>
        </p>

        <div className="mt-12">
          <Button variant="primary" size="lg" className="min-w-48">
            AGENDAR CITA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;