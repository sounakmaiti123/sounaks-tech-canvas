
import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Sounak Maiti
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Building the future one line of code at a time. Currently pursuing B.Tech while mastering full stack development.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
            <span>Made with</span>
            <Heart className="text-red-400" size={16} fill="currentColor" />
            <span>and</span>
            <Coffee className="text-yellow-400" size={16} />
            <span>using</span>
            <Code className="text-blue-400" size={16} />
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Sounak Maiti. All rights reserved. | Building innovative solutions with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
