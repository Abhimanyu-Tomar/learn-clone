import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('footer.reachUs')}</h3>
            <address>
              <p>{t('footer.address1')}</p>
              <p>{t('footer.address2')}</p>
              <p>{t('footer.address3')}</p>
            </address>
          </div>

          <div className="footer-section">
            <h3>{t('footer.connectWithUs')}</h3>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                {t('footer.twitter')}
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                {t('footer.dribbble')}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                {t('footer.instagram')}
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t('footer.legal')}</h3>
            <div className="legal-links">
              <Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link>
              <Link to="/terms-conditions">{t('footer.termsOfService')}</Link>
              <Link to="/all-disclaimers">{t('footer.disclaimers')}</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <p className="sebi-reg">{t('footer.sebiReg')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

