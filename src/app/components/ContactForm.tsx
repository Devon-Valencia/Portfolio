'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState({ message: '', type: '' });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'sending' });

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ message: `Failed to send: ${result.message || 'An unknown error occurred.'}`, type: 'error' });
      }
    } catch (error) {
      setStatus({ message: 'Failed to send: An unexpected error occurred.', type: 'error' });
    }
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
      
      <button 
        type="submit" 
        className="form-submit" 
        disabled={status.type === 'sending'}>
        {status.type === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
    </form>
  );
}
