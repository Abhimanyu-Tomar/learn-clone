import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const ControlPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('controlPolicy.title')}</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('controlPolicy.framework')}</h2>
            <p>{t('controlPolicy.frameworkText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('controlPolicy.operational')}</h2>
            <ul>
              <li>{t('controlPolicy.op1')}</li>
              <li>{t('controlPolicy.op2')}</li>
              <li>{t('controlPolicy.op3')}</li>
              <li>{t('controlPolicy.op4')}</li>
              <li>{t('controlPolicy.op5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('controlPolicy.risk')}</h2>
            <p>{t('controlPolicy.riskText')}</p>
            <ul>
              <li>{t('controlPolicy.risk1')}</li>
              <li>{t('controlPolicy.risk2')}</li>
              <li>{t('controlPolicy.risk3')}</li>
              <li>{t('controlPolicy.risk4')}</li>
              <li>{t('controlPolicy.risk5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('controlPolicy.compliance')}</h2>
            <ul>
              <li>{t('controlPolicy.comp1')}</li>
              <li>{t('controlPolicy.comp2')}</li>
              <li>{t('controlPolicy.comp3')}</li>
              <li>{t('controlPolicy.comp4')}</li>
              <li>{t('controlPolicy.comp5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('controlPolicy.client')}</h2>
            <ul>
              <li>{t('controlPolicy.client1')}</li>
              <li>{t('controlPolicy.client2')}</li>
              <li>{t('controlPolicy.client3')}</li>
              <li>{t('controlPolicy.client4')}</li>
              <li>{t('controlPolicy.client5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('controlPolicy.monitoring')}</h2>
            <p>{t('controlPolicy.monitoringText')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ControlPolicy;
