import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const MedicinaTradicionalChina = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Ecosistema de Medicina China Section */}
        <section className="py-20 bg-sage">
          <div className="container mx-auto px-6">
            {/* Título de sección */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-foreground">
                Ecosistema de Medicina China
              </h2>
            </div>

            {/* Alternating layout cards - 5 boxes */}
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Acupuntura - Text left, icon right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Acupuntura
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Técnica milenaria que utiliza agujas finas para estimular puntos específicos 
                      del cuerpo, equilibrando el flujo de energía vital (Qi) y promoviendo la 
                      sanación natural del organismo.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-sage/20 flex items-center justify-center">
                      <div className="text-4xl text-primary opacity-70">
                        📍
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Herbolaria - Icon left, text right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:order-1">
                    <div className="w-24 h-24 rounded-full bg-sage/20 flex items-center justify-center">
                      <div className="text-4xl text-primary opacity-70">
                        🌿
                      </div>
                    </div>
                  </div>
                  <div className="md:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Herbolaria China
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Utilización de plantas medicinales chinas según fórmulas tradicionales 
                      para tratar desequilibrios específicos y fortalecer la constitución 
                      individual de cada paciente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ventosas - Text left, icon right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Terapia de Ventosas
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Técnica terapéutica que utiliza copas de cristal para crear vacío sobre 
                      la piel, mejorando la circulación sanguínea y eliminando toxinas del 
                      organismo de manera natural.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-sage/20 flex items-center justify-center">
                      <div className="text-4xl text-primary opacity-70">
                        🫗
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moxibustión - Icon left, text right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:order-1">
                    <div className="w-24 h-24 rounded-full bg-sage/20 flex items-center justify-center">
                      <div className="text-4xl text-primary opacity-70">
                        🔥
                      </div>
                    </div>
                  </div>
                  <div className="md:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Moxibustión
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Aplicación de calor mediante la combustión de artemisa sobre puntos 
                      de acupuntura específicos para tonificar la energía vital y fortalecer 
                      el sistema inmunológico.
                    </p>
                  </div>
                </div>
              </div>

              {/* Diagnóstico Tradicional - Text left, icon right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Diagnóstico Tradicional
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Evaluación integral mediante observación de la lengua, palpación del 
                      pulso y análisis constitucional para identificar patrones de desequilibrio 
                      según la medicina tradicional china.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-sage/20 flex items-center justify-center">
                      <div className="text-4xl text-primary opacity-70">
                        👁️
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Llegando a la raíz de tus síntomas Section */}
        <section className="py-20 bg-sage/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
                Llegando a la raíz de tus síntomas
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16">
                La medicina tradicional china considera el cuerpo como un sistema integrado donde 
                todo está interconectado. Explora cómo esta antigua sabiduría puede ayudarte a 
                restaurar tu equilibrio natural:
              </p>
            </div>

            {/* Central icon with surrounding cards */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central icon placeholder */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-24 h-24 rounded-full bg-sage/30 flex items-center justify-center">
                  <div className="text-6xl text-primary opacity-70">
                    ☯️
                  </div>
                </div>
              </div>

              {/* Grid of cards around the center */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 pb-16">
                {/* Top Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Equilibra la Energía</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Restableciendo el flujo armonioso del Qi (energía vital) a través 
                    de los meridianos del cuerpo para restaurar el equilibrio natural.
                  </p>
                </div>

                {/* Top Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Fortalece la Constitución</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Tonificando los órganos internos y sistemas corporales según 
                    los principios del Yin y Yang para mejorar la vitalidad general.
                  </p>
                </div>

                {/* Bottom Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Previene Enfermedades</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Identificando y corrigiendo desequilibrios sutiles antes de que 
                    se manifiesten como síntomas o enfermedades aparentes.
                  </p>
                </div>

                {/* Bottom Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Armoniza Mente y Cuerpo</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Integrando aspectos emocionales y físicos del bienestar para 
                    lograr un estado de salud holística y sostenible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La ciencia detrás de la medicina china Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
                La ciencia detrás de la medicina china
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16">
                Aunque milenaria, la medicina tradicional china encuentra cada vez más respaldo 
                en la investigación científica moderna, validando sus principios terapéuticos.
              </p>
            </div>

            {/* Four pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-primary opacity-70">
                    📊
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Estudios clínicos que demuestran la efectividad de la acupuntura en el manejo del dolor
                </h3>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-primary opacity-70">
                    🧬
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Investigación en fitoquímica que valida las propiedades medicinales de las hierbas chinas
                </h3>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-primary opacity-70">
                    🎯
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Neuroimágenes que muestran cómo la acupuntura modula la actividad cerebral
                </h3>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-primary opacity-70">
                    🛡️
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Evidencia de modulación del sistema inmunológico a través de técnicas tradicionales
                </h3>
              </div>
            </div>
          </div>
        </section>

        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default MedicinaTradicionalChina;