import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { ClockIcon, AwardIcon, UsersIcon } from 'lucide-react';
import ECRCover from "../assets/cover.jpg"
const translations = {
  en: {
    title: 'About Us',
    description: 'With over 10 years of experience in the excavation industry, our company specializes in providing high-quality excavation and transportation services.',
    experience: '10+ Years Experience',
    quality: 'Quality Guaranteed',
    team: 'Professional Team',
    experienceDesc: 'Years of expertise in excavation and construction projects.',
    qualityDesc: 'We guarantee the quality of our work and customer satisfaction.',
    teamDesc: 'Our skilled team ensures projects are completed to the highest standards.'
  },
  sq: {
    title: 'Rreth Nesh',
    description: 'Me mbi 10 vjet përvojë në industrinë e gërmimit, kompania jonë është e specializuar në ofrimin e shërbimeve të gërmimit dhe transportit me cilësi të lartë.',
    experience: '10+ Vite Përvojë',
    quality: 'Cilësi e Garantuar',
    team: 'Ekip Profesional',
    experienceDesc: 'Vite ekspertize në projekte gërmimi dhe ndërtimi.',
    qualityDesc: 'Ne garantojmë cilësinë e punës sonë dhe kënaqësinë e klientit.',
    teamDesc: 'Ekipi ynë i aftë siguron që projektet të përfundojnë sipas standardeve më të larta.'
  }
};
const AboutUs = () => {
  const {
    language
  } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];
  return <section id="about" className="w-full bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          {t.title}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={ECRCover} alt="Cover Image" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-300 mb-8 text-lg">{t.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <ClockIcon size={24} className="text-yellow-500 mr-2" />
                  <h3 className="font-semibold text-white">{t.experience}</h3>
                </div>
                <p className="text-gray-300 text-sm">{t.experienceDesc}</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <AwardIcon size={24} className="text-yellow-500 mr-2" />
                  <h3 className="font-semibold text-white">{t.quality}</h3>
                </div>
                <p className="text-gray-300 text-sm">{t.qualityDesc}</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <UsersIcon size={24} className="text-yellow-500 mr-2" />
                  <h3 className="font-semibold text-white">{t.team}</h3>
                </div>
                <p className="text-gray-300 text-sm">{t.teamDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;