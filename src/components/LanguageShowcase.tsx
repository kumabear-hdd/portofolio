import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Language, langShowcaseData, translations } from '../data/portfolioData';

interface LanguageShowcaseProps {
  currentLang: Language;
}

export const LanguageShowcase: React.FC<LanguageShowcaseProps> = ({ currentLang }) => {
  const [selectedLang, setSelectedLang] = useState<Language>('id');
  const t = translations[currentLang];
  const activeData = langShowcaseData[selectedLang];

  return (
    <section className="section section-border" style={{ background: 'rgba(3,5,15,0.65)' }}>
      <div className="container">
        <div className="lang-showcase-layout">
          <div>
            <h2 style={{ marginBottom: 12 }}>{t['lang-title']}</h2>
            <p
              style={{
                color: 'var(--text-sec)',
                fontWeight: 300,
                lineHeight: 1.65,
                marginBottom: 28,
              }}
            >
              {t['lang-sub']}
            </p>

            <div className="lang-select-list">
              <button
                type="button"
                className={`lang-select-btn ${selectedLang === 'id' ? 'active' : ''}`}
                onClick={() => setSelectedLang('id')}
              >
                <div className="lang-select-btn-left">
                  <span className="flag">🇮🇩</span>
                  <span className="lang-name">Indonesian (Native)</span>
                </div>
                <ChevronRight
                  style={{
                    width: 18,
                    height: 18,
                    color: selectedLang === 'id' ? 'var(--primary)' : 'inherit',
                  }}
                />
              </button>

              <button
                type="button"
                className={`lang-select-btn ${selectedLang === 'en' ? 'active' : ''}`}
                onClick={() => setSelectedLang('en')}
              >
                <div className="lang-select-btn-left">
                  <span className="flag">🇬🇧</span>
                  <span className="lang-name">English (Professional)</span>
                </div>
                <ChevronRight
                  style={{
                    width: 18,
                    height: 18,
                    color: selectedLang === 'en' ? 'var(--primary)' : 'inherit',
                  }}
                />
              </button>

              <button
                type="button"
                className={`lang-select-btn ${selectedLang === 'jp' ? 'active' : ''}`}
                onClick={() => setSelectedLang('jp')}
              >
                <div className="lang-select-btn-left">
                  <span className="flag">🇯🇵</span>
                  <span className="lang-name">Japanese (Learning)</span>
                </div>
                <ChevronRight
                  style={{
                    width: 18,
                    height: 18,
                    color: selectedLang === 'jp' ? 'var(--primary)' : 'inherit',
                  }}
                />
              </button>
            </div>
          </div>

          <div className="lang-display-panel glass glow-border">
            <div
              id="lang-panel-content"
              style={{
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                opacity: 1,
                transform: 'translateY(0)',
              }}
            >
              <div className="lang-panel-header">
                <span className="lang-panel-flag">{activeData.flag}</span>
                <h3 className="lang-panel-name">{activeData.name}</h3>
              </div>
              <p className="lang-panel-text">{activeData.text}</p>
              <div className="lang-level-box">
                <div className="lang-level-label">PROFICIENCY LEVEL</div>
                <div className="lang-level-val">{activeData.level}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
