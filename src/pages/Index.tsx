import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import DoctorSection from "@/components/DoctorSection";
import ConsultationSection from "@/components/ConsultationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroTreatmentImg from "@/assets/hero-treatment.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="SAORI | Medicina Integrativa en Bogotá | Medicina China y Funcional"
        description="Centro de medicina integrativa en Bogotá. Combinamos Medicina Tradicional China y Medicina Funcional para tratar la causa raíz. Acupuntura, tratamientos personalizados con la Dra. Sara Tamayo."
        keywords={[
          "medicina integrativa bogotá",
          "medicina tradicional china bogotá",
          "medicina funcional bogotá",
          "acupuntura bogotá",
          "dra sara tamayo",
          "medicina holística colombia",
          "tratamiento integral salud",
          "medicina alternativa bogotá",
          "medicina china colombia"
        ]}
        url="/"
        type="website"
        schemas={{
          breadcrumb: [
            { name: "Inicio", url: "/" }
          ]
        }}
      />
      <Navigation />
      <main>
        <HeroSection 
          label=""
          titleHighlight=""
          backgroundImage={heroTreatmentImg}
        />
        <ServicesSection />
        <MethodSection />
        <DoctorSection />
        <ConsultationSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;