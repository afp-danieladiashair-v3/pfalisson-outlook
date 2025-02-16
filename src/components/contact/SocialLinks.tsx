
import { Instagram, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/social';

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a 
        href={SOCIAL_LINKS.INSTAGRAM}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-secondary hover:text-primary transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a 
        href={SOCIAL_LINKS.TIKTOK}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-secondary hover:text-primary transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      </a>
      <a 
        href={SOCIAL_LINKS.YOUTUBE}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-secondary hover:text-primary transition-colors"
      >
        <Youtube className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
