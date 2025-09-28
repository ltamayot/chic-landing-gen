import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const MedicinaFuncional = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection 
          label="MEDICINA FUNCIONAL EN BOGOTÁ"
          title="Sana, equilibra y reconecta con tu naturaleza regenerativa"
          titleHighlight="Integral"
          subtitle="Sana, equilibra y reconecta con tu naturaleza regenerativa"
          description="La medicina funcional te observa de forma holística para abordar el origen de los problemas, sanar tu cuerpo y optimizar tu manera de vivir"
          primaryButtonText="AGENDAR CITA"
          secondaryButtonText="NUESTROS SERVICIOS"
        />
        
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
                      Historia clínica detallada, Exámenes de microbioma, marcadores de inflamación, hormonas, metabolismo y deficiencias nutricionales.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-6xl opacity-20">
                      🔍
                    </div>
                  </div>
                </div>
              </div>

              {/* Equilibrio Hormonal - Icon left, text right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:order-1">
                    <div className="text-6xl opacity-20">
                      ⚖️
                    </div>
                  </div>
                  <div className="md:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Nutrición terapéutica
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Planes alimenticios personalizados enfocados en restaurar la función digestiva, modular la inflamación y balancear el metabolismo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Optimización Metabólica - Text left, icon right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Intervenciones personalizadas
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Combinamos suplementación y fitoterapia basadas en evidencia con intervenciones mente-cuerpo y recomendaciones de estilo de vida.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-6xl opacity-20">
                      🔄
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
                Con la medicina funcional, podras…  
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16">
                Como un árbol que necesita raíces fuertes para crecer saludable, la medicina funcional busca las causas fundamentales de tus síntomas para restaurar tu salud desde la base. Explora algunas de las formas en que funciona la medicina funcional a continuación:
              </p>
            </div>

            {/* Central icon with surrounding cards */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central icon placeholder */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="text-8xl opacity-20">
                  🌳
                </div>
              </div>

              {/* Grid of cards around the center */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 pb-16">
                {/* Top Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Optimiza tu salud física, mental y espiritual</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Exploramos a fondo cómo funciona tu cuerpo para que recuperes tu equilibrio, fortalezcas tu energía y te sientas en plenitud
                  </p>
                </div>

                {/* Top Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Corrige las disfunciones mediante un enfoque holístico e integrativo</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Un plan que combina alimentación, suplementación y prácticas mente-cuerpo para restablecer la armonía interna.
                  </p>
                </div>

                {/* Bottom Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Funciona al máximo, cada día</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Identificando y liberando áreas de disfunción que estimulan  y promueven la salud integral.
                  </p>
                </div>

                {/* Bottom Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Restaura el equilibrio de tu cuerpo</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Recupera la energía y vitalidad para que cada sistema funcione en armonía.
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
                <div className="text-4xl mb-6 opacity-20">
                  📊
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Exámenes  avanzados que pueden detectar deficiencias nutricionales, desequilibrios hormonales y marcadores de inflamación invisibles en chequeos rutinarios.
                </h3>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-6 opacity-20">
                  🧬
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  La genética, el entorno y los hábitos de vida de cada persona guían el diseño del tratamiento.
                </h3>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-6 opacity-20">
                  🎯
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Utiliza investigación clínica para sustentar cambios en nutrición, suplementación y medicina preventiva.
                </h3>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-6 opacity-20">
                  🛡️
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Prevención de enfermedades crónicas y equilibrio cuerpo-mente.
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

export default MedicinaFuncional;