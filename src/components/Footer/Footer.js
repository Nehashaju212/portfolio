import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">neha</span>
                <div className="logo-dot"></div>
              </div>
              <p className="footer-tagline">Creating digital experiences that inspire and engage users worldwide.</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-title">Navigation</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#process">Process</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Services</h4>
                <ul className="footer-list">
                  <li> UI/UX Design</li>
                  <li>Poster Design</li>
                  <li>Web development</li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Connect</h4>
                <ul className="footer-list">
                  <li>
                    <a href="https://www.linkedin.com/in/nehashaju212">LinkedIn</a>
                  </li>
                  <li>
                    <a href="mailto:nehashaj212@gmail.co">Gmail</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/_neha.shaju_">Instagram</a>
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
              <div className="status-dot"></div>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>
    </footer>
  )
}

export default Footer
