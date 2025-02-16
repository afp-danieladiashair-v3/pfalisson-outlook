
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HeroCarouselProps {
  currentImage: number;
  images: string[];
  onPrevious: () => void;
  onNext: () => void;
}

const HeroCarousel = ({ currentImage, images, onPrevious, onNext }: HeroCarouselProps) => {
  return (
    <>
      <div className="absolute inset-0 transition-opacity duration-1000">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-top transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black/40" />

      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-110 transition-transform"
        aria-label="Previous image"
      >
        <ArrowLeft size={32} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-110 transition-transform"
        aria-label="Next image"
      >
        <ArrowRight size={32} />
      </button>
    </>
  );
};

export default HeroCarousel;
