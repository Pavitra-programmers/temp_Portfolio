import React from 'react';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 bg-black relative">
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 text-gray-700 text-xl font-mono">×</div>
      <div className="absolute bottom-1/3 right-12 w-12 h-1 bg-gray-700"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-80 h-80 bg-gray-800 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODMyMzU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kritensh Kumar"
                  className="w-full h-full object-cover filter grayscale"
                />
                {/* Decorative overlay elements */}
                <div className="absolute top-4 right-4 w-6 h-1 bg-white/60"></div>
                <div className="absolute bottom-4 left-4 text-white/60 text-lg font-mono">×</div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-4">
              <h3 className="text-4xl text-white font-mono tracking-tight uppercase">
                Kritensh Kumar
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-mono">|</span>
                <span className="text-gray-400 text-sm tracking-[0.1em] font-mono uppercase">
                  Backend Developer & ML Engineer
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-mono">|</span>
                <span className="text-gray-400 text-sm tracking-[0.1em] font-mono uppercase">
                  Central University of Jammu
                </span>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* About Description */}
            <div>
              <h2 className="text-4xl md:text-5xl text-white leading-tight font-mono mb-12 tracking-tight uppercase">
                Integrated Backend
                <br />
                Development
              </h2>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm text-gray-300 tracking-[0.15em] font-mono uppercase mb-4">
                    Backend Focus
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-mono max-w-md">
                    → Full-spectrum backend architectures from 
                    modern systems to authentic strategy and 
                    robust exploration.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-mono max-w-md mt-4">
                    If it doesn't exist, we design it. If 
                    it does, we improve it.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-300 tracking-[0.15em] font-mono uppercase mb-4">
                    ML Production
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-mono max-w-md">
                    → From model to motion. Assets are engineered 
                    for game engines, built production, or 
                    cross-platform deployment.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-mono max-w-md mt-4">
                    Built to spec.
                    Delivered on time.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-300 tracking-[0.15em] font-mono uppercase mb-4">
                    Cloud Infrastructure
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-mono max-w-md">
                    → Scope expands. Specs change. Deadlines 
                    shift. Adaptive support absorbs the hit so 
                    delivery stays on course.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-mono max-w-md mt-4">
                    We respond like we're part of your 
                    team—because we are.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <button className="text-white text-sm font-mono tracking-[0.15em] uppercase hover:text-gray-300 transition-colors duration-300 flex items-center gap-2">
                <span>contact us</span>
                <span className="text-gray-500">→</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}