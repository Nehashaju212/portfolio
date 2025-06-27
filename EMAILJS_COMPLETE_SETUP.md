# 📧 Complete EmailJS Setup Guide for Real-Time Email Delivery

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Gmail Service
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Service ID: Use `service_gmail_portfolio` (or create your own)
5. Click **"Connect Account"** and authorize with **nehashaju212@gmail.com**
6. Click **"Create Service"**

## Step 3: Create Email Template
1. Go to **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Template ID: Use `template_contact_form` (or create your own)
4. **Subject**: `🎨 New Portfolio Contact - {{from_name}}`

### Template Content (Copy this exactly):
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: linear-gradient(135deg, #7A87FB 0%, #FFD49C 100%); padding: 30px 20px; text-align: center; color: white; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 30px 20px; background: #f8f9fa; }
        .field { margin-bottom: 25px; }
        .label { font-weight: 600; color: #7A87FB; display: block; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
        .value { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #7A87FB; font-size: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef; margin-top: 10px; line-height: 1.6; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .footer { text-align: center; padding: 20px; background: #343a40; color: white; font-size: 12px; }
        .footer p { margin: 5px 0; }
        .priority { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .priority strong { color: #856404; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎨 New Project Inquiry</h1>
            <p>Portfolio Contact Form Submission</p>
        </div>
        
        <div class="content">
            <div class="priority">
                <strong>⚡ Priority:</strong> New client inquiry received - Response recommended within 24 hours
            </div>
            
            <div class="field">
                <span class="label">👤 Client Name</span>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <span class="label">📧 Email Address</span>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <span class="label">🎯 Project Type</span>
                <div class="value">{{project_type}}</div>
            </div>
            
            <div class="field">
                <span class="label">💰 Budget Range</span>
                <div class="value">{{budget_range}}</div>
            </div>
            
            <div class="field">
                <span class="label">💬 Project Details</span>
                <div class="message-box">{{message}}</div>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Neha Shaju Portfolio</strong> | UI/UX Designer</p>
            <p>This email was automatically generated from your portfolio contact form</p>
            <p>Delivered to: nehashaju212@gmail.com</p>
        </div>
    </div>
</body>
</html>
\`\`\`

5. Click **"Save"**

## Step 4: Get Your Credentials
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (starts with something like "user_...")
3. Note your **Service ID** (from step 2)
4. Note your **Template ID** (from step 3)

## Step 5: Update Your Code
Replace the values in `src/config/emailConfig.js`:

\`\`\`javascript
export const emailConfig = {
  serviceId: 'service_gmail_portfolio', // Your actual Service ID
  templateId: 'template_contact_form',   // Your actual Template ID
  publicKey: 'user_xxxxxxxxxxxxxxxxx',   // Your actual Public Key
}
\`\`\`

## Step 6: Test the Setup
1. Save all files and restart your development server: `npm start`
2. Fill out your contact form with test data
3. Submit the form
4. Check **nehashaju212@gmail.com** for the email (check spam folder too)

## Step 7: Gmail Setup for Real-Time Notifications

### Enable Gmail Notifications:
1. Open Gmail on your phone/computer
2. Go to **Settings** → **General** → **Desktop Notifications**
3. Enable **"New mail notifications on"**
4. Set to **"Important mail notifications on"**

### Mobile Notifications:
1. Download Gmail app if not installed
2. Go to **Settings** → **Your Account** → **Notifications**
3. Enable **"All new mail"** or **"High priority only"**
4. Enable sound and vibration

### Email Filters (Optional):
1. In Gmail, go to **Settings** → **Filters and Blocked Addresses**
2. Create new filter with: `from:(noreply@emailjs.com) subject:(New Portfolio Contact)`
3. Actions: **Star it**, **Mark as important**, **Never send to spam**

## Troubleshooting

### Common Issues:
- **"Failed to send"**: Check if Service ID, Template ID, and Public Key are correct
- **Emails in spam**: Add noreply@emailjs.com to contacts
- **Template not working**: Verify variable names match exactly ({{from_name}}, etc.)

### Testing Checklist:
- [ ] EmailJS account created and verified
- [ ] Gmail service connected to nehashaju212@gmail.com
- [ ] Template created with correct HTML
- [ ] Credentials updated in emailConfig.js
- [ ] Form submitted successfully
- [ ] Email received in Gmail
- [ ] Mobile notifications working

## EmailJS Limits:
- **Free Plan**: 200 emails/month
- **Personal Plan**: $15/month for 1,000 emails
- **Professional Plan**: $35/month for 10,000 emails

## Security Notes:
- Public Key is safe to use in frontend code
- Never expose your Private Key
- EmailJS handles all email delivery securely
- Your Gmail credentials are never exposed

---

**Need Help?** 
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
