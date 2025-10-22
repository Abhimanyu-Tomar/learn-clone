import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const TermsConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('terms.title')}</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('terms.agreement')}</h2>
            <p>{t('terms.agreementText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.services')}</h2>
            <p>{t('terms.servicesText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.userObligations')}</h2>
            <ul>
              <li>{t('terms.obligation1')}</li>
              <li>{t('terms.obligation2')}</li>
              <li>{t('terms.obligation3')}</li>
              <li>{t('terms.obligation4')}</li>
              <li>{t('terms.obligation5')}</li>
              <li>{t('terms.obligation6')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.investmentRisks')}</h2>
            <p>{t('terms.riskText')}</p>
            <ul>
              <li>{t('terms.risk1')}</li>
              <li>{t('terms.risk2')}</li>
              <li>{t('terms.risk3')}</li>
              <li>{t('terms.risk4')}</li>
              <li>{t('terms.risk5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.fees')}</h2>
            <ul>
              <li>{t('terms.fee1')}</li>
              <li>{t('terms.fee2')}</li>
              <li>{t('terms.fee3')}</li>
              <li>{t('terms.fee4')}</li>
              <li>{t('terms.fee5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.intellectual')}</h2>
            <p>{t('terms.intellectualText')}</p>
            <ul>
              <li>{t('terms.ip1')}</li>
              <li>{t('terms.ip2')}</li>
              <li>{t('terms.ip3')}</li>
              <li>{t('terms.ip4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.limitation')}</h2>
            <p>{t('terms.limitationText')}</p>
            <ul>
              <li>{t('terms.limit1')}</li>
              <li>{t('terms.limit2')}</li>
              <li>{t('terms.limit3')}</li>
              <li>{t('terms.limit4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.disclaimer')}</h2>
            <p>{t('terms.disclaimerText')}</p>
            <ul>
              <li>{t('terms.warranty1')}</li>
              <li>{t('terms.warranty2')}</li>
              <li>{t('terms.warranty3')}</li>
              <li>{t('terms.warranty4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.termination')}</h2>
            <p>{t('terms.terminationText')}</p>
            <ul>
              <li>{t('terms.term1')}</li>
              <li>{t('terms.term2')}</li>
              <li>{t('terms.term3')}</li>
            </ul>
            <p>{t('terms.terminationNote')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.confidentiality')}</h2>
            <p>{t('terms.confidentialityText')}</p>
            <ul>
              <li>{t('terms.conf1')}</li>
              <li>{t('terms.conf2')}</li>
              <li>{t('terms.conf3')}</li>
              <li>{t('terms.conf4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.governing')}</h2>
            <p>{t('terms.governingText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.amendments')}</h2>
            <p>{t('terms.amendmentsText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.severability')}</h2>
            <p>{t('terms.severabilityText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('terms.contactInfo')}</h2>
            <p>{t('terms.contactInfoText')}</p>
            <p><strong>{t('terms.lastUpdated')}</strong> {t('terms.updateDate')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
