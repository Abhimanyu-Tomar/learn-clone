import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const AnnexureA = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('annexureA.title')}</h1>
        <p className="subtitle">{t('annexureA.subtitle')}</p>
        
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('annexureA.visionMission')}</h2>
            <p><strong>{t('annexureA.visionLabel')}</strong> {t('annexureA.vision')}</p>
            <p><strong>{t('annexureA.missionLabel')}</strong> {t('annexureA.mission')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('annexureA.businessDetails')}</h2>
            <ul>
              <li>{t('annexureA.business1')}</li>
              <li>{t('annexureA.business2')}</li>
              <li>{t('annexureA.business3')}</li>
              <li>{t('annexureA.business4')}</li>
              <li>{t('annexureA.business5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('annexureA.servicesTitle')}</h2>
            <ul>
              <li>{t('annexureA.service1')}</li>
              <li>{t('annexureA.service2')}</li>
              <li>{t('annexureA.service3')}</li>
              <li>{t('annexureA.service4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('annexureA.grievanceTitle')}</h2>
            <p>{t('annexureA.grievanceText1')}</p>
            <p>{t('annexureA.grievanceText2')}</p>
            <p>{t('annexureA.grievanceText3')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('annexureA.expectationsTitle')}</h2>
            
            <h3>{t('annexureA.dosTitle')}</h3>
            <ul>
              <li>{t('annexureA.do1')}</li>
              <li>{t('annexureA.do2')}</li>
              <li>{t('annexureA.do3')}</li>
              <li>{t('annexureA.do4')}</li>
              <li>{t('annexureA.do5')}</li>
              <li>{t('annexureA.do6')}</li>
              <li>{t('annexureA.do7')}</li>
              <li>{t('annexureA.do8')}</li>
              <li>{t('annexureA.do9')}</li>
            </ul>

            <h3>{t('annexureA.dontsTitle')}</h3>
            <ul>
              <li>{t('annexureA.dont1')}</li>
              <li>{t('annexureA.dont2')}</li>
              <li>{t('annexureA.dont3')}</li>
              <li>{t('annexureA.dont4')}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AnnexureA;


