import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Arjun VM",  
      role: "Marketing Manager",
      company: "Creativo Events",
      image: "/person1.png?height=80&width=80",
      text: "Neha delivered poster designs that truly matched our needs. Her creativity and attention to detail brought our ideas to life just the way we imagined.",
      rating: 5
    },
    {
      id: 2,
      name: "Sanjay Patel",
      role: "Operations Head",
      company: "NovaTech Solutions", 
      image: "/person2.png?height=80&width=80",
      text: "Working with Neha was a game-changer for our product. Her innovative design solutions and collaborative approach made the entire process smooth.",
      rating: 4
    },
    {
      id: 3,
      name: "Divya Menon",
      role: "Product Manager",
      company: "Innovora Labs",
      image: "/person3.png?height=80&width=80", 
      text: "Neha brought our website to life just the way we wanted. Her dedication to functionality, responsiveness, and smooth performance ensured a seamless experience that aligned perfectly with our requirements.",
      rating: 5
    },
    {
      id: 4,
      name: "Sana Mohammad Sahi",
      role: "Campus Lead",
      company: "Tinkerhub SCET",
      image: "/sana.jpg?height=80&width=80", 
      text: "Neha has worked with us as the  designing and media lead in my tinkerhub campus community and we absolutely loved her work, from really creative and eyecatching posters to intricate details to event decoration she was the girl and she was amazing😌.",
      rating: 5
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleTransition = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Add exit animation
    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(20px)';
    }
    
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      
      // Add enter animation
      if (cardRef.current) {
        cardRef.current.style.opacity = '1';
        cardRef.current.style.transform = 'translateY(0)';
      }
      
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    handleTransition(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    handleTransition(newIndex);
  };

  const handleDotClick = (index) => {
    if (index !== currentTestimonial) {
      handleTransition(index);
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentTestimonial]);

  return (
    <section className="testimonials-section section" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">
            What Clients Say <span className="highlight">✦</span>
          </h2>
        </div>
        
        <div className="testimonials-container">
          <div 
            className="testimonial-card" 
            ref={cardRef}
            style={{ 
              opacity: 1, 
              transform: 'translateY(0)',
              transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}
          >
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span 
                    key={i} 
                    className="star"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            
            <div className="testimonial-author">
              <div className="author-image">
                <img 
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"} 
                  alt={testimonials[currentTestimonial].name} 
                />
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                <p className="author-role">{testimonials[currentTestimonial].role}</p>
                <p className="author-company">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-controls">
            <button 
              className="control-btn" 
              onClick={handlePrev}
              disabled={isTransitioning}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  disabled={isTransitioning}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className="control-btn" 
              onClick={handleNext}
              disabled={isTransitioning}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
      
      <div className="floating-elements">
        <div className="floating-quote">"</div>
        <div className="floating-stars">✦</div>
      </div>
    </section>
  );
};

export default TestimonialsSection;