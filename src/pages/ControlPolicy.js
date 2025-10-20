import React from 'react';
import './Disclaimer.css';

const ControlPolicy = () => {
  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>Control Policy</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>Internal Control Framework</h2>
            <p>
              Learn With Sankalp maintains a comprehensive internal control framework to
              ensure the integrity of our operations and protection of investor interests.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Operational Controls</h2>
            <ul>
              <li>Segregation of duties to prevent conflicts of interest</li>
              <li>Regular audits and compliance checks</li>
              <li>Documented standard operating procedures</li>
              <li>Continuous monitoring of transactions and activities</li>
              <li>Quality control measures for all advisory services</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Risk Management</h2>
            <p>
              We have implemented robust risk management practices including:
            </p>
            <ul>
              <li>Regular risk assessment and mitigation strategies</li>
              <li>Business continuity and disaster recovery plans</li>
              <li>Cybersecurity measures to protect data</li>
              <li>Compliance monitoring systems</li>
              <li>Regular training for staff on risk management</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Compliance and Regulatory Controls</h2>
            <ul>
              <li>Adherence to all SEBI regulations and guidelines</li>
              <li>Regular compliance reporting</li>
              <li>Maintenance of proper books of accounts</li>
              <li>Periodic review of policies and procedures</li>
              <li>Internal audit function</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Client Protection Controls</h2>
            <ul>
              <li>KYC verification for all clients</li>
              <li>Client money segregation</li>
              <li>Conflict of interest management</li>
              <li>Protection of client confidential information</li>
              <li>Fair dealing and best execution practices</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Monitoring and Review</h2>
            <p>
              Our control policies are subject to regular review and updates to ensure
              they remain effective and compliant with current regulations. Any deficiencies
              identified are promptly addressed through corrective action plans.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ControlPolicy;

