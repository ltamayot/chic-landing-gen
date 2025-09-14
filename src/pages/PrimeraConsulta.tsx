import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const IntakeSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                THE INTAKE
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                We get to know you inside and out
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              During your initial consultation, your practitioner will go over your health 
              history in depth. Your initial consultation can be done virtually or in-clinic. We 
              encourage you to share any labs or any blood work that may be relevant 
              during your initial consultation.
            </p>
            <Button variant="primary" size="lg">
              SCHEDULE YOUR FIRST VISIT
            </Button>
          </div>
          
          {/* Right image placeholder */}
          <div className="bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-center text-accent-foreground/60">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <p className="text-sm">Patient consultation image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TreatmentSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
          The Treatment
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
          We create a customized treatment for you, using a range of Chinese medicinal 
          therapies. Acupuncture and other modalities including moxa, gua sha, cupping and massage 
          may be used. Herbs may also be paired with acupuncture to enhance your treatment.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Acupuncture */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-foreground/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-xs text-foreground">🪡</span>
              </div>
            </div>
            <h3 className="text-xl font-serif text-foreground">ACUPUNCTURE</h3>
          </div>
          
          {/* Chinese Herbs */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-foreground/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-xs text-foreground">🌿</span>
              </div>
            </div>
            <h3 className="text-xl font-serif text-foreground">CHINESE<br />HERBS</h3>
          </div>
          
          {/* Bodywork */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-foreground/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-xs text-foreground">🤲</span>
              </div>
            </div>
            <h3 className="text-xl font-serif text-foreground">BODYWORK</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right image placeholder */}
          <div className="order-2 lg:order-1 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-center text-accent-foreground/60">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <p className="text-sm">Treatment plan image</p>
            </div>
          </div>
          
          {/* Left content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                THE PLAN
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                You will leave your first visit with a clear plan forward
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We create your treatment plan to maximize both effectiveness and time. 
              After your first treatment, you will have a clear idea of how many sessions 
              you will have at Yinova, a customized herbal formula (if appropriate), 
              nutritional and lifestyle advice and a realistic assessment of how we can help 
              you.
            </p>
            <Button variant="primary" size="lg">
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
      title: "INITIAL CONSULTATION",
      description: "Our in depth 40 minute consultation is where we get to know you."
    },
    {
      title: "SAFETY",
      description: "We take the utmost care when sourcing herbs and providing acupuncture."
    },
    {
      title: "PRICING & INSURANCE",
      description: "Prices for acupuncture and bodywork range between $85-$250."
    },
    {
      title: "PRACTITIONERS",
      description: "All of our team members are board certified acupuncturists & herbalists."
    },
    {
      title: "ONLINE RESOURCES",
      description: "We have a curated set of blog posts and scientific studies to read at home."
    },
    {
      title: "HOW WE WORK",
      description: "We provide integrative care with meaningful results."
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground text-center mb-16">
          Good to know before you go
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <h3 className="text-lg font-serif text-foreground">
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
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground text-center mb-16">
          Services at Yinova
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Acupuncture */}
          <div className="text-center space-y-4 p-6">
            <h3 className="text-xl font-serif text-foreground mb-4">
              ACUPUNCTURE
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Healing & balancing, acupuncture offers a prompt to your body's intelligence to bring you back into 
              homeostasis. Learn more about our approach to acupuncture{" "}
              <span className="text-accent underline cursor-pointer">here</span>.
            </p>
          </div>
          
          {/* Chinese Herbs */}
          <div className="text-center space-y-4 p-6 border-l border-r border-border">
            <h3 className="text-xl font-serif text-foreground mb-4">
              CHINESE HERBS
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nourishing & harmonizing, each custom herbal formula is uniquely tailored to address your internal landscape. 
              Learn more about or herbs{" "}
              <span className="text-accent underline cursor-pointer">here</span>.
            </p>
          </div>
          
          {/* Bodywork */}
          <div className="text-center space-y-4 p-6">
            <h3 className="text-xl font-serif text-foreground mb-4">
              BODYWORK
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Restoring & Soothing, our therapeutic style of bodywork can be used to treat everything from injuries to infertility. 
              Learn more about our bodywork program{" "}
              <span className="text-accent underline cursor-pointer">here</span>.
            </p>
          </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default PrimeraConsulta;