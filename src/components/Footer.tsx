import React from 'react';
import { Language, translations } from '../data/portfolioData';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer>
      <strong>HANIF DAFFA DZULFAHMI</strong>
      <p>{t['foot-copy']}</p>
      <div className="footer-badges">
        <span className="footer-badge">Responsive Layout</span>
        <span className="footer-badge">Multi-Language</span>
        <span className="footer-badge">Three.js Background</span>
      </div>
    </footer>
  );
};
