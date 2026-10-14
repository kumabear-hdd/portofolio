import React from 'react';
import {
  Monitor,
  Terminal,
  GitBranch,
  Network,
  Code2,
  FileCode,
  Palette,
  Zap,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Language, translations } from '../data/portfolioData';

interface TechEcosystemProps {
  currentLang: Language;
}

export const TechEcosystem: React.FC<TechEcosystemProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const tools = [
    {
      name: 'Windows OS',
      role: 'Daily Driver',
      icon: Monitor,
      bg: 'rgba(59,130,246,0.12)',
      color: '#60a5fa',
    },
    {
      name: 'Linux Server',
      role: 'Administration',
      icon: Terminal,
      bg: 'rgba(245,158,11,0.12)',
      color: '#fbbf24',
    },
    {
      name: 'Cisco Systems',
      role: 'Routing Protocols',
      icon: GitBranch,
      bg: 'rgba(6,182,212,0.12)',
      color: '#22d3ee',
    },
    {
      name: 'MikroTik RouterOS',
      role: 'Traffic Control',
      icon: Network,
      bg: 'rgba(99,102,241,0.12)',
      color: '#818cf8',
    },
    {
      name: 'GitHub',
      role: 'Version Control',
      icon: GithubIcon,
      bg: 'rgba(255,255,255,0.06)',
      color: '#e2e8f0',
    },
    {
      name: 'VS Code',
      role: 'Workspace',
      icon: Code2,
      bg: 'rgba(59,130,246,0.12)',
      color: '#3b82f6',
    },
    {
      name: 'HTML5',
      role: 'Structuring',
      icon: FileCode,
      bg: 'rgba(234,88,12,0.12)',
      color: '#fb923c',
    },
    {
      name: 'CSS3 / Tailwind',
      role: 'Interface Design',
      icon: Palette,
      bg: 'rgba(96,165,250,0.12)',
      color: '#93c5fd',
    },
    {
      name: 'JavaScript',
      role: 'Interactions',
      icon: Zap,
      bg: 'rgba(234,179,8,0.12)',
      color: '#fde047',
    },
    {
      name: 'AI Automation',
      role: 'Assisted Coding',
      icon: Sparkles,
      bg: 'rgba(168,85,247,0.12)',
      color: '#c084fc',
    },
  ];

  return (
    <section
      id="ecosystem"
      className="section section-border"
      style={{ background: 'rgba(3,5,15,0.6)' }}
    >
      <div className="container">
        <div className="section-header center">
          <h2>{t['eco-title']}</h2>
          <p>{t['eco-sub']}</p>
        </div>

        <div className="eco-grid">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="eco-card glass">
                <div
                  className="eco-icon"
                  style={{ background: tool.bg, color: tool.color }}
                >
                  <Icon style={{ width: 22, height: 22 }} />
                </div>
                <span className="eco-name">{tool.name}</span>
                <span className="eco-role">{tool.role}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
