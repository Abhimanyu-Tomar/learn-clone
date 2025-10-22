import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, changeLanguage, t, fontSize, increaseFontSize, decreaseFontSize, resetFontSize, theme, changeTheme } = useLanguage();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
          
          <button 
            className={`hamburger-menu ${isMobileMenuOpen ? 'hidden' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="mobile-menu-header">
              <button 
                className="mobile-close-btn" 
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <ul>
              <li><Link to="/" onClick={closeMobileMenu}>{t('header.home')}</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu}>{t('header.about')}</Link></li>
              <li 
                className="dropdown"
                onMouseEnter={() => setShowDisclaimer(true)}
                onMouseLeave={() => setShowDisclaimer(false)}
                onClick={() => setShowDisclaimer(!showDisclaimer)}
              >
                <span className="dropdown-toggle">{t('header.disclaimer')}</span>
                {showDisclaimer && (
                  <ul className="dropdown-menu">
                    <li className="has-submenu">
                      <span>{t('disclaimerMenu.investorCharter')}</span>
                      <ul className="submenu">
                        <li><Link to="/annexure-a" onClick={closeMobileMenu}>{t('disclaimerMenu.annexureA')}</Link></li>
                        <li><Link to="/annexure-b" onClick={closeMobileMenu}>{t('disclaimerMenu.annexureB')}</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/control-policy" onClick={closeMobileMenu}>{t('disclaimerMenu.controlPolicy')}</Link></li>
                    <li><Link to="/privacy-policy" onClick={closeMobileMenu}>{t('disclaimerMenu.privacyPolicy')}</Link></li>
                    <li><Link to="/code-of-conduct" onClick={closeMobileMenu}>{t('disclaimerMenu.codeOfConduct')}</Link></li>
                    <li><Link to="/grievance-redressal" onClick={closeMobileMenu}>{t('disclaimerMenu.grievanceRedressal')}</Link></li>
                    <li><Link to="/terms-conditions" onClick={closeMobileMenu}>{t('disclaimerMenu.termsConditions')}</Link></li>
                    <li><Link to="/all-disclaimers" onClick={closeMobileMenu}>{t('disclaimerMenu.allDisclaimers')}</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/contact" onClick={closeMobileMenu}>{t('header.contact')}</Link></li>
              <li><Link to="/faq" onClick={closeMobileMenu}>{t('header.faq')}</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

