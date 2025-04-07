import React, { useEffect, useState, createContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
export const LanguageContext = createContext({
  language: 'sq',
  setLanguage: (lang: string) => {}
});
export const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {}
});
export function App() {
  const [language, setLanguage] = useState('sq');
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven) {
      setShowCookieConsent(false);
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };
  const handleCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };
  return <LanguageContext.Provider value={{
    language,
    setLanguage
  }}>
      <ThemeContext.Provider value={{
      isDark,
      toggleTheme
    }}>
        <div className={`${isDark ? 'dark' : ''}`}>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
            <Header />
            <main>
              <Hero />
              <AboutUs />
              <Services />
              <Gallery />
              <Contact />
            </main>
            <Footer />
            {showCookieConsent && <CookieConsent onAccept={handleCookieConsent} />}
          </div>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>;
}