import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Share2, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

import blogHeroImage from "@/assets/blog-hero.jpg";
import blogTcmImage from "@/assets/blog-tcm.jpg";
import blogFunctionalImage from "@/assets/blog-functional.jpg";
import blogFertilityImage from "@/assets/blog-fertility.jpg";
import blogWellnessImage from "@/assets/blog-wellness.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    "medicina-integrativa-futuro-cuidado-salud": {
      title: "Medicina Integrativa: El Futuro del Cuidado de la Salud",
      author: "Dra. Ana Saori",
      date: "15 de Septiembre, 2024",
      category: "Medicina Integrativa",
      image: blogHeroImage,
      content: `
        <p>La medicina integrativa representa una revolución en el cuidado de la salud, combinando lo mejor de la medicina occidental moderna con terapias tradicionales probadas. Este enfoque holístico reconoce que cada paciente es único y requiere un tratamiento personalizado que aborde no solo los síntomas, sino las causas raíz de la enfermedad.</p>

        <h2>¿Qué es la Medicina Integrativa?</h2>
        <p>La medicina integrativa es un enfoque que combina tratamientos médicos convencionales con terapias complementarias y alternativas que han demostrado ser seguras y efectivas. No se trata de reemplazar la medicina tradicional, sino de expandir las opciones de tratamiento disponibles para cada paciente.</p>

        <h2>Principios Fundamentales</h2>
        <p>Los principios que guían la medicina integrativa incluyen:</p>
        <ul>
          <li><strong>Enfoque centrado en el paciente:</strong> Cada persona es única y merece un plan de tratamiento personalizado.</li>
          <li><strong>Uso de terapias basadas en evidencia:</strong> Solo se utilizan tratamientos que han demostrado seguridad y eficacia.</li>
          <li><strong>Tratamiento de la persona completa:</strong> Se considera el bienestar físico, mental, emocional y espiritual.</li>
          <li><strong>Prevención antes que curación:</strong> Se enfatiza la prevención y el mantenimiento de la salud óptima.</li>
        </ul>

        <h2>Beneficios de la Medicina Integrativa</h2>
        <p>Los pacientes que optan por la medicina integrativa frecuentemente experimentan:</p>
        <ul>
          <li>Mejor calidad de vida</li>
          <li>Reducción en los efectos secundarios de medicamentos</li>
          <li>Mayor participación en su propio cuidado</li>
          <li>Tratamientos más personalizados</li>
          <li>Enfoque en la prevención</li>
        </ul>

        <h2>El Futuro está Aquí</h2>
        <p>En Saori, creemos que la medicina integrativa no es solo el futuro del cuidado de la salud, sino el presente. Nuestro enfoque combina la precisión de la medicina moderna con la sabiduría de tradiciones milenarias para ofrecerte el mejor cuidado posible.</p>

        <p>Si estás listo para explorar un enfoque más completo y personalizado para tu salud, te invitamos a conocer más sobre nuestros servicios de medicina integrativa.</p>
      `
    },
    "acupuntura-fertilidad-perspectiva-cientifica": {
      title: "Acupuntura para la Fertilidad: Una Perspectiva Científica",
      author: "Dra. Ana Saori",
      date: "12 de Septiembre, 2024",
      category: "Fertilidad",
      image: blogFertilityImage,
      content: `
        <p>La acupuntura ha demostrado ser una herramienta valiosa en el tratamiento de la infertilidad, respaldada por creciente evidencia científica. Esta antigua práctica china puede mejorar significativamente las tasas de éxito en tratamientos de fertilidad.</p>

        <h2>Evidencia Científica</h2>
        <p>Múltiples estudios han demostrado que la acupuntura puede:</p>
        <ul>
          <li>Mejorar la calidad del esperma en hombres</li>
          <li>Regular los ciclos menstruales</li>
          <li>Aumentar el flujo sanguíneo a los órganos reproductivos</li>
          <li>Reducir el estrés relacionado con la infertilidad</li>
        </ul>

        <h2>Cómo Funciona</h2>
        <p>La acupuntura actúa regulando el sistema hormonal y mejorando la circulación sanguínea hacia los órganos reproductivos. También ayuda a equilibrar el sistema nervioso, reduciendo el estrés que puede interferir con la fertilidad.</p>

        <h2>Integración con Tratamientos Convencionales</h2>
        <p>La acupuntura se integra perfectamente con tratamientos de fertilidad convencionales como FIV, aumentando las posibilidades de éxito y reduciendo los efectos secundarios.</p>
      `
    },
    "medicina-funcional-causas-raiz": {
      title: "Medicina Funcional: Tratando las Causas Raíz",
      author: "Dra. Ana Saori",
      date: "10 de Septiembre, 2024",
      category: "Medicina Funcional",
      image: blogFunctionalImage,
      content: `
        <p>La medicina funcional revoluciona el cuidado de la salud al enfocarse en identificar y tratar las causas fundamentales de la enfermedad, en lugar de simplemente suprimir los síntomas.</p>

        <h2>Enfoque Sistémico</h2>
        <p>Este enfoque considera al cuerpo como un sistema interconectado, donde cada parte afecta al todo. Se examina cómo factores como la nutrición, el estrés, la genética y el ambiente influyen en la salud.</p>

        <h2>Herramientas de Diagnóstico</h2>
        <p>La medicina funcional utiliza pruebas avanzadas para evaluar:</p>
        <ul>
          <li>Función hormonal</li>
          <li>Salud digestiva</li>
          <li>Niveles de nutrientes</li>
          <li>Marcadores inflamatorios</li>
          <li>Función mitocondrial</li>
        </ul>

        <h2>Tratamiento Personalizado</h2>
        <p>Basándose en estos hallazgos, se crea un plan de tratamiento personalizado que puede incluir cambios nutricionales, suplementos específicos, modificaciones del estilo de vida y terapias dirigidas.</p>
      `
    }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  if (!currentPost) {
    return <Navigate to="/404" replace />;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Medicina Integrativa": "bg-primary text-primary-foreground",
      "Fertilidad": "bg-accent text-accent-foreground",
      "Medicina Funcional": "bg-secondary text-secondary-foreground",
      "Medicina Tradicional China": "bg-primary/80 text-primary-foreground",
      "Bienestar": "bg-accent/80 text-accent-foreground",
      "Nutrición": "bg-secondary/80 text-secondary-foreground"
    };
    return colors[category as keyof typeof colors] || "bg-primary text-primary-foreground";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        {/* Breadcrumb and Meta Info */}
        <div className="bg-background pt-24 pb-8">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <Badge className={`mb-4 ${getCategoryColor(currentPost.category)}`}>
                BLOG / {currentPost.category.toUpperCase()}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 max-w-4xl mx-auto leading-tight">
                {currentPost.title}
              </h1>
              
              <div className="flex items-center justify-center gap-6 mb-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{currentPost.author}</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{currentPost.date}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground font-medium">COMPARTIR EN</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img 
            src={currentPost.image} 
            alt={currentPost.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none text-foreground
                prose-headings:text-foreground prose-headings:font-medium
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-muted-foreground prose-li:mb-2
                prose-strong:text-foreground prose-strong:font-medium"
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />
          </div>
        </div>
      </section>

      <BookingSection />
      <Footer />
    </div>
  );
};

export default BlogPost;