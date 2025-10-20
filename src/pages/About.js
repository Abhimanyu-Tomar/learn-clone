import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="page-container">
        <h1>{t('about.title')}</h1>
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
      </div>
    </div>
  );
};

export default About;

