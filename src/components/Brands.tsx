
const brands = [
  { name: "L'Oréal", logo: "/brands/loreal.png" },
  { name: "Sebastian", logo: "/brands/sebastian.png" },
  { name: "Wella", logo: "/brands/wella.png" },
  { name: "Igora", logo: "/brands/igora.png" },
  { name: "Burana", logo: "/brands/burana.png" },
  { name: "Zartte", logo: "/brands/zartte.png" },
  { name: "Yellow", logo: "/brands/yellow.png" }
];

const Brands = () => {
  return (
    <section id="marcas" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Marcas Premium</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
