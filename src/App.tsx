import React, { useState, useEffect, useCallback } from 'react';
import { Language, ProjectItem } from './data/portfolioData';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CinematicIntro } from './components/CinematicIntro';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { SkillGalaxy } from './components/SkillGalaxy';
import { Storytelling } from './components/Storytelling';
import { TechEcosystem } from './components/TechEcosystem';
import { ProjectShowcase } from './components/ProjectShowcase';
import { LanguageShowcase } from './components/LanguageShowcase';
import { JourneyTimeline } from './components/JourneyTimeline';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isCmdOpen, setIsCmdOpen] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [statsForceTrigger, setStatsForceTrigger] = useState<boolean>(false);

  // Switch language font
  useEffect(() => {
    document.body.style.fontFamily =
      currentLang === 'jp'
        ? "'DM Sans', 'Noto Sans JP', sans-serif"
        : "'DM Sans', sans-serif";
  }, [currentLang]);

  // Keyboard shortcuts (Escape, Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCmdOpen(false);
        setActiveProject(null);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setStatsForceTrigger(true);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Three.js Canvas Background */}
      <BackgroundCanvas />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Intro */}
      <CinematicIntro onComplete={handleIntroComplete} />

      {/* Sticky Header */}
      <Header
        currentLang={currentLang}
        onSetLang={setCurrentLang}
        onOpenCmd={() => setIsCmdOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection currentLang={currentLang} />

        {/* Bento Grid */}
        <BentoGrid currentLang={currentLang} />

        {/* Skill Galaxy Orbit */}
        <SkillGalaxy currentLang={currentLang} />

        {/* Storytelling */}
        <Storytelling currentLang={currentLang} />

        {/* Tech Ecosystem */}
        <TechEcosystem currentLang={currentLang} />

        {/* Project Showcase */}
        <ProjectShowcase
          currentLang={currentLang}
          onOpenProject={setActiveProject}
        />

        {/* Language Showcase */}
        <LanguageShowcase currentLang={currentLang} />

        {/* Journey Timeline */}
        <JourneyTimeline currentLang={currentLang} />

        {/* Stats Section */}
        <StatsSection
          currentLang={currentLang}
          forceTrigger={statsForceTrigger}
        />

        {/* Contact Section */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onSelectLanguage={setCurrentLang}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        currentLang={currentLang}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};

export default App;
