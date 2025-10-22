import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Disclaimer.css';

const AllDisclaimers = () => {
  const { t } = useLanguage();

  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>{t('allDisclaimers.title')}</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.general')}</h2>
            <p>{t('allDisclaimers.generalText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.investmentRisk')}</h2>
            <p><strong>{t('allDisclaimers.investmentRiskBold')}</strong></p>
            <ul>
              <li>{t('allDisclaimers.ir1')}</li>
              <li>{t('allDisclaimers.ir2')}</li>
              <li>{t('allDisclaimers.ir3')}</li>
              <li>{t('allDisclaimers.ir4')}</li>
              <li>{t('allDisclaimers.ir5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.registration')}</h2>
            <p>{t('allDisclaimers.registrationText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.noGuarantee')}</h2>
            <p>{t('allDisclaimers.noGuaranteeText')}</p>
            <ul>
              <li>{t('allDisclaimers.ng1')}</li>
              <li>{t('allDisclaimers.ng2')}</li>
              <li>{t('allDisclaimers.ng3')}</li>
              <li>{t('allDisclaimers.ng4')}</li>
              <li>{t('allDisclaimers.ng5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.thirdParty')}</h2>
            <p>{t('allDisclaimers.thirdPartyText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.personal')}</h2>
            <p>{t('allDisclaimers.personalText')}</p>
            <ul>
              <li>{t('allDisclaimers.pr1')}</li>
              <li>{t('allDisclaimers.pr2')}</li>
              <li>{t('allDisclaimers.pr3')}</li>
              <li>{t('allDisclaimers.pr4')}</li>
              <li>{t('allDisclaimers.pr5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.communication')}</h2>
            <p>{t('allDisclaimers.communicationText')}</p>
            <ul>
              <li>{t('allDisclaimers.comm1')}</li>
              <li>{t('allDisclaimers.comm2')}</li>
              <li>{t('allDisclaimers.comm3')}</li>
              <li>{t('allDisclaimers.comm4')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.website')}</h2>
            <p>{t('allDisclaimers.websiteText')}</p>
            <ul>
              <li>{t('allDisclaimers.web1')}</li>
              <li>{t('allDisclaimers.web2')}</li>
              <li>{t('allDisclaimers.web3')}</li>
              <li>{t('allDisclaimers.web4')}</li>
              <li>{t('allDisclaimers.web5')}</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.conflict')}</h2>
            <p>{t('allDisclaimers.conflictText')}</p>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.regulatory')}</h2>
            <p>{t('allDisclaimers.regulatoryText')}</p>
            <ul>
              <li><Link to="/investor-charter">{t('disclaimerMenu.investorCharter')}</Link></li>
              <li><Link to="/code-of-conduct">{t('disclaimerMenu.codeOfConduct')}</Link></li>
              <li><Link to="/control-policy">{t('disclaimerMenu.controlPolicy')}</Link></li>
              <li><Link to="/grievance-redressal">{t('disclaimerMenu.grievanceRedressal')}</Link></li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>{t('allDisclaimers.contactTitle')}</h2>
            <p>{t('allDisclaimers.contactText')}<Link to="/contact">{t('allDisclaimers.contactLink')}</Link>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AllDisclaimers;
