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
    phone: "",
    project: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState({ type: "", message: "" })
  const [errors, setErrors] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  // SEO Structured Data
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Neha Shaju - UI/UX Designer",
    description:
      "Get in touch with Neha Shaju for UI/UX design, web development, and poster design projects. Available for freelance opportunities worldwide.",
    url: "https://nehashaju.com/contact",
    mainEntity: {
      "@type": "Person",
      name: "Neha Shaju",
      email: "nehashaju212@gmail.com",
      telephone: "+91 94958 16213",
      jobTitle: "UI/UX Designer & Computer Science Student",
      availableLanguage: ["English", "Hindi", "Malayalam"],
      serviceArea: {
        "@type": "Place",
        name: "Worldwide",
      },
      offers: [
        {
          "@type": "Service",
          name: "UI/UX Design",
          description: "User interface and user experience design services",
        },
        {
          "@type": "Service",
          name: "Web Development",
          description: "Frontend web development using React and modern technologies",
        },
        {
          "@type": "Service",
          name: "Poster Design",
          description: "Creative poster and graphic design services",
        },
      ],
    },
  }

  // Mouse tracking for interactive effects
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

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Phone validation function
  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ""))
  }

  // Form validation function
  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Project validation
    if (!formData.project) {
      newErrors.project = "Please select a project type"
    }

    // Budget validation
    if (!formData.budget) {
      newErrors.budget = "Please select a budget range"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Project details are required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details (at least 10 characters)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Add interactive typing effect
  const handleInputFocus = (e) => {
    e.target.style.transform = "translateY(-2px)"
    e.target.style.boxShadow = "0 5px 15px rgba(122, 135, 251, 0.2)"
  }

  const handleInputBlur = (e) => {
    e.target.style.transform = "translateY(0)"
    e.target.style.boxShadow = "none"

    // Validate field on blur
    const { name, value } = e.target
    const fieldErrors = {}

    if (name === "email" && value && !validateEmail(value)) {
      fieldErrors.email = "Please enter a valid email address"
    }
    if (name === "phone" && value && !validatePhone(value)) {
      fieldErrors.phone = "Please enter a valid phone number"
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors({
        ...errors,
        ...fieldErrors,
      })
    }
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

    // Validate form before submission
    if (!validateForm()) {
      setFeedback({
        type: "error",
        message: "❌ Please fill in all required fields correctly.",
      })
      return
    }

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
        from_phone: formData.phone,
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

      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        budget: "",
        message: "",
      })
      setErrors({})
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
    <>
      {/* SEO Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }} />

      <section
        id="contact"
        className="contact-section section"
        ref={sectionRef}
        aria-labelledby="contact-heading"
        role="main"
      >
        <div className="container">
          <header className="contact-header">
            <div className="contact-title-section">
              <h1 id="contact-heading" className="section-title">
                Have idea about project?{" "}
                <span className="highlight" aria-hidden="true">
                  ✦
                </span>
              </h1>
              <p className="contact-subtitle">LET'S START DESIGNING YOUR PROJECT</p>
            </div>
          </header>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-description">
                <p>
                  Ready to bring your vision to life? Let's collaborate and create something amazing together. I
                  specialize in modern, interactive designs that captivate and convert.
                </p>
              </div>

              <div className="contact-details" role="region" aria-label="Contact Information">
                <div
                  className="contact-item"
                  onClick={() => copyToClipboard("nehashaju212@gmail.com", "Email")}
                  onKeyDown={(e) => e.key === "Enter" && copyToClipboard("nehashaju212@gmail.com", "Email")}
                  title="Click to copy email"
                  role="button"
                  tabIndex="0"
                  aria-label="Email address: nehashaju212@gmail.com. Click to copy."
                >
                  <div className="contact-icon" aria-hidden="true">
                    📧
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">nehashaju212@gmail.com</span>
                  </div>
                </div>

                <div
                  className="contact-item"
                  onClick={() => copyToClipboard("+91 94958 16213", "Phone")}
                  onKeyDown={(e) => e.key === "Enter" && copyToClipboard("+91 94958 16213", "Phone")}
                  title="Click to copy phone number"
                  role="button"
                  tabIndex="0"
                  aria-label="Phone number: +91 94958 16213. Click to copy."
                >
                  <div className="contact-icon" aria-hidden="true">
                    📱
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 94958 16213</span>
                  </div>
                </div>

                <div className="contact-item" role="button" tabIndex="0">
                  <div className="contact-icon" aria-hidden="true">
                    📍
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Available Worldwide</span>
                  </div>
                </div>
              </div>

              <div className="qr-section">
                <h3 className="sr-only">Social Media Links</h3>
                <div className="qr-codes">
                  <div className="qr-code">
                    <a
                      href="https://www.instagram.com/_neha.shaju_"
                      className="qr-label"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Neha Shaju on Instagram"
                    >
                      Instagram
                    </a>
                  </div>
                  <div className="qr-code">
                    <a
                      href="mailto:nehashaju212@gmail.com"
                      className="qr-label"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Send email to Neha Shaju"
                    >
                      Gmail
                    </a>
                  </div>
                  <div className="qr-code">
                    <a
                      href="https://github.com/Nehashaju212"
                      className="qr-label"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Neha Shaju's GitHub profile"
                    >
                      Github
                    </a>
                  </div>
                  <div className="qr-code">
                    <a
                      href="https://www.linkedin.com/in/nehashaju212"
                      className="qr-label"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with Neha Shaju on LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-heading" noValidate>
                <h2 id="contact-form-heading" className="sr-only">
                  Contact Form
                </h2>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                    aria-describedby="name-error"
                    autoComplete="name"
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <span className="error-message" id="name-error">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      required
                      aria-describedby="email-error"
                      autoComplete="email"
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <span className="error-message" id="email-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      required
                      aria-describedby="phone-error"
                      autoComplete="tel"
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && (
                      <span className="error-message" id="phone-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="project">Project Type *</label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      required
                      aria-describedby="project-error"
                      className={errors.project ? "error" : ""}
                    >
                      <option value="">Select Project Type</option>
                      <option value="web-design">Web Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="poster-design">Poster Design</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.project && (
                      <span className="error-message" id="project-error">
                        {errors.project}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Budget Range *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      required
                      aria-describedby="budget-error"
                      className={errors.budget ? "error" : ""}
                    >
                      <option value="">Select Budget</option>
                      <option value="Less than 1K">Less than 1K</option>
                      <option value="1k-5k">1K - 5K</option>
                      <option value="5k-10k">5K - 10K</option>
                      <option value="10k-25k">10K - 25K</option>
                      <option value="25k+">25K+</option>
                    </select>
                    {errors.budget && (
                      <span className="error-message" id="budget-error">
                        {errors.budget}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
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
                    aria-describedby="message-error"
                    className={errors.message ? "error" : ""}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message" id="message-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className={`form-submit ${isSubmitting ? "sending" : ""}`}
                  disabled={isSubmitting}
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {feedback.message && (
                  <div className={`form-feedback ${feedback.type}`} role="alert" aria-live="polite" id="submit-status">
                    {feedback.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="floating-elements" aria-hidden="true">
          <div className="floating-envelope">✉</div>
          <div className="floating-arrow">→</div>
          <div className="floating-star">✨</div>
          <div className="floating-heart">💜</div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
