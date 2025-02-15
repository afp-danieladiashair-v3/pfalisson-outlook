
const Gallery = () => {
  const images = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];

  return (
    <section id="galeria" className="section-padding bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Nossa Galeria</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos e transformações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/danieladias_hair" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
