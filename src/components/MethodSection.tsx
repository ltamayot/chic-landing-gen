import { Button } from "@/components/ui/button";
import { Heart, Brain, Leaf, Target, CheckCircle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import acupunctureImg from "@/assets/acupuncture.jpg";
import saludMedicinaFuncionalImg from "@/assets/salud-medicina-funcional.jpg";

const MethodSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Tratamiento Personalizado",
      description: "Cada persona es única, por eso creamos un plan específico para ti",
    },
    {
      icon: Brain,
      title: "Holistico",
      description: "Abordamos cada dimensión de tu bienestar: física, mental y emocional",
    },
    {
      icon: Leaf,
      title: "Respaldado por ciencia",
      description:
        "Cada plan de tratamiento se fundamenta en investigación científica y en los exámenes necesarios para lograr el máximo bienestar",
    },
    {
      icon: Target,
      title: "Resultados Duraderos",
      description: "Nos enfocamos en las causas raíz, no solo en los síntomas",
    },
  ];

  const features = [
    "Consulta integral de 90 minutos",
    "Diagnóstico personalizado",
    "Plan de tratamiento único",
    "Seguimiento continuo",
    "Terapias complementarias",
    "Apoyo nutricional",
  ];

  return (
    <section id="metodo" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título de sección */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-foreground">El Método Saori</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En Saori te acompañamos a florecer: un camino hacia un bienestar real y pleno
          </p>
        </div>

        {/* Beneficios grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl hover:bg-sage/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Tarjetas principales mejoradas */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            className="group rounded-3xl p-12 text-primary-foreground hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden bg-cover bg-center text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${acupunctureImg})`,
            }}
          >
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-8">Medicina Tradicional China</h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed text-lg">
                Recupera tu balance con prácticas ancestrales que identifican y tratan la causa raiz de tus
                desequilibrios
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="hover:scale-105 transform transition-all duration-300"
                onClick={() => {
                  navigate("/medicina-tradicional-china");
                  window.scrollTo(0, 0);
                }}
              >
                CONOCER MÁS
              </Button>
            </div>
          </div>

          <div
            className="group rounded-3xl p-12 text-primary-foreground hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden bg-cover bg-center text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${saludMedicinaFuncionalImg})`,
            }}
          >
            <div className="absolute inset-0 bg-accent/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-8">Medicina Funcional</h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed text-lg">
                de un enfoque integrativo, personalizado y basado en la evidencia
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="hover:scale-105 transform transition-all duration-300"
                onClick={() => {
                  navigate("/medicina-funcional");
                  window.scrollTo(0, 0);
                }}
              >
                CONOCER MÁS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
