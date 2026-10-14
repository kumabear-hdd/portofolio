import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface HeaderProps {
  currentLang: Language;
  onSetLang: (lang: Language) => void;
  onOpenCmd: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSetLang,
  onOpenCmd,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
      <div className="header-inner">
        <a href="#hero" className="logo">
          <span className="logo-mark">HD</span>
          <span className="logo-sub">TRANSCENDENCE</span>
        </a>

        <nav className="nav-links">
          <a href="#bento">Bento Grid</a>
          <a href="#skills">Orbit System</a>
          <a href="#ecosystem">Tech Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="search-btn" onClick={onOpenCmd} type="button">
            <Search style={{ width: 14, height: 14 }} />
            <span>Search</span>
            <span className="kbd">Ctrl</span>
            <span className="kbd">K</span>
          </button>
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
              data-lang="en"
              onClick={() => onSetLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${currentLang === 'id' ? 'active' : ''}`}
              data-lang="id"
              onClick={() => onSetLang('id')}
            >
              ID
            </button>
            <button
              type="button"
              className={`lang-btn ${currentLang === 'jp' ? 'active' : ''}`}
              data-lang="jp"
              onClick={() => onSetLang('jp')}
            >
              JP
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
