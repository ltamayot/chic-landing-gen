import { Button } from "@/components/ui/button";

const MethodSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
            El Método Saori
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Una aproximación integral que combina lo mejor de la medicina oriental y occidental
          </p>
        </div>

        {/* Tarjetas principales */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-serif mb-6">Medicina Tradicional China</h3>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              Un ecosistema completo de terapias ancestrales que incluye acupuntura, 
              ventosas, moxibustión y herbolaria
            </p>
            <Button variant="secondary" size="lg">
              CONSULTA GRATUITA
            </Button>
          </div>

          <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-serif mb-6">Medicina Funcional</h3>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              Análisis profundo de la función corporal, equilibrio hormonal y 
              optimización metabólica para un tratamiento personalizado
            </p>
            <Button variant="secondary" size="lg">
              CONSULTA GRATUITA
            </Button>
          </div>
        </div>

        {/* Sección de comparativa */}
        <div className="bg-sage rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-serif text-center mb-12 text-foreground">
            Comparativa de Enfoques Médicos
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-lighter/30 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 bg-primary-lighter text-primary px-4 py-2 rounded-full inline-block">
                MEDICINA TRADICIONAL CHINA Y MEDICINA FUNCIONAL
              </h4>
              <div className="space-y-4 text-foreground">
                <p>Orientado en la salud reconociendo a cada individuo en su complejidad</p>
                <p>Enfoque holístico, considerando todo el cuerpo y la mente como parte del equilibrio energético</p>
                <p>Abordaje y diagnóstico basado en los desequilibrios fisiológicos y no únicamente en los síntomas</p>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 bg-muted-foreground/20 text-foreground px-4 py-2 rounded-full inline-block">
                MEDICINA CONVENCIONAL
              </h4>
              <div className="space-y-4 text-muted-foreground">
                <p>Orientado a la enfermedad</p>
                <p>Enfoque especializado</p>
                <p>Diagnóstico basado en los síntomas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;