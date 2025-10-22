import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const CodeOfConduct = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('codeOfConduct.title')}</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('codeOfConduct.standards')}</h2>
            <p>{t('codeOfConduct.standardsText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('codeOfConduct.ethical')}</h2>
            <h3>{t('codeOfConduct.integrity')}</h3>
            <p>{t('codeOfConduct.integrityText')}</p>
            <h3>{t('codeOfConduct.competence')}</h3>
            <p>{t('codeOfConduct.competenceText')}</p>
            <h3>{t('codeOfConduct.confidentiality')}</h3>
            <p>{t('codeOfConduct.confidentialityText')}</p>
            <h3>{t('codeOfConduct.objectivity')}</h3>
            <p>{t('codeOfConduct.objectivityText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('codeOfConduct.clientRelations')}</h2>
            <ul>
              <li>{t('codeOfConduct.rel1')}</li>
              <li>{t('codeOfConduct.rel2')}</li>
              <li>{t('codeOfConduct.rel3')}</li>
              <li>{t('codeOfConduct.rel4')}</li>
              <li>{t('codeOfConduct.rel5')}</li>
              <li>{t('codeOfConduct.rel6')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('codeOfConduct.conflict')}</h2>
            <p>{t('codeOfConduct.conflictText')}</p>
            <ul>
              <li>{t('codeOfConduct.conflict1')}</li>
              <li>{t('codeOfConduct.conflict2')}</li>
              <li>{t('codeOfConduct.conflict3')}</li>
              <li>{t('codeOfConduct.conflict4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('codeOfConduct.regulatory')}</h2>
            <ul>
              <li>{t('codeOfConduct.reg1')}</li>
              <li>{t('codeOfConduct.reg2')}</li>
              <li>{t('codeOfConduct.reg3')}</li>
              <li>{t('codeOfConduct.reg4')}</li>
              <li>{t('codeOfConduct.reg5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('codeOfConduct.behavior')}</h2>
            <ul>
              <li>{t('codeOfConduct.behave1')}</li>
              <li>{t('codeOfConduct.behave2')}</li>
              <li>{t('codeOfConduct.behave3')}</li>
              <li>{t('codeOfConduct.behave4')}</li>
              <li>{t('codeOfConduct.behave5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('codeOfConduct.improvement')}</h2>
            <p>{t('codeOfConduct.improvementText')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
