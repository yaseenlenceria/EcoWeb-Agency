import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, NavItem } from '../types';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'sv' ? 'en' : 'sv');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#040f0c]/80 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          EcoWeb<span className="text-emerald-400">Agency</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium text-slate-300 hover:text-white hover:tracking-wide transition-all duration-300"
            >
              {t(item.labelKey)}
            </a>
          ))}
          
          <div className="h-4 w-px bg-white/20" />
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Globe size={14} />
            {lang === 'sv' ? 'SV' : 'EN'}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#040f0c] border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-lg font-display text-slate-200"
              >
                {t(item.labelKey)}
              </a>
            ))}
            <div className="h-px bg-white/10 w-full" />
            <button 
              onClick={toggleLang}
              className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-emerald-400"
            >
              <Globe size={16} />
              {lang === 'sv' ? 'Byt till Engelska' : 'Switch to Swedish'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;