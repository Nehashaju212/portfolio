import React, { useEffect, useRef } from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const sectionRef = useRef(null);

  const processSteps = [
    {
      number: "1",
      title: "Research & Planning",
      description: "Understand the user's needs and project goals. Outline the site structure, features, and visual direction.",
      icon: "🔍"
    },
    {
      number: "2", 
      title: "Wireframing",
      description: "Sketch low-fidelity wireframes to map out the layout, content blocks, and user flow across screens.",
      icon: "📐"
    },
    {
      number: "3",
      title: "UI/UX Design in Figma", 
      description: "Design high-fidelity, responsive interfaces with attention to visual hierarchy, accessibility, and user experience.",
      icon: "🎨"
    },
    {
      number: "4",
      title: "Front-End Development",
      description: "Convert designs into responsive, interactive web pages using HTML, CSS (or Tailwind), and JavaScript (or frameworks like React).",
      icon: "💻"
    },
    {
      number: "5",
      title: "Animation & Interactions",
      description: "Add smooth transitions, hover effects, scroll animations, and micro-interactions to enhance user engagement.",
      icon: "✨"
    },
    {
      number: "6",
      title: "Testing & Debugging",
      description: "Test responsiveness, fix layout bugs, and ensure cross-browser/device compatibility for a seamless experience.",
      icon: "🔧"
    },
    {
      number: "7",
      title: "Deployment",
      description: "Launch the site using tools like Netlify, Vercel, or GitHub Pages — optimized for speed and performance.",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design & Development Process",
    "description": "Professional 7-step web design and development process from research to deployment",
    "provider": {
      "@type": "Person",
      "name": "Neha Shaju",
      "jobTitle": "UI/UX Designer & Web Developer"
    },
    "serviceType": "Web Design and Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design Process Steps",
      "itemListElement": processSteps.map((step, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": step.title,
          "description": step.description
        },
        "position": index + 1
      }))
    }
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section 
        id="process" 
        className="process-section section" 
        ref={sectionRef}
        aria-labelledby="process-heading"
        role="region"
      >
        <div className="container">
          <header className="process-header">
            <div className="section-number" aria-hidden="true">03</div>
            <h2 id="process-heading" className="section-title">
              My Design Process <span className="highlight" aria-hidden="true">✦</span>
            </h2>
          </header>
          
          <div className="process-steps" role="list" aria-label="Design process steps">
            {processSteps.map((step, index) => (
              <article 
                key={step.number}
                className="process-step"
                style={{ animationDelay: `${index * 0.3}s` }}
                role="listitem"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <div className="step-number" aria-label={`Step ${step.number}`}>
                  <span className="step-num" itemProp="position">{step.number}</span>
                  <span className="step-icon" aria-hidden="true">{step.icon}</span>
                </div>
                
                <div className="step-content">
                  <h3 className="step-title" itemProp="name">{step.title}</h3>
                  <p className="step-description" itemProp="text">{step.description}</p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="step-connector" aria-hidden="true">
                    <div className="connector-line"></div>
                    <div className="connector-dot"></div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
        
        <div className="floating-elements" aria-hidden="true">
          <div className="floating-triangle"></div>
          <div className="floating-line"></div>
          <div className="floating-circle"></div>
          <div className="floating-dots">
            <div className="floating-dot"></div>
            <div className="floating-dot"></div>
            <div className="floating-dot"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;
