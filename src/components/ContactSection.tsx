import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { useScrollCipherAnimation } from '../hooks/useScrollCipherAnimation';

export function ContactSection() {
  const titleRef = useScrollCipherAnimation('LET\'S BUILD SOMETHING', { delay: 200, duration: 500 });
  
  const contactMethods = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'kritenshstp021@gmail.com',
      href: 'mailto:kritenshstp021@gmail.com'
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: '+91 9103258699',
      href: 'tel:+919103258699'
    },
    {
      icon: Github,
      label: 'GITHUB',
      value: 'github.com/Pavitra-programmers',
      href: 'https://github.com/Pavitra-programmers'
    },
    {
      icon: Linkedin,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/kritensh-kumar-79819b2a7',
      href: 'https://www.linkedin.com/in/kritensh-kumar-79819b2a7/'
    }
  ];

  return (
    <>
      <section id="contact" className="py-20 px-8 bg-black relative">
        {/* Background Image - Behind everything */}
        <div className="absolute inset-0 opacity-20 z-5">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1718011087751-e82f1792aa32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhbGdvcml0aG1zfGVufDF8fHx8MTc1ODI5MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neural Network Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Spektral Image Section - Above background */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black/80 pb-12 z-40">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/src/assets/www.spektralstudio.com_.png"
              alt="Spektral Studio"
              className="h-32 w-auto object-contain opacity-90 hover:opacity-95 transition-opacity duration-300"
            />
          </div>
        </div>

        <div className="mt-20 relative z-20 max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 mb-16"
          >
            <div>
              <div className="mb-8">
                <h2 ref={titleRef} className="text-3xl md:text-4xl text-white leading-tight font-mono tracking-tight">
                  LET'S BUILD
                  <br />
                  SOMETHING
                </h2>
                <div className="flex items-center mt-4">
                  <span className="text-white text-lg font-mono mr-3">+</span>
                  <div className="flex-1 h-px bg-white"></div>
                </div>
                <p className="text-sm text-white font-mono tracking-wide mt-3 uppercase">
                  Ready to innovate together
                </p>
              </div>
              <button className="text-white text-sm font-mono tracking-widest hover:opacity-60 transition-opacity duration-300">
                GET IN TOUCH &gt;
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-white tracking-widest font-mono mb-4 uppercase">
                  AVAILABILITY
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-mono mb-4">
                  Open to full-time opportunities in backend 
                  development, machine learning, and cloud 
                  architecture roles.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                  Currently pursuing B.Tech CSE • 
                  Expected graduation 2026
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {contactMethods.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-6 border border-gray-800 hover:border-gray-700 bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300"
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <div>
                    <h4 className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-1">
                      {contact.label}
                    </h4>
                    <span className="text-sm text-gray-300 font-mono group-hover:text-white transition-colors duration-300">
                      {contact.value}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center border-t border-gray-800 pt-16"
          >
            <h3 className="text-lg text-white font-mono tracking-tight mb-4">
              Ready to innovate together?
            </h3>
            <p className="text-xs text-gray-400 font-mono mb-8 max-w-md mx-auto">
              Whether you're looking for a backend developer, ML engineer, 
              or just want to discuss technology, I'm always interested in 
              meaningful conversations.
            </p>
            <a 
              href="mailto:kritenshstp021@gmail.com"
              className="inline-block text-white text-sm font-mono tracking-widest border border-gray-600 px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              START A CONVERSATION
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-16 mt-20"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-500 font-mono tracking-wide">
                  KRITENSH KUMAR
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-mono tracking-wide">
                  BACKEND DEVELOPER & ML ENGINEER
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-mono tracking-wide">
                  2024©
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
            
      <div className="space-y-8 bottom-0">
        <div>
          <img 
            src="/src/assets/Screenshot 2025-09-21 121355.png"
            alt="Experience Screenshot"
            className="h-32 w-auto object-contain opacity-60 hover:opacity-70 transition-opacity duration-300"
          />
        </div>
      </div>
    </>
  );    
}