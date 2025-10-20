import React from 'react';
import './Disclaimer.css';

const GrievanceRedressal = () => {
  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>Grievance Redressal</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>Our Commitment</h2>
            <p>
              Learn With Sankalp is committed to providing excellent service to all our
              clients. However, if you have any concerns or complaints, we have established
              a transparent and efficient grievance redressal mechanism.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>How to File a Complaint</h2>
            <p>
              You can register your complaint through any of the following channels:
            </p>
            <ul>
              <li><strong>Email:</strong> Contact us through our website contact form</li>
              <li><strong>Written Communication:</strong> 123 Financial District, Mumbai, Maharashtra 400001</li>
              <li><strong>Phone:</strong> During business hours</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Information to Include in Your Complaint</h2>
            <ul>
              <li>Your name and contact information</li>
              <li>Client ID or account number (if applicable)</li>
              <li>Nature of complaint with relevant details</li>
              <li>Date of incident or transaction</li>
              <li>Supporting documents (if any)</li>
              <li>Expected resolution</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Complaint Resolution Process</h2>
            <ol>
              <li><strong>Acknowledgment:</strong> Within 2 working days of receipt</li>
              <li><strong>Investigation:</strong> Thorough review of the complaint</li>
              <li><strong>Resolution:</strong> Within 7 working days from acknowledgment</li>
              <li><strong>Communication:</strong> Written response with resolution details</li>
            </ol>
          </section>

          <section className="disclaimer-section">
            <h2>Grievance Officer</h2>
            <p><strong>Name:</strong> Sankalp Chaturvedi</p>
            <p><strong>Designation:</strong> Chief Grievance Officer</p>
            <p><strong>Address:</strong> 123 Financial District, Mumbai, Maharashtra 400001</p>
            <p><strong>Response Time:</strong> Within 7 working days</p>
          </section>

          <section className="disclaimer-section">
            <h2>Escalation Process</h2>
            <p>
              If you are not satisfied with the resolution provided, you may escalate your
              complaint:
            </p>
            <h3>Level 1 - Internal Escalation</h3>
            <p>
              Contact our senior management within 15 days of receiving the resolution.
            </p>
            <h3>Level 2 - SEBI SCORES</h3>
            <p>
              If the complaint remains unresolved after internal escalation, you can file
              a complaint on the SEBI Complaints Redress System (SCORES) platform at
              scores.gov.in
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Types of Grievances</h2>
            <p>We handle complaints related to:</p>
            <ul>
              <li>Service quality and delivery</li>
              <li>Unauthorized recommendations or transactions</li>
              <li>Billing and payment issues</li>
              <li>Delays in service</li>
              <li>Breach of privacy or confidentiality</li>
              <li>Unprofessional conduct</li>
              <li>Any other service-related concerns</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Our Promise</h2>
            <p>
              We take all complaints seriously and are committed to:
            </p>
            <ul>
              <li>Fair and impartial investigation of all complaints</li>
              <li>Timely resolution and communication</li>
              <li>Protecting complainant confidentiality</li>
              <li>Taking corrective action to prevent recurrence</li>
              <li>Continuous improvement of our services</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>No Retaliation Policy</h2>
            <p>
              We assure that no client will face any adverse consequences for raising a
              genuine complaint. Your relationship with us will not be affected by filing
              a grievance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GrievanceRedressal;

