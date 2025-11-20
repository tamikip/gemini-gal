
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { translations } from '../translations';
import { Language } from '../types';

interface PromoBannersProps {
  lang: Language;
  onExplore: () => void;
}

const PromoBanners: React.FC<PromoBannersProps> = ({ lang, onExplore }) => {
  const t = translations[lang].promo;

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Banner 1: Script Rated */}
          <div 
            onClick={onExplore}
            className="relative h-[260px] rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <img 
              src="https://cdn.akamai.steamstatic.com/steam/apps/888790/library_hero.jpg" 
              alt="Script Rated" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-center text-white">
              <div className="flex items-center gap-2 mb-3">
                  <span className="bg-h-red text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">{t.editorChoice}</span>
              </div>
              <h3 className="text-4xl font-bold mb-3 italic tracking-tighter">{t.scriptRated} <span className="text-h-red">{t.scriptRatedSuffix}</span></h3>
              <p className="text-gray-300 mb-8 max-w-[60%] text-sm leading-relaxed font-light">
                {t.scriptDesc}
              </p>
              <span className="flex items-center gap-2 text-sm font-bold text-h-red group-hover:translate-x-2 transition-transform">
                {t.explore} <ArrowRight size={16} />
              </span>
            </div>
          </div>

          {/* Banner 2: Crowdfunding */}
          <div 
            onClick={() => alert("Crowdfunding Portal unavailable in your region.")}
            className="relative h-[260px] rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <img 
              src="https://cdn.akamai.steamstatic.com/steam/apps/1277940/library_hero.jpg" 
              alt="Crowdfunding" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#CFA873]/95 via-[#CFA873]/40 to-transparent"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-center text-white">
              <div className="flex items-center gap-2 mb-3">
                  <span className="bg-white text-[#CFA873] text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">{t.exclusive}</span>
              </div>
              <h3 className="text-4xl font-bold mb-3 tracking-tighter">{t.golden} <span className="text-white">{t.loveriche}</span></h3>
              <p className="text-white/90 mb-8 max-w-[60%] text-sm leading-relaxed font-light">
                {t.crowdDesc}
              </p>
              <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                {t.backProject} <ArrowRight size={16} />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
