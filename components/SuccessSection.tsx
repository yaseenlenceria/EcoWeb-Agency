import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Language } from '../types';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface SuccessProps {
  t: (key: string) => string;
  lang: Language;
}

const SuccessSection: React.FC<SuccessProps> = ({ t, lang }) => {
  return (
    <section className="py-24 bg-[#081512] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              {t('stats_success')}
            </h2>
            <div className="h-1 w-24 bg-emerald-500 mt-4" />
          </div>
          
          <div className="flex gap-8 md:gap-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-display">98%</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider mt-1">{t('stats_clients')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-display">250+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider mt-1">{t('stats_projects')}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#040f0c] p-8 rounded-xl border border-white/5 relative group hover:border-emerald-500/20 transition-all"
            >
              <Quote className="text-emerald-900/50 absolute top-6 right-6 transition-colors group-hover:text-emerald-900" size={48} />
              
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                "{lang === 'sv' ? item.quoteKey : item.quoteKey}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
                <div>
                  <div className="text-white font-bold font-display">{item.name}</div>
                  <div className="text-xs text-emerald-500 font-bold uppercase">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;