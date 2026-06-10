import React from 'react';
import { motion } from 'motion/react';
import { useScrollCipherAnimation } from '../hooks/useScrollCipherAnimation';
import { useCipherAnimation } from '../hooks/useCipherAnimation';

const experiences = [
  {
    company: 'WOOTZAPP PVT. LTD. (ARAKOO)',
    role: 'Software Developer Intern',
    period: 'NOV 2025 - MAY 2026',
    description: 'Contributed across 5 production systems: StringCost: full-stack LLM billing gateway unifying 250+ AI providers with multi-tenant RBAC, MCP orchestration, and real-time cost analytics, deployed on GKE via Helm/Skaffold/Terraform (70% faster deploys). Autopilot: Next.js + Electron AI platform with Google Gemini RAG, voice activity detection, screen capture, and Stripe billing. OpenWork: open-source agentic desktop app (Tauri + React) for AI workflow management. OpenEral: Docker sandbox for AI coding agents with PostgreSQL persistence. Gateway: LLM routing gateway supporting 200+ models with retries, fallbacks, and load balancing.',
    website: 'app.stringcost.com'
  },
  {
    company: 'FORNAX EVERUSEFUL PVT. LTD.',
    role: 'Backend and DevOps Intern',
    period: 'JUL 2025 - NOV 2025',
    description: 'Architected and implemented scalable backend systems and ETL pipelines using Python and Node.js. Orchestrated AWS cloud services (EC2, DynamoDB, S3) integration with automated CI/CD workflows via GitHub Actions, achieving 25% reduction in deployment cycles. Optimized cloud infrastructure through strategic resource allocation and autoscaling policies, resulting in 35% improvement in system scalability and cost efficiency.',
    website: 'amoghconnect.com'
  },
  {
    company: 'DRDO',
    role: 'Summer Intern',
    period: 'JUN 2025 - JUL 2025',
    description: 'Engineered AI-powered intelligence agents leveraging advanced Machine Learning algorithms and web scraping frameworks for national security applications. Developed automated workflows for real-time open-source intelligence (OSINT) analysis, reducing manual review time by 30% while maintaining 95%+ accuracy in threat indicator identification and classification.',
    website: null
  },
  {
    company: 'ANUVRITTIKSHA PVT. LTD',
    role: 'Associate Developer Intern',
    period: 'OCT 2024 - APR 2025',
    description: 'Designed and implemented enterprise-grade backend systems and ETL pipelines using Python and Node.js, achieving 40% reduction in data processing latency. Integrated AWS cloud services (S3, Glue, DynamoDB, Polly, Transcribe) to build automated data workflows, improving operational efficiency by 35% and enhancing system reliability across multiple production modules.',
    website: 'howtoalgo.com'
  },
  {
    company: 'ANUVRITTIKSHA PVT. LTD',
    role: 'Creative Technology Developer Intern',
    period: 'SEPT 2024',
    description: 'Developed technical educational content including scripts and animations for Data Structures and Algorithms tutorials. Strengthened technical communication, problem-solving methodologies, and instructional design capabilities.',
    website: 'howtoalgo.com'
  },
  {
    company: 'ACMEGRADE',
    role: 'Cybersecurity Intern',
    period: 'JAN 2024 - MAR 2024',
    description: 'Executed comprehensive security assessments including threat analysis and vulnerability testing across enterprise systems, identifying and documenting 150+ potential security vulnerabilities. Implemented advanced security protocols and hardening measures, successfully mitigating 200+ attempted intrusions and strengthening overall system security posture.',
    website: null
  }
];

const achievements = [
  'RELIANCE FOUNDATION SCHOLAR 2023',
  'HACKAWAY 2025 - 2ND POSITION',
  'IBM TECHXCHANGE 2024 - 5TH RANK',
  'IIRS START PROGRAMME CERTIFICATION (ISRO)',
  'DOCKER & KUBERNETES CERTIFIED',
  'CYBER SECURITY TRAINING COMPLETION'
];

const technologies = [
  { category: 'LANGUAGES', items: ['Python', 'C/C++', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { category: 'DATABASES', items: ['MySQL', 'PostgreSQL', 'DynamoDB', 'S3', 'MongoDB', 'Knex.js'] },
  { category: 'CLOUD & DEVOPS', items: ['AWS (EC2, S3, Glue)', 'Google Cloud (GKE)', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'Skaffold', 'GitHub Actions', 'CI/CD'] },
  { category: 'FRAMEWORKS', items: ['Flask', 'Django', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Hono', 'Firebase', 'Hugging Face', 'Tailwind CSS', 'N8N Automation', 'REST APIs', 'Microservices', 'JWT'] },
  { category: 'ML & AI', items: ['Machine Learning', 'Hugging Face', 'N8N Automation', 'NLP', 'Data Analysis'] }
];

export function ExperienceSection() {
  const titleRef = useScrollCipherAnimation('PROFESSIONAL EXPERIENCE', { delay: 200, duration: 500 });
  const languagesRef = useScrollCipherAnimation('LANGUAGES', { delay: 300, duration: 400 });
  const databasesRef = useScrollCipherAnimation('DATABASES', { delay: 300, duration: 400 });
  const cloudRef = useScrollCipherAnimation('CLOUD & DEVOPS', { delay: 300, duration: 400 });
  const frameworksRef = useScrollCipherAnimation('FRAMEWORKS', { delay: 300, duration: 400 });
  const mlRef = useScrollCipherAnimation('ML & AI', { delay: 300, duration: 400 });

  return (
    <>
      {/* Screenshot Image Section */}
      <div className="relative bg-gradient-to-b from-transparent to-black/80">
        <div className="flex items-center justify-center">
          <img 
            src="/assets/10.jpg"
            alt="Experience Screenshot"
            className="h-96 w-full object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
            style={{ filter: 'grayscale(90%) contrast(1.1)' }}
          />
        </div>
      </div>

      <section id="experience" className="py-20 px-8 bg-black relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
          <img 
            src="/assets/2.jpg"
            alt="Technology Background"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 mb-20 px-4 py-8"
        >
          <div>
            <div className="mb-8">
              <h2 ref={titleRef} className="text-3xl md:text-4xl text-white leading-tight font-mono tracking-tight">
                PROFESSIONAL
                <br />
                EXPERIENCE
              </h2>
              <div className="flex items-center mt-4">
                <span className="text-white text-lg font-mono mr-3">+</span>
                <div className="flex-1 h-px bg-white"></div>
              </div>
              <p className="text-sm text-white font-mono tracking-wide mt-3 uppercase">
                Generative AI, Backend Systems & Cloud Infrastructure
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-white tracking-widest font-mono mb-4 uppercase">
                CURRENT FOCUS
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-mono mb-4">
                Specialized in Generative AI/ML development,
                building full-stack LLM gateway platforms,
                multi-tenant backend systems, and deploying
                production-grade infrastructure on GKE with
                Helm, Skaffold, and Terraform.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">
                Pursuing B.Tech in Computer Science at 
                Central University of Jammu.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 mb-20"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-6 py-6 border-b border-gray-800/50"
            >
              <div className="md:col-span-1">
                <h4 className="text-sm text-white font-mono tracking-widest uppercase mb-1">
                  {exp.company}
                </h4>
                <span className="text-xs text-gray-500 font-mono">
                  {exp.period}
                </span>
                {exp.website && (
                  <div className="mt-2">
                    <a 
                      href={`https://${exp.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-600 font-mono hover:text-gray-400 transition-colors duration-300"
                    >
                      {exp.website}
                    </a>
                  </div>
                )}
              </div>
              
              <div className="md:col-span-3">
                <h5 className="text-sm text-gray-300 font-mono tracking-wide mb-2">
                  {exp.role}
                </h5>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-16 mb-20"
        >
          <div>
            <h3 className="text-sm text-white tracking-widest font-mono mb-8 uppercase">
              TECHNICAL SKILLS
            </h3>
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <h6 
                    ref={tech.category === 'LANGUAGES' ? languagesRef : 
                         tech.category === 'DATABASES' ? databasesRef :
                         tech.category === 'CLOUD & DEVOPS' ? cloudRef :
                         tech.category === 'FRAMEWORKS' ? frameworksRef :
                         tech.category === 'ML & AI' ? mlRef : null}
                    className="text-xs text-gray-500 font-mono tracking-wider uppercase mb-2"
                  >
                    {tech.category}
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span 
                        key={item}
                        className="text-xs text-gray-400 font-mono bg-gray-800/30 px-2 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-white tracking-widest font-mono mb-8 uppercase">
              ACHIEVEMENTS & CERTIFICATIONS
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-xs text-gray-400 font-mono"
                >
                  • {achievement}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      </section>
    </>
  );
}