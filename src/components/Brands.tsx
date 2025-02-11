
import { motion } from "framer-motion";

const brands = [
  {
    name: "L'Oréal",
    logo: "/images/brands/loreal.png",
    width: 120,
    height: 60,
  },
  {
    name: "Sebastian",
    logo: "/images/brands/sebastian.png",
    width: 120,
    height: 60,
  },
  {
    name: "Wella",
    logo: "/images/brands/wella.png",
    width: 120,
    height: 60,
  },
  {
    name: "Igora",
    logo: "/images/brands/igora.png",
    width: 120,
    height: 60,
  },
  {
    name: "Burana",
    logo: "/images/brands/burana.png",
    width: 120,
    height: 60,
  },
  {
    name: "Zartte",
    logo: "/images/brands/zartte.png",
    width: 120,
    height: 60,
  },
  {
    name: "Yellow",
    logo: "/images/brands/yellow.png",
    width: 120,
    height: 60,
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
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                width={brand.width}
                height={brand.height}
                loading="lazy"
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
