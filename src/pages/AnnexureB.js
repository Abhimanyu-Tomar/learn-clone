import React from 'react';
import './Disclaimer.css';

const AnnexureB = () => {
  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>Annexure – B</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>Dos and Don'ts for Investors</h2>
            <p>
              This annexure provides guidelines to help investors make informed decisions
              and protect themselves from fraudulent activities.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Dos for Investors</h2>
            <ul>
              <li>Verify the SEBI registration number of your investment advisor</li>
              <li>Read and understand all terms and conditions before investing</li>
              <li>Conduct thorough research before making investment decisions</li>
              <li>Keep records of all transactions and communications</li>
              <li>Diversify your investment portfolio to manage risk</li>
              <li>Review your portfolio regularly</li>
              <li>Report any suspicious activities immediately</li>
              <li>Update your contact information and KYC details regularly</li>
              <li>Understand your risk tolerance before investing</li>
              <li>Seek professional advice for complex investment decisions</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Don'ts for Investors</h2>
            <ul>
              <li>Don't invest based solely on tips or rumors</li>
              <li>Don't share your login credentials or passwords with anyone</li>
              <li>Don't invest in schemes promising unrealistic returns</li>
              <li>Don't ignore red flags or warning signs</li>
              <li>Don't make investment decisions under pressure</li>
              <li>Don't invest money you cannot afford to lose</li>
              <li>Don't ignore the importance of diversification</li>
              <li>Don't fall for get-rich-quick schemes</li>
              <li>Don't provide personal or financial information to unverified sources</li>
              <li>Don't ignore market conditions and economic factors</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Warning Signs of Fraud</h2>
            <ul>
              <li>Promises of guaranteed high returns with no risk</li>
              <li>Pressure to invest immediately</li>
              <li>Unsolicited investment offers</li>
              <li>Lack of proper documentation</li>
              <li>Unregistered investment advisors or platforms</li>
              <li>Complex strategies that are difficult to understand</li>
              <li>Requests for payment through unusual methods</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Investor Protection</h2>
            <p>
              Remember that investments in securities market are subject to market risks.
              Always read all related documents carefully before investing. SEBI provides
              various investor protection measures and grievance redressal mechanisms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AnnexureB;

