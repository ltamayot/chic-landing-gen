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
                    href="https://www.tiktok.com/@saratamayomd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/dra.saratamayo" 
                    target="_blank"
                    rel="noopener noreferrer"
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
                  onClick={() => window.open('https://wa.me/573107539221', '_blank')}
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
            
            <p className="text-center text-muted-foreground mb-12">
              Última actualización: 25/10/2025
            </p>
            
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
                  1. ACEPTACIÓN DE LOS TÉRMINOS
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Al acceder y utilizar los servicios de Saori, usted declara haber leído, comprendido y aceptado en su totalidad estos Términos y Condiciones de Uso.
                </p>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  El uso de nuestro sitio web y la contratación de nuestros servicios implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este documento.
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
                  2. SERVICIOS MÉDICOS
                </h2>
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  2.1 Descripción de los Servicios
                </h3>
                <p style={{marginBottom: '1rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Saori ofrece servicios especializados en:
                </p>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Medicina Integrativa</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Medicina Funcional</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Medicina Tradicional China</li>
                </ul>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  2.2 Calificaciones Profesionales
                </h3>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Todos los tratamientos son realizados por profesionales médicos debidamente licenciados, certificados y habilitados por las autoridades sanitarias competentes de Colombia.
                </p>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  2.3 Naturaleza de los Servicios
                </h3>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Nuestros tratamientos tienen carácter complementario e integrativo. No sustituyen la atención médica convencional cuando ésta sea requerida.
                </p>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  2.4 Citas y Cancelaciones
                </h3>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Las citas deben programarse con antelación.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Las cancelaciones deben realizarse con al menos 24 horas de anticipación.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Las reprogramaciones estarán sujetas a disponibilidad.</li>
                </ul>
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
                  3. RESPONSABILIDADES DEL PACIENTE
                </h2>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  3.1 Información Veraz
                </h3>
                <p style={{marginBottom: '1rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  El paciente se compromete a:
                </p>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Proporcionar información médica completa, precisa y actualizada sobre su historial clínico, tratamientos previos, medicamentos, alergias y condiciones de salud.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Informar oportunamente cualquier cambio en su estado de salud durante el proceso de atención.</li>
                </ul>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  3.2 Cumplimiento del Tratamiento
                </h3>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Seguir las indicaciones y recomendaciones dadas por el profesional tratante.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Asistir puntualmente a las citas programadas.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Cumplir con los pagos acordados en los plazos establecidos.</li>
                </ul>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  3.3 Comunicación y Seguimiento
                </h3>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Notificar de inmediato cualquier reacción adversa o efecto secundario.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Consultar sus inquietudes antes de modificar o suspender el tratamiento indicado.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Informar si se encuentra bajo atención médica paralela con otros profesionales.</li>
                </ul>
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
                  4. PRIVACIDAD Y CONFIDENCIALIDAD
                </h2>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  4.1 Protección de Datos Personales
                </h3>
                <p style={{marginBottom: '1rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Saori garantiza la confidencialidad y seguridad de toda información médica y personal, conforme a:
                </p>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Ley 1581 de 2012 – Protección de Datos Personales</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Ley 23 de 1981 – Código de Ética Médica</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Otras normas aplicables en materia de protección de datos y secreto profesional.</li>
                </ul>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  4.2 Uso de la Información
                </h3>
                <p style={{marginBottom: '1rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  La información recopilada se utilizará exclusivamente para:
                </p>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Prestación de los servicios médicos.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Seguimiento clínico del tratamiento.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Comunicaciones relacionadas con su atención.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Cumplimiento de obligaciones legales.</li>
                </ul>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  4.3 Consentimiento para el Tratamiento de Datos
                </h3>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Al utilizar nuestros servicios, usted autoriza el tratamiento de sus datos personales y médicos conforme a nuestra Política de Privacidad vigente.
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
                  5. CONSENTIMIENTO INFORMADO
                </h2>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  5.1 Información al Paciente
                </h3>
                <p style={{marginBottom: '1rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Antes de cualquier procedimiento, el paciente será informado sobre:
                </p>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>La naturaleza del tratamiento propuesto.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Sus beneficios esperados.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Riesgos potenciales y efectos secundarios.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>Alternativas disponibles y pronóstico estimado.</li>
                </ul>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  5.2 Autorización
                </h3>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  El paciente deberá firmar un consentimiento informado específico para los procedimientos que así lo requieran, conforme a la normativa sanitaria aplicable.
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
                  6. LIMITACIÓN DE RESPONSABILIDAD
                </h2>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  6.1 Alcance de Responsabilidad
                </h3>
                <p style={{marginBottom: '1rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Saori y sus profesionales actúan con la debida diligencia y conforme a los estándares de las mejores prácticas médicas. Sin embargo:
                </p>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'disc'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>No se garantizan resultados específicos, pues la respuesta a los tratamientos varía entre individuos.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>No se asume responsabilidad por complicaciones derivadas del incumplimiento de indicaciones médicas.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>No se responde por daños ocasionados por información inexacta o incompleta suministrada por el paciente.</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>No se responderá por daños indirectos, incidentales o consecuentes, salvo en los casos previstos por la legislación colombiana.</li>
                </ul>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  6.2 Fuerza Mayor
                </h3>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Saori no será responsable por incumplimientos causados por eventos de fuerza mayor o caso fortuito ajenos a su control razonable.
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
                  7. PROPIEDAD INTELECTUAL
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  El contenido del sitio web —incluyendo textos, gráficos, logotipos, imágenes, videos y software— es propiedad exclusiva de Saori o de sus licenciantes, y está protegido por las leyes de derechos de autor y propiedad intelectual. Su reproducción, distribución o uso comercial sin autorización escrita está estrictamente prohibida.
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
                  8. MODIFICACIONES
                </h2>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  8.1 Cambios en los Términos
                </h3>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Saori se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>
                
                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '16px',
                  marginBottom: '12px',
                  color: '#333333',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  8.2 Notificación de Cambios
                </h3>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Las modificaciones sustanciales serán notificadas a través del sitio web. El uso continuado de los servicios tras la publicación de los cambios implica la aceptación de las nuevas condiciones.
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
                  9. LEY APLICABLE Y JURISDICCIÓN
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta ante los tribunales competentes de Bogotá, D.C.
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
                  10. RESOLUCIÓN DE CONFLICTOS
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  En caso de conflicto, las partes procurarán resolverlo mediante diálogo directo y mecanismos conciliatorios antes de acudir a instancias judiciales.
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
                  11. DIVISIBILIDAD
                </h2>
                <p style={{marginBottom: '1.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Si alguna disposición de estos Términos y Condiciones se declara inválida, las disposiciones restantes conservarán plena validez y efecto.
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
                  12. CONTACTO
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}>
                  Para consultas, peticiones o sugerencias relacionadas con estos Términos y Condiciones, puede contactarnos a través de:
                </p>
                <ul style={{marginLeft: '2rem', marginBottom: '1.5rem', listStyleType: 'none'}}>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}><strong>Correo electrónico:</strong> info@saori.com</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}><strong>Teléfono:</strong> +57 300 123 4567</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}><strong>Dirección:</strong> Calle 72A #20A–22, Bogotá, Colombia</li>
                  <li style={{marginBottom: '0.5rem', fontSize: '17px', lineHeight: '1.6', color: '#333333'}}><strong>Horario de atención:</strong> Lunes a viernes, de 8:00 a.m. a 6:00 p.m.</li>
                </ul>
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