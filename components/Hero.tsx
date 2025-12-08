import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Layout, Code2, Leaf } from 'lucide-react';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
      
      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT (Text) - Spans 7 cols */}
        <div className="lg:col-span-7 flex flex-col items-start relative z-20">
          
          {/* Spotlight Glow behind text */}
          <div className="absolute -left-[20%] top-[-20%] w-[100%] h-[100%] bg-emerald-500/10 blur-[100px] pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-200 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]"
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
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 blur-2xl opacity-20" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
                {t('hero_title_2')}
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-xl mb-12 leading-relaxed font-light pl-2"
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

        {/* RIGHT CONTENT - THE DIGITAL BIOSPHERE - Spans 5 cols */}
        {/* Strictly confined to the right side to avoid overlap */}
        <div className="hidden lg:flex lg:col-span-5 relative h-[600px] items-center justify-center perspective-[2000px] z-10">
          
          {/* Central Planet / Core Container */}
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            
            {/* Outer Rotating Ring */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border border-dashed border-emerald-500/10 rounded-full"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
            </motion.div>
            
            {/* Inner Rotating Ring (Counter) */}
            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute w-[350px] h-[350px] border border-white/5 rounded-full"
            />

            {/* Core Sphere */}
            <motion.div 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[240px] h-[240px] bg-gradient-to-br from-emerald-950 to-black rounded-full backdrop-blur-md border border-emerald-500/30 shadow-[0_0_80px_rgba(16,185,129,0.2)] flex items-center justify-center overflow-hidden z-10"
            >
               {/* Internal "Living" Gradient */}
               <motion.div 
                 animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
                 transition={{ duration: 6, repeat: Infinity }}
                 className="absolute inset-0 bg-gradient-to-tr from-emerald-600/40 to-teal-400/20"
               />
               <Leaf size={64} className="text-emerald-400 relative z-10 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
            </motion.div>

            {/* --- FLOATING CARDS --- */}
            {/* All positioned strictly relative to this container (Right Column) */}

            {/* Card 1: Growth - Top Right */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ duration: 1, delay: 0.5, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute top-[0%] right-[0%] z-20"
            >
              <div className="p-3 bg-[#020605]/80 backdrop-blur-xl border border-emerald-500/20 rounded-xl shadow-2xl w-40 hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-1.5 bg-emerald-500/20 rounded-lg text-emerald-400">
                      <TrendingUp size={14} />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+300%</span>
                  </div>
                  <div className="text-xs font-bold text-slate-200">Organic Growth</div>
              </div>
            </motion.div>

            {/* Card 2: UX - Bottom Left (Relative to Sphere) */}
            {/* Moved inward to avoid hitting left column text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{ duration: 1, delay: 0.7, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
              className="absolute bottom-[10%] left-[0%] z-20"
            >
              <div className="p-3 bg-[#020605]/80 backdrop-blur-xl border border-teal-500/20 rounded-xl shadow-2xl w-44 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-teal-500/20 rounded-lg text-teal-400">
                      <Layout size={14} />
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-400 w-[98%]" />
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-xs font-bold text-slate-200">UX Score</div>
                    <div className="text-sm font-bold text-teal-400">98.5</div>
                  </div>
              </div>
            </motion.div>

            {/* Card 3: Tech SEO - Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ duration: 1, delay: 0.9, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
              className="absolute bottom-[-5%] right-[10%] z-20"
            >
              <div className="p-3 bg-[#020605]/80 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-2xl w-48 hover:scale-105 transition-transform duration-300 flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-blue-300 font-mono mb-0.5">Status: Optimized</div>
                    <div className="text-xs font-bold text-slate-200">Technical SEO</div>
                  </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;