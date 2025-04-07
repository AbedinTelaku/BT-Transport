import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CookieIcon } from 'lucide-react';
const translations = {
  en: {
    title: 'Cookie Consent',
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    accept: 'Accept',
    learnMore: 'Learn More'
  },
  sq: {
    title: 'Pëlqimi i Cookies',
    message: 'Kjo faqe përdor cookies për të siguruar që ju merrni përvojën më të mirë në faqen tonë.',
    accept: 'Pranoj',
    learnMore: 'Mëso më shumë'
  }
};
interface CookieConsentProps {
  onAccept: () => void;
}
const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept
}) => {
  const {
    language
  } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];
  return <div className="fixed bottom-0 left-0 w-full bg-gray-800 shadow-lg z-50 border-t border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <CookieIcon size={24} className="text-yellow-500 mr-3" />
            <div>
              <h3 className="font-bold text-white">{t.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{t.message}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button onClick={onAccept} className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              {t.accept}
            </button>
            <button className="bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 font-medium py-2 px-6 rounded-md transition-colors">
              {t.learnMore}
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default CookieConsent;