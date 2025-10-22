import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const { language, changeLanguage, t, fontSize, increaseFontSize, decreaseFontSize, resetFontSize, theme, changeTheme } = useLanguage();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-container">
          <div className="header-brand-section">
            <span className="header-brand-name">SANKALP CHATURVEDI</span>
          </div>
          <div className="header-accessibility">
            <button className="skip-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {t('header.skipToMain')}
            </button>
            <button className="screen-reader">{t('header.screenReader')}</button>
            <div className="font-size">
              <button 
                className={fontSize === 'small' ? 'active' : ''}
                onClick={decreaseFontSize} 
                title="Decrease font size"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button 
                className={fontSize === 'medium' ? 'active' : ''}
                onClick={resetFontSize} 
                title="Reset font size"
                aria-label="Reset font size"
              >
                A
              </button>
              <button 
                className={fontSize === 'large' ? 'active' : ''}
                onClick={increaseFontSize} 
                title="Increase font size"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
            <div className="color-themes">
              <button 
                className={`theme-btn theme-default ${theme === 'default' ? 'active' : ''}`}
                onClick={() => changeTheme('default')}
                title="Default theme"
                aria-label="Default theme"
              />
              <button 
                className={`theme-btn theme-dark ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => changeTheme('dark')}
                title="Dark theme"
                aria-label="Dark theme"
              />
              <button 
                className={`theme-btn theme-blue ${theme === 'blue' ? 'active' : ''}`}
                onClick={() => changeTheme('blue')}
                title="Blue theme"
                aria-label="Blue theme"
              />
              <button 
                className={`theme-btn theme-beige ${theme === 'beige' ? 'active' : ''}`}
                onClick={() => changeTheme('beige')}
                title="Beige theme"
                aria-label="Beige theme"
              />
            </div>
            <button 
              onClick={() => handleLanguageChange(language === 'en' ? 'hi' : 'en')} 
              className="hindi-link"
            >
              {t('header.hindi')}
            </button>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <h1>{t('header.logo')}</h1>
            </Link>
          </div>
          
          <nav className="main-nav">
            <ul>
              <li><Link to="/">{t('header.home')}</Link></li>
              <li><Link to="/about">{t('header.about')}</Link></li>
              <li 
                className="dropdown"
                onMouseEnter={() => setShowDisclaimer(true)}
                onMouseLeave={() => setShowDisclaimer(false)}
              >
                <span className="dropdown-toggle">{t('header.disclaimer')}</span>
                {showDisclaimer && (
                  <ul className="dropdown-menu">
                    <li className="has-submenu">
                      <span>{t('disclaimerMenu.investorCharter')}</span>
                      <ul className="submenu">
                        <li><Link to="/annexure-a">{t('disclaimerMenu.annexureA')}</Link></li>
                        <li><Link to="/annexure-b">{t('disclaimerMenu.annexureB')}</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/control-policy">{t('disclaimerMenu.controlPolicy')}</Link></li>
                    <li><Link to="/privacy-policy">{t('disclaimerMenu.privacyPolicy')}</Link></li>
                    <li><Link to="/code-of-conduct">{t('disclaimerMenu.codeOfConduct')}</Link></li>
                    <li><Link to="/grievance-redressal">{t('disclaimerMenu.grievanceRedressal')}</Link></li>
                    <li><Link to="/terms-conditions">{t('disclaimerMenu.termsConditions')}</Link></li>
                    <li><Link to="/all-disclaimers">{t('disclaimerMenu.allDisclaimers')}</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/contact">{t('header.contact')}</Link></li>
              <li><Link to="/faq">{t('header.faq')}</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

