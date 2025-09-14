import doctorImage from "@/assets/doctor-portrait.jpg";
import { User, GraduationCap, Heart, Sparkles, Building } from "lucide-react";

const DoctorSection = () => {
  const certifications = [
    {
      icon: GraduationCap,
      text: "Medicina General - Universidad Nacional de Colombia",
      color: "text-accent"
    },
    {
      icon: Sparkles,
      text: "Medicina Tradicional China - Beijing University of Chinese Medicine", 
      color: "text-accent"
    },
    {
      icon: Heart,
      text: "Medicina Funcional - Institute for Functional Medicine",
      color: "text-accent"
    },
    {
      icon: User,
      text: "Acupuntura Avanzada - World Federation of Acupuncture Societies",
      color: "text-primary"
    },
    {
      icon: Heart,
      text: "Especialización en Fertilidad y Salud Reproductiva",
      color: "text-red-500"
    }
  ];

  const clinics = [
    { name: "Clínica A", icon: Building },
    { name: "Centro B", icon: Building },
    { name: "Instituto C", icon: Building }
  ];

  return (
    <section id="doctora" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-foreground">
            Dra. Sara Tamayo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especialista en medicina integrativa con más de 10 años de experiencia 
            combinando técnicas ancestrales chinas con medicina occidental moderna
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Imagen y badge de certificación */}
          <div className="relative">
            <div className="bg-sage rounded-3xl p-8 relative">
              <div className="bg-primary rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-lighter rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground font-medium">
                    Foto de la Dra. Sara
                    <br />
                    Tamayo
                  </p>
                </div>
              </div>
              
              {/* Badge de médica certificada */}
              <div className="absolute -top-4 right-8 bg-accent px-4 py-2 rounded-full">
                <span className="text-accent-foreground font-medium text-sm">
                  🏥 MÉDICA CERTIFICADA
                </span>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div>
            {/* Testimonial */}
            <div className="bg-background border-l-4 border-accent p-6 mb-8 italic">
              <p className="text-lg text-foreground leading-relaxed">
                "Mi enfoque médico se basa en la integración de la medicina oriental y
                occidental, tratando a cada paciente como un individuo único con
                necesidades específicas."
              </p>
            </div>

            {/* Metodología */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif mb-4 text-foreground">
                Metodología Integrativa
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La Dra. Sara Tamayo combina décadas de experiencia en medicina tradicional china 
                con los avances más recientes en medicina funcional. Su enfoque holístico considera 
                la interconexión entre mente, cuerpo y espíritu, proporcionando tratamientos 
                personalizados que abordan la causa raíz de las condiciones médicas.
              </p>
            </div>

            {/* Estudios y Certificaciones */}
            <div className="mb-8">
              <h4 className="text-xl font-serif mb-6 text-foreground">
                Estudios y Certificaciones
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <cert.icon className={`w-5 h-5 mt-0.5 ${cert.color}`} />
                    <span className="text-muted-foreground">{cert.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiencia en clínicas */}
            <div>
              <h4 className="text-xl font-serif mb-6 text-foreground">
                Experiencia en Clínicas Prestigiosas
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {clinics.map((clinic, index) => (
                  <div key={index} className="text-center p-4 bg-sage rounded-xl">
                    <clinic.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">{clinic.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;