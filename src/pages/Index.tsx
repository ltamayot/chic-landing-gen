import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import DoctorSection from "@/components/DoctorSection";
import ConsultationSection from "@/components/ConsultationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import heroLandingImg from "@/assets/hero-landing.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection 
          label=""
          titleHighlight=""
          backgroundImage={heroLandingImg}
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