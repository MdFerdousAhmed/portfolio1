import { useEffect } from 'react';
import { X, ExternalLink, Cpu, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export interface ProjectType {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  improvements: string;
  image: React.ReactNode;
}

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    // Disable background scrolling when modal is active
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // ESC key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'open' : ''}`} 
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="glass-panel modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <h3 className="modal-title">{project.name}</h3>
        </div>

        {/* Project Visual Image */}
        <div className="modal-img-wrapper">
          {project.image}
        </div>

        {/* Tech Stack */}
        <div className="modal-tech-stack">
          <h4 className="modal-section-title">
            <Cpu size={18} style={{ color: '#06b6d4' }} />
            <span>Tech Stack</span>
          </h4>
          <div className="modal-badges">
            {project.techStack.map((tech) => (
              <span key={tech} className="modal-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* Actions Links */}
        <div className="modal-links">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ padding: '8px 20px', borderRadius: '8px', fontSize: '0.9rem' }}
          >
            <ExternalLink size={16} />
            <span>Live Project Demo</span>
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
            style={{ padding: '8px 20px', borderRadius: '8px', fontSize: '0.9rem' }}
          >
            <GithubIcon size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Long Description */}
        <p className="modal-desc">{project.longDesc}</p>

        {/* Challenges and Future Plans */}
        <div className="modal-two-col">
          <div className="modal-info-block" style={{ borderLeft: '3px solid #f43f5e' }}>
            <h4 className="modal-section-title" style={{ color: '#f43f5e', marginBottom: '14px' }}>
              <AlertCircle size={18} />
              <span>Challenges Faced</span>
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
              {project.challenges}
            </p>
          </div>

          <div className="modal-info-block" style={{ borderLeft: '3px solid #10b981' }}>
            <h4 className="modal-section-title" style={{ color: '#10b981', marginBottom: '14px' }}>
              <Sparkles size={18} />
              <span>Future Roadmaps</span>
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
              {project.improvements}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
