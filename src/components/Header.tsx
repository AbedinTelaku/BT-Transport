import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { ThemeContext } from '../App';
const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    gallery: 'Photo',
    contact: 'Contact'
  },
  sq: {
    home: 'Ballina',
    about: 'Rreth Nesh',
    services: 'Shërbimet',
    gallery: 'Foto',
    contact: 'Kontakti'
  }
};
const Header = () => {
  const {
    language,
    setLanguage
  } = useContext(LanguageContext);
  const {
    isDark,
    toggleTheme
  } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language as keyof typeof translations];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-50 shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-yellow-600 dark:text-yellow-500">
            BTTRANSPORT
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
            {t.home}
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
            {t.about}
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
            {t.services}
          </button>
          <button onClick={() => scrollToSection('gallery')} className="text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
            {t.gallery}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
            {t.contact}
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
            {isDark ? <SunIcon size={20} className="text-yellow-500" /> : <MoonIcon size={20} className="text-gray-600" />}
          </button>
          <div className="flex border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
            <button onClick={() => setLanguage('sq')} className={`px-2 py-1 text-sm ${language === 'sq' ? 'bg-yellow-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
              SQ
            </button>
            <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-sm ${language === 'en' ? 'bg-yellow-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
              EN
            </button>
          </div>
          <button className="md:hidden text-gray-800 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && <nav className="md:hidden bg-white dark:bg-gray-800 py-4 transition-colors duration-200">
          <div className="flex flex-col space-y-3 px-4">
            <button onClick={() => scrollToSection('hero')} className="text-left text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors py-2">
              {t.home}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors py-2">
              {t.about}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors py-2">
              {t.services}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors py-2">
              {t.gallery}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors py-2">
              {t.contact}
            </button>
          </div>
        </nav>}
    </header>;
};
export default Header;