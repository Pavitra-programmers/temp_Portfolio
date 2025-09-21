import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 mobile:px-6 py-6 mobile:py-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-white text-sm mobile:text-base tracking-widest font-mono">
            KRITENSH
          </span>
        </motion.div>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <motion.button
            onClick={scrollToProjects}
            className="text-white text-sm tracking-widest font-mono hover:opacity-60 transition-opacity duration-300"
          >
            PROJECTS
          </motion.button>
          <motion.button
            onClick={scrollToExperience}
            className="text-white text-sm tracking-widest font-mono hover:opacity-60 transition-opacity duration-300"
          >
            EXPERIENCE
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="text-white text-sm tracking-widest font-mono hover:opacity-60 transition-opacity duration-300"
          >
            CONTACT
          </motion.button>
        </div>

        {/* Mobile Hamburger Menu - Only visible on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-2xl font-mono hover:opacity-60 transition-opacity duration-300 p-2 border border-white/30 rounded"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown - Only visible on mobile when open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/20 z-50"
          >
            <div className="flex flex-col items-center py-8 space-y-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                onClick={scrollToProjects}
                className="text-white text-lg tracking-widest font-mono hover:opacity-60 transition-opacity duration-300 py-4 px-8 w-full text-center block"
                style={{ display: 'block', width: '100%', textAlign: 'center' }}
              >
                PROJECTS
              </button>
              <button
                onClick={scrollToExperience}
                className="text-white text-lg tracking-widest font-mono hover:opacity-60 transition-opacity duration-300 py-4 px-8 w-full text-center block"
                style={{ display: 'block', width: '100%', textAlign: 'center' }}
              >
                EXPERIENCE
              </button>
              <button
                onClick={scrollToContact}
                className="text-white text-lg tracking-widest font-mono hover:opacity-60 transition-opacity duration-300 py-4 px-8 w-full text-center block"
                style={{ display: 'block', width: '100%', textAlign: 'center' }}
              >
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}