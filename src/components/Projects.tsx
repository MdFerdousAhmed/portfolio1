import { useState } from 'react';
import ProjectModal from './ProjectModal';
import type { ProjectType } from './ProjectModal';
import { Eye } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData: ProjectType[] = [
     {
      id: 'quickdine',
      name: 'QuickDine',
      shortDesc: 'QuickDine is a full-stack restaurant booking and food ordering web application where users can browse restaurants, explore menus, reserve tables, and order food online.',
      longDesc: 'QuickDine is a modern full-stack restaurant booking and food ordering web application designed to simplify the dining experience for both customers and restaurant owners. Users can browse restaurants, explore detailed menus, search and filter their favorite foods, reserve tables, and place food orders through an intuitive and responsive interface.The platform includes secure user authentication, personalized profiles, booking history, and real-time reservation management. Restaurant administrators can efficiently manage menus, food items, reservations, customer orders, and user accounts through a powerful dashboard. Built with modern web technologies, QuickDine focuses on performance, scalability, and a smooth user experience across desktop, tablet, and mobile devices.',
      techStack: ['Next', 'TypeScript', 'Node.js', 'Express', 'Mongoose', 'Cloudinary', 'Multer', 'Axios', 'TailwindCSS'],
      liveLink: 'https://quick-dine-client-gilt.vercel.app',
      githubLink: 'https://github.com/MdFerdousAhmed/QuickDine',
      challenges: 'Building QuickDine involved challenges such as implementing secure authentication, integrating frontend and backend APIs, managing bookings and orders, and resolving deployment issues like CORS and environment configuration. Overcoming these challenges strengthened my full-stack development and problem-solving skills.',
      improvements: 'In the future, I plan to add real-time order tracking, online payment integration, customer reviews and ratings, push notifications, and AI-powered restaurant recommendations to further enhance the user experience.',
      image: (
        <svg viewBox="0 0 400 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#0a0f1d" />
          {/* Chart Grid Lines */}
          <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1">
            <line x1="50" y1="30" x2="350" y2="30" />
            <line x1="50" y1="70" x2="350" y2="70" />
            <line x1="50" y1="110" x2="350" y2="110" />
            <line x1="50" y1="150" x2="350" y2="150" />
            <line x1="100" y1="30" x2="100" y2="150" />
            <line x1="170" y1="30" x2="170" y2="150" />
            <line x1="240" y1="30" x2="240" y2="150" />
            <line x1="310" y1="30" x2="310" y2="150" />
          </g>
          {/* Glowing Sine Wave */}
          <path d="M 50 130 Q 80 50 120 90 T 190 60 T 260 120 T 320 50" fill="none" stroke="#06b6d4" strokeWidth="3" filter="url(#glowFilter)" />
          <path d="M 50 130 Q 80 50 120 90 T 190 60 T 260 120 T 320 50 L 320 150 L 50 150 Z" fill="url(#chartFillGrad)" opacity="0.2" />
          {/* Chart Points */}
          <circle cx="120" cy="90" r="4" fill="#8b5cf6" stroke="#f8fafc" strokeWidth="1" />
          <circle cx="260" cy="120" r="4" fill="#8b5cf6" stroke="#f8fafc" strokeWidth="1" />
          <circle cx="320" cy="50" r="5" fill="#ec4899" stroke="#f8fafc" strokeWidth="1.5" />
          {/* Axis Labels */}
          <text x="30" y="153" fill="#64748b" fontFamily="monospace" fontSize="10">0%</text>
          <text x="25" y="93" fill="#64748b" fontFamily="monospace" fontSize="10">50%</text>
          <text x="20" y="33" fill="#64748b" fontFamily="monospace" fontSize="10">100%</text>
          <defs>
            <linearGradient id="chartFillGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <filter id="glowFilter" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      )
    },
    {
      id: 'launchpilot',
      name: 'LaunchPilot',
      shortDesc: 'LaunchPilot is a full-stack AI-powered SaaS platform that helps startups plan, manage, and launch products with project management, task tracking, and AI-driven insights.',
      longDesc: 'LaunchPilot is a full-stack AI-powered SaaS platform designed to help entrepreneurs and startup teams manage the entire product launch process from a single dashboard. Users can create projects, organize tasks, analyze competitors, and generate AI-powered content and business insights to validate ideas and accelerate product launches.The platform features secure authentication, role-based access control, project and task management, AI-assisted content generation, competitor analysis, and responsive dashboards for an intuitive user experience. It also includes admin functionality for managing users and platform resources. Built with modern web technologies, LaunchPilot demonstrates expertise in full-stack development, RESTful API design, database management, authentication, AI integration, and cloud deployment, delivering a scalable and efficient solution for startup teams.',
      techStack: ['Next', 'TypeScript', 'Node.js', 'Express', 'Mongoose', 'TailwindCSS'],
      liveLink: 'https://launch-pilot-client.vercel.app',
      githubLink: 'https://github.com/MdFerdousAhmed/LaunchPilot',
      challenges: 'Synchronizing interactive board states in real-time across multiple active editors while avoiding race conditions. This was resolved by creating an optimistic UI rendering hook combined with standard server-side locking mechanics.',
      improvements: 'Future iterations will integrate Git webhook listening events to auto-update boards based on git commits, along with a predictive timeline estimator.',
      image: (
        <svg viewBox="0 0 400 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#0a0f1d" />
          <g stroke="rgba(139, 92, 246, 0.08)" strokeWidth="1">
            <line x1="0" y1="40" x2="400" y2="40" />
            <line x1="0" y1="80" x2="400" y2="80" />
            <line x1="0" y1="120" x2="400" y2="120" />
            <line x1="0" y1="160" x2="400" y2="160" />
            <line x1="100" y1="0" x2="100" y2="200" />
            <line x1="200" y1="0" x2="200" y2="200" />
            <line x1="300" y1="0" x2="300" y2="200" />
          </g>
          {/* Columns */}
          <rect x="20" y="30" width="100" height="150" rx="6" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.04)" />
          <rect x="150" y="30" width="100" height="150" rx="6" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.04)" />
          <rect x="280" y="30" width="100" height="150" rx="6" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.04)" />
          {/* Card 1 */}
          <rect x="30" y="45" width="80" height="35" rx="4" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1.5" />
          <line x1="40" y1="58" x2="90" y2="58" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="68" x2="70" y2="68" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="95" cy="65" r="4" fill="#06b6d4" />
          {/* Card 2 */}
          <rect x="160" y="45" width="80" height="35" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" />
          <line x1="170" y1="58" x2="220" y2="58" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
          <line x1="170" y1="68" x2="195" y2="68" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="225" cy="65" r="4" fill="#ec4899" />
          {/* Card 3 */}
          <rect x="290" y="45" width="80" height="35" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" />
          <line x1="300" y1="58" x2="350" y2="58" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
          <line x1="300" y1="68" x2="330" y2="68" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          {/* Avatar glow connection */}
          <path d="M 110 62 Q 135 90 160 62" fill="none" stroke="url(#neonGradLine)" strokeWidth="1.5" strokeDasharray="4 2" />
          <defs>
            <linearGradient id="neonGradLine" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'legalease',
      name: 'LegalEase',
      shortDesc: 'LegalEase is a full-stack platform for booking legal consultations, managing appointments, and connecting clients with experienced lawyers.',
      longDesc: 'LegalEase is a modern full-stack legal service platform designed to simplify the process of connecting clients with qualified lawyers. The application enables users to browse lawyer profiles, book legal consultations, manage appointments, and securely communicate through an intuitive and responsive interface.The platform includes role-based authentication for clients, lawyers, and administrators. Clients can search for lawyers by specialization, schedule appointments, and track consultation history, while lawyers can manage their profiles, availability, and client requests. Administrators have access to a comprehensive dashboard to manage users, lawyers, appointments, and platform content. Built with modern web technologies, LegalEase emphasizes security, scalability, and a seamless user experience across all devices.',
      techStack: ['Next', 'javaScript', 'TailwindCSS', 'Mongodb', 'express'],
      liveLink: 'https://legalease-client-alpha.vercel.app',
      githubLink: 'https://github.com/MdFerdousAhmed/legalease_client',
      challenges: 'Developing LegalEase involved challenges such as implementing role-based authentication, managing appointments between clients and lawyers, integrating frontend and backend APIs, and ensuring secure data handling. I also resolved deployment and performance issues to deliver a reliable and responsive user experience.',
      improvements: 'In the future, I plan to add video consultation, online payment integration, real-time chat, document sharing, email notifications, and AI-powered legal assistance to enhance the platform.',
      image: (
        <svg viewBox="0 0 400 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#0a0f1d" />
          {/* Star Field */}
          <circle cx="30" cy="50" r="1" fill="#fff" opacity="0.5" />
          <circle cx="80" cy="140" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="150" cy="30" r="1" fill="#fff" opacity="0.3" />
          <circle cx="280" cy="170" r="1" fill="#fff" opacity="0.4" />
          <circle cx="340" cy="80" r="1.5" fill="#fff" opacity="0.6" />
          {/* Concentric Orbits */}
          <ellipse cx="200" cy="100" rx="140" ry="60" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          <ellipse cx="200" cy="100" rx="90" ry="35" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="5 3" />
          {/* Central Sun */}
          <circle cx="200" cy="100" r="20" fill="url(#sunGrad)" filter="url(#sunGlow)" />
          {/* Planets */}
          <circle cx="110" cy="100" r="7" fill="#8b5cf6" />
          <ellipse cx="110" cy="100" rx="12" ry="3" fill="none" stroke="#a78bfa" strokeWidth="1" transform="rotate(-15 110 100)" />
          <circle cx="270" cy="70" r="10" fill="#06b6d4" />
          <circle cx="274" cy="66" r="2" fill="#e2e8f0" opacity="0.6" />
          {/* Trajectory vector */}
          <line x1="270" y1="70" x2="295" y2="55" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 2" />
          <defs>
            <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ea580c" />
            </radialGradient>
            <filter id="sunGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      )
    }
  ];

  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-subtitle">Portfolio Showcase</span>
        <h2 className="section-title">My Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="glass-panel project-card">
            <div className="project-img-wrapper">
              {project.image}
              <div className="project-overlay"></div>
            </div>

            <div className="project-info">
              <div className="project-tags">
                {project.techStack.slice(0, 3).map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc-short">{project.shortDesc}</p>
              
              <button 
                className="btn-secondary project-btn-details" 
                onClick={() => handleOpenModal(project)}
              >
                <Eye size={16} />
                <span>View Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
}
