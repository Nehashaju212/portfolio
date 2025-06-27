# EmailJS Setup Guide

Follow these steps to set up email functionality for your portfolio contact form:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Service ID: Create a unique ID (e.g., "gmail_service")
   - Connect your Gmail account (nehashaju212@gmail.com)
   - Authorize EmailJS to send emails

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Template ID: Create a unique ID (e.g., "contact_form")
4. Use this template content:

\`\`\`
Subject: New Contact Form Submission - {{from_name}}

Hello Neha,

You have received a new contact form submission from your portfolio website.

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Project Type: {{project_type}}
- Budget Range: {{budget_range}}

**Message:**
{{message}}

---
This email was sent from your portfolio contact form.
\`\`\`

## 4. Get Your Credentials
1. Go to "Account" → "General"
2. Copy your Public Key
3. Note your Service ID and Template ID

## 5. Update Configuration
Replace the values in \`src/config/emailConfig.js\`:

\`\`\`javascript
export const emailConfig = {
  serviceId: 'your_actual_service_id',
  templateId: 'your_actual_template_id', 
  publicKey: 'your_actual_public_key'
}
\`\`\`

## 6. Test the Form
1. Run your application: \`npm start\`
2. Fill out the contact form
3. Check nehashaju212@gmail.com for the test email

## 7. EmailJS Limits
- Free plan: 200 emails/month
- Upgrade if you need more

## Troubleshooting
- Make sure all IDs match exactly
- Check browser console for errors
- Verify email service is connected
- Test template in EmailJS dashboard first
\`\`\`

Let's also add some enhanced styling for better user feedback:

```typescriptreact file="src/components/ContactSection/ContactSection.css"
[v0-no-op-code-block-prefix].contact-section {
  background: #000;
  position: relative;
  overflow: hidden;
}

.contact-header {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 4rem;
}

.contact-title-section {
  flex: 1;
}

.contact-subtitle {
  font-size: 1rem;
  color: #7a87fb;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  opacity: 0;
  transform: translateX(-30px);
}

.contact-section.animate .contact-info {
  animation: slideInLeft 0.8s ease-out forwards;
}

.contact-description {
  margin-bottom: 3rem;
}

.contact-description p {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.5px;
}

.contact-details {
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(122, 135, 251, 0.05);
  border-color: rgba(122, 135, 251, 0.3);
}

.contact-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #7a87fb, #ffd49c);
  border-radius: 50%;
}

.contact-text {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
}

.contact-value {
  font-size: 1rem;
  color: white;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.social-link:hover {
  border-color: #7a87fb;
  color: #7a87fb;
  transform: translateY(-2px);
}

.contact-form-container {
  opacity: 0;
  transform: translateX(30px);
}

.contact-section.animate .contact-form-container {
  animation: slideInRight 0.8s ease-out 0.3s forwards;
}

.contact-form {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #7a87fb;
  background: rgba(122, 135, 251, 0.05);
  box-shadow: 0 0 0 3px rgba(122, 135, 251, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  width: 100%;
  margin-top: 1rem;
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.form-submit.sending {
  background: linear-gradient(45deg, #7a87fb, #ffd49c);
  animation: pulse 1.5s infinite;
}

.form-feedback {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  text-align: center;
}

.form-feedback.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

.form-feedback.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-envelope {
  position: absolute;
  font-size: 3rem;
  color: rgba(122, 135, 251, 0.2);
  top: 15%;
  right: 20%;
  animation: float 7s ease-in-out infinite;
}

.floating-arrow {
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 212, 156, 0.3);
  bottom: 25%;
  left: 15%;
  animation: float 5s ease-in-out infinite reverse;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@media (max-width: 768px) {
  .contact-header {
    flex-direction: column;
    gap: 1rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .social-links {
    justify-content: center;
  }
}
