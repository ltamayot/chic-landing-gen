import { Button } from "@/components/ui/button";
import patientImage from "@/assets/patient-lifestyle.jpg";
import { ArrowRight } from "lucide-react";

const ConsultationSection = () => {
  return (
    <section id="consulta" className="py-20 bg-sage">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Contenido de texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
              Nos tomamos el
              <br />
              tiempo de conocerte
              <br />
              a profundidad
            </h2>
            
            <div className="border-l-4 border-accent pl-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                That's why we take the time to get to know you.
                <br /><br />
                As part of our diagnosis, we are looking at your unique symptom pattern. 
                At Saori, you'll receive a 90-minute initial consultation and acupuncture 
                treatment, a custom-made formula, and a guided nutrition plan.
              </p>
            </div>

            <Button variant="primary" size="lg" className="group">
              YOUR FIRST VISIT
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="bg-background rounded-3xl p-8 shadow-lg">
              <img 
                src={patientImage} 
                alt="Mujer joven sonriente con blusa floral"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute bottom-12 left-12 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Imagen: Mujer joven sonriente con blusa floral
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;