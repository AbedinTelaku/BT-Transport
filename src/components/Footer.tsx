import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { FacebookIcon, InstagramIcon, PhoneIcon } from 'lucide-react';
const translations = {
  en: {
    rights: 'All Rights Reserved',
    services: 'Services',
    yardLeveling: 'Yard Leveling',
    channelDigging: 'Channel Digging',
    pipeInstallation: 'Pipe Installation',
    foundationWork: 'Foundation Work',
    contact: 'Contact',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    followUs: 'Follow Us'
  },
  sq: {
    rights: 'Të Gjitha të Drejtat e Rezervuara',
    services: 'Shërbimet',
    yardLeveling: 'Nivelimi i Oborrit',
    channelDigging: 'Gërmimi i Kanaleve',
    pipeInstallation: 'Instalimi i Tubave',
    foundationWork: 'Punë Themeli',
    contact: 'Kontakti',
    phone: 'Telefoni',
    email: 'Email',
    address: 'Adresa',
    followUs: 'Na Ndiqni'
  }
};
const Footer = () => {
  const {
    language
  } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="w-full bg-gray-900 text-white pt-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4">
              BTTRANSPORT
            </h3>
            <p className="text-gray-400 mb-4">
              {language === 'en' ? 'Professional excavation services' : 'Shërbime profesionale gërmimi.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <InstagramIcon size={24} />
              </a>
              <a href="tel:+38344123456" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <PhoneIcon size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.services}</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t.yardLeveling}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t.channelDigging}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t.pipeInstallation}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t.foundationWork}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <span className="font-semibold mr-2">{t.phone}:</span> +383 49
                444 649
              </li>
              <li className="flex items-center text-gray-400">
                <span className="font-semibold mr-2">{t.email}:</span>{' '}
                blendtelaku@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <span className="font-semibold mr-2">{t.address}:</span> Rruga
                Agim Ramadani, Prishtinë
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} AT. {t.rights}.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;