import React from 'react';
import { motion } from 'motion/react';
import { useScrollCipherAnimation } from '../hooks/useScrollCipherAnimation';

const services = [
  {
    title: 'BACKEND DEVELOPMENT',
    categories: [
      'Python (Flask, Django) & Node.js (Express)',
      'RESTful APIs & Microservices Architecture',
      'ETL Pipeline Engineering & Data Processing',
      'Database Design & Optimization (MySQL, PostgreSQL, DynamoDB, MongoDB)',
      'System Architecture, Scalability & Performance Tuning',
      'Event-Driven Architecture & Message Queues'
    ],
    description: {
      title: 'BACKEND SYSTEMS',
      content: 'Enterprise-grade backend architectures from API design to database optimization and cloud deployment. Building high-performance, fault-tolerant systems that handle millions of requests.',
      additional: 'Engineered for scale. Optimized for performance. Battle-tested in production.'
    },
    image: '/assets/1.avif'
  },
  {
    title: 'MACHINE LEARNING & AI',
    categories: [
      'Predictive Analytics & Statistical Modeling',
      'Computer Vision & AI Agent Development',
      'Natural Language Processing (NLP)',
      'Data Preprocessing, Feature Engineering & Model Training',
      'MLOps & Production Model Deployment',
      'Big Data Processing & Real-time Analytics'
    ],
    description: {
      title: 'AI SOLUTIONS',
      content: 'Production-ready ML models and AI agents that solve complex business problems with measurable ROI. From data pipeline to deployment, delivering intelligent systems that scale.',
      additional: 'Data-driven decision making. Intelligent automation. Enterprise AI solutions.'
    },
    image: '/assets/5.png'
  },
  {
    title: 'CLOUD & DEVOPS',
    categories: [
      'Google Cloud Platform (GKE, Compute Engine)',
      'AWS Services (EC2, S3, DynamoDB, Glue)',
      'Kubernetes Orchestration & Docker Containerization',
      'Infrastructure as Code (Terraform, Helm, Skaffold)',
      'CI/CD Automation (GitHub Actions, GitLab)',
      'Microservices Architecture & Service Mesh'
    ],
    description: {
      title: 'CLOUD INFRASTRUCTURE',
      content: 'Enterprise-grade cloud-native solutions with automated deployment pipelines, container orchestration, and infrastructure as code. Architecting scalable, resilient systems on GKE and AWS.',
      additional: 'Zero-downtime deployments. Auto-scaling infrastructure. Production-hardened systems with 99.9% uptime.'
    },
    image: '/assets/1.avif'
  }
];

export function ServicesSection() {
  const backendRef = useScrollCipherAnimation('BACKEND DEVELOPMENT', { delay: 200, duration: 600 });
  const mlRef = useScrollCipherAnimation('MACHINE LEARNING & AI', { delay: 200, duration: 600 });
  const cloudRef = useScrollCipherAnimation('CLOUD & DEVOPS', { delay: 200, duration: 600 });

  return (
    <section className="px-8 bg-black relative">
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
                     service.title === 'MACHINE LEARNING & AI' ? mlRef :
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