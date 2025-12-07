import React from 'react';

interface FooterProps {
  t: (key: string) => string;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="border-t border-white/5 bg-[#020806] py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-display font-bold text-slate-500">
          EcoWeb<span className="text-slate-600">Agency</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm text-slate-600">
          <span>&copy; {new Date().getFullYear()} EcoWebAgency. {t('footer_rights')}</span>
          <span className="hidden md:inline text-slate-800">|</span>
          <span className="text-slate-500">Made with 💚 in Stockholm</span>
        </div>

        <div className="flex gap-6">
          {/* Social placeholders */}
          <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer" />
          <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer" />
          <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;