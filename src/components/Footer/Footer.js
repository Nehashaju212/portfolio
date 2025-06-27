import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // SEO Structured Data for Footer
  const footerStructuredData = {
    "@context": "https://schema.org",
    "@type": "WPFooter",
    copyrightYear: currentYear,
    copyrightHolder: {
      "@type": "Person",
      name: "Neha Shaju",
    },
    mainEntity: {
      "@type": "Person",
      name: "Neha Shaju",
      url: "https://nehashaju.com",
      sameAs: [
        "https://www.linkedin.com/in/nehashaju212",
        "https://github.com/Nehashaju212",
        "https://www.instagram.com/_neha.shaju_",
      ],
    },
  }

  return (
    <>
      {/* SEO Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(footerStructuredData) }} />

      <footer className="footer" role="contentinfo" aria-label="Site footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="logo">
                  <span className="logo-text">neha</span>
                  <div className="logo-dot" aria-hidden="true"></div>
                </div>
                <p className="footer-tagline">Creating digital experiences that inspire and engage users worldwide.</p>
              </div>

              <div className="footer-links">
                <div className="footer-column">
                  <h3 className="footer-title">Navigation</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="#about" aria-label="Navigate to About section">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#projects" aria-label="Navigate to Projects section">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#process" aria-label="Navigate to Process section">
                        Process
                      </a>
                    </li>
                    <li>
                      <a href="#contact" aria-label="Navigate to Contact section">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h3 className="footer-title">Services</h3>
                  <ul className="footer-list">
                    <li>UI/UX Design</li>
                    <li>Poster Design</li>
                    <li>Web Development</li>
                    <li>User Research</li>
                    <li>Prototyping</li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h3 className="footer-title">Connect</h3>
                  <ul className="footer-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/nehashaju212"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect with Neha Shaju on LinkedIn"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="mailto:nehashaju212@gmail.com" aria-label="Send email to Neha Shaju">
                        Gmail
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/_neha.shaju_"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow Neha Shaju on Instagram"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Nehashaju212"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Neha Shaju's GitHub profile"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Neha Shaju. All rights reserved.</p>
            </div>
            <div className="footer-status">
              <div className="status-indicator">
                <div className="status-dot" aria-hidden="true"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-elements" aria-hidden="true">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
