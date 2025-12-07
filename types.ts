import { LucideIcon } from 'lucide-react';

export type Language = 'sv' | 'en';

export interface ServiceItem {
  id: string;
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quoteKey: string;
  image: string;
}

export interface NavItem {
  labelKey: string;
  href: string;
}

export interface TranslationStructure {
  [key: string]: {
    sv: string;
    en: string;
  };
}

export interface Project {
  id: string;
  title: string;
  categoryKey: string;
  url: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  color: string; // For the abstract avatar gradient
}