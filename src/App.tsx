import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
// import { ProfileSection } from './components/ProfileSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { DoorAnimation } from './components/DoorAnimation';

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after doors finish sliding open (0.5 seconds total)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Door animation - always visible initially */}
      <DoorAnimation />
      
      {/* Content fades in after doors open */}
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <main>
          <HeroSection />
          {/* <ProfileSection /> */}
          <ServicesSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}