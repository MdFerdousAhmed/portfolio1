import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide toast after 3.5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3500);
    }, 1200);
  };

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Info Cards */}
        <div className="contact-info">
          <a href="/" className="glass-panel contact-card">
            <div className="contact-icon-wrap">
              <Mail size={22} />
            </div>
            <div>
              <div className="contact-label">Email Address</div>
              <div className="contact-value">mdferdousahmed31122003@gmail.com</div>
            </div>
          </a>

          <a href="/" className="glass-panel contact-card">
            <div className="contact-icon-wrap">
              <Phone size={22} />
            </div>
            <div>
              <div className="contact-label">Phone Number</div>
              <div className="contact-value">+880 1777-906923</div>
            </div>
          </a>

          <a href="/" target="_blank" rel="noopener noreferrer" className="glass-panel contact-card">
            <div className="contact-icon-wrap">
              <MessageSquare size={22} style={{ color: '#10b981' }} />
            </div>
            <div>
              <div className="contact-label">WhatsApp Chat</div>
              <div className="contact-value">+880 1777-906923</div>
            </div>
          </a>
        </div>

        {/* Right Column: Submission Form */}
        <div className="glass-panel contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Md.Ferdous Ahmed"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. mdferdousahmed31122003@gmail.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="e.g. Project Consultation"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message *</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your project, timeline, or requirements..."
                className="form-input"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-primary submit-btn" 
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Toast Alert */}
      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        <Check size={20} />
        <span>Message submitted successfully! Thank you.</span>
      </div>
    </section>
  );
}
