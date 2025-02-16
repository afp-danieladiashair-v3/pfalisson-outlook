
interface LogoProps {
  isAtTop: boolean;
  isScrolled: boolean;
}

const Logo = ({ isAtTop, isScrolled }: LogoProps) => {
  return (
    <div className="flex-shrink-0">
      <img
        src="/logo.png"
        alt="Daniela Dias Hair Logo"
        className={`h-8 w-auto transition-all duration-300 ${
          isAtTop && !isScrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      />
    </div>
  );
};

export default Logo;
