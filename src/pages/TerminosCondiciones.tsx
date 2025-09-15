import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

const TerminosCondiciones = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Servicios", id: "servicios" },
    { name: "Método Saori", id: "metodo" }, 
    { name: "Dra Sara Tamayo", id: "doctora" },
    { name: "Primera Consulta", id: "consulta" },
    { name: "Testimonios", id: "testimonios" },
    { name: "Contacto", id: "contacto" }
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
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
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header with Hamburger Menu Only */}
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

            {/* Hamburger Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-lg">
              <div className="flex flex-col p-6 space-y-4 max-w-sm mx-auto sm:max-w-md lg:max-w-lg">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Social Icons */}
                <div className="flex items-center gap-4 py-2 justify-center sm:justify-start">
                  <a 
                    href="#" 
                    className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 font-medium tracking-wide self-center sm:self-start"
                  onClick={() => scrollToSection('contacto')}
                >
                  AGENDAR CITA
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Content */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-center">
              Términos y Condiciones
            </h1>
            
            <div className="space-y-8 text-justify" style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#333333'
            }}>
              <div>
                <h2 style={{
                  fontSize: '21px',
                  fontWeight: 'bold',
                  marginTop: '24px',
                  marginBottom: '16px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  1. Aceptación de los Términos
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Al acceder y utilizar los servicios de Saori, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
                </p>
              </div>

              <div>
                <h2 style={{
                  fontSize: '21px',
                  fontWeight: 'bold',
                  marginTop: '24px',
                  marginBottom: '16px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  2. Servicios Médicos
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Saori ofrece servicios de medicina integrativa, medicina funcional y medicina tradicional china. Todos nuestros tratamientos son realizados por profesionales médicos debidamente licenciados y certificados.
                </p>
              </div>

              <div>
                <h2 style={{
                  fontSize: '21px',
                  fontWeight: 'bold',
                  marginTop: '24px',
                  marginBottom: '16px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  3. Responsabilidades del Paciente
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Es responsabilidad del paciente proporcionar información médica completa y precisa, seguir las recomendaciones de tratamiento y comunicar cualquier cambio en su condición de salud.
                </p>
              </div>

              <div>
                <h2 style={{
                  fontSize: '21px',
                  fontWeight: 'bold',
                  marginTop: '24px',
                  marginBottom: '16px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  4. Privacidad y Confidencialidad
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Nos comprometemos a mantener la confidencialidad de toda la información médica y personal de nuestros pacientes de acuerdo con las leyes de protección de datos aplicables.
                </p>
              </div>

              <div>
                <h2 style={{
                  fontSize: '21px',
                  fontWeight: 'bold',
                  marginTop: '24px',
                  marginBottom: '16px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  5. Limitación de Responsabilidad
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Saori no se hace responsable de daños indirectos, incidentales o consecuentes que puedan surgir del uso de nuestros servicios, excepto en los casos previstos por la ley.
                </p>
              </div>

              <div>
                <h2 style={{
                  fontSize: '21px',
                  fontWeight: 'bold',
                  marginTop: '24px',
                  marginBottom: '16px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  6. Modificaciones
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio web.
                </p>
              </div>

              <div>
                <h2 style={{
                  fontSize: '21px',
                  fontWeight: 'bold',
                  marginTop: '24px',
                  marginBottom: '16px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  7. Contacto
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Para cualquier pregunta sobre estos términos y condiciones, puede contactarnos a través de info@saori.com o llamando al +57 300 123 4567.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TerminosCondiciones;