
import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      {/* Navigation for web view - hidden in print */}
      <div className="print:hidden bg-gray-900 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Download size={20} />
            Download PDF
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white">
        {/* Header */}
        <div className="flex items-start gap-6 mb-8 bg-gray-700 text-white p-6 rounded-lg print:bg-gray-700 print:text-white">
          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src="/lovable-uploads/6610cca9-c748-4b71-8126-08d8188b2884.png" 
              alt="Sounak Maiti" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">SOUNAK MAITI</h1>
            <p className="text-lg text-gray-300">ELECTRONICS AND COMMUNICATION ENGINEERING</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">CONTACT</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91 9339209014</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <span>maitisounak04@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Newtown, Kolkata</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌐</span>
                  <span>https://sounaks-tech-canvas.lovable.app/</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">SKILLS</h3>
              <div className="space-y-2 text-sm">
                <div>• C programming</div>
                <div>• Java</div>
                <div>• JavaScript</div>
                <div>• Python</div>
                <div>• HTML/CSS</div>
                <div>• Machine Learning</div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">LANGUAGES</h3>
              <div className="space-y-2 text-sm">
                <div>• Bengali (Fluent)</div>
                <div>• English (Fluent)</div>
                <div>• Hindi (Fluent)</div>
              </div>
            </div>

            {/* Reference */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">REFERENCE</h3>
              <div className="text-sm">
                <div className="font-semibold">Dr. Prof. Malay Gangopadhyay</div>
                <div>HOD | ECE</div>
                <div className="mt-2">
                  <div>Phone: +91 9163584977</div>
                  <div>Email: malay.ganguly@iemlcal.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs">👤</span>
                PROFILE
              </h3>
              <p className="text-sm text-gray-600">
                B.Tech student in Electronics and Communication Engineering at IEM, Kolkata (2023-27), 
                with strong skills in programming, web development, and embedded systems. Completed a 
                Machine Learning internship at Prodigy InfoTech and developed multiple hardware-software integrated projects. Passionate about building real-world tech solutions.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs">💼</span>
                WORK EXPERIENCE
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-sm">Machine Learning Intern</div>
                  <div className="text-sm text-gray-600">Prodigy InfoTech | June - July 2024</div>
                  <ul className="mt-2 text-xs text-gray-600 space-y-1">
                    <li>• Developed predictive models using Python and Scikit-learn to solve real-world ML problems.</li>
                    <li>• Gained hands-on experience in data preprocessing, training models, and evaluating performance.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-sm">Electronics Project Developer (Academic Projects)</div>
                  <div className="text-sm text-gray-600">Institute of Engineering and Management (IEM), Kolkata | 2023 - Present</div>
                  <ul className="mt-2 text-xs text-gray-600 space-y-1">
                    <li>• Designed and implemented hardware-based embedded systems integrating sensors and microcontrollers.</li>
                    <li>• Led end-to-end development of functional prototypes for real-time applications.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs">📁</span>
                PROJECTS
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-semibold">Distance Measurer</div>
                  <div>• Created an ultrasonic distance measuring device using Arduino and sensor integration.</div>
                  <div>• Displayed accurate measurements on LCD and calibrated for various obstacle types.</div>
                </div>
                <div>
                  <div className="font-semibold">Obstacle Detection Car</div>
                  <div>• Built an autonomous car that detects and avoids obstacles using IR/ultrasonic sensors.</div>
                  <div>• Programmed microcontroller logic to enhance navigation in dynamic environments.</div>
                </div>
                <div>
                  <div className="font-semibold">Exhaust Emission Monitoring System</div>
                  <div>• Developed a system to track and log vehicle exhaust emissions using IoT sensors.</div>
                  <div>• Enabled real-time monitoring and data to ensure compliance with pollution norms.</div>
                </div>
                <div>
                  <div className="font-semibold">Portable ECG Sensor</div>
                  <div>• Engineered a low-cost, portable ECG device to capture and monitor heart signals.</div>
                  <div>• Ensured signal stability and accurate waveform display via serial communication to PC.</div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs">🎓</span>
                EDUCATION
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">Secondary Examination</div>
                    <div className="text-xs text-gray-600">Ambagan High School, Hooghly</div>
                    <div className="text-xs">Percentage: 86%</div>
                  </div>
                  <div className="text-xs text-gray-500">2019 - 2020</div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">Higher Secondary Examination</div>
                    <div className="text-xs text-gray-600">Rajbari Bandar High School, Hooghly</div>
                    <div className="text-xs">Percentage: 78.2%</div>
                  </div>
                  <div className="text-xs text-gray-500">2021 - 2023</div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">Pursuing Bachelor of Technology in ECE</div>
                    <div className="text-xs text-gray-600">Institute of Engineering and Management, Kolkata</div>
                    <div className="text-xs">YGPA: 8.5/10.0</div>
                  </div>
                  <div className="text-xs text-gray-500">2023 - 2027</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
