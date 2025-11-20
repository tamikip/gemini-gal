
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { translations } from '../translations';
import { Language, Game } from '../types';

interface HeroProps {
  lang: Language;
  onPreOrder: () => void;
}

const Hero: React.FC<HeroProps> = ({ lang, onPreOrder }) => {
  const t = translations[lang].hero;

  return (
    <div className="w-full bg-white relative border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row h-[500px] md:h-[600px]">
            
            {/* Text Area */}
            <div className="w-full md:w-1/3 flex flex-col justify-center px-8 md:px-12 z-10 bg-white/95 backdrop-blur-sm">
                <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 mb-6 w-fit rounded-sm tracking-[0.2em]">
                    {t.tagline}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6 text-h-black tracking-tighter">
                    {t.title1} <br/>
                    <span className="text-[#2196F3]">{t.title2}</span>
                </h1>
                <p className="text-gray-500 mb-10 text-sm md:text-base leading-relaxed font-light">
                    {t.description}
                </p>
                <div className="flex items-center gap-6">
                    <button 
                      onClick={onPreOrder}
                      className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-h-red transition-colors flex items-center gap-2 text-sm shadow-2xl hover:shadow-h-red/50"
                    >
                        {t.preOrder} <ChevronRight size={16} />
                    </button>
                    <button 
                      onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                      className="text-gray-600 font-medium hover:text-h-red text-sm flex items-center gap-1 group tracking-wide"
                    >
                        {t.watchKeynote} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                </div>
            </div>

            {/* Image Area */}
            <div className="w-full md:w-2/3 h-full relative">
                {/* Diagonal Cut Mask & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                
                <img 
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1203830/library_hero.jpg" 
                    alt="Summer Pockets Hero" 
                    className="w-full h-full object-cover object-[center_20%] animate-zoom-in"
                />
                
                {/* Spec Overlay - Tech specs floating */}
                <div className="absolute bottom-12 right-12 z-20 flex gap-12 text-white text-xs font-bold tracking-[0.15em] drop-shadow-2xl hidden md:flex">
                    <div className="flex flex-col items-center group cursor-default">
                        <span className="text-3xl mb-1 group-hover:text-[#2196F3] transition-colors">RB</span>
                        <span className="opacity-90 font-medium">{t.spec1}</span>
                    </div>
                    <div className="w-px bg-white/40 h-12 self-center"></div>
                    <div className="flex flex-col items-center group cursor-default">
                        <span className="text-3xl mb-1 group-hover:text-[#2196F3] transition-colors">KEY</span>
                        <span className="opacity-90 font-medium">{t.spec2}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
