"use client"

import { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
import "./ContactSection.css"

// Safe import for emailConfig
let emailConfig = {
  serviceId: "service_ra17r1e",
  templateId: "template_piw4ipf",
  publicKey: "1q6V-Y9yy-BMIxcGn",
}

try {
  const configModule = require("../../config/emailConfig")
  if (configModule && configModule.emailConfig) {
    emailConfig = configModule.emailConfig
  }
} catch (error) {
  console.log("EmailJS config file not found, using defaults")
}

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  const cursorTrailRef = useRef([])

  // Mouse tracking for interactive effects (removed cursor trail)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Intersection Observer for animations
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

  // Parallax effect for floating elements
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const floatingElements = document.querySelectorAll(
        ".floating-envelope, .floating-arrow, .floating-star, .floating-heart",
      )

      floatingElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1
        element.style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Add interactive typing effect
  const handleInputFocus = (e) => {
    e.target.style.transform = "translateY(-2px)"
    e.target.style.boxShadow = "0 5px 15px rgba(122, 135, 251, 0.2)"
  }

  const handleInputBlur = (e) => {
    e.target.style.transform = "translateY(0)"
    e.target.style.boxShadow = "none"
  }

  // Copy to clipboard functionality
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      // Show temporary feedback
      const feedback = document.createElement("div")
      feedback.textContent = `${type} copied!`
      feedback.style.cssText = `
        position: fixed;
        top: ${mousePosition.y - 40}px;
        left: ${mousePosition.x - 50}px;
        background: rgba(122, 135, 251, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        z-index: 10000;
        pointer-events: none;
        animation: fadeInOut 2s ease-out forwards;
      `

      // Add keyframes if not already present
      if (!document.querySelector("#copyFeedbackKeyframes")) {
        const style = document.createElement("style")
        style.id = "copyFeedbackKeyframes"
        style.textContent = `
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(10px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
        `
        document.head.appendChild(style)
      }

      document.body.appendChild(feedback)
      setTimeout(() => document.body.removeChild(feedback), 2000)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFeedback({ type: "", message: "" })
    setIsSubmitting(true)

    try {
      console.log("EmailJS Config:", emailConfig)

      if (
        !emailConfig ||
        emailConfig.serviceId === "YOUR_SERVICE_ID" ||
        emailConfig.serviceId.includes("xxx") ||
        !emailConfig.serviceId ||
        !emailConfig.templateId ||
        !emailConfig.publicKey
      ) {
        throw new Error("EmailJS credentials not configured properly")
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.project,
        budget_range: formData.budget,
        message: formData.message,
        to_email: "nehashaju212@gmail.com",
      }

      console.log("Sending email with params:", templateParams)

      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey,
      )

      console.log("EmailJS Success:", result)

      setFeedback({
        type: "success",
        message: "✅ Message sent successfully! I'll get back to you within 24 hours.",
      })

      // No animations - just show the feedback message

      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)

      let errorMessage = "❌ Failed to send message. "

      if (error.message.includes("not configured")) {
        errorMessage = "⚠️ EmailJS setup incomplete. Please check your configuration in emailConfig.js"
      } else if (error.text) {
        errorMessage += `EmailJS Error: ${error.text}`
      } else if (error.message) {
        errorMessage += error.message
      } else {
        errorMessage += "Please try again or contact me directly at nehashaju212@gmail.com"
      }

      setFeedback({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
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
                Ready to bring your vision to life? Let's collaborate and create something amazing together. I
                specialize in modern, interactive designs that captivate and convert.
              </p>
            </div>

            <div className="contact-details">
              <div
                className="contact-item"
                onClick={() => copyToClipboard("nehashaju212@gmail.com", "Email")}
                title="Click to copy email"
              >
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">nehashaju212@gmail.com</span>
                </div>
              </div>

              <div
                className="contact-item"
                onClick={() => copyToClipboard("+1 (555) 123-4567", "Phone")}
                title="Click to copy phone number"
              >
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">+91 94958 16213</span>
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

            <div className="qr-section">
              <div className="qr-codes">
                <div className="qr-code">
                  
                   <a 
                  href="https://www.instagram.com/_neha.shaju_" 
                  className="qr-label" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Instagram
                </a>
                </div>
                <div className="qr-code">
                  
                   <a 
                  href="mailto:nehashaju212@gmail.com" 
                  className="qr-label" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Gmail
                </a>
                </div>
                <div className="qr-code">
                  
                   <a 
                  href="https://github.com/Nehashaju212" 
                  className="qr-label" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Github
                </a>
                </div>
                <div className="qr-code">
                  
                 <a 
                  href="https://www.linkedin.com/in/nehashaju212" 
                  className="qr-label" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  LinkedIn
                </a>

                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="project">Project Type</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Design</option>
                    <option value="poster-design">Poster Design</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                  >
                    <option value="">Select Budget</option>
                    <option value=">1K"> Less than 1K</option>
                    <option value="1k-5k">1K - 5K</option>
                    <option value="5k-10k">5K - 10K</option>
                    <option value="10k-25k">10K - 25K</option>
                    <option value="25k+">25K+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
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
        <div className="floating-star">✨</div>
        <div className="floating-heart">💜</div>
      </div>
    </section>
  )
}

export default ContactSection
