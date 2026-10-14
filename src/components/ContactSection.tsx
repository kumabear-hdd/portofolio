import React, { useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Language, translations } from '../data/portfolioData';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${mouseX * -20}px, ${mouseY * -20}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="contact" className="section section-border">
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="contact-card glass-heavy glow-border">
          <div className="contact-blob-1" ref={blob1Ref} />
          <div className="contact-blob-2" ref={blob2Ref} />

          <h2>{t['cont-title']}</h2>
          <p>{t['cont-sub']}</p>

          <div className="contact-links">
            <a
              href="mailto:hanifdaffa1207@gmail.com"
              className="contact-link glass"
            >
              <div
                className="contact-link-icon"
                style={{
                  background: 'rgba(59,107,255,0.12)',
                  color: 'var(--primary)',
                }}
              >
                <Mail style={{ width: 22, height: 22 }} />
              </div>
              <span className="contact-link-name">Email</span>
              <span className="contact-link-sub">hanifdaffa1207@gmail.com</span>
            </a>

            <a
              href="https://wa.me/6281585134544"
              target="_blank"
              rel="noreferrer"
              className="contact-link glass"
            >
              <div
                className="contact-link-icon"
                style={{
                  background: 'rgba(52,211,153,0.12)',
                  color: '#34d399',
                }}
              >
                <Phone style={{ width: 22, height: 22 }} />
              </div>
              <span className="contact-link-name">WhatsApp</span>
              <span className="contact-link-sub">Instant Reply</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hanif-daffa-dzulfahmi/"
              target="_blank"
              rel="noreferrer"
              className="contact-link glass"
            >
              <div
                className="contact-link-icon"
                style={{
                  background: 'rgba(59,130,246,0.12)',
                  color: '#60a5fa',
                }}
              >
                <LinkedinIcon style={{ width: 22, height: 22 }} />
              </div>
              <span className="contact-link-name">LinkedIn</span>
              <span className="contact-link-sub">Professional Link</span>
            </a>

            <a
              href="https://github.com/kumabear-hdd"
              target="_blank"
              rel="noreferrer"
              className="contact-link glass"
            >
              <div
                className="contact-link-icon"
                style={{
                  background: 'rgba(168,85,247,0.12)',
                  color: '#c084fc',
                }}
              >
                <GithubIcon style={{ width: 22, height: 22 }} />
              </div>
              <span className="contact-link-name">GitHub</span>
              <span className="contact-link-sub">kumabear-hdd</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
