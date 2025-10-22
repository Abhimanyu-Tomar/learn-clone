import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageModal.css';

const LanguageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    // Show modal only if user hasn't selected a language before
    const hasSelectedLanguage = localStorage.getItem('selectedLanguage');
    
    if (!hasSelectedLanguage) {
      // Small delay to ensure smooth display
      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    }
  }, []);

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="language-modal-overlay">
      <div className="language-modal">
        <h2>Choose your language</h2>
        <div className="language-options">
          <button 
            className="language-option english"
            onClick={() => handleLanguageSelect('en')}
          >
            English
          </button>
          <button 
            className="language-option hindi"
            onClick={() => handleLanguageSelect('hi')}
          >
            हिन्दी
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;

