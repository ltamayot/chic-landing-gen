import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Content */}
      <section className="pt-32 pb-16" style={{ backgroundColor: '#D4E4D4' }}>
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