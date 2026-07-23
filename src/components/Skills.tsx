import { useEffect, useState } from 'react';
import { Monitor, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Add small timeout to trigger animations
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const frontendSkills = [
    { name: 'Next', level: 92 },
    { name: 'TypeScript', level: 88 },
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'CSS Grid & Flexbox', level: 90 },
  ];

  const backendSkills = [
    { name: 'Node.js & Express', level: 85 },
    { name: 'MongoDB / NoSQL', level: 82 },
    { name: 'PostgreSQL / SQL', level: 80 },
    { name: 'REST & GraphQL APIs', level: 87 },
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', level: 92 },
    { name: 'Mongodb', level: 75 },
    { name: 'Vercel', level: 85 },
    { name: 'Figma (UI/UX)', level: 78 },
  ];

  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-subtitle">Proficiencies</span>
        <h2 className="section-title">My Skills</h2>
      </div>

      <div className="skills-grid">
        {/* Frontend Skills Card */}
        <div className="glass-panel skills-card">
          <h3 className="skills-category-title">
            <Monitor size={22} style={{ color: '#06b6d4' }} />
            <span>Frontend Tech</span>
          </h3>
          <div className="skills-list-container">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills Card */}
        <div className="glass-panel skills-card">
          <h3 className="skills-category-title">
            <Server size={22} style={{ color: '#8b5cf6' }} />
            <span>Backend & DB</span>
          </h3>
          <div className="skills-list-container">
            {backendSkills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Operations Card with circular charts */}
        <div className="glass-panel skills-card">
          <h3 className="skills-category-title">
            <Wrench size={22} style={{ color: '#ec4899' }} />
            <span>Tools & DevOps</span>
          </h3>
          <div className="skills-circular-container">
            {toolsSkills.map((skill) => {
              const radius = 28;
              const circumference = 2 * Math.PI * radius; // 175.9
              const offset = circumference - (skill.level / 100) * circumference;

              return (
                <div key={skill.name} className="skill-circle-item">
                  <div className="circle-svg-wrap">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r={radius} className="circle-bg" />
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        className="circle-fill"
                        stroke="url(#neonGrad)"
                        strokeDasharray={circumference}
                        strokeDashoffset={animated ? offset : circumference}
                      />
                    </svg>
                    <div className="circle-text">{skill.level}%</div>
                  </div>
                  <span className="skill-name" style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
