import { useParams, Navigate, useNavigate, useLocation } from "react-router-dom";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

import blogHeroImage from "@/assets/blog-hero.jpg";
import blogTcmImage from "@/assets/blog-tcm.jpg";
import blogFunctionalImage from "@/assets/blog-functional.jpg";
import blogFertilityImage from "@/assets/blog-fertility.jpg";
import blogWellnessImage from "@/assets/blog-wellness.jpg";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Servicios", id: "servicios" },
    { name: "Método Saori", id: "metodo" }, 
    { name: "Dra Sara Tamayo", id: "doctora" },
    { name: "Primera Consulta", id: "consulta" },
    { name: "Testimonios", id: "testimonios" },
    { name: "Contacto", id: "contacto" }
  ];

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

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
      {/* Fixed White Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/20 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
              </div>
              <span className="text-2xl font-serif font-semibold tracking-wide text-primary">
                SAORI
              </span>
            </button>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium transition-colors duration-200 hover:scale-105 transform text-foreground hover:text-primary"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="#" 
                className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200 hover:scale-110 transform"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* CTA Button - Desktop */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden lg:flex font-medium tracking-wide"
              onClick={() => scrollToSection('contacto')}
            >
              AGENDAR CITA
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative bg-background pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between">
            {/* Left spacer - aligns with logo */}
            <div className="w-[calc(32px+8px+theme(spacing.6))]"></div>
            
            {/* Title and author container */}
            <div className="flex-1 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-[1.1] tracking-tight">
                {currentPost.title}
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{currentPost.author}</div>
                    <div className="text-sm text-muted-foreground">{currentPost.date}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right spacer - aligns with social icons */}
            <div className="w-[calc(theme(spacing.4)+theme(spacing.5)+theme(spacing.2)+theme(spacing.4)+theme(spacing.5)+theme(spacing.2))]"></div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="container mx-auto px-6 mt-12">
          <div className="flex justify-between">
            {/* Left spacer - aligns with logo */}
            <div className="w-[calc(32px+8px+theme(spacing.6))]"></div>
            
            {/* Image container */}
            <div className="flex-1">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Divider line below image */}
              <div className="w-full h-1 bg-gray-400 mt-8"></div>
            </div>

            {/* Right spacer - aligns with social icons */}
            <div className="w-[calc(theme(spacing.4)+theme(spacing.5)+theme(spacing.2)+theme(spacing.4)+theme(spacing.5)+theme(spacing.2))]"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between">
            {/* Left spacer - aligns with logo */}
            <div className="w-[calc(32px+8px+theme(spacing.6))]"></div>
            
            {/* Content */}
            <div className="flex-1 max-w-none">
                <div 
                className="max-w-[700px] mx-auto text-justify"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '17px',
                  lineHeight: '1.6',
                  color: '#333333'
                }}
                dangerouslySetInnerHTML={{ 
                  __html: currentPost.content
                    .replace(/<p>/g, '<p style="margin-bottom: 1.5rem; font-size: 17px; line-height: 1.6; color: #333333;">')
                    .replace(/<h2>/g, '<h2 style="font-size: 21px; font-weight: bold; margin-top: 24px; margin-bottom: 16px; color: #333333; font-family: Georgia, \'Times New Roman\', serif;">')
                    .replace(/<ul>/g, '<ul style="margin-bottom: 1.5rem; color: #333333;">')
                    .replace(/<li>/g, '<li style="margin-bottom: 8px; font-size: 17px; line-height: 1.6; color: #333333;">')
                    .replace(/<strong>/g, '<strong style="font-weight: bold; color: #333333;">')
                }}
              />
            </div>

            {/* Right spacer - aligns with social icons */}
            <div className="w-[calc(theme(spacing.4)+theme(spacing.5)+theme(spacing.2)+theme(spacing.4)+theme(spacing.5)+theme(spacing.2))]"></div>
          </div>
        </div>
      </section>

      <BookingSection />
      <Footer />
    </div>
  );
};

export default BlogPost;