import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Stethoscope, BookOpen, Activity } from "lucide-react";
import heroPrimeraConsulta from "@/assets/hero-primera-consulta.jpg";
import primeraConsultaHistoria from "@/assets/primera-consulta-historia.jpg";
import primeraConsultaPlan from "@/assets/primera-consulta-plan.jpg";

const IntakeSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
                PRIMERA CONSULTA
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                Todo comienza con tu historia
              </h2>
            </div>
            <div className="border-l-4 border-[#DD6D5F]/60 pl-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                En tu primera consulta nos sumergimos en tu historia clínica y de vida. Revisamos síntomas, exámenes y cada detalle que nos ayude a comprender la raíz de lo que estás viviendo. Esta cita, presencial o virtual, es el inicio de un proceso diseñado para ti, con una mirada integrativa y profunda.
              </p>
            </div>
            <Button variant="primary" size="lg" className="hover:scale-105 transform transition-all duration-300">
              AGENDA TU PRIMERA CITA
            </Button>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={primeraConsultaHistoria} 
                alt="Primera consulta - Todo comienza con tu historia"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TreatmentSection = () => {
  const treatments = [
    {
      icon: Activity,
      title: "ACUPUNTURA",
      description: "Terapia tradicional que utiliza finas agujas para equilibrar la energía y restaurar la armonía natural del cuerpo."
    },
    {
      icon: Stethoscope,
      title: "SUPLEMENTACIÓN",
      description: "Vitaminas, minerales y fitoterapia diseñados a la medida de tus necesidades."
    },
    {
      icon: Heart,
      title: "EXÁMENES FUNCIONALES",
      description: "Pruebas avanzadas que nos permiten identificar desequilibrios ocultos y guiar un tratamiento más preciso."
    }
  ];

  return (
    <section className="py-20 px-6 bg-sage">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            El TRATAMIENTO
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cada tratamiento es único. Diseñamos un plan personalizado que integra nutrición, suplementación y terapias de la medicina china para acompañar a tu cuerpo a florecer de nuevo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {treatments.map((treatment, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-background/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <treatment.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">{treatment.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlanSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left image - order changed for alternating layout */}
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={primeraConsultaPlan} 
                alt="Plan de tratamiento - Saldrás con un plan claro"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
          
          {/* Left content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
                EL PLAN
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                Saldrás de tu primera visita con un plan claro
              </h2>
            </div>
            <div className="border-l-4 border-[#DD6D5F]/60 pl-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro objetivo es aprovechar tu tiempo y maximizar los resultados. Tras tu primera consulta, tendrás una idea clara del número de sesiones recomendadas, un plan de suplementación personalizado (si es necesario), y recomendaciones nutricionales y estilo de vida, y una valoración realista de cómo podemos ayudarte.
              </p>
            </div>
            <Button variant="primary" size="lg" className="hover:scale-105 transform transition-all duration-300">
              AGENDA TU VISITA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoodToKnowSection = () => {
  const items = [
    {
      icon: Users,
      title: "CONSULTA INICIAL",
      description: "Una consulta profunda de 90 minutos para conocerte a fondo y entender tus necesidades."
    },
    {
      icon: Shield,
      title: "SEGURIDAD",
      description: "Seleccionamos cuidadosamente cada suplemento y realizamos los tratamientos con los más altos estándares de seguridad."
    },
    {
      icon: Activity,
      title: "NUESTRO ENFOQUE",
      description: "Ofrecemos un cuidado integrativo y basado en resultados, acompañándote en cada paso de tu proceso de sanación."
    }
  ];

  return (
    <section className="py-20 px-6 bg-sage">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Lo que debes saber antes de venir
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas para sentirte tranquilo y preparado en tu primera visita.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-background/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "ACUPUNTURA",
      description: "Sanación y equilibrio: la acupuntura estimula la inteligencia natural de tu cuerpo para devolverlo a la homeostasis. Conoce más sobre nuestro enfoque de acupuntura."
    },
    {
      title: "MEDICINA FUNCIONAL",
      description: "Un enfoque personalizado a través de pruebas avanzadas, nutrición y suplementación, diseñamos un plan claro para recuperar tu energía, equilibrio y bienestar"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Servicios en Saori
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Terapias integrales diseñadas para restaurar el equilibrio y optimizar tu salud
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-sage/30 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-serif text-foreground mb-6">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrimeraConsulta = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection 
          label="Primera Consulta"
          title="Primera Consulta"
          subtitle="Sana, equilibra y reconecta con tu naturaleza regenerativa"
          description="El patrón único de síntomas de cada paciente requiere una solución individual"
          primaryButtonText="AGENDAR CITA"
          secondaryButtonText="NUESTROS SERVICIOS"
          backgroundImage={heroPrimeraConsulta}
        />
        <IntakeSection />
        <TreatmentSection />
        <PlanSection />
        <GoodToKnowSection />
        <ServicesSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PrimeraConsulta;