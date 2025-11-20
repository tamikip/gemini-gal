
import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem, Language } from '../types';
import { translations } from '../translations';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
  lang: Language;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onCheckout, lang }) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const t = translations[lang].cart;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[450px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <h2 className="text-2xl font-bold text-h-dark-gray">{t.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                <ShoppingBagIcon />
                <p>{t.empty}</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 bg-white p-2">
                <img src={item.image} alt={item.title} className="w-20 h-24 object-cover rounded-lg bg-gray-100" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-h-dark-gray line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{t.enterprise}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-100 disabled:opacity-50"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-bold">¥{item.price * item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-h-red self-start">
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500">{t.subtotal}</span>
            <span className="text-2xl font-bold text-h-black">¥{total}</span>
          </div>
          <button 
            onClick={() => { onCheckout(); alert(t.checkoutAlert); }}
            disabled={cart.length === 0}
            className="w-full bg-h-red text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {t.checkout}
          </button>
        </div>
      </div>
    </>
  );
};

const ShoppingBagIcon = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);

export default CartSidebar;
