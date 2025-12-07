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
    <div className="min-h-screen bg-[#040f0c] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 relative">
      
      {/* Global Background Ambience - Transferred from Hero for full project consistency */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Moving Organic Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-emerald-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-800/20 rounded-full blur-[100px]" 
        />
      </div>

      <Header lang={lang} setLang={setLang} t={t} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="relative z-10 flex flex-col gap-24 md:gap-32 pb-24">
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