
declare module 'react-scroll' {
  import { ComponentType, ReactElement, ReactNode } from 'react';

  interface ScrollLinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    spyThrottle?: number;
    className?: string;
    activeClass?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  interface ElementProps {
    name: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  interface ScrollEvents {
    register(name: string, callback: () => void): void;
    remove(name: string): void;
  }

  interface ScrollSpy {
    update(): void;
  }

  export const Link: ComponentType<ScrollLinkProps>;
  export const Element: ComponentType<ElementProps>;
  export const Events: {
    scrollEvent: ScrollEvents;
  };
  export const scrollSpy: ScrollSpy;
  export const scroller: {
    scrollTo(name: string, props?: Omit<ScrollLinkProps, "to">): void;
  };
}
