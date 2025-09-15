import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

import blogHeroImage from "@/assets/blog-hero.jpg";
import blogTcmImage from "@/assets/blog-tcm.jpg";
import blogFunctionalImage from "@/assets/blog-functional.jpg";
import blogFertilityImage from "@/assets/blog-fertility.jpg";
import blogWellnessImage from "@/assets/blog-wellness.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const [visibleBlogs, setVisibleBlogs] = useState(8);

  const featuredBlog = {
    id: 1,
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
      excerpt: "Un enfoque personalizado que va más allá de los síntomas para encontrar soluciones duraderas.",
      author: "Dra. Ana Saori",
      date: "10 de Septiembre, 2024",
      category: "Medicina Funcional",
      image: blogFunctionalImage,
      slug: "medicina-funcional-causas-raiz"
    },
    {
      id: 4,
      title: "Los Beneficios de la Medicina Tradicional China",
      excerpt: "Explora los principios milenarios que pueden mejorar tu salud y bienestar general.",
      author: "Dra. Ana Saori",
      date: "8 de Septiembre, 2024",
      category: "Medicina Tradicional China",
      image: blogTcmImage,
      slug: "beneficios-medicina-tradicional-china"
    },
    {
      id: 5,
      title: "Equilibrio Hormonal Naturalmente",
      excerpt: "Métodos naturales y efectivos para balancear tus hormonas y mejorar tu calidad de vida.",
      author: "Dra. Ana Saori",
      date: "5 de Septiembre, 2024",
      category: "Bienestar",
      image: blogWellnessImage,
      slug: "equilibrio-hormonal-naturalmente"
    },
    {
      id: 6,
      title: "Alimentación Consciente para la Salud Digestiva",
      excerpt: "Descubre cómo una alimentación consciente puede transformar tu digestión y energía.",
      author: "Dra. Ana Saori",
      date: "3 de Septiembre, 2024",
      category: "Nutrición",
      image: blogFunctionalImage,
      slug: "alimentacion-consciente-salud-digestiva"
    },
    {
      id: 7,
      title: "Manejo del Estrés con Técnicas Orientales",
      excerpt: "Aprende técnicas milenarias para reducir el estrés y encontrar la paz interior.",
      author: "Dra. Ana Saori",
      date: "1 de Septiembre, 2024",
      category: "Bienestar",
      image: blogTcmImage,
      slug: "manejo-estres-tecnicas-orientales"
    },
    {
      id: 8,
      title: "La Importancia del Sueño en la Medicina China",
      excerpt: "Cómo mejorar la calidad del sueño usando principios de la medicina tradicional china.",
      author: "Dra. Ana Saori",
      date: "29 de Agosto, 2024",
      category: "Medicina Tradicional China",
      image: blogWellnessImage,
      slug: "importancia-sueno-medicina-china"
    },
    {
      id: 9,
      title: "Preparación para el Embarazo: Enfoque Holístico",
      excerpt: "Una guía completa para preparar tu cuerpo y mente para la maternidad.",
      author: "Dra. Ana Saori",
      date: "27 de Agosto, 2024",
      category: "Fertilidad",
      image: blogFertilityImage,
      slug: "preparacion-embarazo-enfoque-holistico"
    },
    {
      id: 10,
      title: "Detoxificación Natural con Medicina Funcional",
      excerpt: "Métodos seguros y efectivos para desintoxicar tu cuerpo de manera natural.",
      author: "Dra. Ana Saori",
      date: "25 de Agosto, 2024",
      category: "Medicina Funcional",
      image: blogFunctionalImage,
      slug: "detoxificacion-natural-medicina-funcional"
    },
    {
      id: 11,
      title: "Meditación y Mindfulness en la Consulta Médica",
      excerpt: "Integrando prácticas contemplativas en el tratamiento médico moderno.",
      author: "Dra. Ana Saori",
      date: "22 de Agosto, 2024",
      category: "Bienestar",
      image: blogWellnessImage,
      slug: "meditacion-mindfulness-consulta-medica"
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
      {/* Navigation with white background */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
              </div>
              <span className="text-2xl font-serif font-semibold tracking-wide text-primary">
                SAORI
              </span>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center gap-8">
              <button className="font-medium transition-colors duration-200 hover:scale-105 transform text-foreground hover:text-primary">
                Servicios
              </button>
              <button className="font-medium transition-colors duration-200 hover:scale-105 transform text-foreground hover:text-primary">
                Método Saori
              </button>
              <button className="font-medium transition-colors duration-200 hover:scale-105 transform text-foreground hover:text-primary">
                Dra Sara Tamayo
              </button>
              <button className="font-medium transition-colors duration-200 hover:scale-105 transform text-foreground hover:text-primary">
                Primera Consulta
              </button>
              <button className="font-medium transition-colors duration-200 hover:scale-105 transform text-foreground hover:text-primary">
                Testimonios
              </button>
              <button className="font-medium transition-colors duration-200 hover:scale-105 transform text-foreground hover:text-primary">
                Contacto
              </button>
            </div>

            {/* CTA Button */}
            <Button variant="outline" size="sm" className="hidden lg:flex font-medium tracking-wide">
              AGENDAR CITA
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-8 bg-accent text-accent-foreground text-sm font-medium tracking-wider">
              {featuredBlog.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-foreground">
              {featuredBlog.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm">{featuredBlog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{featuredBlog.date}</span>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              {featuredBlog.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-2">
              <img 
                src={featuredBlog.image} 
                alt={featuredBlog.title}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => handleBlogClick(featuredBlog.slug)}
              className="group"
            >
              LEER ARTÍCULO
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground text-sm font-medium tracking-wider">
            {featuredBlog.category}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight max-w-4xl mx-auto">
            {featuredBlog.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-sm">{featuredBlog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{featuredBlog.date}</span>
            </div>
          </div>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {featuredBlog.excerpt}
          </p>
          
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => handleBlogClick(featuredBlog.slug)}
            className="group"
          >
            LEER ARTÍCULO
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Últimas Publicaciones
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora nuestros artículos sobre medicina integrativa, bienestar y salud holística
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.slice(0, visibleBlogs).map((post) => (
              <Card 
                key={post.id} 
                className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card"
                onClick={() => handleBlogClick(post.slug)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {visibleBlogs < blogPosts.length && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={showMoreBlogs}
                className="group"
              >
                VER MÁS ARTÍCULOS
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <BookingSection />
      <Footer />
    </div>
  );
};

export default Blog;