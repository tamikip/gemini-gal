
import React from 'react';
import { Game } from '../types';
import { ArrowRight } from 'lucide-react';

interface UltimateSectionProps {
  game: Game;
  onAddToCart: (game: Game) => void;
}

const UltimateSection: React.FC<UltimateSectionProps> = ({ game, onAddToCart }) => {
  if (!game) return null;

  return (
    <section className="bg-black text-white py-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        <div className="inline-block border-b border-[#CFA873] pb-1 mb-4">
            <span className="text-[#CFA873] font-bold tracking-[0.2em] text-lg">ULTIMATE DESIGN</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-2">NON-ORDINARY MASTER · MURASAME</h2>
        <p className="text-gray-400 text-lg mb-16">Mizuho Country · Craftsmanship Reconstruction</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
             <div className="relative group perspective-1000">
                 <div className="absolute -inset-4 bg-[#CFA873]/20 rounded-2xl blur-2xl group-hover:bg-[#CFA873]/30 transition-all duration-500"></div>
                 <img 
                    src={game.image} 
                    alt={game.title} 
                    className="relative w-[300px] h-[450px] object-cover rounded-2xl shadow-2xl border border-gray-800 transform transition-transform duration-500 group-hover:scale-105 hover:rotate-y-6"
                 />
             </div>
             
             <div className="text-left max-w-md space-y-8">
                 <div>
                     <h3 className="text-4xl font-bold leading-tight mb-4">Aesthetic rebirth <br/> across a millennium.</h3>
                     <p className="text-gray-400 leading-relaxed text-lg">
                        Adopting the new Basalt Tempered Plot Architecture. 
                        Sword techniques refined over 1000 years. 
                        Every unsheathing is an interrogation of the soul.
                     </p>
                 </div>
                 
                 <div className="space-y-6">
                     <div className="flex items-center gap-2 text-[#CFA873]">
                        <span className="text-sm font-bold">★ Includes 4K Live Wallpaper Collection Rights</span>
                     </div>
                     <button 
                        onClick={() => onAddToCart(game)}
                        className="bg-[#CFA873] text-black px-10 py-4 rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2 text-lg w-full md:w-auto justify-center"
                     >
                        Exclusive Purchase ¥{game.price} <ArrowRight size={20} />
                     </button>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateSection;
