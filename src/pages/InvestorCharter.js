import React from 'react';
import './Disclaimer.css';

const InvestorCharter = () => {
  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>Investor Charter</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>Vision</h2>
            <p>
              To provide quality financial education and advisory services while protecting
              the interests of investors and maintaining the highest standards of professional
              conduct.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Mission</h2>
            <p>
              To empower investors with knowledge, transparency, and ethical advisory services
              that help them make informed investment decisions.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Investor Rights</h2>
            <ul>
              <li>Right to transparency in all transactions and advisory services</li>
              <li>Right to receive clear and accurate information about investments</li>
              <li>Right to fair treatment and professional conduct</li>
              <li>Right to privacy and confidentiality of personal information</li>
              <li>Right to grievance redressal in a timely manner</li>
              <li>Right to receive regular updates on market conditions and recommendations</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Investor Responsibilities</h2>
            <ul>
              <li>Provide accurate and complete information for KYC compliance</li>
              <li>Read and understand all terms and conditions before engaging services</li>
              <li>Conduct due diligence before making investment decisions</li>
              <li>Keep login credentials and personal information secure</li>
              <li>Update personal information as necessary</li>
              <li>Report any suspicious activities or concerns promptly</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Service Standards</h2>
            <p>
              We commit to maintaining the following standards in our service delivery:
            </p>
            <ul>
              <li>Timely response to all queries and concerns</li>
              <li>Accurate and unbiased market analysis</li>
              <li>Regular communication of important updates</li>
              <li>Compliance with all SEBI regulations and guidelines</li>
              <li>Protection of investor data and privacy</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InvestorCharter;

