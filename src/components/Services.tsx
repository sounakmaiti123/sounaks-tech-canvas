
import React from 'react';
import { Code, Smartphone, Users, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="text-blue-400" size={32} />,
      title: "Responsive Web Design",
      description: "Creating visually appealing and user-friendly websites that work seamlessly across all devices and screen sizes.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      title: "Frontend/Backend Development",
      description: "Building robust full-stack applications using modern technologies like React, Node.js, and MongoDB.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Users className="text-purple-400" size={32} />,
      title: "Student Freelance Projects",
      description: "Collaborating with fellow students and startups to deliver quality web solutions and technical projects.",
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: <Smartphone className="text-orange-400" size={32} />,
      title: "IoT Solutions",
      description: "Developing innovative IoT applications that bridge the gap between hardware and software systems.",
      gradient: "from-orange-500/20 to-amber-500/20"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Currently learning and expanding my expertise in full stack development to deliver professional-grade websites.
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg px-6 py-3 border border-gray-700">
            <p className="text-gray-400">
              Available for student collaborations and small-scale projects
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
