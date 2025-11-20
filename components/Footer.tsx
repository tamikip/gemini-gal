
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="bg-[#F9F9F9] text-h-dark-gray pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-6">{t.about}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {t.links.map((link, i) => (
                  <li key={i}><a href="#" onClick={(e) => e.preventDefault()} className="hover:underline hover:text-h-red">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">{t.products}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {t.productLinks.map((link, i) => (
                  <li key={i}><a href="#" onClick={(e) => e.preventDefault()} className="hover:underline hover:text-h-red">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">{t.support}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
               {t.supportLinks.map((link, i) => (
                  <li key={i}><a href="#" onClick={(e) => e.preventDefault()} className="hover:underline hover:text-h-red">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">{t.follow}</h4>
            <div className="flex gap-4 mb-6">
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-h-red hover:text-white transition-colors font-bold cursor-pointer">W</div>
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-h-red hover:text-white transition-colors font-bold cursor-pointer">X</div>
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-h-red hover:text-white transition-colors font-bold cursor-pointer">L</div>
            </div>
            <p className="text-sm text-gray-500">{t.subscribe}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>{t.rights}</p>
          <p>{t.parody}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
