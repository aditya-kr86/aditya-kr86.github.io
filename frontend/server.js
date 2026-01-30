import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const payload = {
    recipients: [
      {
        to: [
          {
            email: 'hi@ankus.dev',
            name: 'Aditya Kumar'
          }
        ],
        variables: {
          sender_name: name,
          sender_email: email,
          timestamp: new Date().toLocaleString(),
          message: message
        }
      }
    ],
    from: {
      email: `no-reply@${process.env.VITE_MSG91_DOMAIN || 'mail.ankus.dev'}`
    },
    domain: process.env.VITE_MSG91_DOMAIN || 'mail.ankus.dev',
    reply_to: [
      {
        email: email
      }
    ],
    template_id: 'contact_me'
  };

  try {
    const response = await fetch('https://control.msg91.com/api/v5/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authkey': process.env.VITE_MSG91_AUTHKEY
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok) {
      res.json({ success: true, message: 'Email sent successfully' });
    } else {
      res.status(response.status).json({ 
        success: false, 
        error: data.message || 'Failed to send email' 
      });
    }
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email API server running on http://localhost:${PORT}`);
});
