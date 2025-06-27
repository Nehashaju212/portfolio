import React, { useState, useEffect, useRef } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Creative Posters Collection",
      category: "GRAPHIC DESIGN",
      image: "/poster.png",
      tags: ["Figma", "Poster Design", "Canva", "Visual Communication"],
      description: "A collection of visually engaging posters designed for promotions, announcements, and awareness campaigns, each tailored to effectively communicate key messages through impactful design and typography.",
      url: "https://www.figma.com/design/uG8qSsjdvig5IoyODJJJLq/Posters?node-id=0-1&t=5N6xwPXKq2vinGWf-1",
      featured: true,
      year: "2023-2025"
    },
    {
      id: 2,
      title: "InFlow Chat Platform Redesign",
      category: "UI/UX DESIGN",
      image: "/inflow.png",
      tags: ["UI/UX", "Web Design", "Redesign", "User Experience"],
      description: "A comprehensive redesign of the Inflow.chat platform focusing on intuitive navigation, modern aesthetics, and calming visuals to enhance user engagement and communication flow.",
      url: "https://www.figma.com/design/LCAIML1voCpo2FhIxjlOfR/InFlow.chat---Redesign?node-id=0-1&t=EQrMtOA6JfiTYF01-1",
      featured: true,
      year: "2025"
    },
    {
      id: 3,
      title: "PharmaAssist - Medicine Delivery Platform",
      category: "WEB APPLICATION",
      image: "/PharmAssist.png",
      tags: ["UI/UX", "Web App", "React", "Healthcare", "E-commerce"],
      description: "A comprehensive medicine delivery platform that connects local pharmacies to customers with real-time tracking, inventory management, and seamless order processing for healthcare accessibility.",
      url: "https://github.com/Nehashaju212/pharmaassist",
      featured: true,
      year: "2025"
    },
    {
      id: 4,
      title: "Virtual Calculator with Gesture Control",
      category: "AI PROJECT",
      image: "/calculator.png",
      tags: ["Python", "OpenCV", "Machine Learning", "Gesture Control", "Computer Vision"],
      description: "An innovative virtual calculator that uses advanced hand gesture recognition through OpenCV and machine learning algorithms to perform arithmetic operations without physical input devices.",
      url: "https://github.com/Nehashaju212/virtual-calculator",
      featured: false,
      year: "2023"
    },
    {
      id: 5,
      title: "Sign Language Translator",
      category: "AI PROJECT",
      image: "/sign.png",
      tags: ["AI", "Computer Vision", "Python", "Accessibility", "TensorFlow"],
      description: "A real-time sign language translator that converts hand gestures into speech using OpenCV and TensorFlow, empowering the speech-impaired community with better communication tools.",
      url: "https://github.com/Nehashaju212/sign-language-translator",
      featured: true,
      year: "2024"
    },
    {
      id: 6,
      title: "GoodTurn - Freelance Showcase Platform",
      category: "WEB APPLICATION",
      image: "/goodturn.jpg",
      tags: ["UI/UX", "Web App", "React", "Freelancing", "Portfolio"],
      description: "A modern freelance showcase platform designed to help freelancers connect with clients, display their work, and grow their business with intuitive navigation and professional presentation.",
      url: "https://github.com/Nehashaju212/goodturn",
      featured: false,
      year: "2023"
    },
    {
      id: 7,
      title: "Credit Card Fraud Detection System",
      category: "MACHINE LEARNING",
      image: "/fraud.png",
      tags: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis", "Security"],
      description: "An advanced machine learning model that analyzes transaction patterns to detect fraudulent credit card activity, enhancing financial security through data-driven insights and predictive analytics.",
      url: "https://github.com/Nehashaju212/fraud-detection",
      featured: false,
      year: "2024"
    }
  ];

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Portfolio Projects by Neha Shaju",
    "description": "Showcase of web development, UI/UX design, and AI projects",
    "creator": {
      "@type": "Person",
      "name": "Neha Shaju",
      "jobTitle": "UI/UX Designer & Web Developer"
    },
    "workExample": projects.map(project => ({
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "category": project.category,
      "dateCreated": project.year,
      "url": project.url,
      "keywords": project.tags.join(", ")
    }))
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section 
        id="projects" 
        className="projects-section section" 
        ref={sectionRef}
        aria-labelledby="projects-heading"
        role="region"
      >
        <div className="container">
          <header className="projects-header">
            <div className="section-number" aria-hidden="true">02</div>
            <h2 id="projects-heading" className="section-title">
              Featured Projects <span className="highlight" aria-hidden="true">✦</span>
            </h2>
          </header>

          <div className="projects-grid" role="list" aria-label="Portfolio projects">
            {displayedProjects.map((project, index) => (
              <article 
                key={project.id}
                className={`project-card ${hoveredProject === project.id ? 'hovered' : ''} ${project.url ? 'clickable' : ''} ${project.featured ? 'featured' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(project.url)}
                style={{ animationDelay: `${index * 0.2}s` }}
                role="listitem"
                itemScope
                itemType="https://schema.org/CreativeWork"
                tabIndex={project.url ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProjectClick(project.url);
                  }
                }}
                aria-label={`${project.title} - ${project.category}`}
              >
                <div className="project-image">
                  {!imageErrors[project.id] ? (
                    <img 
                      src={project.image || "/placeholder.svg"} 
                      alt={`${project.title} project screenshot`}
                      loading="lazy"
                      decoding="async"
                      onError={() => handleImageError(project.id)}
                      itemProp="image"
                    />
                  ) : (
                    <div className="image-placeholder" aria-label="Project image unavailable">
                      <span>📱</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <div className="project-tags" role="list" aria-label="Project technologies">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-tag" role="listitem">{tag}</span>
                      ))}
                    </div>
                    {project.featured && (
                      <div className="featured-badge" aria-label="Featured project">⭐</div>
                    )}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category" itemProp="category">{project.category}</span>
                    <span className="project-year" itemProp="dateCreated">{project.year}</span>
                  </div>
                  <h3 className="project-title" itemProp="name">{project.title}</h3>
                  <p className="project-description" itemProp="description">{project.description}</p>
                  {project.url && (
                    <div className="project-link" aria-hidden="true">
                      View Project →
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="projects-cta">
            <button
              className="view-more-button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              aria-controls="projects-grid"
            >
              {showAll ? "View Less Projects" : "View All Projects"}
              <span aria-hidden="true">{showAll ? " ↑" : " ↓"}</span>
            </button>
          </div>
        </div>

        <div className="floating-elements" aria-hidden="true">
          <div className="floating-square"></div>
          <div className="floating-circle"></div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
