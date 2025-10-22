import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const InvestorCharter = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('investorCharter.title')}</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('investorCharter.vision')}</h2>
            <p>
              {t('investorCharter.visionText')}
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('investorCharter.mission')}</h2>
            <p>
              {t('investorCharter.missionText')}
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('investorCharter.rights')}</h2>
            <ul>
              <li>{t('investorCharter.right1')}</li>
              <li>{t('investorCharter.right2')}</li>
              <li>{t('investorCharter.right3')}</li>
              <li>{t('investorCharter.right4')}</li>
              <li>{t('investorCharter.right5')}</li>
              <li>{t('investorCharter.right6')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('investorCharter.responsibilities')}</h2>
            <ul>
              <li>{t('investorCharter.responsibility1')}</li>
              <li>{t('investorCharter.responsibility2')}</li>
              <li>{t('investorCharter.responsibility3')}</li>
              <li>{t('investorCharter.responsibility4')}</li>
              <li>{t('investorCharter.responsibility5')}</li>
              <li>{t('investorCharter.responsibility6')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('investorCharter.standards')}</h2>
            <p>
              {t('investorCharter.standardsText')}
            </p>
            <ul>
              <li>{t('investorCharter.standard1')}</li>
              <li>{t('investorCharter.standard2')}</li>
              <li>{t('investorCharter.standard3')}</li>
              <li>{t('investorCharter.standard4')}</li>
              <li>{t('investorCharter.standard5')}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InvestorCharter;


