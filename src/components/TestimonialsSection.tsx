import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const testimonials = [
    {
      name: "Sofía Mendoza",
      location: "Bucaramanga, Colombia",
      initials: "SM",
      text: "Después de 3 años intentando concebir, el Método Saori me ayudó a quedar embarazada en solo 6 meses. La combinación de acupuntura y medicina funcional fue la clave para mi fertilidad.",
      rating: 5
    },
    {
      name: "Valentina Ruiz", 
      location: "Pereira, Colombia",
      initials: "VR",
      text: "La Dra. Tamayo me ayudó con mi síndrome de ovario poliquístico. Su tratamiento holístico no solo mejoró mi fertilidad, sino que también reguló mi ciclo menstrual de manera natural.",
      rating: 5
    },
    {
      name: "Carmen y Diego",
      location: "Manizales, Colombia", 
      initials: "CD",
      text: "Como pareja, encontramos en Saori la solución a nuestros problemas de fertilidad. El enfoque integral consideró tanto mi salud como la de mi esposo, y ahora somos padres felices.",
      rating: 5
    },
    {
      name: "María Elena García",
      location: "Medellín, Colombia",
      initials: "MG",
      text: "Sufría de migrañas crónicas durante años. El tratamiento con acupuntura y medicina funcional me cambió la vida. Ahora puedo disfrutar de días sin dolor y con energía renovada.",
      rating: 5
    },
    {
      name: "Andrés Morales",
      location: "Cali, Colombia",
      initials: "AM",
      text: "Problemas digestivos me tenían limitado en mi trabajo y vida social. El enfoque integrativo de la Dra. Tamayo identificó las causas raíz y ahora tengo una salud digestiva óptima.",
      rating: 5
    },
    {
      name: "Lucía Fernández",
      location: "Barranquilla, Colombia",
      initials: "LF",
      text: "El estrés y la ansiedad controlaban mi vida. A través del Método Saori, encontré equilibrio emocional y herramientas naturales para manejar el estrés diario de forma efectiva.",
      rating: 5
    }
  ];

  const testimonialsPerGroup = 3;
  const totalGroups = Math.ceil(testimonials.length / testimonialsPerGroup);
  
  const nextGroup = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentGroup * testimonialsPerGroup;
    return testimonials.slice(startIndex, startIndex + testimonialsPerGroup);
  };

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiencias reales de transformación y bienestar
          </p>
        </div>

        {/* Testimoniales */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getCurrentTestimonials().map((testimonial, index) => {
              const originalIndex = currentGroup * testimonialsPerGroup + index;
              return (
                <div 
                  key={originalIndex}
                  className="bg-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  {/* Badge con color único */}
                  <div className="flex justify-end mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                      originalIndex === 0 ? 'bg-green-500' : 
                      originalIndex === 1 ? 'bg-green-600' : 
                      originalIndex === 2 ? 'bg-green-700' :
                      originalIndex === 3 ? 'bg-green-500' :
                      originalIndex === 4 ? 'bg-green-600' : 'bg-green-700'
                    }`}>
                      {testimonial.initials}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-4 border-accent pl-4 mb-6">
                    <p className="text-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                      originalIndex === 0 ? 'bg-green-500' : 
                      originalIndex === 1 ? 'bg-green-600' : 
                      originalIndex === 2 ? 'bg-green-700' :
                      originalIndex === 3 ? 'bg-green-500' :
                      originalIndex === 4 ? 'bg-green-600' : 'bg-green-700'
                    }`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevGroup}
              className="rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGroup(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentGroup ? 'bg-primary' : 'bg-primary/20'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextGroup}
              className="rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;