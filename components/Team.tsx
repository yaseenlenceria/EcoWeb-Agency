import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

interface TeamProps {
  t: (key: string) => string;
}

const Team: React.FC<TeamProps> = ({ t }) => {
  return (
    <section id="team" className="container mx-auto px-6 max-w-7xl py-12">
      <div className="mb-16 text-center">
        <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">
          {t('team_eyebrow')}
        </h3>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
          {t('team_title')}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {TEAM.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center group"
          >
            {/* Abstract Avatar */}
            <div className="relative mb-6">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.color} p-[2px] opacity-90 group-hover:opacity-100 transition-all duration-300 shadow-xl group-hover:shadow-emerald-500/20`}>
                <div className="w-full h-full rounded-full bg-[#040f0c] flex items-center justify-center relative overflow-hidden">
                   {/* Abstract Interior Pattern */}
                   <div className={`absolute inset-0 bg-gradient-to-tr ${member.color} opacity-20`} />
                   <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
                   
                   {/* Initials */}
                   <span className="font-display font-bold text-3xl text-white relative z-10">
                     {member.name.charAt(0)}
                   </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                {member.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors">
                {t(member.roleKey)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;