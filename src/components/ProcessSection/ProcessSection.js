import React, { useEffect, useRef } from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const sectionRef = useRef(null);

  const processSteps = [
    {
      number: "1",
      title: "Research & Planning",
      description: "Understand the user's needs and project goals. Outline the site structure, features, and visual direction."
    },
    {
      number: "2", 
      title: "Wireframing",
      description: "Sketch low-fidelity wireframes to map out the layout, content blocks, and user flow across screens."
    },
    {
      number: "3",
      title: "UI/UX Design in Figma", 
      description: "Design high-fidelity, responsive interfaces with attention to visual hierarchy, accessibility, and user experience."
    },
    {
      number: "4",
      title: "Front-End Development",
      description: "Convert designs into responsive, interactive web pages using HTML, CSS (or Tailwind), and JavaScript (or frameworks like React)."
    },
    {
      number: "5",
      title: "Animation & Interactions",
      description: "Add smooth transitions, hover effects, scroll animations, and micro-interactions to enhance user engagement."
    },
    {
      number: "6",
      title: "Testing & Debugging",
      description: "Test responsiveness, fix layout bugs, and ensure cross-browser/device compatibility for a seamless experience."
    },
    {
      number: "7",
      title: "Deployment",
      description: "Launch the site using tools like Netlify, Vercel, or GitHub Pages — optimized for speed and performance."
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="process-section section" ref={sectionRef}>
      <div className="container">
        <div className="process-header">
          <div className="section-number">03</div>
          <h2 className="section-title">
            My process to design <span className="highlight">✦</span>
          </h2>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div 
              key={step.number}
              className="process-step"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="step-number">
                <span className="step-num">{step.number}</span>
              </div>
              
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              
              <div className="step-connector">
                <div className="connector-line"></div>
                <div className="connector-dot"></div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
      
      <div className="floating-elements">
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
  );
};

export default ProcessSection;