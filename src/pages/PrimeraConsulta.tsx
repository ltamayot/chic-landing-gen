import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Stethoscope, BookOpen, Activity } from "lucide-react";

const IntakeSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
                THE INTAKE
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                We get to know you inside and out
              </h2>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                During your initial consultation, your practitioner will go over your health 
                history in depth. Your initial consultation can be done virtually or in-clinic. We 
                encourage you to share any labs or any blood work that may be relevant 
                during your initial consultation.
              </p>
            </div>
            <Button variant="primary" size="lg" className="hover:scale-105 transform transition-all duration-300">
              SCHEDULE YOUR FIRST VISIT
            </Button>
          </div>
          
          {/* Right image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl p-12 shadow-lg">
              <div className="bg-gradient-to-br from-accent/20 to-accent/40 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-accent-foreground/60">
                  <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart className="w-10 h-10 text-accent" />
                  </div>
                  <p className="text-sm text-accent/70 font-medium">Patient consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TreatmentSection = () => {
  const treatments = [
    {
      icon: Activity,
      title: "ACUPUNCTURE",
      description: "Traditional healing technique using fine needles to restore energy balance"
    },
    {
      icon: Stethoscope,
      title: "CHINESE HERBS",
      description: "Custom herbal formulas tailored to your specific health needs"
    },
    {
      icon: Heart,
      title: "BODYWORK",
      description: "Therapeutic massage and manual healing techniques"
    }
  ];

  return (
    <section className="py-20 px-6 bg-sage">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            The Treatment
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We create a customized treatment for you, using a range of Chinese medicinal 
            therapies. Acupuncture and other modalities including moxa, gua sha, cupping and massage 
            may be used. Herbs may also be paired with acupuncture to enhance your treatment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {treatments.map((treatment, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-background/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <treatment.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">{treatment.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlanSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Right image placeholder - order changed for alternating layout */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl p-12 shadow-lg">
              <div className="bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-primary-foreground/60">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-sm text-primary/70 font-medium">Treatment plan</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Left content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
                THE PLAN
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                You will leave your first visit with a clear plan forward
              </h2>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We create your treatment plan to maximize both effectiveness and time. 
                After your first treatment, you will have a clear idea of how many sessions 
                you will have at Yinova, a customized herbal formula (if appropriate), 
                nutritional and lifestyle advice and a realistic assessment of how we can help 
                you.
              </p>
            </div>
            <Button variant="primary" size="lg" className="hover:scale-105 transform transition-all duration-300">
              SCHEDULE YOUR FIRST VISIT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoodToKnowSection = () => {
  const items = [
    {
      icon: Users,
      title: "INITIAL CONSULTATION",
      description: "Our in depth 40 minute consultation is where we get to know you."
    },
    {
      icon: Shield,
      title: "SAFETY",
      description: "We take the utmost care when sourcing herbs and providing acupuncture."
    },
    {
      icon: Stethoscope,
      title: "PRACTITIONERS",
      description: "All of our team members are board certified acupuncturists & herbalists."
    },
    {
      icon: BookOpen,
      title: "ONLINE RESOURCES",
      description: "We have a curated set of blog posts and scientific studies to read at home."
    },
    {
      icon: Activity,
      title: "HOW WE WORK",
      description: "We provide integrative care with meaningful results."
    }
  ];

  return (
    <section className="py-20 px-6 bg-sage">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Good to know before you go
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know to feel confident about your first visit
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-background/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "ACUPUNCTURE",
      description: "Healing & balancing, acupuncture offers a prompt to your body's intelligence to bring you back into homeostasis. Learn more about our approach to acupuncture",
      link: "here"
    },
    {
      title: "CHINESE HERBS",
      description: "Nourishing & harmonizing, each custom herbal formula is uniquely tailored to address your internal landscape. Learn more about our herbs",
      link: "here"
    },
    {
      title: "BODYWORK",
      description: "Restoring & Soothing, our therapeutic style of bodywork can be used to treat everything from injuries to infertility. Learn more about our bodywork program",
      link: "here"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Services at Yinova
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive healing modalities designed to restore balance and optimize your health
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-sage/30 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-serif text-foreground mb-6">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}{" "}
                <span className="text-accent underline cursor-pointer hover:text-accent/80 transition-colors">
                  {service.link}
                </span>.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrimeraConsulta = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <IntakeSection />
        <TreatmentSection />
        <PlanSection />
        <GoodToKnowSection />
        <ServicesSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PrimeraConsulta;