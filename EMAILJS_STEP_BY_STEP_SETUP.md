# 🔧 EmailJS Setup - Step by Step (Fix the Issue)

## Why you're seeing this message:
The form is working, but EmailJS isn't configured yet, so emails aren't being sent.

## 🚀 STEP-BY-STEP SETUP:

### Step 1: Install EmailJS (if not already done)
\`\`\`bash
npm install @emailjs/browser
\`\`\`

### Step 2: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" 
3. Use any email to create account
4. Verify your email

### Step 3: Add Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Service ID: `service_gmail_neha` (you can change this)
5. Click "Connect Account"
6. **IMPORTANT**: Log in with `nehashaju212@gmail.com`
7. Allow EmailJS permissions
8. Click "Create Service"

### Step 4: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Template ID: `template_contact_neha` (you can change this)
4. Subject: `New Contact from {{from_name}} - Portfolio`

**Template Body** (copy this exactly):
\`\`\`
Hello Neha,

You have a new contact form submission from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}
Budget: {{budget_range}}

Message:
{{message}}

---
Sent from your portfolio contact form
\`\`\`

5. Click "Save"

### Step 5: Get Your Keys
1. Go to "Account" → "General"
2. Copy your **Public Key** (looks like: user_xxxxxxxxx)
3. Note your **Service ID** (from step 3)
4. Note your **Template ID** (from step 4)

### Step 6: Update Your Config File
Replace the content in `src/config/emailConfig.js`:

\`\`\`javascript
export const emailConfig = {
  serviceId: "service_gmail_neha",     // Replace with YOUR Service ID
  templateId: "template_contact_neha", // Replace with YOUR Template ID  
  publicKey: "user_xxxxxxxxx",         // Replace with YOUR Public Key
}
\`\`\`

### Step 7: Test
1. Save files and restart: `npm start`
2. Fill out the contact form
3. Submit
4. Check nehashaju212@gmail.com (and spam folder)

## 🔍 If Still Not Working:

### Check Browser Console:
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Submit form and look for errors
4. Share any red error messages

### Verify Setup:
- [ ] EmailJS account created
- [ ] Gmail service connected to nehashaju212@gmail.com
- [ ] Template created and saved
- [ ] Config file updated with real values (no "xxx" or "YOUR_")
- [ ] Browser console shows no errors

## 📞 Quick Test:
After setup, the success message should change from:
❌ "Form submitted successfully! (EmailJS setup required...)"
✅ "Message sent successfully! I'll get back to you within 24 hours."
