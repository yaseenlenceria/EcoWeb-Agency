import { 
  Search, 
  MapPin, 
  RefreshCw, 
  Palette, 
  PenTool, 
  MousePointerClick, 
  BarChart3, 
  Share2, 
  Code2 
} from 'lucide-react';
import { ServiceItem, TranslationStructure, NavItem, TeamMember } from './types';

export const TRANSLATIONS: TranslationStructure = {
  // Navigation
  nav_services: { sv: 'Vad vi gör', en: 'What We Do' },
  nav_about: { sv: 'Teamet', en: 'The Team' },
  nav_work: { sv: 'Utvalda Case', en: 'Selected Work' },
  nav_contact: { sv: 'Prata med oss', en: 'Let\'s Talk' },
  
  // Hero
  hero_title_1: { sv: 'Digital växtkraft för', en: 'Digital growth for' },
  hero_title_2: { sv: 'hållbara företag', en: 'sustainable brands' },
  hero_subtitle: { 
    sv: 'Vi är en svensk webbyrå som hjälper företag att växa utan att kompromissa med framtiden. Hållbar kod, strategisk design och äkta engagemang.', 
    en: 'We are a Swedish agency helping businesses grow without compromising the future. Sustainable code, strategic design, and genuine commitment.' 
  },
  hero_cta: { sv: 'Starta er resa', en: 'Start your journey' },
  hero_secondary: { sv: 'Utforska våra tjänster', en: 'Explore services' },
  hero_tag: { sv: 'Baserade i Stockholm', en: 'Stockholm Based' },

  // Services
  services_eyebrow: { sv: 'Vårt Hantverk', en: 'Our Craft' },
  services_title: { sv: 'Vi bygger webben bättre', en: 'Building a Better Web' },
  
  // Service Items Titles & Descs
  srv_seo_title: { sv: 'SEO & Organisk Tillväxt', en: 'SEO & Organic Growth' },
  srv_seo_desc: { sv: 'Vi hjälper er att synas där det spelar roll, helt organiskt.', en: 'We help you get seen where it matters, completely organically.' },
  
  srv_local_title: { sv: 'Lokal Närvaro', en: 'Local Presence' },
  srv_local_desc: { sv: 'Bli det självklara valet i er stad genom smart automation.', en: 'Become the obvious choice in your city through smart automation.' },
  
  srv_redesign_title: { sv: 'Hållbar Webbdesign', en: 'Sustainable Web Design' },
  srv_redesign_desc: { sv: 'Vi moderniserar er sajt med lättviktskod för lägre klimatavtryck.', en: 'Modernizing your site with lightweight code for a lower carbon footprint.' },
  
  srv_design_title: { sv: 'UX & Visuell Identitet', en: 'UX & Visual Identity' },
  srv_design_desc: { sv: 'Design som känns rätt i magen och guidar besökaren rätt.', en: 'Design that feels right and guides the visitor intuitively.' },
  
  srv_content_title: { sv: 'Storytelling', en: 'Storytelling' },
  srv_content_desc: { sv: 'Vi berättar er historia så att kunderna lyssnar.', en: 'We tell your story so customers actually listen.' },
  
  srv_ppc_title: { sv: 'Google Ads & PPC', en: 'Google Ads & PPC' },
  srv_ppc_desc: { sv: 'Effektiv annonsering som inte slösar på budgeten.', en: 'Effective advertising that doesn\'t waste budget.' },
  
  srv_campaign_title: { sv: 'Kampanjstrategi', en: 'Campaign Strategy' },
  srv_campaign_desc: { sv: 'Från idé till lansering, vi håller i trådarna.', en: 'From idea to launch, we handle the threads.' },
  
  srv_social_title: { sv: 'Sociala Medier', en: 'Social Media' },
  srv_social_desc: { sv: 'Skapa äkta relationer med er målgrupp.', en: 'Create genuine relationships with your audience.' },
  
  srv_tech_title: { sv: 'Teknisk Optimering', en: 'Technical Optimization' },
  srv_tech_desc: { sv: 'Snabbare laddtider, bättre ranking, nöjdare användare.', en: 'Faster load times, better ranking, happier users.' },

  // Team
  team_eyebrow: { sv: 'Människorna', en: 'The Humans' },
  team_title: { sv: 'Vi som gör jobbet', en: 'The People Behind It' },
  
  // Roles
  role_client_relations: { sv: 'Projektledare & Kontakt', en: 'Client Relations & PM' },
  role_developer: { sv: 'Utvecklare', en: 'Developer' },
  role_lead_dev: { sv: 'Lead Developer', en: 'Lead Developer' },
  role_social: { sv: 'Social Media Kreatör', en: 'Social Media Creator' },
  role_design: { sv: 'Webbdesigner', en: 'Web Designer' },

  // Contact
  contact_title: { sv: 'Ska vi skapa något ihop?', en: 'Shall we create something?' },
  contact_desc: { sv: 'Oavsett om ni behöver en enkel, snygg hemsida eller en komplex marknadsstrategi så finns vi här. Låt oss ta en kaffe (digitalt eller irl).', en: 'Whether you need a simple, beautiful website or a complex strategy, we are here. Let\'s have a coffee (digital or IRL).' },
  contact_name: { sv: 'Ditt namn', en: 'Your Name' },
  contact_email: { sv: 'Din e-post', en: 'Your Email' },
  contact_message: { sv: 'Berätta om ert projekt...', en: 'Tell us about your project...' },
  contact_send: { sv: 'Skicka meddelande', en: 'Send Message' },

  // Footer
  footer_rights: { sv: 'Alla rättigheter förbehållna.', en: 'All rights reserved.' }
};

export const SERVICES: ServiceItem[] = [
  { id: 'seo', titleKey: 'srv_seo_title', descKey: 'srv_seo_desc', icon: Search },
  { id: 'local', titleKey: 'srv_local_title', descKey: 'srv_local_desc', icon: MapPin },
  { id: 'redesign', titleKey: 'srv_redesign_title', descKey: 'srv_redesign_desc', icon: RefreshCw },
  { id: 'design', titleKey: 'srv_design_title', descKey: 'srv_design_desc', icon: Palette },
  { id: 'content', titleKey: 'srv_content_title', descKey: 'srv_content_desc', icon: PenTool },
  { id: 'ppc', titleKey: 'srv_ppc_title', descKey: 'srv_ppc_desc', icon: MousePointerClick },
  { id: 'campaign', titleKey: 'srv_campaign_title', descKey: 'srv_campaign_desc', icon: BarChart3 },
  { id: 'social', titleKey: 'srv_social_title', descKey: 'srv_social_desc', icon: Share2 },
  { id: 'tech', titleKey: 'srv_tech_title', descKey: 'srv_tech_desc', icon: Code2 },
];

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav_services', href: '#services' },
  { labelKey: 'nav_work', href: '#work' },
  { labelKey: 'nav_about', href: '#team' },
  { labelKey: 'nav_contact', href: '#contact' },
];

export const TEAM: TeamMember[] = [
  {
    id: 'sara',
    name: 'Sara Paouls',
    roleKey: 'role_client_relations',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    id: 'ali',
    name: 'Ali',
    roleKey: 'role_lead_dev',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'yasin',
    name: 'Yasin Lenceria',
    roleKey: 'role_developer',
    color: 'from-indigo-400 to-purple-500'
  },
  {
    id: 'lena',
    name: 'Lena',
    roleKey: 'role_developer',
    color: 'from-teal-400 to-emerald-500'
  },
  {
    id: 'john',
    name: 'John',
    roleKey: 'role_design',
    color: 'from-orange-400 to-amber-500'
  },
  {
    id: 'aisha',
    name: 'Aisha',
    roleKey: 'role_social',
    color: 'from-rose-400 to-pink-500'
  }
];