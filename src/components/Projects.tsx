
import React, { useState } from 'react';
import { ExternalLink, Github, Zap, Car, Wifi, Heart, Copy } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Projects = () => {
  const distanceMeasurerCode = `const int trigPin = 9;
const int echoPin = 10;

long duration;
float distanceCm;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  // Clear trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Trigger the sensor
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Read the echo
  duration = pulseIn(echoPin, HIGH);

  // Calculate distance in cm
  distanceCm = duration * 0.034 / 2;

  // Print to Serial Monitor
  Serial.print("Distance: ");
  Serial.print(distanceCm);
  Serial.println(" cm");

  delay(500);
}`;

  const obstacleDetectionCode = `const int trigPin = 12;
const int echoPin = 13;

// Motor pins
const int motor1Pin1 = 8;  // IN1
const int motor1Pin2 = 9;  // IN2
const int motor2Pin1 = 10; // IN3
const int motor2Pin2 = 11; // IN4

long duration;
float distance;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(motor1Pin1, OUTPUT);
  pinMode(motor1Pin2, OUTPUT);
  pinMode(motor2Pin1, OUTPUT);
  pinMode(motor2Pin2, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Measure distance
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  if (distance < 15) {
    // Obstacle detected: move backward and turn
    stopCar();
    delay(200);
    moveBackward();
    delay(500);
    turnRight();
    delay(600);
  } else {
    // No obstacle: move forward
    moveForward();
  }
}

void moveForward() {
  digitalWrite(motor1Pin1, HIGH);
  digitalWrite(motor1Pin2, LOW);
  digitalWrite(motor2Pin1, HIGH);
  digitalWrite(motor2Pin2, LOW);
}

void moveBackward() {
  digitalWrite(motor1Pin1, LOW);
  digitalWrite(motor1Pin2, HIGH);
  digitalWrite(motor2Pin1, LOW);
  digitalWrite(motor2Pin2, HIGH);
}

void turnRight() {
  digitalWrite(motor1Pin1, HIGH);
  digitalWrite(motor1Pin2, LOW);
  digitalWrite(motor2Pin1, LOW);
  digitalWrite(motor2Pin2, HIGH);
}

void stopCar() {
  digitalWrite(motor1Pin1, LOW);
  digitalWrite(motor1Pin2, LOW);
  digitalWrite(motor2Pin1, LOW);
  digitalWrite(motor2Pin2, LOW);
}`;

  const portableEcgCode = `// AD8232 ECG Module - Arduino Interface

const int ecgPin = A0;   // ECG signal from OUTPUT pin
const int loPlus = 11;   // Lead-off detection +
const int loMinus = 10;  // Lead-off detection -

void setup() {
  Serial.begin(9600);
  pinMode(loPlus, INPUT);
  pinMode(loMinus, INPUT);
}

void loop() {
  // Check if leads are connected
  if ((digitalRead(loPlus) == 1) || (digitalRead(loMinus) == 1)) {
    Serial.println("Leads off!");
  } else {
    int ecgValue = analogRead(ecgPin);  // ECG signal
    Serial.println(ecgValue);  // Plot this in Serial Plotter
  }
  delay(1);  // Sampling rate ~1ms (1000Hz)
}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const projects = [
    {
      title: "Distance Measurer",
      description: "An electronics-based tool to measure distance using ultrasonic sensors with high accuracy and real-time display.",
      icon: <Zap className="text-blue-400" size={32} />,
      tags: ["Electronics", "Sensors", "Arduino"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      githubUrl: null
    },
    {
      title: "Obstacle Detection Car",
      description: "A smart robotic system that detects and navigates around obstacles using sensors and automated control algorithms.",
      icon: <Car className="text-green-400" size={32} />,
      tags: ["Robotics", "AI", "Sensors"],
      gradient: "from-green-500/20 to-emerald-500/20",
      githubUrl: null
    },
    {
      title: "Agri Flow AI Optimise",
      description: "AI-powered agricultural optimization platform for improving crop yields and farming efficiency through intelligent data analysis.",
      icon: <Wifi className="text-purple-400" size={32} />,
      tags: ["TypeScript", "AI", "Agriculture"],
      gradient: "from-purple-500/20 to-violet-500/20",
      githubUrl: "https://github.com/sounakmaiti123/agri-flow-ai-optimise"
    },
    {
      title: "Portable ECG Sensor",
      description: "A portable device for monitoring ECG signals for health tracking with wireless data transmission capabilities.",
      icon: <Heart className="text-red-400" size={32} />,
      tags: ["Healthcare", "Sensors", "Wireless"],
      gradient: "from-red-500/20 to-pink-500/20",
      githubUrl: null
    },
    {
      title: "ML Customer Segmentation",
      description: "Machine learning project for customer segmentation using clustering algorithms to analyze customer behavior patterns.",
      icon: <Zap className="text-cyan-400" size={32} />,
      tags: ["Python", "Machine Learning", "Clustering"],
      gradient: "from-cyan-500/20 to-blue-500/20",
      githubUrl: "https://github.com/sounakmaiti123/PRODIGY_ML_02"
    },
    {
      title: "House Price Prediction ML",
      description: "Linear regression model to predict house prices based on various features like size, location, and amenities.",
      icon: <Wifi className="text-green-400" size={32} />,
      tags: ["Python", "Machine Learning", "Regression"],
      gradient: "from-green-500/20 to-teal-500/20",
      githubUrl: "https://github.com/sounakmaiti123/PRODIGY_ML_01"
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
                {project.title === "Distance Measurer" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300">
                        <Github size={18} />
                        Code
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center justify-between">
                          Distance Measurer - Arduino Code
                          <button 
                            onClick={() => copyToClipboard(distanceMeasurerCode)}
                            className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
                          >
                            <Copy size={16} />
                            Copy
                          </button>
                        </DialogTitle>
                      </DialogHeader>
                      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="text-green-400">{distanceMeasurerCode}</code>
                      </pre>
                    </DialogContent>
                  </Dialog>
                ) : project.title === "Obstacle Detection Car" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300">
                        <Github size={18} />
                        Code
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center justify-between">
                          Obstacle Detection Car - Arduino Code
                          <button 
                            onClick={() => copyToClipboard(obstacleDetectionCode)}
                            className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
                          >
                            <Copy size={16} />
                            Copy
                          </button>
                        </DialogTitle>
                      </DialogHeader>
                      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="text-green-400">{obstacleDetectionCode}</code>
                      </pre>
                    </DialogContent>
                  </Dialog>
                ) : project.title === "Portable ECG Sensor" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300">
                        <Github size={18} />
                        Code
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center justify-between">
                          Portable ECG Sensor - Arduino Code
                          <button 
                            onClick={() => copyToClipboard(portableEcgCode)}
                            className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
                          >
                            <Copy size={16} />
                            Copy
                          </button>
                        </DialogTitle>
                      </DialogHeader>
                      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="text-green-400">{portableEcgCode}</code>
                      </pre>
                    </DialogContent>
                  </Dialog>
                ) : project.githubUrl ? (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
                  >
                    <Github size={18} />
                    Code
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300">
                    <Github size={18} />
                    Code
                  </button>
                )}
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
