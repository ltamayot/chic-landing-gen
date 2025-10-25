import { useParams, Navigate, useNavigate, useLocation } from "react-router-dom";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Menu, X } from "lucide-react";
import { useState } from "react";

import blogHeroImage from "@/assets/blog-hero.jpg";
import blogTcmImage from "@/assets/blog-tcm.jpg";
import blogFunctionalImage from "@/assets/blog-functional.jpg";
import blogFertilityImage from "@/assets/blog-fertility.jpg";
import blogWellnessImage from "@/assets/blog-wellness.jpg";
import blogAcneMtcImage from "@/assets/blog-acne-mtc.jpg";
import blogAcupunctureImage from "@/assets/blog-acupuncture-illustration.jpg";
import blogHerbalTeaImage from "@/assets/blog-herbal-tea.jpg";
import blogFatigaImage from "@/assets/blog-fatiga.jpg";
import blogFatigaIllustration from "@/assets/blog-fatiga-illustration.jpg";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Servicios", id: "servicios" },
    { name: "Método Saori", id: "metodo" },
    { name: "Dra Sara Tamayo", id: "doctora" },
    { name: "Primera Consulta", id: "consulta" },
    { name: "Testimonios", id: "testimonios" },
    { name: "Contacto", id: "contacto" },
  ];

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const blogPosts = {
    "fatiga-cronica-tratamiento-medicina-funcional-china": {
      title: "Fatiga Crónica: Causas, Tratamiento y Abordaje Integrativo desde la Medicina Funcional y la Medicina China",
      author: "Sara Tamayo",
      date: "20 de Octubre, 2024",
      category: "Medicina Integrativa",
      image: blogFatigaImage,
      content: `
        <p>Sentirse cansado después de un día intenso es normal. Pero cuando el agotamiento se vuelve constante, dormir ya no recupera y la energía nunca alcanza, hablamos de fatiga crónica.</p>
        
        <p>Este síntoma afecta a miles de personas y suele tener múltiples causas: desde desequilibrios hormonales hasta alteraciones digestivas o emocionales. En Saori lo abordamos con una visión integrativa, uniendo la Medicina Funcional y la Medicina Tradicional China (MTC) para encontrar la raíz y restaurar la vitalidad.</p>

        <h2>¿Por qué estoy cansado todo el tiempo?</h2>
        <p>La fatiga crónica no es una enfermedad en sí misma, sino una señal de que algo en el cuerpo no está funcionando en equilibrio.</p>
        
        <p>Algunas causas frecuentes son:</p>
        <ul>
          <li><strong>Disfunción mitocondrial</strong> (la "fábrica de energía" de las células no produce suficiente ATP).</li>
          <li><strong>Desequilibrios hormonales:</strong> tiroides, cortisol o DHEA alterados.</li>
          <li><strong>Deficiencias nutricionales:</strong> vitamina B, hierro, magnesio, vitamina D.</li>
          <li><strong>Problemas digestivos y de microbiota:</strong> intestino permeable, disbiosis, inflamación.</li>
          <li><strong>Estrés crónico:</strong> sobrecarga del eje HPA (hipotálamo-hipófisis-suprarrenal).</li>
        </ul>
        
        <p>En Medicina Funcional utilizamos exámenes de laboratorio personalizados para evaluar estas áreas y diseñar un plan basado en evidencia.</p>

        <h2>La visión de la Medicina China sobre la fatiga</h2>
        
        <img src="${blogFatigaIllustration}" alt="Medicina China y fatiga crónica" class="w-full rounded-lg my-6" />
        
        <p>La MTC entiende la fatiga como un reflejo de desequilibrios en el Qi (energía vital). Los patrones más comunes son:</p>
        <ul>
          <li><strong>Deficiencia de Qi de Bazo y Estómago:</strong> cansancio después de comer, digestión lenta, pesadez.</li>
          <li><strong>Deficiencia de Riñón:</strong> fatiga profunda, dolor lumbar, debilidad, sensación de frío.</li>
          <li><strong>Estancamiento de Qi de Hígado:</strong> fatiga emocional, irritabilidad, tensión muscular.</li>
          <li><strong>Deficiencia de Yin o Sangre:</strong> agotamiento mental, insomnio, palidez, mareos.</li>
        </ul>

        <p>Con acupuntura, fitoterapia, nutrición energética y técnicas de respiración buscamos armonizar cuerpo y mente, fortalecer el Qi y recuperar vitalidad.</p>

        <h2>Estrategias integrativas para recuperar la energía</h2>
        <p>En nuestra clínica combinamos ambas miradas para un abordaje completo:</p>

        <h3>1. Nutrición terapéutica</h3>
        <ul>
          <li><strong>Funcional:</strong> proteínas de calidad, omega 3, carbohidratos de bajo índice glucémico, evitar azúcares refinados.</li>
          <li><strong>MTC:</strong> comidas calientes, fáciles de digerir, sopas y caldos que fortalezcan el bazo y la energía.</li>
        </ul>

        <h3>2. Regulación del estrés y sueño</h3>
        <ul>
          <li><strong>Funcional:</strong> adaptógenos como ashwagandha y rhodiola, magnesio, apoyo al ritmo circadiano.</li>
          <li><strong>MTC:</strong> dormir antes de las 11 p.m. para respetar el ciclo del hígado, acupuntura para relajación profunda.</li>
        </ul>

        <h3>3. Acupuntura y estimulación energética</h3>
        <ul>
          <li>Tonifica el Qi del bazo y riñón.</li>
          <li>Libera bloqueos emocionales del hígado.</li>
          <li>Mejora la calidad del sueño y regula el sistema nervioso.</li>
        </ul>

        <h3>4. Apoyo herbal y suplementos</h3>
        <ul>
          <li><strong>MTC:</strong> astrágalo, ginseng, reishi, dátiles rojos para fortalecer energía y sangre.</li>
          <li><strong>Funcional:</strong> complejo B, vitamina D, coenzima Q10 y L-carnitina para potenciar energía mitocondrial.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>La fatiga tiene múltiples causas y requiere una mirada detallada y personalizada.</p>
        
        <p>En Saori acompañamos a cada paciente a identificar la raíz de su desequilibrio y diseñamos un plan que une lo mejor de ambas medicinas para recuperar tu energía vital.</p>
        
        <p><strong>¿Te identificas con estos síntomas?</strong></p>
        
        <p>Agenda una cita con nosotros y da el primer paso hacia la recuperación de tu bienestar.</p>
      `,
    },
    "acne-medicina-tradicional-china-mirada-integral": {
      title: "Acné y Medicina Tradicional China: Una Mirada Integral para Sanar la Piel",
      author: "Sara Tamayo",
      date: "15 de Octubre, 2024",
      category: "Medicina Tradicional China",
      image: blogAcneMtcImage,
      content: `
        <p>El acné es uno de los problemas de piel más comunes y frustrantes, y muchas veces se aborda solo desde lo superficial. Sin embargo, la Medicina Tradicional China (MTC) nos enseña que la piel refleja el estado interno de nuestro organismo. Los brotes, la inflamación y las manchas son señales de desequilibrios más profundos que podemos corregir al mirar el cuerpo como un sistema interconectado.</p>

        <p>Como médica en Medicina Tradicional China, atravesé mi propio proceso con el acné y descubrí que la verdadera sanación requiere una visión integral. Hoy quiero compartir contigo las tres estrategias que transformaron mi piel y mi salud, todas basadas en los principios de la MTC.</p>

        <h2>1. Fortalecer el intestino: el poder del elemento Tierra</h2>
        <p>En MTC, el bazo y el estómago forman el elemento Tierra, encargado de nutrir y sostener todo el cuerpo. Cuando este sistema se debilita, aparecen la humedad, la inflamación y el acné.</p>
        
        <p><strong> Qué hice:</strong> cambié mi alimentación hacia comidas calientes, cocidas y fáciles de digerir (sopas, caldos, congee). Eliminé los alimentos fríos y crudos como ensaladas y batidos, que desde la MTC debilitan el "fuego digestivo" y generan humedad interna.</p>

        <p><strong> Apoyo extra:</strong> incorporé un probióticos, diseñado para equilibrar la microbiota intestinal. El resultado fue menos inflamación, mejor digestión y brotes más controlados.</p>
        
        <p><strong> Conclusión:</strong> cuando el elemento Tierra está fuerte, el cuerpo elimina toxinas de manera más eficiente y la piel se ve más clara y saludable.</p>

        <h2>2. Acupuntura semanal: equilibrar el Qi y dispersar el calor</h2>
        
        <img src="${blogAcupunctureImage}" alt="Acupuntura para el acné" class="w-full rounded-lg my-6" />
        
        <p>El acné suele relacionarse con exceso de calor y humedad en canales como hígado y estómago. La acupuntura semanal fue clave en mi recuperación:</p>
        <ul>
          <li>Reguló el flujo de Qi (energía vital).</li>
          <li>Disminuyó la inflamación y el enrojecimiento.</li>
          <li>Promovió un estado de calma profunda, reduciendo el impacto del estrés en mi piel.</li>
        </ul>
        
        <p> Además, integré la acupuntura cosmética, que mejora la circulación, estimula el colágeno y da un aspecto más luminoso, pero también actúa en el equilibrio interno del cuerpo.</p>
        
        <p><strong> Conclusión:</strong> la acupuntura no solo mejora la piel, también armoniza el sistema nervioso y hormonal, generando cambios duraderos.</p>

        <h2>3. Dormir antes de las 11 PM: cuidar al hígado y equilibrar hormonas</h2>
        <p>En MTC, el hígado es responsable de detoxificar la sangre, regular las emociones y el Qi. Su horario de máxima actividad es entre las 11:00 p.m. y las 3:00 a.m.</p>
        
        <p><strong>Qué hice:</strong> establecí el hábito de dormir antes de las 11 p.m.</p>
        
        <p><strong>Resultados:</strong> mejor descanso, piel más clara, menos brotes hormonales y mayor estabilidad emocional.</p>
        
        <p><strong>Conclusión:</strong> respetar los ritmos del hígado es un paso simple pero poderoso para cuidar la piel y la salud integral.</p>

        <h2>Mis infusiones favoritas para la piel</h2>
        
        <img src="${blogHerbalTeaImage}" alt="Infusiones herbales para la piel" class="w-full rounded-lg my-6" />
        
        <p>La fitoterapia es un pilar en MTC y me acompañó en este proceso. Te comparto algunas hierbas fáciles de incorporar en tu rutina:</p>
        <ul>
          <li><strong>Menta:</strong> ayuda a liberar calor del hígado y reduce el estrés.</li>
          <li><strong>Bayas de goji:</strong> antioxidantes, nutren la sangre y la piel.</li>
          <li><strong>Dátiles rojos (jujube):</strong> tonifican el Qi y aportan luminosidad.</li>
          <li><strong>Raíz de diente de león:</strong> depura hígado y estómago.</li>
        </ul>

        <p>Sanar el acné no es un proceso rápido ni superficial. Requiere paciencia, constancia y confianza en la sabiduría del cuerpo. Mi experiencia con la Medicina Tradicional China me enseñó que cuando cuidamos la digestión, equilibramos el Qi con acupuntura y apoyamos el hígado con un buen descanso, la piel responde con claridad y vitalidad.</p>
        
        <p><strong> Si estás lidiando con acné, recuerda:</strong> tu piel no es tu enemiga, es un mensajero. Escuchar sus señales puede ser el inicio de una transformación profunda, no solo en tu piel, sino en tu bienestar general.</p>
      `,
    },
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  if (!currentPost) {
    return <Navigate to="/404" replace />;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Medicina Integrativa": "bg-primary text-primary-foreground",
      Fertilidad: "bg-accent text-accent-foreground",
      "Medicina Funcional": "bg-secondary text-secondary-foreground",
      "Medicina Tradicional China": "bg-primary/80 text-primary-foreground",
      Bienestar: "bg-accent/80 text-accent-foreground",
      Nutrición: "bg-secondary/80 text-secondary-foreground",
    };
    return colors[category as keyof typeof colors] || "bg-primary text-primary-foreground";
  };

  return (
    <div className="min-h-screen">
      {/* Header with Desktop Navigation and Mobile Hamburger */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/20 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
              </div>
              <span className="text-2xl font-serif font-semibold tracking-wide text-primary">SAORI</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.tiktok.com/@saratamayomd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                  </svg>
                </a>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="font-medium tracking-wide"
                onClick={() => window.open('https://wa.me/573107539221', '_blank')}
              >
                AGENDAR CITA
              </Button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button className="p-2 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-lg md:hidden">
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
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
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
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z" />
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
                <img src={currentPost.image} alt={currentPost.title} className="w-full h-full object-cover" />
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
                className="text-justify"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "17px",
                  lineHeight: "1.6",
                  color: "#333333",
                }}
                dangerouslySetInnerHTML={{
                  __html: currentPost.content
                    .replace(
                      /<p>/g,
                      '<p style="margin-bottom: 1.5rem; font-size: 17px; line-height: 1.6; color: #333333;">',
                    )
                    .replace(
                      /<h2>/g,
                      "<h2 style=\"font-size: 21px; font-weight: bold; margin-top: 24px; margin-bottom: 16px; color: #333333; font-family: Georgia, 'Times New Roman', serif;\">",
                    )
                    .replace(/<ul>/g, '<ul style="margin-bottom: 1.5rem; color: #333333;">')
                    .replace(
                      /<li>/g,
                      '<li style="margin-bottom: 8px; font-size: 17px; line-height: 1.6; color: #333333;">',
                    )
                    .replace(/<strong>/g, '<strong style="font-weight: bold; color: #333333;">'),
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
