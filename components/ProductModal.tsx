
import React from 'react';
import { X, Star, ShieldCheck, Cpu, Battery, ShoppingBag } from 'lucide-react';
import { Game, Language } from '../types';
import { translations } from '../translations';

interface ProductModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (game: Game) => void;
  lang: Language;
}

const ProductModal: React.FC<ProductModalProps> = ({ game, isOpen, onClose, onAddToCart, lang }) => {
  if (!isOpen || !game) return null;
  const t = translations[lang].modal;
  const tProd = translations[lang].product;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-6xl h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row no-scrollbar animate-scale-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center relative p-8">
            <img src={game.image} alt={game.title} className="max-h-[80vh] object-contain shadow-xl rounded-lg" />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                {game.rating} {t.rating}
            </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="mb-2 flex gap-2">
             {game.tags.map(tag => (
                 <span key={tag} className="bg-h-red/10 text-h-red px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                     {tag}
                 </span>
             ))}
          </div>
          <h2 className="text-4xl font-bold text-h-dark-gray mb-4">{game.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {game.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
             {game.features.map((feature, idx) => (
                 <div key={idx} className="flex gap-3 items-start">
                     <div className="mt-1 text-h-red">
                         {idx === 0 ? <Cpu size={20} /> : idx === 1 ? <ShieldCheck size={20} /> : <Battery size={20} />}
                     </div>
                     <div>
                         <h4 className="font-bold text-sm text-h-dark-gray">{tProd.feature} {idx + 1}</h4>
                         <p className="text-xs text-gray-500">{feature}</p>
                     </div>
                 </div>
             ))}
          </div>

          <div className="mt-auto border-t border-gray-100 pt-8">
             <div className="flex items-center justify-between mb-6">
                 <div>
                     <p className="text-sm text-gray-400">{t.totalPrice}</p>
                     <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-h-black">{tProd.price}{game.price}</span>
                        {game.originalPrice && <span className="text-xl text-gray-400 line-through">{tProd.price}{game.originalPrice}</span>}
                     </div>
                 </div>
                 <div className="text-right">
                     <p className="text-sm text-green-600 font-medium">{t.inStock}</p>
                     <p className="text-xs text-gray-400">{t.shipping}</p>
                 </div>
             </div>

             <div className="flex gap-4">
                 <button 
                    onClick={() => { onAddToCart(game); onClose(); }}
                    className="flex-1 bg-h-red text-white h-14 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                 >
                     <ShoppingBag size={20} /> {tProd.addToCart}
                 </button>
                 <button 
                    onClick={() => alert(t.demoAlert)}
                    className="flex-1 border border-gray-300 text-h-dark-gray h-14 rounded-xl font-bold text-lg hover:border-h-black hover:bg-gray-50 transition-colors"
                 >
                     {t.bookDemo}
                 </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
