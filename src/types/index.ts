
export interface SocialLink {
  icon: JSX.Element;
  url: string;
  label: string;
}

export interface NavLink {
  to: string;
  label: string;
}

export interface Brand {
  name: string;
  logo: string;
  width: number;
  height: number;
}

export interface Testimonial {
  name: string;
  image: string;
  text: string;
  rating: number;
}

export interface Service {
  name: string;
  features: string[];
}
