
import React from 'react';
import { Game, Language } from '../types';
import { translations } from '../translations';
import { ArrowRight, Gem } from 'lucide-react';

interface UltimateSectionProps {
  game: Game | undefined;
  onAddToCart: (game: Game) => void;
  lang: Language;
}

const UltimateSection: React.FC<UltimateSectionProps> = ({ game, onAddToCart, lang }) => {
  const t = translations[lang].ultimate;

  if (!game) return null;

  return (
    <section className="bg-[#101010] text-white py-24 overflow-hidden relative">
      {/* Background Textures */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border-b border-[#CFA873] pb-1 mb-6 animate-fade-in-up">
            <Gem size={18} className="text-[#CFA873]" />
            <span className="text-[#CFA873] font-bold tracking-[0.2em] text-lg">{t.brand}</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#CFA873] via-[#EACDA3] to-[#CFA873] bg-clip-text text-transparent animate-fade-in-up delay-100">
            {t.title}
        </h2>
        <p className="text-gray-400 text-xl mb-16 tracking-widest uppercase animate-fade-in-up delay-200">
            {t.subtitle}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
             <div className="relative group perspective-1000 animate-zoom-in">
                 {/* Glowing Halo */}
                 <div className="absolute -inset-1 bg-gradient-to-tr from-[#CFA873] to-transparent rounded-2xl opacity-50 blur-2xl group-hover:opacity-75 transition-all duration-500"></div>
                 <img 
                    src={game.image} 
                    alt={game.title} 
                    className="relative w-[320px] md:w-[360px] h-[480px] md:h-[540px] object-cover rounded-2xl shadow-2xl border border-[#CFA873]/30 transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105"
                 />
             </div>
             
             <div className="text-left max-w-md space-y-8 animate-fade-in-up delay-300">
                 <div>
                     <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">
                        {t.descHeader}
                     </h3>
                     <p className="text-gray-400 leading-relaxed text-lg font-light">
                        {t.descBody}
                     </p>
                 </div>
                 
                 <div className="space-y-8 pt-4">
                     <div className="flex items-center gap-3 text-[#CFA873] bg-[#CFA873]/10 p-4 rounded-lg border border-[#CFA873]/20">
                        <Gem size={20} />
                        <span className="text-sm font-bold tracking-wider">{t.feature}</span>
                     </div>
                     <button 
                        onClick={() => onAddToCart(game)}
                        className="group bg-gradient-to-r from-[#CFA873] to-[#B08D55] text-black px-10 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(207,168,115,0.4)] transition-all duration-300 flex items-center gap-2 text-lg w-full md:w-auto justify-center"
                     >
                        {t.button} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateSection;
