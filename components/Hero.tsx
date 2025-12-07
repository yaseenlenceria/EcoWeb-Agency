import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Palette, Search, Globe } from 'lucide-react';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Grid - Technical SEO vibe */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Soft Spotlights */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-300 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm"
          >
            <Globe size={12} className="text-emerald-400" />
            <span>Stockholm Based Agency</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[0.95] text-white mb-8"
          >
            {t('hero_title_1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              {t('hero_title_2')}
            </span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-light border-l-2 border-emerald-500/30 pl-6"
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
              className="group relative px-8 py-4 bg-emerald-500 text-[#020806] font-bold text-lg transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-3">
                {t('hero_cta')}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            
            <a 
              href="#services"
              className="px-8 py-4 border-b border-white/20 text-white font-medium hover:text-emerald-400 hover:border-emerald-400 transition-all flex items-center gap-2"
            >
              {t('hero_secondary')}
            </a>
          </motion.div>
        </div>

        {/* Right Content - Abstract Composition */}
        <div className="relative hidden lg:block h-[600px] w-full perspective-[1000px]">
          
          {/* Main Abstract Gradient Shape */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/20 to-teal-500/5 rounded-full blur-3xl border border-white/5"
          />

          {/* Floating Card 1: SEO Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.6 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="absolute top-[20%] right-[10%] p-5 bg-[#0d1f1a]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl w-48"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                <TrendingUp size={18} />
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Growth</span>
            </div>
            <div className="text-2xl font-display font-bold text-white">+300%</div>
            <div className="text-[10px] text-slate-500 mt-1">Organic Traffic</div>
          </motion.div>

          {/* Floating Card 2: Design */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.8 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }
            }}
            className="absolute top-[50%] left-[5%] p-5 bg-[#0d1f1a]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl w-56 z-20"
          >
             <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <Palette size={18} />
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Design</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 w-[85%]" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>UX Score</span>
              <span>98/100</span>
            </div>
          </motion.div>

          {/* Floating Card 3: SEO/Tech */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 1 },
              y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute bottom-[15%] right-[20%] p-5 bg-[#0d1f1a]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl w-52"
          >
             <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <Search size={18} />
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Technical SEO</span>
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`h-8 w-full rounded-sm ${i > 1 ? 'bg-emerald-500' : 'bg-emerald-500/30'}`} style={{ opacity: i * 0.2 + 0.2 }} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;