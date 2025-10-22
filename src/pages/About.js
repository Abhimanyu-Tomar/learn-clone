import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';
// Import the profile image - you need to add the image file to src/assets/images/sankalp-profile.jpg
// import profileImage from '../assets/images/sankalp-profile.jpg';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="page-container">
        <h1 className="about-main-title">{t('about.aboutMeTitle')}</h1>
        
        <div className="about-hero">
          <div className="about-hero-content">
            <p className="about-intro">
              {t('about.introText')}
            </p>
          </div>
          
          <div className="about-profile-card">
            <div className="profile-image-container">
              <img 
                src={`${process.env.PUBLIC_URL}/sankalp-profile.jpg`}
                alt={t('about.name')} 
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  // Fallback to a professional business photo
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces';
                }}
              />
            </div>
            <div className="profile-info">
              <h3>{t('about.name')}</h3>
              <p className="sebi-info">{t('about.sebiReg')}</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>{t('about.missionTitle')}</h2>
            <p>{t('about.missionText')}</p>
          </section>

          <section className="about-section">
            <h2>{t('about.whoWeAreTitle')}</h2>
            <p>{t('about.whoWeAreText')}</p>
          </section>

          <section className="about-section">
            <h2>{t('about.whatWeOfferTitle')}</h2>
            <ul>
              <li>{t('about.offer1')}</li>
              <li>{t('about.offer2')}</li>
              <li>{t('about.offer3')}</li>
              <li>{t('about.offer4')}</li>
              <li>{t('about.offer5')}</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>{t('about.valuesTitle')}</h2>
            <p>{t('about.valuesText')}</p>
          </section>

          <section className="about-section registration-info">
            <h2>{t('about.regulatoryTitle')}</h2>
            <p>{t('about.regulatoryText')}</p>
          </section>
        </div>

        <section className="about-newsletter-section">
          <div className="about-newsletter-container">
            <h2>{t('home.transformTitle')}</h2>
            <p>{t('home.transformSubtitle')}</p>
            
            <div className="about-newsletter-form-wrapper">
              <h3>{t('home.newsletterTitle')}</h3>
              <p className="newsletter-description">
                {t('home.newsletterDescription')}
              </p>
              <form className="about-newsletter-form" onSubmit={(e) => { e.preventDefault(); alert(t('home.subscribeSuccess')); }}>
                <input
                  type="email"
                  placeholder={t('home.emailPlaceholder')}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  {t('home.subscribeButton')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

