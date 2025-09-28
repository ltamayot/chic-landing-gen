import { useState } from "react";
import saludMujerImg from "@/assets/salud-mujer.jpg";
import medicinaInternaImg from "@/assets/medicina-interna.jpg";
import saludMentalImg from "@/assets/salud-mental.jpg";
import dolorIconoImg from "@/assets/dolor-icono.jpg";

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "SALUD\nDE LA\nMUJER",
      description: "Síndrome premenstrual, Ciclos irregulares o dolorosos, Endometriosis y Sindrome de ovarios poliquiticos, Apoyo en fertilidad, Menopausia, entre otros.",
      backgroundImage: saludMujerImg
    },
    {
      title: "MEDICINA\nINTERNA",
      description: "Trastornos digestivos, Problemas metabólicos, Fatiga crónica, Enfermedades autoinmunes, Entre otros.",
      backgroundImage: medicinaInternaImg
    },
    {
      title: "SALUD\nMENTAL",
      description: "Ansiedad, estrés crónico, Depresión, Insomnio, Apoyo en regulación emocional, entre otros.",
      backgroundImage: saludMentalImg
    },
    {
      title: "DOLOR",
      description: "Dolor crónico (espalda, cuello, articulaciones), Migrañas y cefaleas, Dolor musculoesquelético, fibromialgia, entre otros.",
      backgroundImage: dolorIconoImg
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-sage">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestro enfoque personalizado
          </p>
        </div>

        {/* Grid de servicios con flip cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group perspective-1000 h-80"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                hoveredCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Lado frontal */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl ${
                  service.backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-primary to-primary-light'
                }`} 
                style={service.backgroundImage ? { 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.backgroundImage})` 
                } : {}}>
                  <div className="text-6xl mb-4 opacity-20">
                    {service.image}
                  </div>
                  <h3 className="text-primary-foreground text-lg font-semibold leading-relaxed whitespace-pre-line">
                    {service.title}
                  </h3>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-primary-lighter rounded-full animate-bounce"></div>
                  </div>
                </div>

                {/* Lado posterior */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-background border-2 border-primary/20 p-6 flex flex-col justify-center text-center shadow-xl">
                  <div className="text-4xl mb-4 text-primary">
                    {service.image}
                  </div>
                  <h3 className="text-primary text-lg font-semibold mb-4 whitespace-pre-line">
                    {service.title.replace(/\n/g, ' ')}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile hint */}
        <div className="text-center mt-8 lg:hidden">
          <p className="text-sm text-muted-foreground">
            Toca las tarjetas para ver más información
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;