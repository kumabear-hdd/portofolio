import React from 'react';
import { User, Activity, GitBranch, Languages } from 'lucide-react';
import { Language, translations } from '../data/portfolioData';

interface StorytellingProps {
  currentLang: Language;
}

export const Storytelling: React.FC<StorytellingProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="section section-border">
      <div className="container" style={{ maxWidth: 840 }}>
        <div className="section-header center">
          <h2>{t['story-title']}</h2>
          <div
            style={{
              width: 64,
              height: 2,
              background: 'linear-gradient(90deg,var(--primary),var(--accent))',
              margin: '16px auto 0',
              borderRadius: 2,
            }}
          />
        </div>
        <div className="story-grid">
          <div className="story-card glass">
            <h3>
              <User style={{ width: 18, height: 18, color: 'var(--primary)' }} />
              <span>{t['sq1-t']}</span>
            </h3>
            <p>{t['sq1-d']}</p>
          </div>

          <div className="story-card glass">
            <h3>
              <Activity style={{ width: 18, height: 18, color: 'var(--secondary)' }} />
              <span>{t['sq2-t']}</span>
            </h3>
            <p>{t['sq2-d']}</p>
          </div>

          <div className="story-card glass">
            <h3>
              <GitBranch style={{ width: 18, height: 18, color: 'var(--accent)' }} />
              <span>{t['sq3-t']}</span>
            </h3>
            <p>{t['sq3-d']}</p>
          </div>

          <div className="story-card glass">
            <h3>
              <Languages style={{ width: 18, height: 18, color: 'var(--primary)' }} />
              <span>{t['sq4-t']}</span>
            </h3>
            <p>{t['sq4-d']}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
