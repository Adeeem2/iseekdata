'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Mail className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a 
              href="mailto:your@email.com" 
              className="text-muted hover:text-accent transition-colors"
            >
              your@email.com
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <MessageSquare className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <div className="space-y-1">
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted hover:text-accent transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button 
              type="submit" 
              variant="primary"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </Button>

            {status === 'success' && (
              <p className="text-green-600 text-center">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-600 text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

          <p className="text-sm text-muted text-center mt-6">
            Note: Replace the Formspree endpoint in the code with your own to enable this form.
          </p>
        </div>
      </div>
    </div>
  );
}
