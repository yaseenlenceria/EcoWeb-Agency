import React from 'react';
import { Send } from 'lucide-react';

interface ContactProps {
  t: (key: string) => string;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="container mx-auto px-6 max-w-4xl">
      <div className="bg-gradient-to-br from-[#0d1f1a] to-[#040f0c] rounded-3xl p-8 md:p-16 border border-white/5 text-center md:text-left shadow-2xl overflow-hidden relative">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {t('contact_title')}
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t('contact_desc')}
            </p>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                info@ecowebagency.com
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                +46 8 123 45 67
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                Stockholm, Sweden
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">{t('contact_name')}</label>
              <input 
                type="text" 
                className="bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">{t('contact_email')}</label>
              <input 
                type="email" 
                className="bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="john@company.com"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">{t('contact_message')}</label>
              <textarea 
                rows={4}
                className="bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>
            
            <button className="mt-2 bg-emerald-500 text-[#040f0c] font-bold py-3 rounded-lg hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
              {t('contact_send')}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;