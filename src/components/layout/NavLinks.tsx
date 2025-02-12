
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { to: "home", label: "Início" },
  { to: "services", label: "Serviços" },
  { to: "testimonials", label: "Depoimentos" },
  { to: "brands", label: "Marcas Premium" },
];

const NavLinks: FC = () => {
  return (
    <>
      {links.map((link) => (
        <ScrollLink
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          duration={500}
          className="text-neutral-600 hover:text-primary cursor-pointer transition-colors"
        >
          {link.label}
        </ScrollLink>
      ))}
    </>
  );
};

export default NavLinks;
