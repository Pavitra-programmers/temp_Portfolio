import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollCipherAnimation } from '../hooks/useScrollCipherAnimation';

const projects = [
  {
    title: 'OpenWork — Agentic AI Desktop App',
    category: 'OPEN SOURCE / AI TOOLING',
    description: 'Local-first, open-source alternative to Claude Code — a desktop app and CLI for AI-assisted workflows with skill management, session persistence, and permission controls.',
    image: '/assets/openwork.jpg',
    technologies: ['React', 'TypeScript', 'Tauri', 'Rust', 'Node.js'],
    link: null,
    github: 'https://github.com/Pavitra-programmers/openwork'
  },
  {
    title: 'OpenEral — AI Agent Sandbox',
    category: 'DEVOPS / AI INFRASTRUCTURE',
    description: 'Containerized sandbox for AI coding agents with PostgreSQL-backed persistent home directories. Reduced setup to a single command — migrations, workspace restore, and agent launch in one Docker image.',
    image: '/assets/openeral.jpg',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Supabase'],
    link: null,
    github: 'https://github.com/Pavitra-programmers/openeral'
  },
  {
    title: 'Gateway — LLM Routing Gateway',
    category: 'AI INFRASTRUCTURE',
    description: 'Open-source LLM gateway routing to 200+ models across 40+ providers with retries, fallbacks, load balancing, guardrails, and caching. 10B+ tokens processed daily.',
    image: '/assets/gateway.jpg',
    technologies: ['TypeScript', 'Node.js', 'Hono', 'Redis', 'PostgreSQL', 'MCP'],
    link: null,
    github: 'https://github.com/Pavitra-programmers/gateway'
  },
  {
    title: 'Autonomous AI Orchestrator',
    category: 'AI / NLP',
    description: 'Routes student requests to educational tools using NLP intent detection and parameter extraction. Integrates into chatbots for context-aware, tool-selected responses.',
    image: '/assets/aiorchestrator.jpg',
    technologies: ['Python', 'FastAPI', 'NLP', 'AI Agents'],
    link: null,
    github: 'https://github.com/Pavitra-programmers/Autonomous-AI-Tutor-Orchestrator'
  },
  {
    title: 'Book Review Platform',
    category: 'FULL-STACK WEB',
    description: 'Responsive MERN stack app where users sign up and review books, with JWT authentication, bcrypt password hashing, and persistent login sessions via Context API.',
    image: '/assets/bookreview.jpg',
    technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    link: 'https://bookreviewassign.gt.tc',
    github: null
  },
  {
    title: 'Customer Churn Prediction',
    category: 'MACHINE LEARNING',
    description: 'Predictive model to identify potential customer churn using advanced ML algorithms, deployed with a Flask backend and Scikit-learn for real-time model serving.',
    image: '/assets/customerchurn.jpg',
    technologies: ['Python', 'Scikit-learn', 'Flask', 'Data Analysis'],
    link: 'https://costumer-churn-prediction-rq8j.onrender.com/',
    github: 'https://github.com/Pavitra-programmers/Costumer-Churn-Prediction'
  },
  {
    title: 'Campus Vehicle Access Management',
    category: 'COMPUTER VISION',
    description: 'Automated system for detecting vehicle number plates and managing campus entry/exit using image recognition and machine learning for real-time access control.',
    image: '/assets/campusvehicledetection.jpg',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    link: 'https://github.com/Pavitra-programmers/Campus-Vehicle-Access-Management-System-CVAMS',
    github: 'https://github.com/Pavitra-programmers/Campus-Vehicle-Access-Management-System-CVAMS'
  },
  {
    title: 'Tic-Tac-AI',
    category: 'AI GAME DEVELOPMENT',
    description: 'AI-powered Tic-Tac-Toe with an unbeatable minimax strategy engine with alpha-beta pruning, served via a Flask backend.',
    image: '/assets/tictactoe.jpg',
    technologies: ['Python', 'Flask', 'AI Algorithms', 'Game Theory'],
    link: 'https://costumer-churn-prediction-rq8j.onrender.com/',
    github: 'https://github.com/Pavitra-programmers/TIC-TAC-TOE-AI'
  },
];

export function ProjectsSection() {
  const titleRef = useScrollCipherAnimation('SELECTED PROJECTS', { delay: 200, duration: 500 });

  const openUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="px-8 bg-black" style={{ paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px' }}
        >
          <h2 ref={titleRef} className="text-3xl md:text-4xl text-white font-mono tracking-tight">
            SELECTED PROJECTS
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
            <span className="text-white text-lg font-mono" style={{ marginRight: '12px' }}>+</span>
            <div style={{ flex: 1, height: '1px', background: 'white' }} />
          </div>
          <p className="text-white font-mono tracking-wide uppercase" style={{ marginTop: '12px', fontSize: '0.875rem' }}>
            Production-ready solutions &amp; research initiatives
          </p>
        </motion.div>

        {/* 4-column × 2-row grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '20px',
        }}>
          {projects.slice(0, 8).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #1f2937',
                background: '#0a0f1a',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#4b5563')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1f2937')}
            >
              {/* Image — fixed 16:9 */}
              <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }} />
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px', gap: '8px' }}>

                {/* Category + links row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.55rem',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    flex: 1,
                    marginRight: '4px',
                  }}>
                    {project.category}
                  </span>
                  <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                    {project.link && (
                      <button
                        onClick={() => openUrl(project.link!)}
                        style={{ color: '#9ca3af', padding: '3px', border: '1px solid #374151', background: 'none', cursor: 'pointer', display: 'flex' }}
                        title="Visit"
                      >
                        <ExternalLink size={10} />
                      </button>
                    )}
                    {project.github && (
                      <button
                        onClick={() => openUrl(project.github!)}
                        style={{ color: '#9ca3af', padding: '3px', border: '1px solid #374151', background: 'none', cursor: 'pointer', display: 'flex' }}
                        title="GitHub"
                      >
                        <Github size={10} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: 'monospace',
                  fontSize: '0.6rem',
                  color: '#9ca3af',
                  lineHeight: 1.6,
                  margin: 0,
                  flex: 1,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                } as React.CSSProperties}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginTop: '2px' }}>
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} style={{
                      fontFamily: 'monospace',
                      fontSize: '0.55rem',
                      color: '#6b7280',
                      background: 'rgba(31,41,55,0.6)',
                      padding: '1px 5px',
                    }}>
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
