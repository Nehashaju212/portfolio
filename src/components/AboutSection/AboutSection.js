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

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Neha Shaju",
    "jobTitle": "UI/UX Designer, Poster Designer, Web Developer, Web Designer & Computer Science Student",
    "description": "Computer Science student specializing in UI/UX design, web development, Web Design, Poster Design, and data analytics",
    "url": "https://nehashaju.com",
    "sameAs": [
      "https://www.linkedin.com/in/nehashaju212",
      "https://github.com/Nehashaju212",
      "https://www.instagram.com/_neha.shaju_"
    ],
    "knowsAbout": [
      "UI/UX Design",
      "Figma",
      "Python",
      "Java",
      "Web Development",
      "Web Design",
      "Poster Design",
      "Data Analytics",
      "Machine Learning",
      "React",
      "R Programming",
      "Computer Vision",
      "Artificial Intelligence"
    ],
    "alumniOf": "Sahrdaya College of Engineering and Technology",
    "memberOf": [
      {
        "@type": "Organization",
        "name": "IEDC Sahrdaya",
        "description": "Vice President"
      },
      {
        "@type": "Organization", 
        "name": "TinkerHub SCET",
        "description": "Media Lead"
      }
    ]
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section 
        id="about" 
        className="about-section section" 
        ref={sectionRef}
        aria-labelledby="about-heading"
        role="main"
      >
        <div className="container">
          <div className="about-content">
            <div className="about-number" ref={numberRef}>
              <span className="section-number" aria-hidden="true">01</span>
            </div>
            
            <div className="about-text">
              <header>
                <h1 id="about-heading" className="section-title">
                  About Me <span className="highlight" aria-hidden="true">✨</span>
                </h1>
              </header>
              
              <div className="about-description">
                <p className="about-detail">
                  I'm <strong>Neha Shaju</strong>, a Computer Science student with a passion for building purposeful digital solutions. I enjoy working at the intersection of design, development, and data, blending creativity with technology to solve real-world problems.
                </p>
                
                <p className="about-detail">
                  Skilled in <em>Python, Java, React, R (for data analytics)</em>, and <em>UI/UX design with Figma</em>, I've developed projects like <strong>GoodTurn</strong>—a freelance showcase platform, <strong>PharmaAssist</strong>—a medicine delivery app, and a <strong>Sign Language Translator</strong> powered by computer vision and AI.
                </p>
                
                <p className="about-detail">
                  My journey goes beyond coding—I actively lead tech communities as the <strong>Vice President of IEDC Sahrdaya</strong> and <strong>Media Lead at TinkerHub SCET</strong>, while contributing to events like <strong>TEDx Sahrdaya CET</strong> and <strong>IEEE Women in Computing</strong>.
                </p>
                
                <p className="about-detail">
                  I believe in learning by doing, solving problems with empathy, and creating experiences that matter. Whether it's a line of code, a pixel-perfect design, or an innovative idea, I aim to make a positive impact through my work.
                </p>
              </div>
              
              <div className="about-stats" role="region" aria-label="Professional Statistics">
                <div className="stat-item">
                  <span className="stat-number" aria-label="2 plus years of experience">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" aria-label="3 plus projects completed">3+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" aria-label="100 percent client satisfaction">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
              
              <div className="about-skills" role="region" aria-label="Technical Skills">
                <h3 className="sr-only">Core Skills and Expertise</h3>
                <div className="skill-tag" role="button" tabIndex="0">UI/UX Design</div>
                <div className="skill-tag" role="button" tabIndex="0">Figma</div>
                <div className="skill-tag" role="button" tabIndex="0">Prototyping</div>
                <div className="skill-tag" role="button" tabIndex="0">User Research</div>
                <div className="skill-tag" role="button" tabIndex="0">Wireframing</div>
                <div className="skill-tag" role="button" tabIndex="0">Python</div>
                <div className="skill-tag" role="button" tabIndex="0">React</div>
                <div className="skill-tag" role="button" tabIndex="0">Java</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="floating-elements" aria-hidden="true">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
