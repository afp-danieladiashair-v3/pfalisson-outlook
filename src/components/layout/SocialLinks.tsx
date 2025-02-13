
import { FC } from "react";
import { InstagramIcon, TikTokIcon, YoutubeIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { SOCIAL_LINKS, WHATSAPP_CONFIG } from "@/lib/constants";

const socialLinks = [
  {
    icon: InstagramIcon,
    url: SOCIAL_LINKS.instagram,
    label: "Instagram",
  },
  {
    icon: TikTokIcon,
    url: SOCIAL_LINKS.tiktok,
    label: "TikTok",
  },
  {
    icon: YoutubeIcon,
    url: SOCIAL_LINKS.youtube,
    label: "YouTube",
  },
  {
    icon: WhatsAppIcon,
    url: WHATSAPP_CONFIG.getUrl(),
    label: "WhatsApp",
  },
];

const SocialLinks: FC = () => {
  return (
    <>
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-8 h-8"
            aria-label={link.label}
          >
            <Icon className="w-5 h-5 text-neutral-600 group-hover:text-primary transition-colors" />
          </a>
        );
      })}
    </>
  );
};

export default SocialLinks;
