import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollCipherAnimation } from '../hooks/useScrollCipherAnimation';

const projects = [
  {
    title: 'Customer Churn Prediction',
    category: 'MACHINE LEARNING',
    description: 'Leveraged predictive modeling to identify potential customer churn using advanced ML algorithms. Deployed using Flask backend with Scikit-learn for model serving.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'Scikit-learn', 'Flask', 'Data Analysis'],
    link: 'https://costumer-churn-prediction-rq8j.onrender.com/',
    github: 'https://github.com/Pavitra-programmers/Costumer-Churn-Prediction'
  },
  {
    title: 'Campus Vehicle Access Management System',
    category: 'COMPUTER VISION',
    description: 'Automated system designed to detect vehicle number plates and manage entry/exit of vehicles on college campus. Utilizes advanced image recognition and machine learning technologies.',
    image: 'https://images.unsplash.com/photo-1649829726631-fcd218631ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdGljcyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzU4MjY0NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    link: 'https://github.com/Pavitra-programmers/Campus-Vehicle-Access-Management-System-CVAMS',
    github: 'https://github.com/Pavitra-programmers/Campus-Vehicle-Access-Management-System-CVAMS'
  },
  {
    title: 'Tic-Tac-AI',
    category: 'AI GAME DEVELOPMENT',
    description: 'AI-powered Tic-Tac-Toe game with unbeatable strategy implementation. Utilized Flask for backend logic and advanced game theory algorithms.',
    image: 'https://images.unsplash.com/photo-1718011087751-e82f1792aa32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhbGdvcml0aG1zfGVufDF8fHx8MTc1ODI5MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'Flask', 'AI Algorithms', 'Game Theory'],
    link: 'https://costumer-churn-prediction-rq8j.onrender.com/',
    github: 'https://github.com/Pavitra-programmers/TIC-TAC-TOE-AI'
  },
  {
    title: 'Quantum Encryption using WatsonX AI',
    category: 'QUANTUM COMPUTING',
    description: 'Advanced quantum encryption system leveraging IBM WatsonX AI capabilities. Implements quantum key distribution and cryptographic protocols for enhanced security.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nfGVufDF8fHx8MTc1ODI5MTc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'Quantum Computing', 'IBM WatsonX', 'Cryptography'],
    link: 'https://github.com/Pavitra-programmers/Quantum-Encryption-using-WatsonXAi',
    github: 'https://github.com/Pavitra-programmers/Quantum-Encryption-using-WatsonXAi'
  },
];

export function ProjectsSection() {
  const titleRef = useScrollCipherAnimation('SELECTED PROJECTS', { delay: 200, duration: 500 });

  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-8 bg-black relative">
      {/* Screenshot Image Section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black/80 pb-12 z-40">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/src/assets/Screenshot 2025-09-21 121236.png"
            alt="Projects Screenshot"
            className="h-32 w-auto object-contain opacity-60 hover:opacity-70 transition-opacity duration-300"
          />
        </div>
      </div>
      
      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 ref={titleRef} className="text-3xl md:text-4xl text-white leading-tight font-mono tracking-tight">
              SELECTED PROJECTS
            </h2>
            <div className="flex items-center mt-4">
              <span className="text-white text-lg font-mono mr-3">+</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>
            <p className="text-sm text-white font-mono tracking-wide mt-3 uppercase">
              Production-ready solutions & research initiatives
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x225/1a1a1a/ffffff?text=Project+Image';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Action Buttons Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && project.link !== '#' && (
                    <button
                      onClick={(e) => handleLinkClick(project.link!, e)}
                      className="bg-black/80 hover:bg-black text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                      title="Visit Website"
                    >
                      <ExternalLink size={16} />
                    </button>
                  )}
                  {project.github && project.github !== '#' && (
                    <button
                      onClick={(e) => handleLinkClick(project.github!, e)}
                      className="bg-black/80 hover:bg-black text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                      title="View on GitHub"
                    >
                      <Github size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.link && project.link !== '#' && (
                      <button
                        onClick={(e) => handleLinkClick(project.link!, e)}
                        className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded border border-gray-700 hover:border-gray-500 hover:bg-gray-800/50"
                        title="Visit Website"
                      >
                        <ExternalLink size={16} />
                      </button>
                    )}
                    {project.github && project.github !== '#' && (
                      <button
                        onClick={(e) => handleLinkClick(project.github!, e)}
                        className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded border border-gray-700 hover:border-gray-500 hover:bg-gray-800/50"
                        title="View on GitHub"
                      >
                        <Github size={16} />
                      </button>
                    )}
                  </div>
                </div>

                <h3 className="text-lg text-white font-mono tracking-tight group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs text-gray-500 font-mono bg-gray-800/50 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}