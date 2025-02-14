
import { LucideIcon } from "lucide-react";

export interface Keyword {
  text: string;
  icon: LucideIcon;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  keywords: Keyword[];
}

export interface SocialLink {
  url: string;
  icon: LucideIcon;
  label: string;
}
