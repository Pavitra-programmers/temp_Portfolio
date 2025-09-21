import React from 'react';
import { motion } from 'motion/react';
import { useCipherAnimation } from '../hooks/useCipherAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function HeroSection() {
  const nameRef = useCipherAnimation('KRITENSH KUMAR', { delay: 500, duration: 800 });
  const titleRef = useCipherAnimation('Backend Developer, ML Engineer & DevOps', { delay: 800, duration: 800 });
  const specializationRef = useCipherAnimation('BACKEND SYSTEMS, MACHINE LEARNING & DEVOPS', { delay: 1100, duration: 800 });

  return (
    <section className="min-h-screen flex items-center px-4 mobile:px-6 sm:px-8 bg-black relative overflow-hidden pt-20 mobile:pt-24 sm:pt-0">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 opacity-42">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <img 
          src="/src/assets/4.jpg"
          alt="Professional Tech Workspace"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto mobile:px-4">
        <div className="grid lg:grid-cols-2 gap-16 mobile:gap-8 items-start">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="mb-8 mobile:mb-6">
              <h1 ref={nameRef} className="text-3xl mobile:text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mobile:leading-tight tracking-tight font-mono">
                KRITENSH
                <br />
                KUMAR
              </h1>
              <div className="flex items-center mt-4 mobile:mt-3 sm:mt-6">
                <span className="text-white text-lg mobile:text-xl sm:text-2xl font-mono mr-3 sm:mr-4">+</span>
                <div className="flex-1 h-px bg-white"></div>
              </div>
              <h2 ref={titleRef} className="text-xs mobile:text-sm sm:text-xl md:text-2xl text-white font-mono tracking-wide mt-3 mobile:mt-2 sm:mt-4 uppercase">
                Backend Developer, ML Engineer & DevOps
              </h2>
            </div>
            <div className="border-l-2 border-gray-500 pl-4 mobile:pl-3 sm:pl-6 mt-6 mobile:mt-4 sm:mt-8">
              <p className="text-xs mobile:text-xs sm:text-sm text-gray-400 font-mono">
                Central University of Jammu • B.Tech CSE
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-8 mobile:mt-6 lg:mt-24"
          >
            <div className="space-y-6 mobile:space-y-4">
              <div>
                <h3 className="text-sm mobile:text-xs text-white tracking-widest font-mono mb-2 mobile:mb-1 uppercase">
                  SPECIALIZATION
                </h3>
                <h4 ref={specializationRef} className="text-sm mobile:text-xs text-white tracking-widest font-mono mb-3 mobile:mb-2 uppercase">
                  BACKEND SYSTEMS, MACHINE LEARNING & DEVOPS
                </h4>
              </div>
              
              <p className="text-xs mobile:text-xs text-gray-400 leading-relaxed mobile:leading-relaxed font-mono max-w-sm mobile:max-w-sm">
                Developing scalable backend architectures, 
                ETL pipelines, intelligent systems, and cloud 
                infrastructure using Python, AWS, Docker, 
                Kubernetes, and modern ML frameworks.
              </p>
              
              <div className="pt-4 mobile:pt-3">
                <h5 className="text-xs mobile:text-xs text-gray-500 font-mono mb-2 mobile:mb-1 uppercase tracking-wider">
                  CURRENT ROLE
                </h5>
                <p className="text-xs mobile:text-xs text-gray-400 font-mono">
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