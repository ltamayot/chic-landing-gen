import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import mfEcosistema1 from "@/assets/mf-ecosistema-1.jpg";
import mfEcosistema2 from "@/assets/mf-ecosistema-2.jpg";
import mfEcosistema4 from "@/assets/mf-ecosistema-4.jpg";
import mfPortada from "@/assets/mf-portada.jpg";
import vector3Icon from "@/assets/vector-3-icon.svg";
import flaskIcon from "@/assets/flask-icon.svg";
import group22Icon from "@/assets/group-2-2-icon.svg";
import vector1Icon from "@/assets/vector-1-icon.svg";
import vector2Icon from "@/assets/vector-2-icon.svg";

const MedicinaFuncional = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection
          label="MEDICINA FUNCIONAL EN BOGOTÁ"
          title="Sana, equilibra y reconecta con tu naturaleza regenerativa"
          titleHighlight=""
          subtitle=""
          description=""
          primaryButtonText="AGENDAR CITA"
          secondaryButtonText="NUESTROS SERVICIOS"
          backgroundImage={mfPortada}
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
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">Análisis Funcional</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Historia clínica detallada, Exámenes de microbioma, marcadores de inflamación, hormonas,
                      metabolismo y deficiencias nutricionales.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img src={mfEcosistema1} alt="Análisis Funcional" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Equilibrio Hormonal - Icon left, text right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:order-1">
                    <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img src={mfEcosistema2} alt="Nutrición terapéutica" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="md:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">Nutrición terapéutica</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Planes alimenticios personalizados enfocados en restaurar la función digestiva, modular la
                      inflamación y balancear el metabolismo.
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
                      Combinamos suplementación y fitoterapia basadas en evidencia con intervenciones mente-cuerpo y
                      recomendaciones de estilo de vida.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={mfEcosistema4}
                        alt="Intervenciones personalizadas"
                        className="w-full h-full object-cover"
                      />
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
                Como un árbol que necesita raíces fuertes para crecer saludable, la medicina funcional busca las causas
                fundamentales de tus síntomas para restaurar tu salud desde la base. Explora algunas de las formas en
                que funciona la medicina funcional a continuación:
              </p>
            </div>

            {/* Central icon with surrounding cards */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-24 h-24 rounded-full bg-sage/30 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src={vector3Icon} alt="Medicina Funcional" className="w-12 h-12 transition-all duration-300" />
                </div>
              </div>

              {/* Grid of cards around the center */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 pb-16">
                {/* Top Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Optimiza tu salud física, mental y espiritual
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Exploramos a fondo cómo funciona tu cuerpo para que recuperes tu equilibrio, fortalezcas tu energía
                    y te sientas en plenitud
                  </p>
                </div>

                {/* Top Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Corrige las disfunciones mediante un enfoque holístico e integrativo
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Un plan que combina alimentación, suplementación y prácticas mente-cuerpo para restablecer la
                    armonía interna.
                  </p>
                </div>

                {/* Bottom Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Funciona al máximo, cada día</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Identificando y liberando áreas de disfunción que estimulan y promueven la salud integral.
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
                Más allá de tratar síntomas, descubrimos lo que tu cuerpo realmente necesita para sanar.
              </p>
            </div>

            {/* Four pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/40 group-hover:shadow-lg group-hover:shadow-sage/30 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 animate-fade-in transform-gpu">
                  <img
                    src={flaskIcon}
                    alt="Exámenes avanzados"
                    className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <h3 className="text-lg mb-4 text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-105">
                  Exámenes que revelan lo que los chequeos de rutina no muestran.
                </h3>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/40 group-hover:shadow-lg group-hover:shadow-sage/30 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 animate-fade-in transform-gpu">
                  <img
                    src={group22Icon}
                    alt="Diseño personalizado"
                    className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <h3 className="text-lg mb-4 text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-105">
                  Tratamientos guiados por tu genética, tu entorno y tu estilo de vida.
                </h3>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/40 group-hover:shadow-lg group-hover:shadow-sage/30 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 animate-fade-in transform-gpu">
                  <img
                    src={vector1Icon}
                    alt="Investigación clínica"
                    className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <h3 className="text-lg mb-4 text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-105">
                  Cada recomendación respaldada por evidencia científica sólida.
                </h3>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/40 group-hover:shadow-lg group-hover:shadow-sage/30 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 animate-fade-in transform-gpu">
                  <img
                    src={vector2Icon}
                    alt="Prevención"
                    className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <h3 className="text-lg mb-4 text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-105">
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
