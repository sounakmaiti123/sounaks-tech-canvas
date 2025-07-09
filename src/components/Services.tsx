
import React from 'react';
import { Database, Code2, BookOpen, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-blue-400" size={32} />,
      title: "Data Structure Implementation",
      description: "Implementing efficient data structures in C++ including arrays, linked lists, trees, graphs, and hash tables for optimal performance.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Cpu className="text-green-400" size={32} />,
      title: "Algorithm Development",
      description: "Developing and optimizing algorithms for sorting, searching, and graph traversal using advanced C++ programming techniques.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Database className="text-purple-400" size={32} />,
      title: "Database Design & Management",
      description: "Creating efficient database schemas, optimizing queries, and implementing database management solutions using SQL and MySQL.",
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: <BookOpen className="text-orange-400" size={32} />,
      title: "Academic Project Solutions",
      description: "Collaborating on academic projects involving data structures, algorithms, and database systems for educational purposes.",
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
            Currently learning and expanding my expertise in Data Structures using C++ and Database Management Systems.
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg px-6 py-3 border border-gray-700">
            <p className="text-gray-400">
              Available for academic collaborations and algorithm-based projects
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
