import React from 'react';
import './Disclaimer.css';

const AnnexureA = () => {
  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>Annexure – A</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>Details of Grievance Redressal Mechanism</h2>
            <p>
              This annexure provides detailed information about our grievance redressal
              mechanism and the process for resolving investor complaints.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Grievance Officer Details</h2>
            <p><strong>Name:</strong> Sankalp Chaturvedi</p>
            <p><strong>Designation:</strong> Chief Grievance Officer</p>
            <p><strong>Address:</strong> 123 Financial District, Mumbai, Maharashtra 400001</p>
            <p><strong>Response Time:</strong> Within 7 working days</p>
          </section>

          <section className="disclaimer-section">
            <h2>Complaint Filing Process</h2>
            <ol>
              <li>Submit your complaint through our contact form or email</li>
              <li>Receive acknowledgment within 2 working days</li>
              <li>Investigation of the complaint</li>
              <li>Resolution communication within 7 working days</li>
              <li>Escalation to SEBI SCORES if unresolved</li>
            </ol>
          </section>

          <section className="disclaimer-section">
            <h2>Types of Complaints Handled</h2>
            <ul>
              <li>Service quality issues</li>
              <li>Billing and payment concerns</li>
              <li>Unauthorized transactions or recommendations</li>
              <li>Delay in service delivery</li>
              <li>Breach of confidentiality</li>
              <li>Any other grievances related to our services</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Escalation Matrix</h2>
            <p>
              If your complaint is not resolved within the stipulated time frame, you may
              escalate your complaint to:
            </p>
            <ul>
              <li><strong>Level 1:</strong> Grievance Officer (within 7 days)</li>
              <li><strong>Level 2:</strong> Senior Management (within 15 days)</li>
              <li><strong>Level 3:</strong> SEBI SCORES Platform</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AnnexureA;

