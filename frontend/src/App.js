import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Portfolio from './components/Portfolio';

function App() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="App">
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200"
          >
            <span className="text-xl">{currentLanguage.flag}</span>
            <span className="font-medium text-gray-700">{currentLanguage.name}</span>
            <svg
              className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                    i18n.language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Portfolio />
    </div>
  );
}

export default App;
