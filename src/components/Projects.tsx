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
      image: '/quickdine.png'
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
      image: '/launchpilot.png'
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
      image: '/legalease.png'
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
              <img src={project.image} alt={project.name} className="project-img" />
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
