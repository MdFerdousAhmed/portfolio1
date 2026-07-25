import React, { useState } from 'react';
import { 
  Atom, 
  Code2, 
  FileCode, 
  Layout, 
  Cpu, 
  Database, 
  Leaf, 
  Network, 
  GitBranch, 
  Triangle, 
  PenTool,
  Layers,
  Wrench,
  Globe,
  Wind,
  Palette,
  Flower,
  Activity,
  Server,
  Shield,
  Key,
  Sparkles,
  Cloud
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
  rgb: string;
  icon: LucideIcon;
}

const skillsData: Skill[] = [
  // Frontend Tech
  {
    name: 'Next.js',
    category: 'frontend',
    color: '#FFFFFF',
    rgb: '255, 255, 255',
    icon: Globe,
  },
  {
    name: 'React.js',
    category: 'frontend',
    color: '#61DAFB',
    rgb: '97, 218, 251',
    icon: Atom,
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    color: '#3178C6',
    rgb: '49, 120, 198',
    icon: Code2,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    color: '#F7DF1E',
    rgb: '247, 223, 30',
    icon: FileCode,
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    color: '#38BDF8',
    rgb: '56, 189, 248',
    icon: Wind,
  },
  {
    name: 'HeroUI',
    category: 'frontend',
    color: '#0072F5',
    rgb: '0, 114, 245',
    icon: Palette,
  },
  {
    name: 'DaisyUI',
    category: 'frontend',
    color: '#FFB800',
    rgb: '255, 184, 0',
    icon: Flower,
  },
  {
    name: 'Framer Motion',
    category: 'frontend',
    color: '#F107A3',
    rgb: '241, 7, 163',
    icon: Activity,
  },
  // Backend & Database
  {
    name: 'Node.js',
    category: 'backend',
    color: '#339933',
    rgb: '51, 153, 51',
    icon: Cpu,
  },
  {
    name: 'Express.js',
    category: 'backend',
    color: '#E0E0E0',
    rgb: '224, 224, 224',
    icon: Server,
  },
  {
    name: 'MongoDB / NoSQL',
    category: 'backend',
    color: '#47A248',
    rgb: '71, 162, 72',
    icon: Leaf,
  },
  {
    name: 'Better Auth',
    category: 'backend',
    color: '#FF5733',
    rgb: '255, 87, 51',
    icon: Shield,
  },
  {
    name: 'JWT',
    category: 'backend',
    color: '#FB015B',
    rgb: '251, 1, 91',
    icon: Key,
  },
  {
    name: 'REST APIs',
    category: 'backend',
    color: '#E10098',
    rgb: '225, 0, 152',
    icon: Network,
  },
  // Tools & DevOps
  {
    name: 'Git & GitHub',
    category: 'tools',
    color: '#F05032',
    rgb: '240, 80, 50',
    icon: GitBranch,
  },
  {
    name: 'Google Gemini AI',
    category: 'tools',
    color: '#4A90E2',
    rgb: '74, 144, 226',
    icon: Sparkles,
  },
  {
    name: 'Cloudinary',
    category: 'tools',
    color: '#3448C5',
    rgb: '52, 72, 197',
    icon: Cloud,
  },
  {
    name: 'Vercel & Deployments',
    category: 'tools',
    color: '#FFFFFF',
    rgb: '255, 255, 255',
    icon: Triangle,
  },
  {
    name: 'Figma (UI/UX)',
    category: 'tools',
    color: '#F24E1E',
    rgb: '242, 78, 30',
    icon: PenTool,
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const tabs = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'frontend', name: 'Frontend Tech', icon: Layout },
    { id: 'backend', name: 'Backend & DB', icon: Database },
    { id: 'tools', name: 'Tools & DevOps', icon: Wrench },
  ] as const;

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-subtitle">Proficiencies</span>
        <h2 className="section-title">My Skills</h2>
      </div>

      {/* Tabs navigation */}
      <div className="skills-tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`skills-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={18} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-v2" key={activeTab}>
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="glass-panel skill-card-v2"
              style={{
                '--brand-color': skill.color,
                '--brand-color-rgb': skill.rgb,
              } as React.CSSProperties}
            >
              <div className="skill-icon-wrap">
                <Icon size={22} />
              </div>
              <span className="skill-name-v2">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

