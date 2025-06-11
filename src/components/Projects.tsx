
import React from 'react';
import { ExternalLink, Github, Zap, Car, Wifi, Heart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Distance Measurer",
      description: "An electronics-based tool to measure distance using ultrasonic sensors with high accuracy and real-time display.",
      icon: <Zap className="text-blue-400" size={32} />,
      tags: ["Electronics", "Sensors", "Arduino"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Obstacle Detection Car",
      description: "A smart robotic system that detects and navigates around obstacles using sensors and automated control algorithms.",
      icon: <Car className="text-green-400" size={32} />,
      tags: ["Robotics", "AI", "Sensors"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Exhaust Emission Monitoring System",
      description: "IoT-based smart system to monitor air pollution in vehicles with real-time data collection and analysis.",
      icon: <Wifi className="text-purple-400" size={32} />,
      tags: ["IoT", "Environmental", "Monitoring"],
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Portable ECG Sensor",
      description: "A portable device for monitoring ECG signals for health tracking with wireless data transmission capabilities.",
      icon: <Heart className="text-red-400" size={32} />,
      tags: ["Healthcare", "Sensors", "Wireless"],
      gradient: "from-red-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of innovative projects combining electronics, IoT, and software development to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300">
                  <Github size={18} />
                  Code
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors duration-300">
                  <ExternalLink size={18} />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
