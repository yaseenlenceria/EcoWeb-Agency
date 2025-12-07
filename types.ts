import { LucideIcon } from 'lucide-react';

export type Language = 'sv' | 'en';

export interface ServiceItem {
  id: string;
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
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

export interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  color: string; // For the abstract avatar gradient
}