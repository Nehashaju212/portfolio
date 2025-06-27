import React, { useState, useEffect, useRef } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAll, setShowAll] = useState(false); // toggle full list
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Posters",
      category: "POSTERS",
      image: "/poster.png",
      tags: ["Figma", "Poster Design", "Canva"],
      description: "A collection of visually engaging posters designed for promotions, announcements, and awareness, each tailored to effectively communicate key messages through impactful design.",
      url: "https://www.figma.com/design/uG8qSsjdvig5IoyODJJJLq/Posters?node-id=0-1&t=5N6xwPXKq2vinGWf-1" // Add your actual URL
    },
    {
      id: 2,
      title: "InFlow Chat",
      category: "WEB DESIGN",
      image: "/inflow.png",
      tags: ["UI/UX", "Web Design", "Redesign"],
      description: "A modern redesign of the Inflow.chat platform focusing on intuitive navigation and calming visuals to enhance user engagement.",
      url: "https://www.figma.com/design/LCAIML1voCpo2FhIxjlOfR/InFlow.chat---Redesign?node-id=0-1&t=EQrMtOA6JfiTYF01-1" // Add your actual URL
    },
    {
      id: 3,
      title: "PharmaAssist",
      category: "WEB APP",
      image: "/PharmAssist.png",
      tags: ["UI/UX", "Web App", "React", "Healthcare"],
      description: "A medicine delivery platform that connects local pharmacies to customers with real-time tracking and seamless order management.",
      url: "https://github.com/Nehashaju212/pharmaassist" // Add your actual URL
    },
    {
      id: 4,
      title: "Virtual Calculator",
      category: "AI PROJECT",
      image: "/calculator.png",
      tags: ["Python", "OpenCV", "Machine Learning", "Gesture Control"],
      description: "A virtual calculator that uses hand gesture recognition through OpenCV and machine learning to perform basic arithmetic operations without physical input.",
      url: "https://github.com/Nehashaju212/virtual-calculator" // Add your actual URL
    },
    {
      id: 5,
      title: "Sign Language Translator",
      category: "AI PROJECT",
      image: "/sign.png",
      tags: ["AI", "Computer Vision", "Python", "Accessibility"],
      description: "A real-time sign language translator that converts hand gestures into speech using OpenCV and TensorFlow, empowering the speech-impaired community.",
      url: "https://github.com/Nehashaju212/sign-language-translator" // Add your actual URL
    },
    {
      id: 6,
      title: "GoodTurn",
      category: "WEB APP",
      image: "/goodturn.jpg",
      tags: ["UI/UX", "Web App", "React", "Freelancing"],
      description: "A freelance showcase platform designed to help freelancers connect with clients and grow their business with intuitive navigation.",
      url: "https://github.com/Nehashaju212/goodturn" // Add your actual URL
    },
    {
      id: 7,
      title: "Credit Card Fraud Detection",
      category: "ML PROJECT",
      image: "/fraud.png",
      tags: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
      description: "A machine learning model that analyzes transaction patterns to detect fraudulent credit card activity, enhancing financial security through data-driven insights.",
      url: "https://github.com/Nehashaju212/fraud-detection" // Add your actual URL
    }
  ];

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section section" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <div className="section-number">02</div>
          <h2 className="section-title">
            My Projects <span className="highlight">✦</span>
          </h2>
        </div>

        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''} ${project.url ? 'clickable' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.url)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <button
            className="view-more-button"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-square"></div>
        <div className="floating-circle"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;