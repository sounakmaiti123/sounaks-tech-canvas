
import React from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I am a B.Tech student of Electronics and Communication Engineering from the Institute of Engineering and Management (IEM), Kolkata. 
            With a strong foundation in Machine Learning and hands-on project experience, I'm now transitioning towards full-stack development while actively sharpening my DSA skills in C++ with 283+ problems solved across platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-semibold text-blue-400">B.Tech in Electronics and Communication Engineering</h4>
                <p className="text-gray-300">Institute of Engineering and Management (IEM), Kolkata</p>
                <p className="text-gray-400">Expected Graduation: 2027</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="text-purple-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-semibold text-purple-400">Machine Learning Intern</h4>
                <p className="text-gray-300">Prodigy InfoTech</p>
                <p className="text-gray-400">June – July 2024</p>
                <p className="text-gray-400 mt-2">Worked on practical applications of machine learning models and tools.</p>
              </div>
            </div>
          </div>

          {/* Focus */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Code className="text-green-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Current Focus</h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                Actively solving DSA problems in C++ (309+ questions, LeetCode rating 1496) while transitioning into full-stack development with projects like EduChain and Nexus AI Chatbot.
              </p>
              <p className="text-gray-400">
                Building on my ML expertise with real-world projects in healthcare prediction and NLP, while developing modern web applications using React, TypeScript, and AI integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
