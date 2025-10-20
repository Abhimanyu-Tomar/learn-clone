import React from 'react';
import { Link } from 'react-router-dom';
import './Disclaimer.css';

const AllDisclaimers = () => {
  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>All Disclaimers</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>General Disclaimer</h2>
            <p>
              The information provided by Learn With Sankalp is for educational and
              informational purposes only. It should not be considered as investment advice,
              legal advice, or a recommendation to buy or sell any securities.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Investment Risk Disclaimer</h2>
            <p>
              <strong>Investments in securities market are subject to market risks. Read all
              the related documents carefully before investing.</strong>
            </p>
            <ul>
              <li>Past performance is not indicative of future results</li>
              <li>Market conditions can change rapidly and unpredictably</li>
              <li>You may lose your entire investment</li>
              <li>Different investment products have different risk profiles</li>
              <li>Diversification does not guarantee profits or protect against losses</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Registration Disclaimer</h2>
            <p>
              Learn With Sankalp is registered with SEBI as an Investment Advisor with
              registration number INH000014119. SEBI registration does not imply approval
              or endorsement by SEBI nor does it guarantee the performance of our services.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>No Guarantee Disclaimer</h2>
            <p>
              We do not guarantee:
            </p>
            <ul>
              <li>Profits or returns on any investment</li>
              <li>Accuracy of market predictions or forecasts</li>
              <li>That our advice will result in successful outcomes</li>
              <li>Protection against investment losses</li>
              <li>Specific investment performance</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Third-Party Information Disclaimer</h2>
            <p>
              Our analysis may include information from third-party sources. While we
              strive to use reliable sources, we do not guarantee the accuracy, completeness,
              or timeliness of third-party information.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Personal Responsibility Disclaimer</h2>
            <p>
              Investment decisions are your personal responsibility. You should:
            </p>
            <ul>
              <li>Conduct your own due diligence</li>
              <li>Consider your financial situation and risk tolerance</li>
              <li>Consult with other professionals as needed</li>
              <li>Not rely solely on our recommendations</li>
              <li>Make informed decisions based on complete information</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Communication Disclaimer</h2>
            <p>
              Communications from us, including emails, newsletters, and reports:
            </p>
            <ul>
              <li>Are confidential and intended only for the recipient</li>
              <li>Should not be shared or redistributed without permission</li>
              <li>May contain forward-looking statements subject to risks and uncertainties</li>
              <li>Are not a substitute for professional advice</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Website Disclaimer</h2>
            <p>
              Regarding our website:
            </p>
            <ul>
              <li>Content is provided "as is" without warranties</li>
              <li>We are not responsible for technical issues or interruptions</li>
              <li>Links to third-party websites are provided for convenience only</li>
              <li>We do not endorse third-party content or services</li>
              <li>Information may be updated without notice</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Conflict of Interest Disclaimer</h2>
            <p>
              We maintain policies to manage conflicts of interest. However, potential
              conflicts may exist, and we will disclose material conflicts as required by
              regulations.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Regulatory Compliance</h2>
            <p>
              We comply with all applicable SEBI regulations and guidelines. For complete
              regulatory information, please refer to:
            </p>
            <ul>
              <li><Link to="/investor-charter">Investor Charter</Link></li>
              <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
              <li><Link to="/control-policy">Control Policy</Link></li>
              <li><Link to="/grievance-redressal">Grievance Redressal</Link></li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Contact for Clarifications</h2>
            <p>
              If you have any questions about these disclaimers or need clarification,
              please <Link to="/contact">contact us</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AllDisclaimers;

