import React from 'react';
import { X, AlertCircle, Cpu } from 'lucide-react';
import { ProjectItem, Language, translations } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  currentLang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  currentLang,
  onClose,
}) => {
  if (!project) return null;

  const content =
    currentLang === 'jp'
      ? project.jp
      : currentLang === 'id'
      ? project.id_lang
      : project.en;

  const t = translations[currentLang];

  return (
    <div
      id="project-modal"
      className="open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box glass-heavy">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X style={{ width: 18, height: 18 }} />
        </button>
        <div className="modal-body">
          <span
            id="modal-tag"
            className="badge badge-accent"
            style={{ marginBottom: 16, display: 'inline-flex' }}
          >
            {project.tag}
          </span>
          <h2
            id="modal-title"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: 'var(--text)',
              marginBottom: 4,
            }}
          >
            {content.title}
          </h2>
          <div className="modal-meta">
            <div>
              <div id="modal-cat-label" className="modal-meta-label">
                {t['m-cat'] || 'Category'}
              </div>
              <div id="modal-cat-val" className="modal-meta-val">
                {content.category}
              </div>
            </div>
            <div>
              <div id="modal-tech-label" className="modal-meta-label">
                {t['m-tech'] || 'Tech Stack'}
              </div>
              <div id="modal-tech-val" className="modal-meta-val accent">
                {project.tech}
              </div>
            </div>
            <div>
              <div id="modal-out-label" className="modal-meta-label">
                {t['m-out'] || 'Learning Outcome'}
              </div>
              <div id="modal-out-val" className="modal-meta-val">
                {project.outcome}
              </div>
            </div>
          </div>
          <div className="modal-section" style={{ marginBottom: 24 }}>
            <h4 className="modal-section-title">
              <AlertCircle style={{ width: 18, height: 18, color: 'var(--secondary)' }} />
              <span id="modal-chal-title">
                {t['m-chal'] || 'Challenge & Problem Statement'}
              </span>
            </h4>
            <p id="modal-chal">{content.challenge}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu style={{ width: 18, height: 18, color: 'var(--primary)' }} />
              <span id="modal-sol-title">
                {t['m-sol'] || 'Solution & Implementation'}
              </span>
            </h4>
            <p id="modal-sol">{content.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
