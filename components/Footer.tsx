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
        <div className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} EcoWebAgency. {t('footer_rights')}
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