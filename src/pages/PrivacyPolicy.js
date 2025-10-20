import React from 'react';
import './Disclaimer.css';

const PrivacyPolicy = () => {
  return (
    <div className="disclaimer-page">
      <div className="page-container">
        <h1>Privacy Policy</h1>
        <div className="disclaimer-content">
          <section className="disclaimer-section">
            <h2>Introduction</h2>
            <p>
              Learn With Sankalp ("we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our services.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name, email address, and contact details</li>
              <li>Financial information required for KYC compliance</li>
              <li>Investment preferences and risk profile</li>
              <li>Transaction history and account information</li>
            </ul>
            <h3>Technical Information</h3>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To send you market updates and newsletters (with consent)</li>
              <li>To improve our services and user experience</li>
              <li>To detect and prevent fraud</li>
              <li>To communicate with you about your account</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Regulatory authorities as required by law</li>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors (lawyers, auditors)</li>
              <li>Law enforcement when legally required</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration, disclosure,
              or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure servers and data centers</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>Cookies Policy</h2>
            <p>
              We use cookies and similar technologies to improve your experience on our
              website. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new policy on this page and updating the "Last
              Updated" date.
            </p>
            <p><strong>Last Updated:</strong> October 19, 2025</p>
          </section>

          <section className="disclaimer-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us
              through our Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

