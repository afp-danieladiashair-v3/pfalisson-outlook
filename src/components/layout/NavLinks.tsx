
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NAV_LINKS } from "@/lib/constants";

const NavLinks: FC = () => {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <ScrollLink
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="text-neutral-600 hover:text-primary cursor-pointer transition-colors"
          activeClass="text-primary"
        >
          {link.label}
        </ScrollLink>
      ))}
    </>
  );
};

export default NavLinks;
