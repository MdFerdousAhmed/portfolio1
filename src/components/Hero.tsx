import { useState, useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from './SocialIcons';
import photo from '../assets/image.png';

export default function Hero() {
  const designations = [
    'Full Stack Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer'
  ];

  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: number;
    const fullWord = designations[currentWordIdx];

    if (isDeleting) {
      // Deleting text
      timer = window.setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      // Typing text
      timer = window.setTimeout(() => {
        setCurrentText(fullWord.slice(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    // Handles logic for turning points
    if (!isDeleting && currentText === fullWord) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1500); // Delay before starting to delete
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % designations.length);
      setTypingSpeed(200); // Pause before next word
    }

    return () => window.clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <span className="hero-welcome">Hello, I'm</span>
        <h1 className="hero-name">Md.Ferdous Ahmed</h1>
        
        <div className="hero-designation">
          <span>{currentText}</span>
          <span className="typewriter-cursor"></span>
        </div>

        <p className="hero-description">
          I am a Junior Full Stack Web Developer with a strong focus on the MERN stack. I enjoy building modern, responsive, and user-friendly web applications that solve real-world problems.
        </p>

        <div className="hero-cta">
          <a href="/ferdous_mern.pdf" download="ferdous_mern.pdf" className="btn-primary">
            <Download size={20} />
            <span>Download Resume</span>
          </a>
          <a href="#contact" className="btn-secondary">
            <span>Get in Touch</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/MdFerdousAhmed" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/md-ferdous-ahmed" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://x.com/MDFERDOUSAHMED_" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
            <TwitterIcon size={20} />
          </a>
          <a href="https://www.facebook.com/Md.FerdousAhmed3112" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
            <FacebookIcon size={20} />
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-avatar-wrapper">
          <img src={photo} alt="John Dev Portrait Avatar" className="hero-avatar-img" />
        </div>
      </div>
    </section>
  );
}
