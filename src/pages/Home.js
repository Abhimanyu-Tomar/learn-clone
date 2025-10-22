import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const { t, changeLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(t('home.subscribeSuccess'));
    setEmail('');
  };

  const handleStartLearning = () => {
    setShowLanguageModal(true);
  };

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
    setShowLanguageModal(false);
    navigate('/contact');
  };

  return (
    <div className="home">
      {showLanguageModal && (
        <div className="language-modal-overlay">
          <div className="language-modal">
            <h2>Choose your language</h2>
            <div className="language-options">
              <button 
                className="language-option english"
                onClick={() => handleLanguageSelect('en')}
              >
                English
              </button>
              <button 
                className="language-option hindi"
                onClick={() => handleLanguageSelect('hi')}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">{t('home.heroTitle')}</h1>
          <p className="hero-subtitle">
            {t('home.heroSubtitle')}
          </p>
          <button className="cta-button" onClick={handleStartLearning}>
            {t('home.ctaButton')}
          </button>
        </div>
      </section>

      <section className="transform-section">
        <div className="transform-container">
          <h2>{t('home.transformTitle')}</h2>
          <p>{t('home.transformSubtitle')}</p>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2>{t('home.newsletterTitle')}</h2>
          <p className="newsletter-description">
            {t('home.newsletterDescription')}
          </p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder={t('home.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              {t('home.subscribeButton')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

