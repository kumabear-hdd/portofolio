import React from 'react';
import { Monitor, GitBranch, Code, Languages, Layers, Award } from 'lucide-react';
import { Language, translations } from '../data/portfolioData';

interface BentoGridProps {
  currentLang: Language;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="bento" className="section section-border">
      <div className="container">
        <div className="section-header">
          <h2>{t['bento-title']}</h2>
          <p>{t['bento-sub']}</p>
        </div>

        <div className="bento-grid">
          {/* IT */}
          <div className="bento-card glass glow-border">
            <div>
              <div className="bento-icon blue">
                <Monitor style={{ width: 22, height: 22 }} />
              </div>
              <h3>{t['b1-t']}</h3>
              <p>{t['b1-d']}</p>
            </div>
            <div className="bento-chips">
              <span className="chip">Hardware</span>
              <span className="chip">Software</span>
              <span className="chip">OS Maintenance</span>
            </div>
          </div>

          {/* Networking */}
          <div className="bento-card glass glow-border">
            <div>
              <div className="bento-icon purple">
                <GitBranch style={{ width: 22, height: 22 }} />
              </div>
              <h3>{t['b2-t']}</h3>
              <p>{t['b2-d']}</p>
            </div>
            <div className="bento-chips">
              <span className="chip">TCP/IP</span>
              <span className="chip">Routing</span>
              <span className="chip">Switching</span>
            </div>
          </div>

          {/* Web */}
          <div className="bento-card glass glow-border">
            <div>
              <div className="bento-icon cyan">
                <Code style={{ width: 22, height: 22 }} />
              </div>
              <h3>{t['b3-t']}</h3>
              <p>{t['b3-d']}</p>
            </div>
            <div className="bento-chips">
              <span className="chip">HTML5</span>
              <span className="chip">CSS3</span>
              <span className="chip">Responsive</span>
            </div>
          </div>

          {/* Languages (span 2) */}
          <div className="bento-card glass glow-border span-2">
            <div>
              <div className="bento-icon blue">
                <Languages style={{ width: 22, height: 22 }} />
              </div>
              <h3>{t['b4-t']}</h3>
              <p>{t['b4-d']}</p>
            </div>
            <div className="lang-flags">
              <span className="lang-flag-chip">
                <span>🇮🇩</span> Indonesia
              </span>
              <span className="lang-flag-chip">
                <span>🇬🇧</span> English
              </span>
              <span className="lang-flag-chip">
                <span>🇯🇵</span> Japanese
              </span>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="bento-card glass glow-border">
            <div>
              <div className="bento-icon cyan">
                <Layers style={{ width: 22, height: 22 }} />
              </div>
              <h3>{t['b5-t']}</h3>
              <p>{t['b5-d']}</p>
            </div>
            <div className="bento-chips">
              <span className="chip">Linux CLI</span>
              <span className="chip">Git / GitHub</span>
            </div>
          </div>

          {/* Future Vision (span 3) */}
          <div className="bento-card glass glow-border span-3" style={{ minHeight: 200 }}>
            <div className="bento-future-bg" />
            <div>
              <div className="bento-icon purple">
                <Award style={{ width: 22, height: 22 }} />
              </div>
              <h3>{t['b6-t']}</h3>
              <p style={{ maxWidth: 700 }}>{t['b6-d']}</p>
            </div>
            <p className="future-mono">TRANSITION PHASE 2026 – 2028</p>
          </div>
        </div>
      </div>
    </section>
  );
};
