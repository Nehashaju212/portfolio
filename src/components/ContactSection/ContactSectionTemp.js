"use client"

import { useState, useEffect, useRef } from "react"
import "./ContactSection.css"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState({ type: "", message: "" })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFeedback({ type: "", message: "" })
    setIsSubmitting(true)

    // Simulate form submission for now
    setTimeout(() => {
      console.log("Form Data:", formData)

      setFeedback({
        type: "success",
        message: "Form submitted successfully! (EmailJS setup required for actual email sending)",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
      })

      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section id="contact" className="contact-section section" ref={sectionRef}>
      <div className="container">
        <div className="contact-header">
          <div className="contact-title-section">
            <h2 className="section-title">
              Have idea about project? <span className="highlight">✦</span>
            </h2>
            <p className="contact-subtitle">LET'S START DESIGNING YOUR PROJECT</p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-description">
              <p>
                THE INITIAL STEP INVOLVES A SYSTEMATIC AND THOROUGH EXPLORATION OF THE MARKET LANDSCAPE, USER NEEDS, AND
                EXISTING SOLUTIONS. THE INITIAL STEP INVOLVES A SYSTEMATIC AND THOROUGH EXPLORATION OF THE MARKET
                LANDSCAPE, USER NEEDS, AND EXISTING SOLUTIONS.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">nehashaju212@gmail.com</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Available Worldwide</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="# " className="social-link">
                LinkedIn
              </a>
              <a href="# " className="social-link">
                Dribbble
              </a>
              <a href="# " className="social-link">
                Behance
              </a>
              <a href="# " className="social-link">
                Instagram
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="project">Project Type</label>
                  <select id="project" name="project" value={formData.project} onChange={handleInputChange} required>
                    <option value="">Select Project Type</option>
                    <option value="web-design">Web Design</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="branding">Branding</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange} required>
                    <option value="">Select Budget</option>
                    <option value="1k-5k">$1K - $5K</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k+">$25K+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn btn-primary form-submit ${isSubmitting ? "sending" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {feedback.message && <div className={`form-feedback ${feedback.type}`}>{feedback.message}</div>}
            </form>
          </div>
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-envelope">✉</div>
        <div className="floating-arrow">→</div>
      </div>
    </section>
  )
}

export default ContactSection
