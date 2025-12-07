import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

interface ServicesProps {
  t: (key: string) => string;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="container mx-auto px-6 max-w-7xl">
      <div className="mb-16 md:mb-24">
        <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">
          {t('services_eyebrow')}
        </h3>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-2xl">
          {t('services_title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-[#0d1f1a]/40 border border-white/5 hover:border-emerald-500/30 hover:bg-[#0d1f1a]/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-950/50 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-300">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors">
                {t(service.titleKey)}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {t(service.descKey)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;