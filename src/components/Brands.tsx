
const brands = [
  { name: "Loreal", image: "/brands/loreal.png" },
  { name: "Sebastian", image: "/brands/sebastian.png" },
  { name: "Wella", image: "/brands/wella.png" },
  { name: "Igora", image: "/brands/igora.png" },
  { name: "Burana", image: "/brands/burana.png" },
  { name: "Zartte", image: "/brands/zartte.png" },
  { name: "Yellow", image: "/brands/yellow.png" }
];

const Brands = () => {
  return (
    <section id="brands" className="section-padding bg-gradient-to-b from-white/80 to-[#FFDEE2]/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-primary-800 mb-12">
          Marcas Premium que Utilizamos
        </h2>
        <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">
          Trabalhamos apenas com as melhores marcas do mercado para garantir resultados excepcionais
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="glass-card p-6 text-center hover-effect">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-16 w-auto mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
