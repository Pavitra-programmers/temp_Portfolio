import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Customer Churn Prediction',
    category: 'MACHINE LEARNING',
    description: 'Leveraged predictive modeling to identify potential customer churn using advanced ML algorithms. Deployed using Flask backend with Scikit-learn for model serving.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'Scikit-learn', 'Flask', 'Data Analysis'],
    link: '#',
    github: '#'
  },
  {
    title: 'Alphabot2 Robot',
    category: 'ROBOTICS & AI',
    description: 'Autonomous robot performing various tasks without human intervention. Integrated sensors, cameras, and ML modules for advanced computational capabilities.',
    image: 'https://images.unsplash.com/photo-1649829726631-fcd218631ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdGljcyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzU4MjY0NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'Raspberry Pi', 'OpenCV', 'IoT Sensors'],
    link: '#',
    github: '#'
  },
  {
    title: 'Tic-Tac-AI',
    category: 'AI GAME DEVELOPMENT',
    description: 'AI-powered Tic-Tac-Toe game with unbeatable strategy implementation. Utilized Flask for backend logic and advanced game theory algorithms.',
    image: 'https://images.unsplash.com/photo-1718011087751-e82f1792aa32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhbGdvcml0aG1zfGVufDF8fHx8MTc1ODI5MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'Flask', 'AI Algorithms', 'Game Theory'],
    link: '#',
    github: '#'
  },
  {
    title: 'DRDO AI Agents',
    category: 'DEFENSE TECHNOLOGY',
    description: 'AI-powered agents for threat detection and analysis. Mentored 15+ weekly threat indicators relevant to national security using ML and web technologies.',
    image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NTgyOTE3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Machine Learning', 'Python', 'Security Analytics', 'Web Technologies'],
    link: '#',
    github: '#'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-white leading-tight font-mono mb-4 tracking-tight">
            SELECTED PROJECTS
          </h2>
          <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
            Production-ready solutions & research initiatives
          </p>
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
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a 
                      href={project.link}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
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