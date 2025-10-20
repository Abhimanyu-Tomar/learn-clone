import React from 'react';
import './Disclaimer.css';

const CodeOfConduct = () => {
  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>Code of Conduct</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>Professional Standards</h2>
            <p>
              Learn With Sankalp is committed to maintaining the highest standards of
              professional conduct in all our interactions with clients, regulators, and
              other stakeholders.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Ethical Principles</h2>
            <h3>Integrity</h3>
            <p>
              We conduct our business with honesty, transparency, and fairness. We do not
              engage in any fraudulent, deceptive, or manipulative practices.
            </p>
            <h3>Competence</h3>
            <p>
              We maintain and continuously improve our professional knowledge and skills
              to provide quality services to our clients.
            </p>
            <h3>Confidentiality</h3>
            <p>
              We protect the confidentiality of client information and do not disclose it
              without proper authorization, except as required by law.
            </p>
            <h3>Objectivity</h3>
            <p>
              We provide unbiased advice and avoid conflicts of interest that could
              compromise our professional judgment.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Client Relations</h2>
            <ul>
              <li>Treat all clients fairly and with respect</li>
              <li>Provide clear and accurate information about our services</li>
              <li>Disclose all relevant risks associated with investments</li>
              <li>Act in the best interests of clients</li>
              <li>Maintain professional boundaries</li>
              <li>Respond promptly to client queries and concerns</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Conflict of Interest</h2>
            <p>
              We have policies and procedures to identify and manage conflicts of interest:
            </p>
            <ul>
              <li>Disclosure of potential conflicts to clients</li>
              <li>Maintaining independence in advisory services</li>
              <li>Avoiding personal trading that conflicts with client interests</li>
              <li>Transparent fee structure and commission disclosure</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Regulatory Compliance</h2>
            <ul>
              <li>Comply with all applicable laws and regulations</li>
              <li>Adhere to SEBI guidelines and circulars</li>
              <li>Maintain proper records and documentation</li>
              <li>Cooperate with regulatory inspections and audits</li>
              <li>Report suspicious activities and market abuse</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Professional Behavior</h2>
            <ul>
              <li>Maintain dignity and decorum in professional conduct</li>
              <li>Avoid behavior that could damage the reputation of the profession</li>
              <li>Respect intellectual property rights</li>
              <li>Ensure fair and accurate marketing and advertising</li>
              <li>Avoid making unrealistic promises or guarantees</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Continuous Improvement</h2>
            <p>
              We are committed to continuous learning and improvement. We regularly review
              our practices, update our knowledge, and enhance our systems to better serve
              our clients and maintain professional excellence.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;

