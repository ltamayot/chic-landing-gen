const ServicesSection = () => {
  const services = [
    {
      title: "MEDICINA\nTRADICIONAL\nCHINA",
    },
    {
      title: "MEDICINA\nFUNCIONAL",
    },
    {
      title: "COMPARATIVA DE\nMÉTODOS",
    },
    {
      title: "CUARTA CAJA",
    },
  ];

  return (
    <section className="py-20 bg-sage">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-foreground">
          Nuestros Servicios
        </h2>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card-gray rounded-3xl p-8 h-80 flex items-center justify-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
            >
              <h3 className="text-card-gray-foreground text-lg font-semibold leading-relaxed whitespace-pre-line group-hover:scale-105 transition-transform duration-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;