import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import moxaImagen from "@/assets/moxa-imagen.png";
import acupuncturaImagen from "@/assets/acupunctura-imagen.png";
import diagnosisImg from "@/assets/diagnosis.jpg";
import moxibustionImg from "@/assets/moxibustion.jpg";
import ventosasImg from "@/assets/ventosas.jpg";
import acupunctureTreatmentImg from "@/assets/acupuncture-treatment.jpg";
import vectorIcon from "@/assets/vector-icon.svg";
import group1Icon from "@/assets/group-1-icon.svg";
import group2Icon from "@/assets/group-2-icon.svg";
import group3Icon from "@/assets/group-3-icon.svg";
import group11Icon from "@/assets/group-1-1-icon.svg";

const MedicinaTradicionalChina = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection 
          label="ACUPUNTURA EN BOGOTÁ"
          title="Con la acupuntura, activamos la inteligencia de tu cuerpo para restaurar el equilibrio"
          titleHighlight=""
          subtitle=""
          description=""
          primaryButtonText="AGENDAR CITA"
          secondaryButtonText="NUESTROS SERVICIOS"
          backgroundImage={moxaImagen}
        />
        
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
                       Técnica milenaria que utiliza agujas finas para estimular puntos específicos del cuerpo, equilibrando el flujo de energía vital (Qi) y promoviendo la sanación natural del organismo.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={acupunctureTreatmentImg} 
                        alt="Acupuntura" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Herbolaria - Icon left, text right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:order-1">
                    <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={acupuncturaImagen} 
                        alt="Acupuntura Estética" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Acupuntura Estética
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Es una técnica que combina la acupuntura tradicional con un enfoque especial en mejorar la circulación en el rostro y cuello, estimular la producción de colágeno, reducir líneas finas, dar volumen y tono, y unificar el brillo natural de la piel.
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
                      Técnica terapéutica que utiliza copas de cristal para crear vacío sobre la piel permitiendo aliviar dolores, mejorar la circulación sanguínea, eliminar toxinas y estimular la respuesta inmunológica.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={ventosasImg} 
                        alt="Terapia de Ventosas" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Moxibustión - Icon left, text right */}
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:order-1">
                    <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={moxibustionImg} 
                        alt="Moxibustión" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                      Moxibustión
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Aplicación de calor mediante la combustión de artemisa sobre puntos de acupuntura específicos para tonificar la energía vital y fortalecer el sistema inmunológico. Aporta beneficios en fertilidad, dolor articular y energía.
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
                      Evaluación integral mediante observación de la lengua, palpación del pulso y análisis constitucional para identificar patrones de desequilibrio según la medicina tradicional china.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={diagnosisImg} 
                        alt="Diagnóstico Tradicional" 
                        className="w-full h-full object-cover"
                      />
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
                Cada punto actúa como una puerta, enviando información energética a través de la fascia hacia el interior del cuerpo:
              </p>
            </div>

            {/* Central icon with surrounding cards */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central icon placeholder */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-24 h-24 rounded-full bg-sage/30 flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300">
                  <img 
                    src={group11Icon} 
                    alt="Medicina China" 
                    className="w-16 h-16 opacity-70"
                  />
                </div>
              </div>

              {/* Grid of cards around the center */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 pb-16">
                {/* Top Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Favorece la sanación </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    ofrece un estímulo eléctrico que restaura la homeostasis y el equilibrio.
                  </p>
                </div>

                {/* Top Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Libera bloqueos</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    desbloquea áreas de Qi estancado, estimulando la función de los órganos y promoviendo la salud.
                  </p>
                </div>

                {/* Bottom Left */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Disminuye el dolor</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    actúa como analgésico natural interrumpiendo las señales de dolor.
                  </p>
                </div>

                {/* Bottom Right */}
                <div className="bg-background rounded-3xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Reduce la inflamación</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    disminuye los marcadores proinflamatorios en el cuerpo.
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
                La acupuntura se originó en China hace aproximadamente 3,500 años. Hoy en día, la ciencia puede explicar su efectividad.
              </p>
            </div>

            {/* Four pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/30 transition-all duration-300 group-hover:scale-110 animate-fade-in">
                  <img 
                    src={group1Icon} 
                    alt="Ecografías Doppler" 
                    className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  Las ecografías Doppler muestran que la acupuntura mejora el flujo sanguíneo (circulación)
                </h3>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/30 transition-all duration-300 group-hover:scale-110 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <img 
                    src={group3Icon} 
                    alt="Resonancia Magnética" 
                    className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  Las imágenes RMN (resonancia magnética) demuestran cambios visibles en el cerebro.
                </h3>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/30 transition-all duration-300 group-hover:scale-110 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <img 
                    src={vectorIcon} 
                    alt="Termografías" 
                    className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  Termografías (imágenes TDM) revelan que la acupuntura reduce la inflamación
                </h3>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/30 transition-all duration-300 group-hover:scale-110 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <img 
                    src={group2Icon} 
                    alt="Tejido Conectivo" 
                    className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  El tejido conectivo se enrolla alrededor de las agujas, aumentando la conductividad eléctrica.
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