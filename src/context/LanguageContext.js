
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
  const [language, setLanguage] = useState('en');
  const [fontSize, setFontSize] = useState('medium'); // small, medium, large
  const [theme, setTheme] = useState('default'); // default, dark, blue, beige, highContrast

  useEffect(() => {
    // Apply font size to root element
    const root = document.documentElement;
    switch (fontSize) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
      default:
        root.style.fontSize = '16px';
    }
  }, [fontSize]);

  useEffect(() => {
    // Apply theme to body element
    document.body.className = `theme-${theme}`;
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

