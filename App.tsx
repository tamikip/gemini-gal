
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import PromoBanners from './components/PromoBanners';
import { GAMES } from './constants';
import { Game, CartItem, ViewState } from './types';
import { Bell, Award, CloudLightning, ShieldCheck, Headphones } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [viewState, setViewState] = useState<ViewState>('HOME');

  const addToCart = (game: Game) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === game.id);
      if (existing) {
        return prev.map(item => 
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...game, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-h-dark-gray font-sans antialiased selection:bg-h-red selection:text-white">
      {/* Top Notification Bar */}
      <div className="bg-[#F5F5F5] text-h-dark-gray text-xs md:text-sm py-2 px-4 text-center border-b border-gray-200 flex items-center justify-center gap-2 tracking-wide">
        <Bell size={14} className="text-h-red" />
        <span className="opacity-80 font-medium">2025-09-30: HarmonyOS Next Upgrade Available for all Visual Novel Terminals. Experience seamless emotion transfer.</span>
      </div>

      <Navbar 
        cart={cart} 
        onOpenCart={() => setIsCartOpen(true)} 
        onNavigate={(state) => setViewState(state)}
      />
      
      <main className="flex-1">
        {viewState === 'HOME' && (
          <>
            {/* Hero */}
            <Hero />
            
            {/* Promotional Banners */}
            <PromoBanners />
            
            {/* Main Grid */}
            <div className="bg-white py-16">
              <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
                  <h2 className="text-3xl font-bold text-h-black tracking-tight">Flagship Terminals</h2>
                  <div className="hidden md:flex gap-8 text-sm font-bold tracking-wider">
                      <button className="text-h-red border-b-2 border-h-red pb-1">ALL</button>
                      <button className="text-gray-400 hover:text-h-red transition-colors">KEY</button>
                      <button className="text-gray-400 hover:text-h-red transition-colors">YUZU</button>
                      <button className="text-gray-400 hover:text-h-red transition-colors">ANIPLEX</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {GAMES.map(game => (
                    <ProductCard 
                      key={game.id} 
                      game={game} 
                      onAddToCart={addToCart}
                      onClick={setSelectedGame}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Service Bar */}
            <div className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-16 md:gap-32 text-center text-gray-600">
                    <div className="group hover:text-h-red transition-colors cursor-pointer flex flex-col items-center">
                        <Award size={48} strokeWidth={1.25} className="mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <div className="font-bold text-xs tracking-[0.2em] uppercase">Official Authentic</div>
                    </div>
                    <div className="group hover:text-h-red transition-colors cursor-pointer flex flex-col items-center">
                        <CloudLightning size={48} strokeWidth={1.25} className="mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <div className="font-bold text-xs tracking-[0.2em] uppercase">Cloud Delivery</div>
                    </div>
                    <div className="group hover:text-h-red transition-colors cursor-pointer flex flex-col items-center">
                        <ShieldCheck size={48} strokeWidth={1.25} className="mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <div className="font-bold text-xs tracking-[0.2em] uppercase">7-Day Refund</div>
                    </div>
                    <div className="group hover:text-h-red transition-colors cursor-pointer flex flex-col items-center">
                        <Headphones size={48} strokeWidth={1.25} className="mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <div className="font-bold text-xs tracking-[0.2em] uppercase">Global Support</div>
                    </div>
                </div>
            </div>
          </>
        )}
      </main>

      <Footer />

      <ProductModal 
        game={selectedGame} 
        isOpen={!!selectedGame} 
        onClose={() => setSelectedGame(null)} 
        onAddToCart={addToCart}
      />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => alert("Proceeding to Enterprise Checkout Gateway...")}
      />

      <GeminiAssistant />
    </div>
  );
};

export default App;
