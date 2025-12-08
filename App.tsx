import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-[#020605] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      
      {/* Global Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* 1. Cinematic Noise Texture (Film Grain) for Premium Feel */}
        <div className="absolute inset-0 opacity-[0.03] z-[1]" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
             }} 
        />

        {/* 2. Technical Grid Pattern - Slightly more visible near top */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(52, 211, 153, 0.15) 1px, transparent 0)', 
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' 
          }} 
        />
        
        {/* 3. Deep Atmospheric Glows (Aurora Effect) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] right-[-5%] w-[900px] h-[900px] bg-gradient-to-b from-emerald-600/20 to-teal-900/10 rounded-full blur-[120px]" 
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.1, 0.2, 0.1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -left-[10%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[130px]" 
        />

        <motion.div 
           animate={{ 
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-emerald-800/20 rounded-full blur-[100px]" 
        />
      </div>

      <Header lang={lang} setLang={setLang} t={t} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="relative z-10 flex flex-col gap-32 pb-24">
        <Hero t={t} />
        <Services t={t} />
        <Team t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;