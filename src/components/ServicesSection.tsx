import React from 'react';
import { motion } from 'motion/react';
import { useScrollCipherAnimation } from '../hooks/useScrollCipherAnimation';

const services = [
  {
    title: 'BACKEND DEVELOPMENT',
    categories: [
      'Python & Node.js',
      'REST APIs & Microservices',
      'ETL Pipeline Development',
      'Database Design (MySQL, PostgreSQL, DynamoDB)',
      'System Architecture & Scalability'
    ],
    description: {
      title: 'INFRASTRUCTURE',
      content: 'Full-stack backend systems from API design to database optimization and cloud deployment.',
      additional: 'Built for scale. Optimized for performance. Deployed with confidence.'
    },
    image: 'https://images.unsplash.com/photo-1529126894674-8dd7cb884766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF3c3xlbnwxfHx8fDE3NTgyMTc2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'MACHINE LEARNING',
    categories: [
      'Predictive Analytics & Modeling',
      'Computer Vision & AI Agents',
      'Data Preprocessing & Feature Engineering',
      'Model Deployment & MLOps',
      'Big Data Processing'
    ],
    description: {
      title: 'INTELLIGENT SYSTEMS',
      content: 'From concept to production, ML models that solve real-world problems with measurable impact.',
      additional: 'Data-driven insights. Intelligent automation. Future-ready solutions.'
    },
    image: 'https://images.unsplash.com/photo-1718011087751-e82f1792aa32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhbGdvcml0aG1zfGVufDF8fHx8MTc1ODI5MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'CLOUD & DEVOPS',
    categories: [
      'AWS Services (EC2, S3, DynamoDB)',
      'Docker & Kubernetes',
      'CI/CD Pipeline Development',
      'GitLab & GitHub Actions',
      'Infrastructure as Code'
    ],
    description: {
      title: 'DEPLOYMENT',
      content: 'Cloud-native solutions with automated deployment pipelines and scalable infrastructure.',
      additional: 'Zero-downtime deployments. Automated scaling. Production-ready systems.'
    },
    image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NTgyOTE3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function ServicesSection() {
  const backendRef = useScrollCipherAnimation('BACKEND DEVELOPMENT', { delay: 200, duration: 600 });
  const mlRef = useScrollCipherAnimation('MACHINE LEARNING', { delay: 200, duration: 600 });
  const cloudRef = useScrollCipherAnimation('CLOUD & DEVOPS', { delay: 200, duration: 600 });

  return (
    <section className="py-20 mb-20 px-8 bg-black relative">
      <div className="relative z-20 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 py-20 border-b border-gray-800 last:border-b-0 relative"
          >
            {/* Background Image */}
            {index === 1 && (
              <div className="absolute inset-0 opacity-10">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Left Column - Service Title and Categories */}
            <div className="relative z-10">
              <h2 
                ref={service.title === 'BACKEND DEVELOPMENT' ? backendRef : 
                     service.title === 'MACHINE LEARNING' ? mlRef :
                     service.title === 'CLOUD & DEVOPS' ? cloudRef : null}
                className="text-3xl md:text-4xl text-white leading-tight font-mono mb-8 tracking-tight"
              >
                {service.title}
              </h2>
              
              <div className="space-y-2">
                {service.categories.map((category) => (
                  <div key={category} className="text-sm text-gray-400 font-mono tracking-wide">
                    • {category}
                  </div>
                ))}
              </div>
              
              {index === services.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <button className="text-white text-sm font-mono tracking-widest hover:opacity-60 transition-opacity duration-300">
                    VIEW PROJECTS &gt;
                  </button>
                </motion.div>
              )}
            </div>

            {/* Right Column - Description */}
            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-sm text-white tracking-widest font-mono mb-4 uppercase">
                  {service.description.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-mono mb-4">
                  {service.description.content}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                  {service.description.additional}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}