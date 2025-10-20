import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(t('home.subscribeSuccess'));
    setEmail('');
  };

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">{t('home.heroTitle')}</h1>
          <p className="hero-subtitle">
            {t('home.heroSubtitle')}
          </p>
          <button className="cta-button">{t('home.ctaButton')}</button>
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

