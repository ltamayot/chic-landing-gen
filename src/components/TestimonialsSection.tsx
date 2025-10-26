import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const testimonials = [
    {
      name: "Juliana Cely",
      location: "Bucaramanga, Colombia",
      initials: "JC",
      text: "Llevaba meses experimentando algunas molestias en mi salud y deseaba encontrar respuestas a esos malestares. En Saori, encontré un apoyo fundamental en mi proceso de sanación. Aprendí a nutrirme, a ser compasiva y paciente conmigo misma. Agradezco a la Dra. Sara por ser un ángel en mi camino hacia la salud.",
      rating: 5,
    },
    {
      name: "Valentina Ruiz",
      location: "Pereira, Colombia",
      initials: "VR",
      text: "Mi experiencia en el Saori con la Dra. Sara fué transformadora. Su enfoque personalizado combinando la medicina funcional y oriental me permitieron comprender mi cuerpo profundamente y regular mi sistema Hormonal. Recomiendo Saori a quienes buscan una atención médica personalizada y holística.",
      rating: 5,
    },
    {
      name: "David Diaz",
      location: "Manizales, Colombia",
      initials: "DD",
      text: "Nunca había probado un enfoque de medicina china y medicina funcional antes, siento que me ha ayudado mucho a ser más consciente de mi alimentación, y lo más importante, el proceso en Saori me ha ayudado mucho mejorar mi calidad de sueño y ansiedad.",
      rating: 5,
    },
    {
      name: "María Elena García",
      location: "Medellín, Colombia",
      initials: "MG",
      text: "Me acerqué a Saori por ansiedad y dificultades para dormir. Desde la primera cita sentí un cambio y un acompañamiento profundo. Con las terapias de acupuntura, mi descanso ha mejorado y mi mente está más tranquila.",
      rating: 5,
    },
    {
      name: "Maria Paula Pinilla",
      location: "Cali, Colombia",
      initials: "MP",
      text: "La Dra. Sara se tomó el tiempo de escucharme y personalizar mi tratamiento. Mis síntomas han mejorado y he aprendido a conocer mi cuerpo y a nutrirme mejor..",
      rating: 5,
    },
    {
      name: "Andres Morales",
      location: "Barranquilla, Colombia",
      initials: "AM",
      text: " Tenía problemas digestivos y todo lo que comía me sentaba mal. En Saori identificaron la causa de mis síntomas y, a lo largo de cada fase del tratamiento, fui trabajando las raíces del problema. Ahora me siento muy bien, con más energía y  tengo una relación mucho más tranquila con la comida.",
      rating: 5,
    },
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
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Lo que dicen nuestros pacientes</h2>
          <p className="text-lg text-muted-foreground">
            Cada historia es una semilla que florece en Saori
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
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold bg-[#DD6D5F]/60"
                    >
                      {testimonial.initials}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-4 border-[#DD6D5F]/60 pl-4 mb-6">
                    <p className="text-foreground italic leading-relaxed">"{testimonial.text}"</p>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold bg-[#DD6D5F]/60">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
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
                    index === currentGroup ? "bg-primary" : "bg-primary/20"
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
