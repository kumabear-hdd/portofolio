import React from 'react';
import { GitBranch, Monitor, Terminal, Code, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Language, translations } from '../data/portfolioData';

interface SkillGalaxyProps {
  currentLang: Language;
}

export const SkillGalaxy: React.FC<SkillGalaxyProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="skills" className="section section-border" style={{ background: 'rgba(3,5,15,0.5)' }}>
      <div className="container">
        <div className="section-header center">
          <h2>{t['galaxy-title']}</h2>
          <p>{t['galaxy-sub']}</p>
        </div>

        <div className="galaxy-arena">
          {/* Orbit rings */}
          <div className="orbit-ring" style={{ width: 160, height: 160 }} />
          <div className="orbit-ring" style={{ width: 310, height: 310 }} />
          <div className="orbit-ring" style={{ width: 480, height: 480 }} />

          {/* Core */}
          <div className="galaxy-core">
            <div className="galaxy-core-inner">
              <span className="core-label">{t['core-label'] || 'CORE'}</span>
              <span className="core-name">
                HANIF
                <br />
                DAFFA
              </span>
            </div>
          </div>

          {/* Node 1: Networking */}
          <div className="orbit-wrapper orbit-spin-1">
            <div className="orbit-node blue" style={{ transform: 'translateY(-80px)' }}>
              <GitBranch style={{ width: 13, height: 13, color: 'var(--primary)' }} />
              <span>{t['g1']}</span>
            </div>
          </div>

          {/* Node 2: Windows */}
          <div className="orbit-wrapper orbit-spin-2">
            <div className="orbit-node cyan" style={{ transform: 'translateX(-155px)' }}>
              <Monitor style={{ width: 13, height: 13, color: 'var(--accent)' }} />
              <span>{t['g2']}</span>
            </div>
          </div>

          {/* Node 3: Linux */}
          <div className="orbit-wrapper orbit-spin-3">
            <div className="orbit-node purple" style={{ transform: 'translateY(155px)' }}>
              <Terminal style={{ width: 13, height: 13, color: 'var(--secondary)' }} />
              <span>{t['g3']}</span>
            </div>
          </div>

          {/* Node 4: Japanese */}
          <div className="orbit-wrapper orbit-spin-4">
            <div className="orbit-node red" style={{ transform: 'translateX(240px)' }}>
              <span>🇯🇵</span>
              <span>{t['g4']}</span>
            </div>
          </div>

          {/* Node 5: English */}
          <div className="orbit-wrapper orbit-spin-5">
            <div className="orbit-node white" style={{ transform: 'translateY(-240px)' }}>
              <span>🇬🇧</span>
              <span>{t['g5']}</span>
            </div>
          </div>

          {/* Node 6: Web Dev */}
          <div className="orbit-wrapper orbit-spin-6">
            <div className="orbit-node cyan" style={{ transform: 'translateX(80px)' }}>
              <Code style={{ width: 13, height: 13, color: 'var(--accent)' }} />
              <span>{t['g6']}</span>
            </div>
          </div>

          {/* Node 7: Hardware */}
          <div className="orbit-wrapper orbit-spin-7">
            <div className="orbit-node blue" style={{ transform: 'translateX(-80px)' }}>
              <Cpu style={{ width: 13, height: 13, color: 'var(--primary)' }} />
              <span>{t['g7']}</span>
            </div>
          </div>

          {/* Node 8: GitHub */}
          <div className="orbit-wrapper orbit-spin-8">
            <div className="orbit-node white" style={{ transform: 'translateY(240px)' }}>
              <GithubIcon style={{ width: 13, height: 13 }} />
              <span>{t['g8']}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
