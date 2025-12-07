import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  t: (key: string) => string;
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  return (
    <section id="work" className="container mx-auto px-6 max-w-7xl pt-12">
      <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">
            {t('projects_eyebrow')}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-2xl">
            {t('projects_title')}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative block rounded-2xl overflow-hidden bg-[#0d1f1a] border border-white/5 hover:border-emerald-500/50 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#040f0c] to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-40" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay with Button */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <div className="px-6 py-3 bg-emerald-500 text-[#020806] font-bold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {t('project_visit')}
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-30 bg-[#0d1f1a]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium tracking-wide">
                    {t(project.categoryKey)}
                  </p>
                </div>
                <div className="p-2 bg-white/5 rounded-full text-slate-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;