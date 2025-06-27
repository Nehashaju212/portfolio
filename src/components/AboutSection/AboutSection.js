import React, { useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-number" ref={numberRef}>
            <span className="section-number">01</span>
          </div>
          
          <div className="about-text">
            <h2 className="section-title">
              About Me <span className="highlight">✨</span>
            </h2>
            
            <div className="about-description">
             <p className="about-detail">
                I’m <span className="highlight">Neha Shaju</span>, a Computer Science student with a passion for building purposeful digital solutions. I enjoy working at the intersection of design, development, and data, blending creativity with technology to solve real-world problems.

Skilled in Python, Java, React, R (for data analytics), and UI/UX design with Figma, I’ve developed projects like GoodTurn—a freelance showcase platform, PharmaAssist—a medicine delivery app, and a Sign Language Translator powered by computer vision and AI.

My journey goes beyond coding—I actively lead tech communities as the Vice President of IEDC Sahrdaya and Media Lead at TinkerHub SCET, while contributing to events like TEDx Sahrdaya CET and IEEE Women in Computing.

I believe in learning by doing, solving problems with empathy, and creating experiences that matter. Whether it’s a line of code, a pixel-perfect design, or an innovative idea, I aim to make a positive impact through my work.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
            
            <div className="about-skills">
              <div className="skill-tag">UI/UX Design</div>
              <div className="skill-tag">Figma</div>
              <div className="skill-tag">Prototyping</div>
              <div className="skill-tag">User Research</div>
              <div className="skill-tag">Wireframing</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="floating-elements">
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>
    </section>
  );
};

export default AboutSection;
