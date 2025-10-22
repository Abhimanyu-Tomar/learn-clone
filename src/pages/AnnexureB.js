import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const AnnexureB = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('annexureB.title')}</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('annexureB.heading')}</h2>
            <p>{t('annexureB.intro')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('annexureB.dosTitle')}</h2>
            <ul>
              <li>{t('annexureB.do1')}</li>
              <li>{t('annexureB.do2')}</li>
              <li>{t('annexureB.do3')}</li>
              <li>{t('annexureB.do4')}</li>
              <li>{t('annexureB.do5')}</li>
              <li>{t('annexureB.do6')}</li>
              <li>{t('annexureB.do7')}</li>
              <li>{t('annexureB.do8')}</li>
              <li>{t('annexureB.do9')}</li>
              <li>{t('annexureB.do10')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('annexureB.dontsTitle')}</h2>
            <ul>
              <li>{t('annexureB.dont1')}</li>
              <li>{t('annexureB.dont2')}</li>
              <li>{t('annexureB.dont3')}</li>
              <li>{t('annexureB.dont4')}</li>
              <li>{t('annexureB.dont5')}</li>
              <li>{t('annexureB.dont6')}</li>
              <li>{t('annexureB.dont7')}</li>
              <li>{t('annexureB.dont8')}</li>
              <li>{t('annexureB.dont9')}</li>
              <li>{t('annexureB.dont10')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('annexureB.warningTitle')}</h2>
            <ul>
              <li>{t('annexureB.warning1')}</li>
              <li>{t('annexureB.warning2')}</li>
              <li>{t('annexureB.warning3')}</li>
              <li>{t('annexureB.warning4')}</li>
              <li>{t('annexureB.warning5')}</li>
              <li>{t('annexureB.warning6')}</li>
              <li>{t('annexureB.warning7')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('annexureB.protectionTitle')}</h2>
            <p>{t('annexureB.protectionText')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AnnexureB;
