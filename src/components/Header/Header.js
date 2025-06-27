"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Neha_Shaju_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // SEO Structured Data for Organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Neha Shaju",
    url: "https://nehashaju.com",
    logo: "https://nehashaju.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/in/nehashaju212",
      "https://github.com/Nehashaju212",
      "https://www.instagram.com/_neha.shaju_",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "nehashaju212@gmail.com",
      contactType: "Professional",
    },
  }

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className={`header ${isScrolled ? "scrolled" : ""}`} role="banner" aria-label="Main navigation">
        <div className="header-container">
          <div className="logo">
            <div className="logo-shape" aria-hidden="true"></div>
            <span className="logo-text">neha</span>
          </div>

          <nav
            className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}
            role="navigation"
            aria-label="Primary navigation"
          >
            <a href="#about" className="nav-link" onClick={handleNavLinkClick} aria-label="Navigate to About section">
              About
            </a>
            <a
              href="#projects"
              className="nav-link"
              onClick={handleNavLinkClick}
              aria-label="Navigate to Projects section"
            >
              Projects
            </a>
            <a
              href="#process"
              className="nav-link"
              onClick={handleNavLinkClick}
              aria-label="Navigate to Process section"
            >
              Process
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={handleNavLinkClick}
              aria-label="Navigate to Contact section"
            >
              Contact
            </a>
          </nav>

          <div className="header-actions">
            <button
              onClick={handleDownloadResume}
              className="btn-download"
              aria-label="Download Neha Shaju's resume PDF"
              type="button"
            >
              Resume
            </button>
          </div>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={handleMobileMenuToggle}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
