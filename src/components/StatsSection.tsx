import React, { useEffect, useState, useRef } from 'react';
import { Language, translations } from '../data/portfolioData';

interface StatsSectionProps {
  currentLang: Language;
  forceTrigger?: boolean;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ currentLang, forceTrigger }) => {
  const t = translations[currentLang];
  const [counts, setCounts] = useState({
    projects: 0,
    technologies: 0,
    languages: 0,
    hours: 0,
    certifications: 0,
  });
  const hasTriggeredRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    const targets = {
      projects: 15,
      technologies: 11,
      languages: 3,
      hours: 400,
      certifications: 4,
    };

    const duration = 1000;
    const steps = 45;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      const factor = Math.min(stepCount / steps, 1);

      setCounts({
        projects: Math.round(targets.projects * factor),
        technologies: Math.round(targets.technologies * factor),
        languages: Math.round(targets.languages * factor),
        hours: Math.round(targets.hours * factor),
        certifications: Math.round(targets.certifications * factor),
      });

      if (stepCount >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);
  };

  useEffect(() => {
    if (forceTrigger) {
      startAnimation();
    }
  }, [forceTrigger]);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggeredRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        startAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="stats-section"
      ref={sectionRef}
      style={{ background: 'rgba(3,5,15,0.85)' }}
    >
      <div className="stats-row">
        <div>
          <span className="stat-num">{counts.projects}+</span>
          <p className="stat-label">{t['stat-p']}</p>
        </div>
        <div>
          <span className="stat-num">{counts.technologies}+</span>
          <p className="stat-label">{t['stat-t']}</p>
        </div>
        <div>
          <span className="stat-num">{counts.languages}+</span>
          <p className="stat-label">{t['stat-l']}</p>
        </div>
        <div>
          <span className="stat-num">{counts.hours}+</span>
          <p className="stat-label">{t['stat-h']}</p>
        </div>
        <div>
          <span className="stat-num">{counts.certifications}+</span>
          <p className="stat-label">{t['stat-c']}</p>
        </div>
      </div>
    </div>
  );
};
