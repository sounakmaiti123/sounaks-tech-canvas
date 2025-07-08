
import React from 'react';
import CodolioProfile from './CodolioProfile';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 70 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "IoT", level: 75 },
        { name: "Machine Learning", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Currently upskilling in full stack technologies while building a strong foundation in programming and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Codolio Profile Section */}
        <div className="mb-16">
          <CodolioProfile />
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg">
              <span className="text-blue-400 font-semibold">Currently Learning:</span> Expanding expertise in full stack development to deliver professional-grade websites and applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
