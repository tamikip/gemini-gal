
import React from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onNavigate: (page: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart, onNavigate }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-h-dark-gray">
            <Menu size={24} />
          </button>
          <div 
            onClick={() => onNavigate('HOME')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* Abstract Logo similar to flower/fan */}
            <div className="w-8 h-8 relative">
                <div className="absolute top-0 left-[10px] w-3 h-4 bg-h-red rounded-t-full"></div>
                <div className="absolute top-[4px] left-[18px] w-3 h-4 bg-h-red rounded-t-full rotate-[60deg]"></div>
                <div className="absolute top-[14px] left-[18px] w-3 h-4 bg-h-red rounded-t-full rotate-[120deg]"></div>
                <div className="absolute top-[18px] left-[10px] w-3 h-4 bg-h-red rounded-t-full rotate-[180deg]"></div>
                <div className="absolute top-[14px] left-[2px] w-3 h-4 bg-h-red rounded-t-full rotate-[240deg]"></div>
                <div className="absolute top-[4px] left-[2px] w-3 h-4 bg-h-red rounded-t-full rotate-[300deg]"></div>
            </div>
            <div className="flex items-center text-xl tracking-tight font-bold">
                <span className="text-h-red mr-1">HUAWEI</span> GALGAME
            </div>
          </div>
        </div>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-h-dark-gray">
          <button onClick={() => onNavigate('HOME')} className="hover:text-h-red transition-colors py-5 border-b-2 border-transparent hover:border-h-red">YUZU FLAGSHIP</button>
          <button className="hover:text-h-red transition-colors py-5 border-b-2 border-transparent hover:border-h-red">KEY ECOSYSTEM</button>
          <button className="hover:text-h-red transition-colors py-5 border-b-2 border-transparent hover:border-h-red">FULL SCENARIO STORY</button>
          <button className="hover:text-h-red transition-colors py-5 border-b-2 border-transparent hover:border-h-red">SERVICE SUPPORT</button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 text-h-dark-gray">
            <div className="hidden md:block group relative">
                <input type="text" placeholder="Search Yuzusoft..." className="pl-8 pr-4 py-1.5 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-h-red/50 transition-all w-48" />
                <Search size={16} className="absolute left-2.5 top-2 text-gray-400" />
            </div>
            <button className="hover:text-h-red transition-colors">
                <User size={22} />
            </button>
            <button onClick={onOpenCart} className="hover:text-h-red transition-colors relative">
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-h-red text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        {totalItems}
                    </span>
                )}
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
