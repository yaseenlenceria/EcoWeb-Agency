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
    <div className="min-h-screen bg-[#020403] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      
      {/* --- GLOBAL CINEMATIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none bg-[#020403]">
        
        {/* 1. Film Grain (Noise) for Texture */}
        <div className="absolute inset-0 opacity-[0.04] z-[2]" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
             }} 
        />

        {/* 2. The Living Aurora - Slow Moving Gradient Mesh */}
        <div className="absolute inset-0 z-[0] opacity-60">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-emerald-900/40 via-emerald-800/20 to-transparent blur-[120px]" 
            />
            
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, -50, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-teal-900/40 via-blue-900/20 to-transparent blur-[100px]" 
            />

             <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                y: [0, 50, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
              className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-emerald-950/30 to-teal-950/30 blur-[150px]" 
            />
        </div>

        {/* 3. Cyber-Nature Grid Overlay */}
        <div 
          className="absolute inset-0 z-[1] opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)' 
          }} 
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