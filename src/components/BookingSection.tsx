import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BookingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
          Agenda tu cita o contáctanos
        </h2>
        
        <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Inicia tu camino hacia un bienestar integral y pleno con nosotros{" "}
          <span className="text-accent underline cursor-pointer">
            Ver la Ubicación
          </span>
        </p>

        <div className="mt-12">
          <Button 
            variant="primary" 
            size="lg" 
            className="min-w-48"
            onClick={() => {
              navigate('/primera-consulta');
              window.scrollTo(0, 0);
            }}
          >
            AGENDAR CITA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;