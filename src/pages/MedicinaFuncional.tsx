import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ConsultationSection from "@/components/ConsultationSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const MedicinaFuncional = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Ecosistema de Medicina Funcional Section */}
        <section className="py-20 bg-sage">
          <div className="container mx-auto px-6">
            {/* Título de sección */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-foreground">
                Ecosistema de Medicina Funcional
              </h2>
            </div>

            {/* Alternating layout cards */}
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Análisis Funcional - Text left, icon right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Análisis Funcional
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Evaluamos cómo funcionan todos los sistemas de tu cuerpo en conjunto, 
                      identificando desequilibrios que pueden estar causando tus síntomas 
                      a través de análisis avanzados.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔍</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equilibrio Hormonal - Icon left, text right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:order-1">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚖️</span>
                    </div>
                  </div>
                  <div className="md:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Equilibrio Hormonal
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Restauramos el equilibrio hormonal natural de tu cuerpo para 
                      mejorar la energía, el estado de ánimo y la función metabólica 
                      mediante tratamientos personalizados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Optimización Metabólica - Text left, icon right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Optimización Metabólica
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Optimizamos tu metabolismo para mejorar la digestión, la 
                      absorción de nutrientes y la producción de energía celular, 
                      creando un sistema más eficiente.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Llegando a la raíz de los síntomas Section */}
        <section className="py-20 bg-sage/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
                Llegando a la raíz de tus síntomas
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16">
                Como un árbol que necesita raíces fuertes para crecer saludable, la medicina funcional 
                busca las causas fundamentales de tus síntomas para restaurar tu salud desde la base. 
                Explora algunas de las formas en que funciona la medicina funcional a continuación:
              </p>
            </div>

            {/* Central icon with surrounding cards */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central icon placeholder */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 bg-background rounded-3xl shadow-lg flex items-center justify-center border-4 border-primary/20">
                  <span className="text-4xl">🌳</span>
                </div>
              </div>

              {/* Grid of cards around the center */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 pb-16">
                {/* Top Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Promueve la Sanación</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ofreciendo un análisis profundo del funcionamiento corporal para 
                    restaurar la homeostasis y el equilibrio natural.
                  </p>
                </div>

                {/* Top Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Disminuye el Dolor</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Actuando como un analgésico natural, la medicina funcional 
                    interrumpe las señales de dolor desde su origen.
                  </p>
                </div>

                {/* Bottom Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Libera Bloqueos</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Identificando y liberando áreas de disfunción que estimulan 
                    la función orgánica y promueven la salud integral.
                  </p>
                </div>

                {/* Bottom Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Reduce la Inflamación</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Reduciendo los marcadores proinflamatorios y restaurando el 
                    equilibrio natural del sistema inmunológico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La ciencia detrás de la medicina funcional Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
                La ciencia detrás de la medicina funcional
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16">
                La medicina funcional se basa en la ciencia moderna y la investigación clínica para 
                identificar y tratar las causas fundamentales de la enfermedad, no solo los síntomas.
              </p>
            </div>

            {/* Four pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Análisis de laboratorio avanzados que revelan desequilibrios en sistemas corporales
                </h3>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Evaluación integral que considera factores genéticos, ambientales y de estilo de vida.
                </h3>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Tratamientos personalizados basados en la respuesta individual de cada paciente.
                </h3>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Enfoque preventivo que identifica y corrige desequilibrios antes de que se conviertan en enfermedad.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <ConsultationSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default MedicinaFuncional;