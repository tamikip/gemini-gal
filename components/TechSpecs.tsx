
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { Cpu, Zap, Aperture } from 'lucide-react';

interface TechSpecsProps {
  lang: Language;
}

const TechSpecs: React.FC<TechSpecsProps> = ({ lang }) => {
  const t = translations[lang].specs;

  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-h-black mb-4">{t.title}</h2>
            <div className="w-16 h-1 bg-h-red mx-auto"></div>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-6 px-4 text-gray-400 font-medium w-1/4 uppercase text-xs tracking-wider">{t.param}</th>
                        <th className="py-6 px-4 text-h-dark-gray font-bold w-1/4 text-lg">
                            <div className="flex items-center gap-2">
                                <Cpu size={20} className="text-gray-400"/> {t.standard}
                            </div>
                        </th>
                        <th className="py-6 px-4 text-h-dark-gray font-bold w-1/4 text-lg">
                             <div className="flex items-center gap-2">
                                <Zap size={20} className="text-[#8E24AA]"/> {t.pro}
                            </div>
                        </th>
                        <th className="py-6 px-4 text-[#CFA873] font-bold w-1/4 text-xl bg-[#101010]">
                             <div className="flex items-center gap-2">
                                <Aperture size={20} /> {t.ultimate}
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {t.rows.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-6 px-4 text-gray-500 font-bold">{row.name}</td>
                            <td className="py-6 px-4 text-gray-600">{row.v1}</td>
                            <td className="py-6 px-4 text-gray-800 font-medium">{row.v2}</td>
                            <td className="py-6 px-4 text-[#CFA873] bg-[#101010] font-bold">{row.v3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
            * Data obtained from Yuzusoft Laboratories. Actual emotional damage may vary based on individual mental resilience.
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
