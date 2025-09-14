import { Button } from "@/components/ui/button";
import { Heart, Brain, Leaf, Target, CheckCircle, Users } from "lucide-react";

const MethodSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Tratamiento Personalizado",
      description: "Cada persona es única, por eso creamos un plan específico para ti"
    },
    {
      icon: Brain,
      title: "Enfoque Integrativo",
      description: "Combinamos lo mejor de ambos mundos médicos"
    },
    {
      icon: Leaf,
      title: "Terapias Naturales",
      description: "Métodos ancestrales respaldados por la ciencia moderna"
    },
    {
      icon: Target,
      title: "Resultados Duraderos",
      description: "Nos enfocamos en las causas raíz, no solo en los síntomas"
    }
  ];

  const features = [
    "Consulta integral de 90 minutos",
    "Diagnóstico personalizado",
    "Plan de tratamiento único",
    "Seguimiento continuo",
    "Terapias complementarias",
    "Apoyo nutricional"
  ];

  return (
    <section id="metodo" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Título de sección */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-foreground">
            El Método Saori
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una aproximación integral que combina lo mejor de la medicina oriental y occidental 
            para ofrecerte un cuidado médico personalizado y efectivo
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
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <div className="group bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-primary-foreground hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 mr-3 text-primary-lighter" />
                <h3 className="text-2xl font-serif">Medicina Tradicional China</h3>
              </div>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed text-lg">
                Un ecosistema completo de terapias ancestrales que incluye acupuntura, 
                ventosas, moxibustión y herbolaria para restaurar el equilibrio natural de tu cuerpo
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-primary-lighter/20 rounded-full text-sm">Acupuntura</span>
                <span className="px-3 py-1 bg-primary-lighter/20 rounded-full text-sm">Ventosas</span>
                <span className="px-3 py-1 bg-primary-lighter/20 rounded-full text-sm">Moxibustión</span>
                <span className="px-3 py-1 bg-primary-lighter/20 rounded-full text-sm">Herbolaria</span>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="hover:scale-105 transform transition-all duration-300"
                onClick={() => scrollToSection('consulta')}
              >
                CONSULTA GRATUITA
              </Button>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-accent to-accent/80 rounded-3xl p-8 text-accent-foreground hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 mr-3 text-white" />
                <h3 className="text-2xl font-serif">Medicina Funcional</h3>
              </div>
              <p className="text-accent-foreground/90 mb-8 leading-relaxed text-lg">
                Análisis profundo de la función corporal, equilibrio hormonal y 
                optimización metabólica para un tratamiento personalizado basado en evidencia científica
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Análisis Hormonal</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Nutrición</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Metabolismo</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Laboratorios</span>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="hover:scale-105 transform transition-all duration-300 bg-white text-accent hover:bg-white/90"
                onClick={() => scrollToSection('consulta')}
              >
                CONSULTA GRATUITA
              </Button>
            </div>
          </div>
        </div>

        {/* Features incluidas */}
        <div className="bg-sage rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-serif text-center mb-8 text-foreground">
            ¿Qué Incluye Tu Tratamiento?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de comparativa mejorada */}
        <div className="bg-gradient-to-r from-sage to-sage-dark rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-serif text-center mb-12 text-foreground">
            Comparativa de Enfoques Médicos
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-primary">
                  MEDICINA INTEGRATIVA SAORI
                </h4>
              </div>
              <div className="space-y-4 text-foreground">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Orientado en la salud reconociendo a cada individuo en su complejidad única</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Enfoque holístico, considerando todo el cuerpo y la mente como parte del equilibrio energético</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Diagnóstico basado en los desequilibrios fisiológicos y energéticos, no únicamente en los síntomas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Tratamiento preventivo y de optimización de la salud general</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 border border-muted">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-muted-foreground mr-3" />
                <h4 className="text-xl font-semibold text-muted-foreground">
                  MEDICINA CONVENCIONAL
                </h4>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></div>
                  <p>Orientado a la enfermedad y tratamiento de síntomas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></div>
                  <p>Enfoque especializado por sistemas o partes del cuerpo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></div>
                  <p>Diagnóstico basado principalmente en los síntomas visibles</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></div>
                  <p>Tratamiento reactivo cuando ya existe la enfermedad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;