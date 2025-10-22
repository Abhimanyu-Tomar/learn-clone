import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const GrievanceRedressal = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('grievance.title')}</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('grievance.commitment')}</h2>
            <p>{t('grievance.commitmentText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('grievance.howToFile')}</h2>
            <p>{t('grievance.howToFileText')}</p>
            <ul>
              <li><strong>{t('grievance.email')}</strong> {t('grievance.emailText')}</li>
              <li><strong>{t('grievance.written')}</strong> {t('grievance.writtenText')}</li>
              <li><strong>{t('grievance.phone')}</strong> {t('grievance.phoneText')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('grievance.info')}</h2>
            <ul>
              <li>{t('grievance.info1')}</li>
              <li>{t('grievance.info2')}</li>
              <li>{t('grievance.info3')}</li>
              <li>{t('grievance.info4')}</li>
              <li>{t('grievance.info5')}</li>
              <li>{t('grievance.info6')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('grievance.process')}</h2>
            <ol>
              <li><strong>{t('grievance.ack')}</strong> {t('grievance.ackText')}</li>
              <li><strong>{t('grievance.investigation')}</strong> {t('grievance.investigationText')}</li>
              <li><strong>{t('grievance.resolution')}</strong> {t('grievance.resolutionText')}</li>
              <li><strong>{t('grievance.communication')}</strong> {t('grievance.communicationText')}</li>
            </ol>
          </section>

          <section className="disclaimer-section">
            <h2>{t('grievance.officer')}</h2>
            <p><strong>{t('grievance.officerName')}</strong> {t('grievance.officerNameValue')}</p>
            <p><strong>{t('grievance.designation')}</strong> {t('grievance.designationValue')}</p>
            <p><strong>{t('grievance.address')}</strong> {t('grievance.addressValue')}</p>
            <p><strong>{t('grievance.responseTime')}</strong> {t('grievance.responseTimeValue')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('grievance.escalation')}</h2>
            <p>{t('grievance.escalationText')}</p>
            <h3>{t('grievance.level1')}</h3>
            <p>{t('grievance.level1Text')}</p>
            <h3>{t('grievance.level2')}</h3>
            <p>{t('grievance.level2Text')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('grievance.types')}</h2>
            <p>{t('grievance.typesText')}</p>
            <ul>
              <li>{t('grievance.type1')}</li>
              <li>{t('grievance.type2')}</li>
              <li>{t('grievance.type3')}</li>
              <li>{t('grievance.type4')}</li>
              <li>{t('grievance.type5')}</li>
              <li>{t('grievance.type6')}</li>
              <li>{t('grievance.type7')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('grievance.promise')}</h2>
            <p>{t('grievance.promiseText')}</p>
            <ul>
              <li>{t('grievance.promise1')}</li>
              <li>{t('grievance.promise2')}</li>
              <li>{t('grievance.promise3')}</li>
              <li>{t('grievance.promise4')}</li>
              <li>{t('grievance.promise5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('grievance.noRetaliation')}</h2>
            <p>{t('grievance.noRetaliationText')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GrievanceRedressal;
