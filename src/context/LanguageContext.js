
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('selectedLanguage');
  const savedFontSize = localStorage.getItem('fontSize') || 'medium';
  const savedTheme = localStorage.getItem('theme') || 'default';
  
  const [language, setLanguage] = useState(savedLanguage || 'en');
  const [fontSize, setFontSize] = useState(savedFontSize); // small, medium, large
  const [theme, setTheme] = useState(savedTheme); // default, dark, blue, beige, highContrast

  useEffect(() => {
    // Apply font size class to body element
    document.body.classList.remove('font-small', 'font-large');
    if (fontSize === 'small') {
      document.body.classList.add('font-small');
    } else if (fontSize === 'large') {
      document.body.classList.add('font-large');
    }
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    // Apply theme to body element
    document.body.classList.remove('theme-default', 'theme-dark', 'theme-blue', 'theme-beige');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
  };

  const increaseFontSize = () => {
    if (fontSize === 'small') setFontSize('medium');
    else if (fontSize === 'medium') setFontSize('large');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'large') setFontSize('medium');
    else if (fontSize === 'medium') setFontSize('small');
  };

  const resetFontSize = () => {
    setFontSize('medium');
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage, 
      t, 
      fontSize, 
      increaseFontSize, 
      decreaseFontSize, 
      resetFontSize,
      theme,
      changeTheme
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

