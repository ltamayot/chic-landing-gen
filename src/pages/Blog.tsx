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
import blogFatigaImage from "@/assets/blog-fatiga.jpg";
import blogEmocionesHero from "@/assets/blog-emociones-hero.jpg";
import blogVitaminaDHero from "@/assets/blog-vitamina-d-hero.jpg";
import blogPostnatalHero from "@/assets/blog-postnatal-hero.jpg";

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
      title: "El arte de cuidar a la madre: sabiduría postnatal desde la Medicina China y la Medicina Funcional",
      excerpt: "En muchas culturas, el nacimiento de un bebé se celebra como el inicio de una nueva vida. Pero pocas reconocen con tanta profundidad como la Medicina Tradicional China que también nace una madre.",
      author: "Sara Tamayo",
      date: "5 de Noviembre, 2024",
      category: "Medicina Integrativa",
      image: blogPostnatalHero,
      slug: "cuidado-madre-postnatal-medicina-china-funcional"
    },
    {
      id: 2,
      title: "Vitamina D: la hormona del sol y su papel en la energía vital",
      excerpt: "Durante los últimos años, la vitamina D ha pasado de ser vista como un simple nutriente para los huesos a considerarse una hormona esencial para la salud integral. Sus efectos van mucho más allá del sistema óseo.",
      author: "Sara Tamayo",
      date: "30 de Octubre, 2024",
      category: "Medicina Funcional",
      image: blogVitaminaDHero,
      slug: "vitamina-d-hormona-sol-energia-vital"
    },
    {
      id: 3,
      title: "Las Emociones desde la Medicina China: Cuando el Cuerpo Habla lo que el Alma Siente",
      excerpt: "En Medicina Tradicional China (MTC), cada emoción tiene una energía propia que circula a través del cuerpo. No se ve como algo 'mental', sino como una fuerza que puede nutrir o desequilibrar los órganos.",
      author: "Sara Tamayo",
      date: "25 de Octubre, 2024",
      category: "Medicina Tradicional China",
      image: blogEmocionesHero,
      slug: "emociones-medicina-china-cuerpo-alma"
    },
    {
      id: 4,
      title: "Fatiga Crónica: Causas, Tratamiento y Abordaje Integrativo desde la Medicina Funcional y la Medicina China",
      excerpt: "Sentirse cansado después de un día intenso es normal. Pero cuando el agotamiento se vuelve constante, dormir ya no recupera y la energía nunca alcanza, hablamos de fatiga crónica.",
      author: "Sara Tamayo",
      date: "20 de Octubre, 2024",
      category: "Medicina Integrativa",
      image: blogFatigaImage,
      slug: "fatiga-cronica-tratamiento-medicina-funcional-china"
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
      <section className="relative pt-32 pb-32 overflow-hidden" style={{ backgroundColor: 'hsl(120, 16%, 76%)' }}>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-lighter/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sage-dark/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-lighter/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Title */}
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-6 block">
              BIENVENIDO AL BLOG
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-primary mb-6 leading-tight">
              Medicina Integrativa
            </h1>
            <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Explora el equilibrio perfecto entre la sabiduría milenaria y la ciencia moderna para transformar tu bienestar
            </p>
          </div>

          {/* Featured Article Card */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-2 text-xs uppercase tracking-wider shadow-lg">
                Artículo Destacado
              </Badge>
            </div>
            
            <div className="bg-gradient-to-br from-background/95 via-background/90 to-background/85 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-12 border border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-foreground mb-5 leading-tight">
                {featuredBlog.title}
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {featuredBlog.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{featuredBlog.author}</span>
                </div>
                <span>•</span>
                <span>5 min de lectura</span>
              </div>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
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