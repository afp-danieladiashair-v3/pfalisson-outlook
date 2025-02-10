
import { motion } from "framer-motion";

const brands = [
  {
    name: "L'Oréal",
    logo: "/images/brands/loreal.png",
  },
  {
    name: "Sebastian",
    logo: "/images/brands/sebastian.png",
  },
  {
    name: "Wella",
    logo: "/images/brands/wella.png",
  },
  {
    name: "Igora",
    logo: "/images/brands/igora.png",
  },
  {
    name: "Burana",
    logo: "/images/brands/burana.png",
  },
  {
    name: "Zartte",
    logo: "/images/brands/zartte.png",
  },
  {
    name: "Yellow",
    logo: "/images/brands/yellow.png",
  },
];

const Brands = () => {
  return (
    <div className="py-20 bg-neutral-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Marcas Premium que Utilizamos
          </h2>
          <p className="text-lg text-neutral-600">
            Trabalhamos apenas com as melhores marcas do mercado para garantir resultados excepcionais
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-[4/3]"
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="max-w-full max-h-full object-contain w-24 md:w-32"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

