import { GraduationCap, Briefcase, Camera, Gamepad2, Award, Heart } from 'lucide-react';

export default function About() {
  const hobbies = [
    { name: 'Gaming', icon: <Gamepad2 size={16} /> },
    { name: 'Photography', icon: <Camera size={16} /> },
    { name: 'Digital Art', icon: <Award size={16} /> },
    { name: 'Fitness & Sports', icon: <Heart size={16} /> },
  ];

  return (
    <section id="about">
      <div className="section-header">
        <span className="section-subtitle">Biography</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-grid">
        {/* Left Column: Personal introduction & Hobbies */}
        <div className="about-text">
          <p className="about-p">
            I am <span className="about-highlight">Md.Ferdous Ahmed</span>, a web application creator with a deep love for details. 
            My programming journey began back in 2024 when I wrote my first lines of JavaScript to build a simple text-based 
            game. The instant feedback loop of seeing logic translate into functional visual structures instantly captivated me.
          </p>
          <p className="about-p">
            Since then, I've dedicated myself to master the full-stack and modern architectural patterns. I enjoy solving 
            complex layout challenges, optimizing core web vitals, and translating static layouts into smooth, interactive products. 
            I believe that good software should not only work flawlessly under the hood but should also feel responsive, 
            natural, and delightful to interact with.
          </p>
          <p className="about-p">
            Outside of programming, I enjoy a balanced lifestyle. Whether exploring natural landscapes through a camera lens, 
            immersing myself in cooperative puzzle games, or training in competitive sports, these creative outlets keep my mind 
            sharp and inspire fresh perspectives in my engineering work.
          </p>

          <h3 className="hobbies-title">Hobbies & Interests</h3>
          <div className="hobbies-list">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="hobby-card">
                {hobby.icon}
                <span>{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Timelines for Education & Experience */}
        <div className="timeline-section">
          {/* Experience Timeline */}
          <div>
            <h3 className="timeline-title">
              <Briefcase size={22} style={{ color: '#8b5cf6' }} />
              <span>Work Experience</span>
            </h3>
            
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-panel timeline-card">
                  <span className="timeline-date">Jan 2026 - Present</span>
                  <h4 className="timeline-item-title">Full-Stack MERN Engineer</h4>
                  <div className="timeline-subtitle">Programming Hero</div>
                  <p className="timeline-desc">
                    MERN Stack is a modern JavaScript technology stack used to build full-stack web applications. It consists of MongoDB for the database, Express.js for the backend framework, Next.js for building dynamic user interfaces, and Node.js for the server runtime. Together, these technologies enable developers to create fast, scalable, and responsive applications using JavaScript across both the frontend and backend.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-panel timeline-card">
                  <span className="timeline-date">Jun 2024 - Dec 2025</span>
                  <h4 className="timeline-item-title">Junior Web Developer</h4>
                  <div className="timeline-subtitle">WebFlow Solutions</div>
                  <p className="timeline-desc">
                    I'm a Junior Web Developer passionate about building modern, responsive, and user-focused web applications using the MERN stack. I enjoy turning ideas into real-world solutions, learning new technologies, and continuously improving my development skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="timeline-title">
              <GraduationCap size={24} style={{ color: '#06b6d4' }} />
              <span>Education</span>
            </h3>

            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-panel timeline-card">
                  <span className="timeline-date">2020 - 2024</span>
                  <h4 className="timeline-item-title">Diploma in Computer Science & Engineering</h4>
                  <div className="timeline-subtitle">Barguna Polytechnic Institute,Barguna</div>
                  <p className="timeline-desc">
                    Graduated with Honours. Focus on Advanced Algorithms, Databases, and Software Architecture. CGPA: 3.53 / 4.00
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-panel timeline-card">
                  <span className="timeline-date">2018 - 2020</span>
                  <h4 className="timeline-item-title">Secondary School Certificate (SSC)</h4>
                  <div className="timeline-subtitle">Jahan-Ara High School,Sirajganj</div>
                  <p className="timeline-desc">
                    Major in Science & Mathematics. Completed with outstanding scores. GPA: 4.22 / 5.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
