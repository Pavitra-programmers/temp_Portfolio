import { motion } from 'motion/react';

export function Navigation() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-white text-sm tracking-widest font-mono">
            KRITENSH
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <motion.button
            onClick={scrollToProjects}
            className="text-white text-sm tracking-widest font-mono hover:opacity-60 transition-opacity duration-300"
          >
            WORK
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="text-white text-sm tracking-widest font-mono hover:opacity-60 transition-opacity duration-300"
          >
            CONTACT
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}