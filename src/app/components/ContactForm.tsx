'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      setIsInitialized(true);
    }
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'sending' });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target as HTMLFormElement
      )
      .then(
        () => {
          setStatus({ message: 'Message sent successfully!', type: 'success' });
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          setStatus({ message: `Failed to send: ${error.text || 'An unknown error occurred.'}`, type: 'error' });
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <h3>Send Me a Message</h3>
      <div className="form-group">
        <label htmlFor="user_name" className="form-label">Name</label>
        <input type="text" id="user_name" name="user_name" className="form-input" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="user_email" className="form-label">Email</label>
        <input type="email" id="user_email" name="user_email" className="form-input" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input type="text" id="subject" name="subject" className="form-input" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" name="message" className="form-textarea" rows={5} required></textarea>
      </div>
      
      <button type="submit" className="form-submit" disabled={!isInitialized || status.type === 'sending'}>
        {status.type === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
    </form>
  );
}
