import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('privacyPolicy.title')}</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.introduction')}</h2>
            <p>
              {t('privacyPolicy.introText')}
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.infoCollect')}</h2>
            <h3>{t('privacyPolicy.personalInfo')}</h3>
            <ul>
              <li>{t('privacyPolicy.personal1')}</li>
              <li>{t('privacyPolicy.personal2')}</li>
              <li>{t('privacyPolicy.personal3')}</li>
              <li>{t('privacyPolicy.personal4')}</li>
            </ul>
            <h3>{t('privacyPolicy.technicalInfo')}</h3>
            <ul>
              <li>{t('privacyPolicy.technical1')}</li>
              <li>{t('privacyPolicy.technical2')}</li>
              <li>{t('privacyPolicy.technical3')}</li>
              <li>{t('privacyPolicy.technical4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.howWeUse')}</h2>
            <ul>
              <li>{t('privacyPolicy.use1')}</li>
              <li>{t('privacyPolicy.use2')}</li>
              <li>{t('privacyPolicy.use3')}</li>
              <li>{t('privacyPolicy.use4')}</li>
              <li>{t('privacyPolicy.use5')}</li>
              <li>{t('privacyPolicy.use6')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.sharing')}</h2>
            <p>
              {t('privacyPolicy.sharingText')}
            </p>
            <ul>
              <li>{t('privacyPolicy.share1')}</li>
              <li>{t('privacyPolicy.share2')}</li>
              <li>{t('privacyPolicy.share3')}</li>
              <li>{t('privacyPolicy.share4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.security')}</h2>
            <p>
              {t('privacyPolicy.securityText')}
            </p>
            <ul>
              <li>{t('privacyPolicy.security1')}</li>
              <li>{t('privacyPolicy.security2')}</li>
              <li>{t('privacyPolicy.security3')}</li>
              <li>{t('privacyPolicy.security4')}</li>
              <li>{t('privacyPolicy.security5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.rights')}</h2>
            <p>{t('privacyPolicy.rightsText')}</p>
            <ul>
              <li>{t('privacyPolicy.right1')}</li>
              <li>{t('privacyPolicy.right2')}</li>
              <li>{t('privacyPolicy.right3')}</li>
              <li>{t('privacyPolicy.right4')}</li>
              <li>{t('privacyPolicy.right5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.cookies')}</h2>
            <p>
              {t('privacyPolicy.cookiesText')}
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.changes')}</h2>
            <p>
              {t('privacyPolicy.changesText')}
            </p>
            <p><strong>{t('privacyPolicy.lastUpdated')}</strong> {t('privacyPolicy.updateDate')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('privacyPolicy.contactUs')}</h2>
            <p>
              {t('privacyPolicy.contactText')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;


