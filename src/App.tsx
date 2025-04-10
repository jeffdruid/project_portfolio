import React, { useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EmailModal } from './components/EmailModal';

function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="snap-container bg-black text-white">
      <Navigation />
      <HeroSection scale={scale} opacity={opacity} onOpenEmailModal={() => setIsEmailModalOpen(true)} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection onOpenEmailModal={() => setIsEmailModalOpen(true)} />
      <Footer />
      <EmailModal 
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}

export default App;