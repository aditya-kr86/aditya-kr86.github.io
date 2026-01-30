import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = ({ formStatus, setFormStatus }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (err) {
      console.error('Email send error:', err);
      setError(err.message || 'Failed to send message. Please try again.');
      setFormStatus('idle');
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-8 pt-10 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4 mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight">Get in touch</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">Interested in AI or Python development? Let's talk.</p>
      </div>
      
      {formStatus === 'success' ? (
        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-12 rounded-3xl text-center space-y-4 animate-in zoom-in-95">
          <div className="w-16 h-16 bg-white dark:bg-zinc-950 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Send className="text-green-500" size={24} />
          </div>
          <h3 className="text-2xl font-semibold">Message Sent!</h3>
          <p className="text-zinc-500 dark:text-zinc-400">Thanks Aditya will get back to you soon.</p>
          <button onClick={() => setFormStatus('idle')} className="text-sm font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4">Send another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Name</label>
              <input 
                required 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-zinc-100 dark:focus:ring-zinc-800 outline-none" 
                placeholder="John" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Email</label>
              <input 
                required 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-zinc-100 dark:focus:ring-zinc-800 outline-none" 
                placeholder="john@example.com" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Message</label>
            <textarea 
              required 
              rows={5} 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-zinc-100 dark:focus:ring-zinc-800 outline-none resize-none" 
              placeholder="Your query..."
            ></textarea>
          </div>
          <button disabled={formStatus === 'submitting'} className="w-full md:w-auto px-10 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {formStatus === 'submitting' ? 'Sending...' : 'Send Query'} <Send size={18} />
          </button>
        </form>
      )}
    </main>
  );
};

export default Contact;