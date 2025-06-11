
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-6 animate-fade-in">
            Student Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Sounak
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Maiti
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
            Aspiring Full Stack Developer & Tech Enthusiast
          </p>
          
          <p className="text-gray-400 mb-8 max-w-lg animate-fade-in delay-300">
            B.Tech student passionate about building innovative solutions with cutting-edge technologies. 
            Currently mastering full stack development while exploring the intersection of electronics and software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-500">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
            
            <button className="inline-flex items-center px-8 py-3 border border-gray-600 rounded-lg text-gray-300 font-medium hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 animate-pulse">
              <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden">
                <div className="text-6xl text-gray-600">👨‍💻</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
              <span className="text-xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
