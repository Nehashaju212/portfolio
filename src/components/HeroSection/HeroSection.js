import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  const heroContainerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Custom cursor movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursor) {
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
      }

      // Interactive elements
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;
      
      // Move gradient orbs
      const orbs = document.querySelectorAll('.orb');
      orbs.forEach((orb, index) => {
        const intensity = (index + 1) * 0.1;
        orb.style.transform = `translate(${deltaX * 20 * intensity}px, ${deltaY * 20 * intensity}px)`;
      });
      
      // Move floating elements
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const intensity = (index % 2 === 0 ? 1 : -1) * 0.15;
        element.style.transform = `translate(${deltaX * 30 * intensity}px, ${deltaY * 30 * intensity}px)`;
      });
      
      // Move particles
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        const intensity = (index % 3 + 1) * 0.2;
        particle.style.transform = `translate(${deltaX * 15 * intensity}px, ${deltaY * 15 * intensity}px)`;
      });
      
      // Highlight grid lines
      const gridLines = document.querySelectorAll('.grid-line');
      gridLines.forEach((line) => {
        const distance = Math.abs(deltaX) + Math.abs(deltaY);
        line.style.background = `rgba(122,135,251,${0.1 + distance * 0.2})`;
      });
      
      // Activate text followers based on cursor position
      const textFollowers = document.querySelectorAll('.text-follower');
      textFollowers.forEach((text) => {
        const rect = text.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
          Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );
        
        if (distance < 200) {
          text.classList.add('active');
          text.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px)`;
        } else {
          text.classList.remove('active');
        }
      });
    };

    // Smooth cursor follower animation
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      if (cursorFollower) {
        cursorFollower.style.left = followerX - 20 + 'px';
        cursorFollower.style.top = followerY - 20 + 'px';
      }
      
      requestAnimationFrame(animateFollower);
    };

    // Interactive title effects
    const handleTitleMouseEnter = (e) => {
      e.target.style.transform = 'scale(1.02)';
      e.target.style.textShadow = '0 0 50px rgba(122,135,251,0.3)';
    };

    const handleTitleMouseLeave = (e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.textShadow = '0 0 30px rgba(255,255,255,0.1)';
    };

    // Button hover effects
    const handleButtonMouseEnter = () => {
      if (cursor) cursor.style.transform = 'scale(1.5)';
      if (cursorFollower) cursorFollower.style.transform = 'scale(1.5)';
    };

    const handleButtonMouseLeave = () => {
      if (cursor) cursor.style.transform = 'scale(1)';
      if (cursorFollower) cursorFollower.style.transform = 'scale(1)';
    };

    // Status badge interaction
    const handleStatusMouseEnter = (e) => {
      e.target.style.background = 'rgba(122,135,251,0.1)';
    };

    const handleStatusMouseLeave = (e) => {
      e.target.style.background = 'rgba(255,255,255,0.05)';
    };

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = (index % 3 + 1) * 0.5;
        element.style.transform += ` translateY(${scrolled * speed}px)`;
      });
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Start cursor follower animation
    animateFollower();

    // Add event listeners to elements
    const mainName = document.querySelector('.main-name');
    const buttons = document.querySelectorAll('.btn');
    const statusBadge = document.querySelector('.status-badge');

    if (mainName) {
      mainName.addEventListener('mouseenter', handleTitleMouseEnter);
      mainName.addEventListener('mouseleave', handleTitleMouseLeave);
    }

    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleButtonMouseEnter);
      button.addEventListener('mouseleave', handleButtonMouseLeave);
    });

    if (statusBadge) {
      statusBadge.addEventListener('mouseenter', handleStatusMouseEnter);
      statusBadge.addEventListener('mouseleave', handleStatusMouseLeave);
    }

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      
      if (mainName) {
        mainName.removeEventListener('mouseenter', handleTitleMouseEnter);
        mainName.removeEventListener('mouseleave', handleTitleMouseLeave);
      }

      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleButtonMouseEnter);
        button.removeEventListener('mouseleave', handleButtonMouseLeave);
      });

      if (statusBadge) {
        statusBadge.removeEventListener('mouseenter', handleStatusMouseEnter);
        statusBadge.removeEventListener('mouseleave', handleStatusMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={cursorFollowerRef}></div>
      
      <div className="hero-container" ref={heroContainerRef}>
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        
        <div className="interactive-grid">
          <div className="grid-line vertical" style={{left: '20%'}}></div>
          <div className="grid-line vertical" style={{left: '40%'}}></div>
          <div className="grid-line vertical" style={{left: '60%'}}></div>
          <div className="grid-line vertical" style={{left: '80%'}}></div>
          <div className="grid-line horizontal" style={{top: '25%'}}></div>
          <div className="grid-line horizontal" style={{top: '50%'}}></div>
          <div className="grid-line horizontal" style={{top: '75%'}}></div>
        </div>
        
        <div className="floating-elements">
          <div className="floating-element floating-circle"></div>
          <div className="floating-element floating-square"></div>
          <div className="floating-element floating-triangle"></div>
          <div className="floating-element floating-line"></div>
          <div className="floating-element floating-dot dot-1"></div>
          <div className="floating-element floating-dot dot-2"></div>
          <div className="floating-element floating-dot dot-3"></div>
          <div className="floating-element floating-dot dot-4"></div>
          <div className="floating-element floating-dot dot-5"></div>
        </div>
        
        <div className="text-followers">
          <div className="text-follower" style={{top: '10%', left: '10%'}}>CREATIVE</div>
          <div className="text-follower" style={{top: '20%', right: '20%'}}>DESIGN</div>
          <div className="text-follower" style={{bottom: '30%', left: '20%'}}>INNOVATION</div>
          <div className="text-follower" style={{bottom: '20%', right: '30%'}}>UX/UI</div>
        </div>
        
        <div className="particle-system">
          <div className="particle" style={{top: '15%', left: '25%'}}></div>
          <div className="particle" style={{top: '35%', right: '25%'}}></div>
          <div className="particle" style={{bottom: '40%', left: '15%'}}></div>
          <div className="particle" style={{bottom: '20%', right: '20%'}}></div>
          <div className="particle" style={{top: '60%', left: '60%'}}></div>
          <div className="particle" style={{top: '80%', right: '40%'}}></div>
        </div>
        
        <div className="content">
          <div className="title-section">
            <div className="greeting">Hello, I'm</div>
            <h1 className="main-name">NEHA SHAJU</h1>
            <p className="subtitle">
              <span className="highlight">Aspiring UI/UX Designer • Student • Poster Designer • Front End Developer</span> 
            </p>
          </div>
          
          <div className="status-container">
            <div className="status-badge">
              <div className="status-dot"></div>
              <span className="status-text">Available for Opportunities</span>
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  );
};

export default HeroSection;