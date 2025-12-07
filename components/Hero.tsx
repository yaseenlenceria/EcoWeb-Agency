import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Layout, Code2, Globe } from 'lucide-react';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background is now handled globally in App.tsx */}
      
      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-300 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md"
          >
            <Globe size={12} className="text-emerald-400" />
            <span>{t('hero_tag')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[0.95] text-white mb-8"
          >
            {t('hero_title_1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
              {t('hero_title_2')}
            </span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-light pl-1"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-emerald-500 text-[#020806] font-bold text-lg rounded-lg transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                {t('hero_cta')}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            
            <a 
              href="#services"
              className="px-8 py-4 text-white font-medium hover:text-emerald-300 transition-all flex items-center gap-2"
            >
              {t('hero_secondary')}
            </a>
          </motion.div>
        </div>

        {/* Right Content - Sustainable Composition */}
        <div className="relative hidden lg:block h-[600px] w-full perspective-[1000px]">
          
          {/* Main Abstract Aura */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full border border-emerald-500/10"
          />
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-white/5 rounded-full"
          />

          {/* Floating Card 1: Growth / Organic Traffic */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.6 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="absolute top-[20%] right-[10%] p-5 bg-[#0d1f1a]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-52 hover:border-emerald-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-500/20 rounded-full text-emerald-400">
                <TrendingUp size={18} />
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Growth</span>
            </div>
            <div className="text-3xl font-display font-bold text-white">+300%</div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wide">Organic Traffic</div>
          </motion.div>

          {/* Floating Card 2: Design / UX Score */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.8 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }
            }}
            className="absolute top-[50%] left-[5%] p-5 bg-[#0d1f1a]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-60 z-20 hover:border-emerald-500/30 transition-colors"
          >
             <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-teal-500/20 rounded-full text-teal-400">
                <Layout size={18} />
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Design</span>
            </div>
            <div className="flex items-end justify-between mb-2">
               <div className="text-xl font-display font-bold text-white">UX Score</div>
               <div className="text-xl font-bold text-emerald-400">98<span className="text-sm text-slate-500">/100</span></div>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-gradient-to-r from-teal-400 to-emerald-400" 
              />
            </div>
          </motion.div>

          {/* Floating Card 3: Technical SEO */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 1 },
              y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute bottom-[15%] right-[20%] p-5 bg-[#0d1f1a]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-56 hover:border-emerald-500/30 transition-colors"
          >
             <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-full text-blue-400">
                <Code2 size={18} />
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Technical SEO</span>
            </div>
            <div className="text-sm text-slate-300 font-medium">
              Structure & Performance
            </div>
             <div className="flex items-center gap-2 mt-2 text-xs text-emerald-400 font-bold uppercase">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
               Optimized
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;