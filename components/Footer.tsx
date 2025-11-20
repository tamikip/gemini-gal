
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9F9F9] text-h-dark-gray pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-6">About Huawei Galgame</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline hover:text-h-red">Company Overview</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">Executive Leadership</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">Careers</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline hover:text-h-red">YUZU Series</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">KEY Series</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">Cloud Saves</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">Developers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline hover:text-h-red">Consumer Support</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">Moe Recovery</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">Security Center</a></li>
              <li><a href="#" className="hover:underline hover:text-h-red">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-6">
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-h-red hover:text-white transition-colors font-bold cursor-pointer">W</div>
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-h-red hover:text-white transition-colors font-bold cursor-pointer">X</div>
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-h-red hover:text-white transition-colors font-bold cursor-pointer">L</div>
            </div>
            <p className="text-sm text-gray-500">Subscribe to our newsletter for the latest enterprise romance updates.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Yuzusoft Terminal Co., Ltd. All rights reserved. | Privacy Statement | User Agreement</p>
          <p>Images sourced from Steam. This is a parody site.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
