import React, { useEffect, useRef } from 'react';
import { BookOpen, Cpu, Languages, ArrowRight, Folder, Mail } from 'lucide-react';
import { Language, translations } from '../data/portfolioData';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const xA = (window.innerWidth / 2 - e.pageX) / 45;
      const yA = (window.innerHeight / 2 - e.pageY) / 45;
      card.style.transform = `rotateY(${xA}deg) rotateX(${yA}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero">
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      <div className="hero-grid container">
        {/* Left: Content */}
        <div className="hero-content">
          <div>
            <span className="badge badge-accent">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  animation: 'pulse 2s infinite',
                  flexShrink: 0,
                }}
              />
              <span>{t['hero-badge']}</span>
            </span>
          </div>

          <div>
            <h1 className="hero-name">
              <span className="hero-name-gradient">HANIF DAFFA</span>
              <br />
              DZULFAHMI
            </h1>
          </div>

          <div className="hero-roles">
            <span>
              <BookOpen style={{ width: 15, height: 15, color: 'var(--primary)' }} />
              <span>{t['hero-sub1']}</span>
            </span>
            <span className="dot">•</span>
            <span>
              <Cpu style={{ width: 15, height: 15, color: 'var(--secondary)' }} />
              <span>{t['hero-sub2']}</span>
            </span>
            <span className="dot">•</span>
            <span>
              <Languages style={{ width: 15, height: 15, color: 'var(--accent)' }} />
              <span>{t['hero-sub3']}</span>
            </span>
          </div>

          <p className="hero-desc">{t['hero-desc']}</p>

          <div className="hero-ctas">
            <a href="#bento" className="btn-primary">
              <span>{t['hero-cta1']}</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
            <a href="#projects" className="btn-ghost">
              <span>{t['hero-cta2']}</span>
              <Folder style={{ width: 16, height: 16 }} />
            </a>
            <a href="mailto:hanifdaffa1207@gmail.com" className="btn-ghost">
              <span>{t['hero-cta3']}</span>
              <Mail style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>

        {/* Right: ID Card */}
        <div className="id-card-wrapper">
          <div className="id-card glass glow-border" id="id-card" ref={cardRef}>
            <div className="id-card-glow" />

            <div className="id-card-top">
              <div>
                <p className="id-card-label">DIGITAL PORTFOLIO ID</p>
                <p className="id-card-name">Hanif Daffa Dzulfahmi</p>
              </div>
              <span className="id-active">ACTIVE</span>
            </div>

            <div className="id-card-portrait">
              <div className="avatar-ring animate-float">
                <div className="avatar-inner">
                  <span>HDD</span>
                </div>
              </div>
            </div>

            <div className="id-card-stats">
              <div className="id-stat-row">
                <span className="id-stat-label">{t['card-status']}</span>
                <span className="id-stat-val">{t['card-status-val']}</span>
              </div>
              <div className="id-stat-row">
                <span className="id-stat-label">{t['card-interests']}</span>
                <span className="id-stat-val">{t['card-int-val']}</span>
              </div>
              <div className="id-stat-row">
                <span className="id-stat-label">{t['card-loc']}</span>
                <span className="id-stat-val">Indonesia</span>
              </div>
              <div className="id-stat-row">
                <span className="id-stat-label">{t['card-avail']}</span>
                <span className="id-avail">
                  <span className="pulse-dot" />
                  <span>{t['card-avail-val']}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
