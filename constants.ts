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
import { ServiceItem, TranslationStructure, Testimonial, NavItem, Project, TeamMember } from './types';

export const TRANSLATIONS: TranslationStructure = {
  // Navigation
  nav_services: { sv: 'Tjänster', en: 'Services' },
  nav_about: { sv: 'Om Oss', en: 'About' },
  nav_work: { sv: 'Case', en: 'Work' },
  nav_contact: { sv: 'Kontakt', en: 'Contact' },
  
  // Hero
  hero_title_1: { sv: 'Vi skapar din', en: 'We create your' },
  hero_title_2: { sv: 'digitala framtid', en: 'digital future' },
  hero_subtitle: { sv: 'EcoWebAgency kombinerar teknisk expertis med nordisk design för att få ditt företag att växa hållbart.', en: 'EcoWebAgency combines technical expertise with Nordic design to help your business grow sustainably.' },
  hero_cta: { sv: 'Starta ditt projekt', en: 'Start your project' },
  hero_secondary: { sv: 'Se våra tjänster', en: 'View our services' },

  // Services
  services_eyebrow: { sv: 'Vår Expertis', en: 'Our Expertise' },
  services_title: { sv: 'Helhetslösningar för webben', en: 'Comprehensive Web Solutions' },
  
  // Service Items Titles & Descs
  srv_seo_title: { sv: 'Sökmotoroptimering (SEO)', en: 'SEO' },
  srv_seo_desc: { sv: 'Klättra i sökresultaten och driv organisk trafik.', en: 'Climb search results and drive organic traffic.' },
  
  srv_local_title: { sv: 'Lokal SEO & Automation', en: 'Local SEO Automation' },
  srv_local_desc: { sv: 'Dominera din lokala marknad automatiskt.', en: 'Dominate your local market automatically.' },
  
  srv_redesign_title: { sv: 'Omdesign av Webbplats', en: 'Website Redesign' },
  srv_redesign_desc: { sv: 'Modernisera din närvaro utan att tappa rankning.', en: 'Modernize your presence without losing rank.' },
  
  srv_design_title: { sv: 'Webbdesign', en: 'Website Design' },
  srv_design_desc: { sv: 'Skräddarsydd, vacker och funktionell design.', en: 'Tailored, beautiful, and functional design.' },
  
  srv_content_title: { sv: 'Content Marketing', en: 'Content Marketing' },
  srv_content_desc: { sv: 'Strategiskt innehåll som engagerar och konverterar.', en: 'Strategic content that engages and converts.' },
  
  srv_ppc_title: { sv: 'PPC & Annonsering', en: 'PPC' },
  srv_ppc_desc: { sv: 'Maximal ROI på Google och sociala medier.', en: 'Maximum ROI on Google and social media.' },
  
  srv_campaign_title: { sv: 'Kampanjhantering', en: 'Campaign Management' },
  srv_campaign_desc: { sv: 'Datadrivna kampanjer från start till mål.', en: 'Data-driven campaigns from start to finish.' },
  
  srv_social_title: { sv: 'Sociala Medier', en: 'Social Media Marketing' },
  srv_social_desc: { sv: 'Bygg ditt varumärke där dina kunder finns.', en: 'Build your brand where your customers are.' },
  
  srv_tech_title: { sv: 'Teknisk SEO', en: 'Technical SEO' },
  srv_tech_desc: { sv: 'Optimera webbplatsens struktur och prestanda.', en: 'Optimize site structure and performance.' },

  // Projects
  projects_eyebrow: { sv: 'Utvalda Case', en: 'Selected Work' },
  projects_title: { sv: 'Resultat vi är stolta över', en: 'Results We Are Proud Of' },
  project_visit: { sv: 'Besök Webbplats', en: 'Visit Website' },
  
  // Categories (Projects)
  cat_ecommerce: { sv: 'E-handel & Sömn', en: 'E-commerce & Sleep' },
  cat_retail: { sv: 'Hållbar Detaljhandel', en: 'Sustainable Retail' },
  cat_eco: { sv: 'Miljömedvetna Val', en: 'Eco-conscious Choices' },
  cat_lifestyle: { sv: 'Nordisk Livsstil', en: 'Nordic Lifestyle' },
  cat_marketplace: { sv: 'Grön Marknadsplats', en: 'Green Marketplace' },

  // Stats/Trust
  stats_success: { sv: 'Vi har framgångsrika...', en: 'We have successful...' },
  stats_clients: { sv: 'Nöjda Kunder', en: 'Happy Clients' },
  stats_projects: { sv: 'Genomförda Projekt', en: 'Completed Projects' },
  
  // Team
  team_eyebrow: { sv: 'Vårt Team', en: 'Our Team' },
  team_title: { sv: 'Människorna bakom koden', en: 'The People Behind The Code' },
  
  // Roles
  role_client_relations: { sv: 'Kundansvarig & Projektledning', en: 'Client Relations & PM' },
  role_developer: { sv: 'Fullstack Utvecklare', en: 'Full Stack Developer' },
  role_lead_dev: { sv: 'Lead Architect & Kod', en: 'Lead Architect & Deep Dive' },
  role_social: { sv: 'Social Media Manager', en: 'Social Media Manager' },
  role_design: { sv: 'Webbdesign & UX', en: 'Web Design & UX' },

  // Contact
  contact_title: { sv: 'Redo att växa?', en: 'Ready to grow?' },
  contact_desc: { sv: 'Låt oss diskutera hur vi kan hjälpa dig att nå dina mål. Enkel, snygg hemsida eller avancerad marknadsföring.', en: 'Let’s discuss how we can help you reach your goals. Simple, good-looking websites or advanced marketing.' },
  contact_name: { sv: 'Namn', en: 'Name' },
  contact_email: { sv: 'E-post', en: 'Email' },
  contact_message: { sv: 'Meddelande', en: 'Message' },
  contact_send: { sv: 'Skicka förfrågan', en: 'Send Inquiry' },

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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Erik Johansson",
    role: "CEO",
    company: "Nordic Retail AB",
    quoteKey: "EcoWebAgency transformerade vår digitala närvaro helt. Vår lokala SEO har ökat trafiken med 300%.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Anna Berg",
    role: "Marketing Director",
    company: "GreenTech Solutions",
    quoteKey: "Otroligt snygg design och teknisk kompetens. De förstår verkligen både kod och estetik.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Lars Nilsson",
    role: "Founder",
    company: "StartUp Sthlm",
    quoteKey: "Enkel process, fantastiskt resultat. Vår nya hemsida är snabb, modern och konverterar.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'mattress-store',
    title: 'The Mattress Store',
    categoryKey: 'cat_ecommerce',
    url: 'https://themattressstore.ie/',
    image: 'https://picsum.photos/seed/bed/800/600'
  },
  {
    id: 'daylesford',
    title: 'Daylesford',
    categoryKey: 'cat_retail',
    url: 'https://www.daylesford.com/shop/homeware/cleaning',
    image: 'https://picsum.photos/seed/clean/800/600'
  },
  {
    id: 'green-turtle',
    title: 'The Green Turtle',
    categoryKey: 'cat_eco',
    url: 'https://www.thegreenturtle.co.uk/',
    image: 'https://picsum.photos/seed/turtle/800/600'
  },
  {
    id: 'regn',
    title: 'REGN',
    categoryKey: 'cat_lifestyle',
    url: 'https://www.regn.co.uk/',
    image: 'https://picsum.photos/seed/rain/800/600'
  },
  {
    id: 'earth-hero',
    title: 'Earth Hero',
    categoryKey: 'cat_marketplace',
    url: 'https://earthhero.com/?srsltid=AfmBOorV4IMe2_KosWlCLH6SBSD05rKGwEghQ1B6e8ZIUUYZsPsXsVm5',
    image: 'https://picsum.photos/seed/earth/800/600'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'sara',
    name: 'Sara',
    roleKey: 'role_client_relations',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'ali',
    name: 'Ali',
    roleKey: 'role_lead_dev',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'yasin',
    name: 'Yasin Lenceria',
    roleKey: 'role_developer',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'lena',
    name: 'Lena',
    roleKey: 'role_developer',
    color: 'from-teal-500 to-emerald-500'
  },
  {
    id: 'john',
    name: 'John',
    roleKey: 'role_design',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'aisha',
    name: 'Aisha',
    roleKey: 'role_social',
    color: 'from-fuchsia-500 to-pink-500'
  }
];