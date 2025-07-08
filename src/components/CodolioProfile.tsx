
import React from 'react';
import { ExternalLink } from 'lucide-react';

const CodolioProfile = () => {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Codolio Profile</h3>
        <a 
          href="https://codolio.com/profile/Sounak_Maiti" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      
      {/* Embed the Codolio profile */}
      <div className="w-full">
        <iframe
          src="https://codolio.com/profile/Sounak_Maiti"
          className="w-full h-96 rounded-lg border border-gray-600"
          title="Sounak Maiti - Codolio Profile"
          loading="lazy"
        />
      </div>
      
      <div className="mt-4 text-center">
        <a 
          href="https://codolio.com/profile/Sounak_Maiti" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Full Profile
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default CodolioProfile;
