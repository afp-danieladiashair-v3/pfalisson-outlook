
interface HeroIndicatorsProps {
  currentImage: number;
  totalImages: number;
  onSelect: (index: number) => void;
}

const HeroIndicators = ({ currentImage, totalImages, onSelect }: HeroIndicatorsProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {Array.from({ length: totalImages }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            currentImage === index ? 'bg-white' : 'bg-white/50'
          }`}
          onClick={() => onSelect(index)}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroIndicators;
