import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import blogHeroImage from "@/assets/blog-hero.jpg";
import blogTcmImage from "@/assets/blog-tcm.jpg";
import blogFunctionalImage from "@/assets/blog-functional.jpg";
import blogFertilityImage from "@/assets/blog-fertility.jpg";
import blogWellnessImage from "@/assets/blog-wellness.jpg";
import blogAcneMtcImage from "@/assets/blog-acne-mtc.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const [visibleBlogs, setVisibleBlogs] = useState(8);

  const featuredBlog = {
    id: 0,
    title: "Acné y Medicina Tradicional China: Una Mirada Integral para Sanar la Piel",
    excerpt: "El acné es uno de los problemas de piel más comunes y frustrantes, y muchas veces se aborda solo desde lo superficial. Sin embargo, la Medicina Tradicional China (MTC) nos enseña que la piel refleja el estado interno de nuestro organismo. Los brotes, la inflamación y las manchas son señales de desequilibrios más profundos que podemos corregir al mirar el cuerpo como un sistema interconectado.",
    author: "Sara Tamayo",
    date: "15 de Octubre, 2024",
    category: "Medicina Tradicional China",
    image: blogAcneMtcImage,
    slug: "acne-medicina-tradicional-china-mirada-integral"
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
      <Navigation />
      
      {/* Hero Section with Featured Article */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-32 pb-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-lighter/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-lighter/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Title */}
          <div className="text-center mb-16">
            <span className="text-primary-lighter uppercase tracking-[0.2em] text-sm font-medium mb-6 block">
              BIENVENIDO AL BLOG
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-primary-foreground mb-6 leading-tight">
              Medicina Integrativa
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Explora el equilibrio perfecto entre la sabiduría milenaria y la ciencia moderna para transformar tu bienestar
            </p>
          </div>

          {/* Featured Article Card */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <Badge className="bg-primary-lighter/30 text-primary-foreground border-primary-lighter/40 px-4 py-2 text-xs uppercase tracking-wider shadow-lg">
                Artículo Destacado
              </Badge>
            </div>
            
            <div className="bg-gradient-to-br from-background/10 via-background/5 to-primary-lighter/5 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-12 border border-primary-lighter/20 hover:border-primary-lighter/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-primary-foreground mb-5 leading-tight">
                {featuredBlog.title}
              </h2>
              
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                {featuredBlog.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-primary-foreground/70 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-primary-lighter/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-primary-foreground">{featuredBlog.author}</span>
                </div>
                <span>•</span>
                <span>5 min de lectura</span>
              </div>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
                onClick={() => handleBlogClick(featuredBlog.slug)}
              >
                Leer Artículo
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
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