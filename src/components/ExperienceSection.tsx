import React from 'react';
import { motion } from 'motion/react';
import { useScrollCipherAnimation } from '../hooks/useScrollCipherAnimation';
import { useCipherAnimation } from '../hooks/useCipherAnimation';

const experiences = [
  {
    company: 'FORNAX EVERUSEFUL PVT. LTD.',
    role: 'Backend Developer',
    period: 'JUN 2025 - CURRENT',
    description: 'Developing backend systems and ETL pipelines using Python and Node.js. Integrated AWS services (EC2, DynamoDB, S3) with CRUD pipelines via GitHub Actions. Implemented CI/CD pipelines and containerized applications using Docker.',
    website: 'amoghconnect.com'
  },
  {
    company: 'ANUVRITTIKSHA PVT. LTD',
    role: 'Associate Developer Intern',
    period: 'OCT 2024 - APR 2025',
    description: 'Backend systems and ETL pipelines using Python and Node.js. AWS services including S3, Glue, DynamoDB, Polly, and Transcribe. Collaborated using Scrum, Microsoft Teams, and SharePoint.',
    website: 'howtoalgo.com'
  },
  {
    company: 'DRDO',
    role: 'Summer Intern',
    period: 'JUN 2025 - JUL 2025',
    description: 'Designed and developed AI-powered agents leveraging Machine Learning and Web technologies. Mentored 15+ weekly threat indicators relevant to national security.',
    website: null
  },
  {
    company: 'ANUVRITTIKSHA PVT. LTD',
    role: 'Creative Technology Developer Intern',
    period: 'AUG 2024 - SEPT 2024',
    description: 'Created technical scripts and engaging animations for DSA tutorials. Enhanced problem-solving, design, and technical communication skills.',
    website: 'howtoalgo.com'
  },
  {
    company: 'APNA GUIDE',
    role: 'Machine Learning Intern',
    period: 'JUN 2024 - JUL 2024',
    description: 'Preprocessed data, trained and evaluated ML models. Gained hands-on experience in threat analysis, vulnerability assessment, and security protocols.',
    website: null
  },
  {
    company: 'ACMEGRADE',
    role: 'Cybersecurity Intern',
    period: 'JAN 2024 - MAR 2024',
    description: 'Industry Relevant Training and hardening. Gained hands-on experience in threat analysis, vulnerability assessment, and security protocols.',
    website: null
  }
];

const achievements = [
  'RELIANCE FOUNDATION SCHOLAR 2023',
  'HACKDEMY 2025 - 2ND POSITION',
  'IBM TECHXCHANGE 2024 - 5TH RANK',
  'IDS START PROGRAMME CERTIFICATION',
  'DOCKER & KUBERNETES CERTIFIED',
  'MACHINE LEARNING WITH BIG DATA'
];

const technologies = [
  { category: 'LANGUAGES', items: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'DATABASES', items: ['MySQL', 'PostgreSQL', 'DynamoDB'] },
  { category: 'CLOUD & DEVOPS', items: ['AWS', 'EC2', 'S3', 'Docker', 'GitHub Actions', 'Firebase', 'Hostinger'] },
  { category: 'FRAMEWORKS', items: ['Flask', 'REST APIs', 'Microservices', 'Scrum', 'JWT'] },
  { category: 'ML & AI', items: ['Machine Learning', 'Agentic AI', 'n8n', 'Data Analysis'] }
];

export function ExperienceSection() {
  const titleRef = useScrollCipherAnimation('PROFESSIONAL EXPERIENCE', { delay: 200, duration: 500 });
  const languagesRef = useScrollCipherAnimation('LANGUAGES', { delay: 300, duration: 400 });
  const databasesRef = useScrollCipherAnimation('DATABASES', { delay: 300, duration: 400 });
  const cloudRef = useScrollCipherAnimation('CLOUD & DEVOPS', { delay: 300, duration: 400 });
  const frameworksRef = useScrollCipherAnimation('FRAMEWORKS', { delay: 300, duration: 400 });
  const mlRef = useScrollCipherAnimation('ML & AI', { delay: 300, duration: 400 });

  return (
    <section id="experience" className="py-20 px-8 bg-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI5MTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Screenshot Image Section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black/80 pb-12 z-40">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/src/assets/Screenshot 2025-09-21 121203.png"
            alt="Experience Screenshot"
            className="h-32 w-auto object-contain opacity-60 hover:opacity-70 transition-opacity duration-300"
          />
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 mb-20"
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
                Backend development, machine learning & DevOps solutions
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-white tracking-widest font-mono mb-4 uppercase">
                CURRENT FOCUS
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-mono mb-4">
                Backend development, machine learning, and DevOps 
                solutions with emphasis on scalable cloud 
                architecture, containerization, and CI/CD pipelines.
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
  );
}