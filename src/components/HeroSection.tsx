import React from 'react';
import { motion } from 'motion/react';
import { useCipherAnimation } from '../hooks/useCipherAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function HeroSection() {
  const nameRef = useCipherAnimation('KRITENSH KUMAR', { delay: 500, duration: 800 });
  const titleRef = useCipherAnimation('Backend Developer, ML Engineer & DevOps', { delay: 800, duration: 800 });
  const specializationRef = useCipherAnimation('BACKEND SYSTEMS, MACHINE LEARNING & DEVOPS', { delay: 1100, duration: 800 });

  return (
    <section className="min-h-screen flex items-center px-8 bg-black relative overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI5MTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional Tech Workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Image Section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black/80 pb-12 z-40">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/src/assets/IMG-20250328-WA0014.jpg"
            alt="Hero Screenshot"
            className="w-full h-full object-cover opacity-60 hover:opacity-70 transition-opacity duration-300"
          />
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="mb-8">
              <h1 ref={nameRef} className="text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight font-mono">
                KRITENSH
                <br />
                KUMAR
              </h1>
              <div className="flex items-center mt-6">
                <span className="text-white text-2xl font-mono mr-4">+</span>
                <div className="flex-1 h-px bg-white"></div>
              </div>
              <h2 ref={titleRef} className="text-xl md:text-2xl text-white font-mono tracking-wide mt-4 uppercase">
                Backend Developer, ML Engineer & DevOps
              </h2>
            </div>
            <div className="border-l-2 border-gray-500 pl-6 mt-8">
              <p className="text-sm text-gray-400 font-mono">
                Central University of Jammu • B.Tech CSE
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-8 lg:mt-24"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-white tracking-widest font-mono mb-2 uppercase">
                  SPECIALIZATION
                </h3>
                <h4 ref={specializationRef} className="text-sm text-white tracking-widest font-mono mb-3 uppercase">
                  BACKEND SYSTEMS, MACHINE LEARNING & DEVOPS
                </h4>
              </div>
              
              <p className="text-xs text-gray-400 leading-relaxed font-mono max-w-sm">
                Developing scalable backend architectures, 
                ETL pipelines, intelligent systems, and cloud 
                infrastructure using Python, AWS, Docker, 
                Kubernetes, and modern ML frameworks.
              </p>
              
              <div className="pt-4">
                <h5 className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">
                  CURRENT ROLE
                </h5>
                <p className="text-xs text-gray-400 font-mono">
                  Backend Developer at Anuvrittiksha
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}