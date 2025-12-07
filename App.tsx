import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import SuccessSection from './components/SuccessSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Default to Swedish ('sv')
  const [lang, setLang] = useState<Language>('sv');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to get text based on current language
  const t = (key: string): string => {
    return TRANSLATIONS[key]?.[lang] || key;
  };

  // Smooth scroll handling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#040f0c] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-900/10 rounded-full blur-[100px]" />
      </div>

      <Header lang={lang} setLang={setLang} t={t} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="relative z-10 flex flex-col gap-24 md:gap-32 pb-24">
        <Hero t={t} />
        <Services t={t} />
        <Projects t={t} />
        <SuccessSection t={t} lang={lang} />
        <Team t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;