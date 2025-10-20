import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
    { question: t('faq.q7'), answer: t('faq.a7') },
    { question: t('faq.q8'), answer: t('faq.a8') }
  ];

  return (
    <div className="faq-page">
      <div className="page-container">
        <h1>{t('faq.title')}</h1>
        <p className="faq-intro">{t('faq.intro')}</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h2>{t('faq.stillHaveQuestions')}</h2>
          <p>{t('faq.contactDescription')}</p>
          <a href="/contact" className="contact-link">{t('faq.contactLink')}</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

