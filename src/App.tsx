import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2, Phone } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('web');

  const webProjects = [
    {
      title: "Csgo-game- Stats Backend",
      description: "A RESTful API built with Node.js and Express for fetching CS:GO game statistics.",
      link: "https://github.com/TheOratorEse/csgo-game-stats",
      tech: ["Python", "Flask", "Backend Api", "JWT"]
    },
    {
      title: "Fit2Feet Backend",
      description: "A backend service for the Fit2Feet mobile application, handling user data and shoe size recommendations.",
      link: "https://github.com/TheOratorEse/fit2feetserver",
      tech: ["Python", "Flask", "Machine Learning", "OpenCv Python"]
    },
    {
      title: "Inventory Management System",
      description: "A web-based inventory management system with real-time stock tracking and automated reordering capabilities.",
      link: "https://github.com/TheOratorEse/inventory-management-system",
      tech: ["Vue", "Laravel", "Express", "MongoDB"]
    },
    {
      title: "Real Estate Website",
      description: "A modern real estate platform featuring property listings, search functionality, and user authentication.",
      link: "https://github.com/TheOratorEse/real-estate-website",
      tech: ["React", "Node.js", "Express", "MongoDB"]
    }
  ];

  const mobileProjects = [
    {
      title: "Citi Pass App",
      description: "City Pass App is a comprehensive digital solution designed to streamline the management of visitor access in gated communities and residential estates. The application provides a secure and efficient way to generate, manage, and verify gate passes for visitors, while keeping residents and administrators connected through a robust notification system.",
      link: "https://github.com/TheOratorEse/city-pass-app",
      tech: ["Flutter", "Firebase", "Supabase"]
    },
    {
      title: "WebView App",
      description: "A mobile application that utilizes WebView to convert existing webApp to a Mobile app, display web content, providing a seamless browsing experience.",
      link: "https://github.com/TheOratorEse/webview_app",
      tech: ["Flutter", "Javascript", "WebView", "Firebase"]
    },
    {
      title: "Fit2Feet",
      description: "A mobile application for fitness enthusiasts, feet measurement, and shoe size recommendations.",
      link: "https://github.com/TheOratorEse/delivery-app",
      tech: ["Flutter", "Provider", "Python", "Flask", "Machine Learning"]
    },
    {
      title: "Food Recipe App",
      description: "A cross-platform mobile application for discovering and sharing food recipes with social features.",
      link: "https://github.com/TheOratorEse/food-recipe-app",
      tech: ["Flutter", "Firebase", "Node.js"]
    },

    {
      title: "Taski Manager App",
      description: "A task management application that helps users organize and prioritize their tasks efficiently.",
      link: "https://github.com/TheOratorEse/taski-manager-app",
      tech: ["Flutter", "Supabase", "Sqflite", "Provider"]
    },
    {
      title: "Weather Mobile App",
      description: "A weather forecasting application with location-based services and detailed weather information.",
      link: "https://github.com/TheOratorEse/weather-mobile-app",
      tech: ["Flutter", "Provider", "Weather API", "Geolocation", "Firebase"]
    },
    {
      title: "CycleKit Mobile App",
      description: "A mobile application for Tracking female cycle, ovulation, fertility and getting sanitary products.",
      link: "https://github.com/TheOratorEse/cyclekit",
      tech: ["React Native", "Redux", "Node.js"]
    }
  ];

  const techStacks = [
    "Flutter", "Laravel", "Python", "Flask",
    "JavaScript", "TypeScript", "React", "React Native",
    "Node.js", "Express.js", "MongoDB", "PostgreSQL",
    "Firebase", "Supabase", "Redux", "REST API", "Git", "CI/CD",
    "HTML5", "CSS3", "Tailwind CSS", "JWT", "Docker", "Kubernetes",
    "AWS", "Heroku", "Vercel", "Netlify", "Figma", "Postman"
  ];

  return (
    <div className="min-h-screen bg-purple-900 text-white font-['Baskerville']">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <img 
            src="https://i.postimg.cc/SRKzBXHr/eseiwi.jpg" //my image url
            alt="Eseiwi Omorogbe"
            className="w-48 h-48 rounded-full border-4 border-purple-400 shadow-lg animate-fade-in"
          />
        </div>

        <h1 className="text-5xl font-bold mb-6 animate-fade-in">Eseiwi Omorogbe</h1>
        <p className="text-2xl mb-8 text-purple-200">Full Stack Mobile & Web Developer</p>
        
        {/* About Section */}
        <div className="max-w-2xl mx-auto mb-8 bg-purple-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-purple-200 leading-relaxed">
            I am a passionate Full Stack Developer with extensive experience in both web and mobile development. 
            Specializing in creating robust and scalable applications using modern technologies, I have a proven 
            track record of delivering high-quality solutions that meet business objectives. With expertise in 
            Flutter, React, and Python(Flask), Laravel, Node.js, and various other technologies, I bring a comprehensive approach to 
            software development, from concept to deployment.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/TheOratorEse" target="_blank" rel="noopener noreferrer" 
             className="hover:text-purple-300 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/eseiwi-omorogbe" target="_blank" rel="noopener noreferrer"
             className="hover:text-purple-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:esewi.omorogbe@gmail.com" className="hover:text-purple-300 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-16 bg-purple-800 rounded-lg my-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStacks.map((tech, index) => (
            <span key={index} 
                  className="px-4 py-2 bg-purple-700 rounded-full hover:bg-purple-600 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setActiveTab('web')}
            className={`px-6 py-2 rounded-l-lg transition-colors ${
              activeTab === 'web' ? 'bg-purple-600' : 'bg-purple-800'
            }`}
          >
            <Code2 className="inline mr-2" size={18} />
            Web Apps
          </button>
          <button 
            onClick={() => setActiveTab('mobile')}
            className={`px-6 py-2 rounded-r-lg transition-colors ${
              activeTab === 'mobile' ? 'bg-purple-600' : 'bg-purple-800'
            }`}
          >
            <Phone className="inline mr-2" size={18} />
            Mobile Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {(activeTab === 'web' ? webProjects : mobileProjects).map((project, index) => (
            <div key={index} 
                 className="bg-purple-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-purple-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-sm bg-purple-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-purple-300 hover:text-white">
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Resume & Professional Profile</h2>
        <div className="flex justify-center gap-6">
          <a href="https://drive.google.com/file/d/1Z_dhu1wjbp-HVp2RIVK4xL248QlJo838/view?usp=drive_link" 
             target="_blank"
             className="inline-flex items-center bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500 transition-colors">
            <FileText className="mr-2" size={20} />
            View Resume
          </a>
          <a href="https://linkedin.com/in/eseiwi-omorogbe" 
             target="LinkedIn Profile"
             className="inline-flex items-center bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500 transition-colors">
            <Linkedin className="mr-2" size={20} />
            LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;