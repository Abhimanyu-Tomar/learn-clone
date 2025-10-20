import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.successMessage'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-container">
        <h1>{t('contact.title')}</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>{t('contact.getInTouch')}</h2>
            <p>{t('contact.description')}</p>

            <div className="contact-details">
              <div className="detail-item">
                <h3>{t('contact.addressTitle')}</h3>
                <p>{t('footer.address1')}</p>
                <p>{t('footer.address2')}</p>
                <p>{t('footer.address3')}</p>
              </div>

              <div className="detail-item">
                <h3>{t('contact.connectTitle')}</h3>
                <div className="social-links">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    {t('footer.twitter')}
                  </a>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                    {t('footer.dribbble')}
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    {t('footer.instagram')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contact.nameLabel')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.subjectLabel')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.messageLabel')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                {t('contact.sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

