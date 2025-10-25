import { Phone, Mail, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  return (
    <footer className="bg-gradient-to-l from-[#DD6D5F]/60 to-[#DD6D5F]/50 text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            {/* SAORI Title */}
            <div>
              <h3 className="text-3xl font-serif font-semibold mb-4 text-white tracking-wide">
                SAORI
              </h3>
            </div>

            {/* Philosophy Section */}
            <div>
            <h4 className="text-xl font-semibold mb-4 text-white uppercase tracking-wider">
              NUESTRA FILOSOFÍA
            </h4>
            <p className="text-black mb-6 leading-relaxed text-lg">
              En Saori ayudamos a nuestros pacientes a alcanzar su máximo potencial tomando su salud en sus propias manos.
            </p>
            </div>

            {/* Links Section */}
            <div className="flex gap-8">
              <button 
                onClick={() => scrollToSection('metodo')}
                className="text-white hover:text-white/80 transition-colors text-lg font-medium"
              >
                NUESTRO MÉTODO
              </button>
              <a 
                href="/blog"
                className="text-white hover:text-white/80 transition-colors text-lg font-medium"
              >
                BLOG
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info in Box */}
          <div className="border border-primary-foreground/30 rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-6 text-white uppercase tracking-wider">
              CONTACTO
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-black text-lg">+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-black text-lg">s@saori.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white mt-1" />
                <div className="text-black text-lg">
                  <div>Bogotá, Colombia</div>
                  <div>Calle 72a  #20a-22 </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-black text-sm">
            © 2025 Saori. Todos los derechos reservados.
          </p>
          <div className="mt-2">
            <a 
              href="/terminos-condiciones"
              className="text-black hover:text-white transition-colors text-sm underline"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;