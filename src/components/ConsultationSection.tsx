import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import consultaImage from "@/assets/consulta-image.png";

const ConsultationSection = () => {
  const navigate = useNavigate();

  return (
    <section id="consulta" className="py-20 bg-gradient-to-r from-[#DD6D5F]/60 to-sage/60">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Contenido de texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
              Nos tomamos el tiempo de conocerte a profundidad
            </h2>
            
            <div className="border-l-4 border-accent pl-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comienza tu camino hacia una versión más saludable y feliz de ti mismo con nosotros. Iniciaremos con un análisis profundo de tu historia clínica, recomendaremos pruebas diagnósticas avanzadas cuando sea necesario, y trabajaremos para lograr la mejor y más saludable versión de ti… física, emocional y mental.
              </p>
            </div>

            <Button 
              variant="primary" 
              size="lg" 
              className="group"
              onClick={() => {
                navigate('/primera-consulta');
                window.scrollTo(0, 0);
              }}
            >
              PRIMERA CONSULTA
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="bg-background rounded-3xl p-8 shadow-lg">
              <img 
                src={consultaImage} 
                alt="Consulta médica profesional"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;