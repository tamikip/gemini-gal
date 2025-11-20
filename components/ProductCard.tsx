
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Game } from '../types';

interface ProductCardProps {
  game: Game;
  onAddToCart: (game: Game) => void;
  onClick: (game: Game) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ game, onAddToCart, onClick }) => {
  // Determine badge color
  const isPromo = game.tags.includes('Promotion');
  const isNew = game.tags.includes('In Production');
  
  return (
    <div 
      onClick={() => onClick(game)}
      className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-h-red/20 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Status Badge */}
        <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white rounded-bl-lg z-10
          ${isNew ? 'bg-[#8E24AA]' : isPromo ? 'bg-h-red' : 'bg-gray-800'}`}>
          {isNew ? 'IN PRODUCTION' : isPromo ? 'PROMOTION' : 'AVAILABLE'}
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-auto">
          <div className="flex gap-2 mb-2">
             {game.tags.slice(0, 2).map(tag => (
                 <span key={tag} className="text-[10px] font-bold border border-gray-200 text-gray-500 px-2 py-0.5 rounded bg-gray-50 uppercase">
                     {tag}
                 </span>
             ))}
          </div>
          <h3 className="text-lg font-bold text-h-black leading-tight mb-2 group-hover:text-h-red transition-colors">
            {game.title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 mb-4">
            {game.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-2">
          <div className="flex flex-col">
             <span className="text-lg font-bold text-h-red">¥{game.price}</span>
             {game.originalPrice && (
                 <span className="text-xs text-gray-400 line-through">¥{game.originalPrice}</span>
             )}
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(game); }}
            className="w-10 h-10 rounded-full bg-gray-100 text-h-dark-gray flex items-center justify-center hover:bg-h-red hover:text-white transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
