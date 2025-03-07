
import { FC } from "react";

const socialLinks = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    url: "https://www.instagram.com/danieladias_hair",
    label: "Instagram",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12a3 3 0 1 1 3 3V4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8a4 4 0 0 1 4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    url: "https://www.tiktok.com/@danieladiashair",
    label: "TikTok",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 313.6"
        className="w-5 h-5"
        fill="currentColor"
      >
        <g transform="translate(-32 -99.2)">
          <g strokeWidth="2.404" transform="translate(314.594 428.651)scale(.41603)">
            <path d="M -248.52492,-576.52087 32.650165,-414.99475 -248.52492,-253.4686 Z" />
            <path d="m 373.64966,-675.23131 c -11.96482,-44.86836 -47.85953,-80.76301 -92.7279,-95.7192 -83.75426,-20.93853 -421.76258,-20.93853 -421.76258,-20.93853 0,0 -338.00826,0 -421.76265,20.93853 -44.8683,14.95619 -80.76302,50.85084 -92.7279,95.7192 -23.92983,83.75432 -23.92983,260.23656 -23.92983,260.23656 0,0 0,173.49097 23.92983,260.2365 11.96488,44.86836 47.8596,80.763051 92.7279,92.727916 83.75439,23.929827 421.76265,23.929827 421.76265,23.929827 0,0 338.00832,0 421.76258,-23.929827 44.86837,-11.964865 80.76308,-47.859556 92.7279,-92.727916 23.92984,-86.74553 23.92984,-260.2365 23.92984,-260.2365 0,0 0,-176.48224 -23.92984,-260.23656 z m -622.17457,421.76266 c 0,-323.05221 0,-323.05221 0,-323.05221 281.175075,161.52611 281.175075,161.52611 281.175075,161.52611 z" />
          </g>
        </g>
      </svg>
    ),
    url: "https://www.youtube.com/@DanielaDiasHair",
    label: "YouTube",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 61.94 61.94"
        className="w-5 h-5"
      >
        <rect width="61.94" height="61.94" fill="currentColor" rx="16.96" />
        <path
          fill="white"
          d="M48.31,21a18.26,18.26,0,0,0-13.23-9.41A17.9,17.9,0,0,0,24.5,12.9a18.42,18.42,0,0,0-8.74,7.94,18.6,18.6,0,0,0,0,18.21.8.8,0,0,1,.07.69q-.67,2.34-1.33,4.7l-1.17,4.19.36-.08c2.92-.75,5.84-1.49,8.76-2.25a1,1,0,0,1,.83.09A18.6,18.6,0,0,0,43.9,44.23a18.22,18.22,0,0,0,6.66-13.12A17.6,17.6,0,0,0,48.31,21ZM36.55,44.71A15.18,15.18,0,0,1,23.8,43.05a1.08,1.08,0,0,0-.92-.13l-4.43,1.15c-.61.15-.61.15-.43-.47.4-1.44.81-2.87,1.22-4.3a.84.84,0,0,0-.11-.77,15.46,15.46,0,0,1,2.18-19.75,15.22,15.22,0,0,1,8.76-4.19c.64-.08,1.28-.1,1.68-.13a15.47,15.47,0,0,1,4.8,30.25Z"
        />
        <path
          fill="white"
          d="M40.91,33.88c-1.22-.53-2.43-1.1-3.63-1.67a.81.81,0,0,0-1.16.3c-.41.58-.87,1.13-1.3,1.69-.2.25-.4.42-.76.28a12.54,12.54,0,0,1-6.58-5.55A.72.72,0,0,1,27.6,28c.39-.44.76-.9,1.16-1.33a1,1,0,0,0,.2-1.14c-.54-1.22-1.05-2.45-1.58-3.68-.08-.19-.17-.43-.38-.47a2.72,2.72,0,0,0-2.44.18,4.69,4.69,0,0,0-2,3.63,7,7,0,0,0,.68,3.34,19.31,19.31,0,0,0,12,10.1c2.62.78,5.64-.37,6.13-3.65A.86.86,0,0,0,40.91,33.88Z"
        />
      </svg>
    ),
    url: `https://wa.me/5534999659886?text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`,
    label: "WhatsApp",
  },
];

const SocialLinks: FC = () => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label={link.label}
        >
          <div className="text-neutral-600 group-hover:text-primary transition-colors">
            {link.icon}
          </div>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
