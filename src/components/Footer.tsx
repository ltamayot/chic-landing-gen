import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Nuestra Filosofía */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent uppercase tracking-wider">
              NUESTRA FILOSOFÍA
            </h3>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              En Saori ayudamos a nuestros pacientes a alcanzar su máximo potencial tomando su 
              salud en sus propias manos.
            </p>
            <div className="space-y-3">
              <div className="border-b border-primary-foreground/20 pb-3">
                <button className="text-primary-foreground hover:text-accent transition-colors underline">
                  NUESTRO MÉTODO
                </button>
              </div>
              <div className="border-b border-primary-foreground/20 pb-3">
                <button className="text-primary-foreground hover:text-accent transition-colors underline">
                  NUESTRO EQUIPO
                </button>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent uppercase tracking-wider">
              CONTACTO
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-accent text-sm font-medium mb-1">📞 TELÉFONO:</p>
                <p className="text-primary-foreground">+57 300 123 4567</p>
              </div>
              <div>
                <p className="text-accent text-sm font-medium mb-1">✉️ EMAIL:</p>
                <p className="text-primary-foreground">info@saori.com</p>
              </div>
              <div>
                <p className="text-accent text-sm font-medium mb-1">📍 UBICACIÓN:</p>
                <p className="text-primary-foreground">
                  Bogotá, Colombia
                  <br />
                  Calle 123 #45-67, Local 8
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent uppercase tracking-wider">
              NEWSLETTER SAORI
            </h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Suscríbete a nuestros boletines cuidadosamente seleccionados. Ingresa tu email y 
              cuéntanos qué te interesa.
            </p>
            <div className="space-y-4">
              <Select>
                <SelectTrigger className="bg-primary-light border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Estoy interesado en:*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fertility">Fertilidad</SelectItem>
                  <SelectItem value="functional">Medicina Funcional</SelectItem>
                  <SelectItem value="traditional">Medicina Tradicional China</SelectItem>
                  <SelectItem value="all">Todos los servicios</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex gap-2">
                <Input 
                  placeholder="Email*" 
                  className="bg-primary-light border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="cta" className="px-6">
                  SUSCRIBIR
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Saori. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;