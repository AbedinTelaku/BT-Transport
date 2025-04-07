import React, { useContext } from 'react';
import { LanguageContext } from '../App';
const translations = {
  en: {
    title: 'Professional Excavation Services',
    subtitle: 'Specialized in excavation and transportation',
    cta: 'Our Services'
  },
  sq: {
    title: 'Shërbime Profesionale Gërmimi',
    subtitle: 'Të specializuar në gërmim dhe transport',
    cta: 'Shërbimet Tona'
  }
};
const Hero = () => {
  const {
    language
  } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="w-full bg-gray-50 dark:bg-gray-900 pt-24 pb-16 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.subtitle}
          </p>
          <button onClick={scrollToServices} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-md transition-colors">
            {t.cta}
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;