import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    navigate(window.location.pathname); // To re-render the component based on the new language
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
        <img src="/images/en.png" alt="English flag" width={28} height={16} />
      </button>
      <button onClick={() => changeLanguage('de')} disabled={i18n.language === 'de'}>
        <img src="/images/de.png" alt="German flag" width={24} height={16} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
