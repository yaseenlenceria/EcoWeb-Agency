import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Layout, Code2, Globe, Leaf } from 'lucide-react';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 overflow-hidden">
      
      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start relative">
          
          {/* Spotlight Glow behind text */}
          <div className="absolute -left-[20%] top-[-20%] w-[140%] h-[140%] bg-radial-gradient from-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-950/40 text-emerald-200 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t('hero_tag')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-tight leading-[0.9] text-white mb-8 drop-shadow-2xl"
          >
            {t('hero_title_1')} <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 blur-2xl opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
                {t('hero_title_2')}
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-xl mb-12 leading-relaxed font-light border-l-2 border-emerald-500/30 pl-6"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <a 
              href="#contact"
              className="group relative px-9 py-5 bg-white text-[#020806] font-bold text-lg rounded-full transition-all hover:bg-emerald-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span className="flex items-center gap-3">
                {t('hero_cta')}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            
            <a 
              href="#services"
              className="px-9 py-5 text-white font-medium hover:text-emerald-300 transition-all flex items-center gap-3 rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-950/30 backdrop-blur-sm"
            >
              {t('hero_secondary')}
            </a>
          </motion.div>
        </div>

        {/* RIGHT CONTENT - THE DIGITAL BIOSPHERE */}
        <div className="relative hidden lg:block h-[800px] w-full perspective-[2000px]">
          
          {/* Central Planet / Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            
            {/* Outer Rotating Ring */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="w-[500px] h-[500px] border border-dashed border-emerald-500/20 rounded-full flex items-center justify-center relative"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-500/50 rounded-full" />
            </motion.div>
            
            {/* Inner Rotating Ring (Counter) */}
            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/5 rounded-full"
            />

            {/* Core Sphere */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-br from-emerald-900/80 to-black rounded-full backdrop-blur-md border border-emerald-500/20 shadow-[0_0_60px_rgba(16,185,129,0.15)] flex items-center justify-center overflow-hidden"
            >
               {/* Internal "Living" Gradient */}
               <motion.div 
                 animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                 transition={{ duration: 6, repeat: Infinity }}
                 className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-teal-400/10"
               />
               <Leaf size={64} className="text-emerald-500/50 relative z-10" />
            </motion.div>
          </div>

          {/* Floating Orbiting Cards - Positioned absolutely around the center */}

          {/* Card 1: Growth - Top Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ duration: 1, delay: 0.5, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute top-[20%] right-[5%] z-20"
          >
             <div className="p-4 bg-[#0d1f1a]/80 backdrop-blur-xl border border-emerald-500/20 rounded-xl shadow-2xl w-48 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                    <TrendingUp size={16} />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">+300%</span>
                </div>
                <div className="text-sm font-bold text-slate-200">Organic Growth</div>
             </div>
          </motion.div>

          {/* Card 2: UX - Left Center */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{ duration: 1, delay: 0.7, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
            className="absolute top-[45%] left-[-5%] z-20"
          >
             <div className="p-4 bg-[#0d1f1a]/80 backdrop-blur-xl border border-teal-500/20 rounded-xl shadow-2xl w-52 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Layout size={16} />
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-400 w-[98%]" />
                  </div>
                </div>
                <div className="flex justify-between items-end">
                   <div className="text-sm font-bold text-slate-200">UX Score</div>
                   <div className="text-lg font-bold text-teal-400">98.5</div>
                </div>
             </div>
          </motion.div>

          {/* Card 3: Tech SEO - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ duration: 1, delay: 0.9, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
            className="absolute bottom-[20%] right-[15%] z-20"
          >
             <div className="p-4 bg-[#0d1f1a]/80 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-2xl w-56 hover:scale-105 transition-transform duration-300 flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-xs text-blue-300 font-mono mb-1">Status: Optimized</div>
                  <div className="text-sm font-bold text-slate-200">Technical SEO</div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;