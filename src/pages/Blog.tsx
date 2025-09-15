import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ChevronRight, Menu, X } from "lucide-react";
import Footer from "@/components/Footer";

import blogHeroImage from "@/assets/blog-hero.jpg";
import blogTcmImage from "@/assets/blog-tcm.jpg";
import blogFunctionalImage from "@/assets/blog-functional.jpg";
import blogFertilityImage from "@/assets/blog-fertility.jpg";
import blogWellnessImage from "@/assets/blog-wellness.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleBlogs, setVisibleBlogs] = useState(8);
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

  const featuredBlog = {
    id: 0,
    title: "Medicina Integrativa: El Futuro del Cuidado de la Salud",
    excerpt: "Descubre cómo la combinación de medicina oriental y occidental puede transformar tu bienestar.",
    author: "Dra. Ana Saori",
    date: "15 de Septiembre, 2024",
    category: "Medicina Integrativa",
    image: blogHeroImage,
    slug: "medicina-integrativa-futuro-cuidado-salud"
  };

  const blogPosts = [
    {
      id: 1,
      title: "Medicina Integrativa: El Futuro del Cuidado de la Salud",
      excerpt: "Descubre cómo la combinación de medicina oriental y occidental puede transformar tu bienestar.",
      author: "Dra. Ana Saori",
      date: "15 de Septiembre, 2024",
      category: "Medicina Integrativa",
      image: blogHeroImage,
      slug: "medicina-integrativa-futuro-cuidado-salud"
    },
    {
      id: 2,
      title: "Acupuntura para la Fertilidad: Una Perspectiva Científica",
      excerpt: "Cómo la acupuntura puede apoyar tu camino hacia la maternidad con evidencia científica.",
      author: "Dra. Ana Saori",
      date: "12 de Septiembre, 2024",
      category: "Fertilidad",
      image: blogFertilityImage,
      slug: "acupuntura-fertilidad-perspectiva-cientifica"
    },
    {
      id: 3,
      title: "Medicina Funcional: Tratando las Causas Raíz",
      excerpt: "Un enfoque revolucionario que va más allá de los síntomas para encontrar la verdadera causa.",
      author: "Dra. Ana Saori",
      date: "10 de Septiembre, 2024",
      category: "Medicina Funcional",
      image: blogFunctionalImage,
      slug: "medicina-funcional-causas-raiz"
    },
    {
      id: 4,
      title: "El Poder de la Medicina Tradicional China",
      excerpt: "Explorando los beneficios milenarios de la MTC en el cuidado de la salud moderna.",
      author: "Dra. Ana Saori",
      date: "8 de Septiembre, 2024",
      category: "Medicina Tradicional China",
      image: blogTcmImage,
      slug: "poder-medicina-tradicional-china"
    },
    {
      id: 5,
      title: "Nutrición Integrativa: Alimentando tu Bienestar",
      excerpt: "Cómo una alimentación consciente puede transformar tu salud desde adentro hacia afuera.",
      author: "Dra. Ana Saori",
      date: "5 de Septiembre, 2024",
      category: "Nutrición",
      image: blogWellnessImage,
      slug: "nutricion-integrativa-alimentando-bienestar"
    },
    {
      id: 6,
      title: "Equilibrio Hormonal: La Clave del Bienestar Femenino",
      excerpt: "Descubre estrategias naturales para mantener un equilibrio hormonal óptimo.",
      author: "Dra. Ana Saori",
      date: "3 de Septiembre, 2024",
      category: "Medicina Funcional",
      image: blogFunctionalImage,
      slug: "equilibrio-hormonal-bienestar-femenino"
    },
    {
      id: 7,
      title: "Manejo del Estrés con Técnicas Orientales",
      excerpt: "Técnicas milenarias adaptadas al mundo moderno para combatir el estrés diario.",
      author: "Dra. Ana Saori",
      date: "1 de Septiembre, 2024",
      category: "Medicina Tradicional China",
      image: blogTcmImage,
      slug: "manejo-estres-tecnicas-orientales"
    },
    {
      id: 8,
      title: "Detoxificación Natural: Renovando tu Cuerpo",
      excerpt: "Métodos seguros y efectivos para desintoxicar tu organismo de manera natural.",
      author: "Dra. Ana Saori",
      date: "28 de Agosto, 2024",
      category: "Bienestar",
      image: blogWellnessImage,
      slug: "detoxificacion-natural-renovando-cuerpo"
    },
    {
      id: 9,
      title: "Fertilidad Natural: Preparando tu Cuerpo para la Concepción",
      excerpt: "Estrategias integrativas para optimizar tu fertilidad de manera natural y holística.",
      author: "Dra. Ana Saori",
      date: "25 de Agosto, 2024",
      category: "Fertilidad",
      image: blogFertilityImage,
      slug: "fertilidad-natural-preparando-concepcion"
    },
    {
      id: 10,
      title: "Medicina Personalizada: Tu Tratamiento Único",
      excerpt: "Cómo la medicina funcional crea planes de tratamiento únicos para cada paciente.",
      author: "Dra. Ana Saori",
      date: "23 de Agosto, 2024",
      category: "Medicina Funcional",
      image: blogFunctionalImage,
      slug: "medicina-personalizada-tratamiento-unico"
    },
    {
      id: 11,
      title: "Mindfulness y Salud: La Conexión Mente-Cuerpo",
      excerpt: "Explorando cómo la atención plena puede mejorar tu salud física y mental.",
      author: "Dra. Ana Saori",
      date: "22 de Agosto, 2024",
      category: "Bienestar",
      image: blogWellnessImage,
      slug: "mindfulness-salud-conexion-mente-cuerpo"
    },
    {
      id: 12,
      title: "Plantas Medicinales: Sabiduría Ancestral y Ciencia Moderna",
      excerpt: "Explorando el uso terapéutico de las plantas medicinales respaldado por la investigación.",
      author: "Dra. Ana Saori",
      date: "20 de Agosto, 2024",
      category: "Medicina Integrativa",
      image: blogTcmImage,
      slug: "plantas-medicinales-sabiduria-ancestral"
    }
  ];

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const showMoreBlogs = () => {
    setVisibleBlogs(prev => prev + 8);
  };

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
      {/* Header with Desktop Navigation and Mobile Hamburger */}
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
                  href="#" 
                  className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
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
                className="font-medium tracking-wide"
                onClick={() => scrollToSection('contacto')}
              >
                AGENDAR CITA
              </Button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
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
                    href="#" 
                    className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
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
      
      {/* Hero Section */}
      <section className="relative bg-hero-green pt-28 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-hero-green-foreground mb-8 text-center leading-[1.1] tracking-tight">
            Blog de Medicina Integrativa
          </h1>
          <p className="text-xl text-hero-green-foreground/90 text-center max-w-3xl mx-auto leading-relaxed">
            Descubre artículos especializados sobre medicina integrativa, medicina funcional y medicina tradicional china
          </p>
        </div>
        {/* Divider line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hero-green-foreground/30 to-transparent"></div>
      </section>

      {/* Featured Blog Section */}
      <section className="relative py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Featured Content */}
            <div>
              <Badge className={`mb-4 ${getCategoryColor(featuredBlog.category)}`}>
                {featuredBlog.category}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4 leading-tight">
                {featuredBlog.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{featuredBlog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{featuredBlog.date}</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {featuredBlog.excerpt}
              </p>
              
              <Button 
                variant="outline" 
                className="group"
                onClick={() => handleBlogClick(featuredBlog.slug)}
              >
                Leer Artículo
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Featured Image */}
            <div className="order-first lg:order-last">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Divider line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </section>

      {/* Blog Grid Section */}
      <section className="relative py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4">
              Últimos Artículos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mantente al día con las últimas investigaciones y tendencias en medicina integrativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogPosts.slice(0, visibleBlogs).map((post) => (
              <article 
                key={post.id} 
                className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-border/20"
                onClick={() => handleBlogClick(post.slug)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <Badge className={`mb-3 ${getCategoryColor(post.category)}`} variant="secondary">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Show More Button */}
          {visibleBlogs < blogPosts.length && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={showMoreBlogs}
                className="px-8"
              >
                Cargar Más Artículos
              </Button>
            </div>
          )}
        </div>
        {/* Divider line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;