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
                  Hi, I’m <strong>Neha Shaju</strong> — a Computer Science student who enjoys exploring how technology can make everyday life better.
                  I love building simple, meaningful digital solutions that blend creativity with functionality.
                </p>

                <p className="about-detail">
                  From design to code, I enjoy creating things that solve real problems. Whether it’s coding, designing, or working on projects that make a difference, I believe in learning by doing.
                </p>

                <p className="about-detail">
                  I enjoy trying new things, connecting with people, and approaching problems with empathy and curiosity. Currently, I’m exploring tech through hands-on projects, student communities, and small steps that help me grow — one line of code, one design, and one idea at a time.
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
