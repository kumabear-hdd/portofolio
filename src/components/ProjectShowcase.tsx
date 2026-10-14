import React, { useState } from 'react';
import { projects, ProjectItem, Language, translations } from '../data/portfolioData';

interface ProjectShowcaseProps {
  currentLang: Language;
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  currentLang,
  onOpenProject,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const t = translations[currentLang];

  const projectList = Object.values(projects);
  const filteredList =
    filter === 'all'
      ? projectList
      : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section section-border">
      <div className="container">
        <div className="projects-header">
          <div>
            <h2>{t['proj-title']}</h2>
            <p
              style={{
                color: 'var(--text-sec)',
                fontWeight: 300,
                marginTop: 10,
                maxWidth: 480,
              }}
            >
              {t['proj-sub']}
            </p>
          </div>
          <div className="filter-bar">
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'networking' ? 'active' : ''}`}
              onClick={() => setFilter('networking')}
            >
              Networking
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              Web Dev
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'it' ? 'active' : ''}`}
              onClick={() => setFilter('it')}
            >
              IT Admin
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredList.map((project) => {
            const content =
              currentLang === 'jp'
                ? project.jp
                : currentLang === 'id'
                ? project.id_lang
                : project.en;

            return (
              <div
                key={project.id}
                className="project-card glass glow-border"
                onClick={() => onOpenProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onOpenProject(project);
                  }
                }}
              >
                <div
                  className="project-thumb"
                  style={{ background: project.gradient }}
                >
                  <div className="project-thumb-row">
                    <span
                      className={`badge ${
                        project.badgeClass || 'badge-accent'
                      }`}
                      style={{ fontSize: 9 }}
                    >
                      {project.tag}
                    </span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-big-title" style={{ whiteSpace: 'pre-line' }}>
                    {project.bigTitle}
                  </p>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{content.title}</h3>
                  <p className="project-desc">{t[`${project.id}-d`] || content.challenge}</p>
                  <div className="project-tags">
                    {project.chips.map((chip) => (
                      <span key={chip} className="chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
