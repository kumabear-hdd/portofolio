import React from 'react';
import { Language, translations } from '../data/portfolioData';

interface JourneyTimelineProps {
  currentLang: Language;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="section section-border">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header center">
          <h2>{t['journey-title']}</h2>
          <p>{t['journey-sub']}</p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" style={{ background: 'var(--primary)' }} />
            <div className="timeline-year" style={{ color: 'var(--primary)' }}>
              2024
            </div>
            <h4>{t['j24-t']}</h4>
            <p>{t['j24-d']}</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{ background: 'var(--secondary)' }} />
            <div className="timeline-year" style={{ color: 'var(--secondary)' }}>
              2025
            </div>
            <h4>{t['j25-t']}</h4>
            <p>{t['j25-d']}</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{ background: 'var(--accent)' }} />
            <div className="timeline-year" style={{ color: 'var(--accent)' }}>
              2026
            </div>
            <h4>{t['j26-t']}</h4>
            <p>{t['j26-d']}</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{ background: '#34d399' }} />
            <div className="timeline-year" style={{ color: '#34d399' }}>
              FUTURE
            </div>
            <h4>{t['jfut-t']}</h4>
            <p>{t['jfut-d']}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
