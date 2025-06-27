import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Neha_Shaju_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
            <div className="logo-shape"></div>
          <span className="logo-text">neha</span>
          
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>
        
        <div className="header-actions">
          <button onClick={handleDownloadResume} className="btn btn-download">
            Resume
          </button>
        
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
