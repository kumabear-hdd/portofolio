import React, { useState, useEffect, useRef } from 'react';
import { Search, Home, Grid, Globe, Layers, Folder, Mail } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLanguage: (lang: Language) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectLanguage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  const navItems = [
    { id: 'hero', label: 'Go to Home', icon: Home, hash: '#hero' },
    { id: 'bento', label: 'Bento Grid', icon: Grid, hash: '#bento' },
    { id: 'skills', label: 'Skill Galaxy', icon: Globe, hash: '#skills' },
    { id: 'ecosystem', label: 'Tech Ecosystem', icon: Layers, hash: '#ecosystem' },
    { id: 'projects', label: 'Projects', icon: Folder, hash: '#projects' },
    { id: 'contact', label: 'Contact', icon: Mail, hash: '#contact' },
  ];

  const langItems = [
    { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
    { code: 'id' as Language, label: 'Indonesian', flag: '🇮🇩' },
    { code: 'jp' as Language, label: 'Japanese (日本語)', flag: '🇯🇵' },
  ];

  const filteredNav = navItems.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLang = langItems.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNav = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLang = (code: Language) => {
    onSelectLanguage(code);
    onClose();
  };

  return (
    <div
      id="cmd-overlay"
      className={isOpen ? 'open' : ''}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="cmd-box glass-heavy">
        <div className="cmd-search">
          <Search style={{ width: 18, height: 18, color: 'var(--text-muted)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            id="cmd-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type a command or search..."
          />
          <span className="kbd">ESC</span>
        </div>
        <div className="cmd-body">
          {filteredNav.length > 0 && (
            <>
              <div className="cmd-group-label">Navigation</div>
              {filteredNav.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className="cmd-item"
                    onClick={() => handleNav(item.hash)}
                  >
                    <span className="cmd-item-left">
                      <Icon style={{ width: 15, height: 15 }} /> {item.label}
                    </span>
                    <span className="cmd-item-right">Jump</span>
                  </button>
                );
              })}
            </>
          )}

          {filteredLang.length > 0 && (
            <>
              <div className="cmd-divider" />
              <div className="cmd-group-label">Language</div>
              {filteredLang.map((item) => (
                <button
                  key={item.code}
                  className="cmd-item"
                  onClick={() => handleLang(item.code)}
                >
                  <span className="cmd-item-left">
                    <span>{item.flag}</span> {item.label}
                  </span>
                  <span className="cmd-item-right">Switch</span>
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
