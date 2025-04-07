import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { ShovelIcon, LayersIcon, HomeIcon, TractorIcon } from 'lucide-react';
const translations = {
  en: {
    title: 'Our Services',
    subtitle: 'We provide a wide range of excavation and transportation services',
    yardLeveling: 'Yard Leveling',
    yardLevelingDesc: 'Professional yard leveling and grading for construction projects and landscaping.',
    channelDigging: 'Channel Digging',
    channelDiggingDesc: 'Precise channel and trench digging for drainage, irrigation, and utility installations.',
    pipeInstallation: 'Pipe Installation',
    pipeInstallationDesc: 'Expert installation of water, sewage, and drainage pipes with proper grading.',
    foundationWork: 'Foundation Work',
    foundationWorkDesc: 'Excavation and preparation for building foundations and structures.',
    landClearing: 'Land Clearing',
    landClearingDesc: 'Clearing land of vegetation, rocks, and debris for construction or agricultural use.',
    roadPreparation: 'Road Preparation',
    roadPreparationDesc: 'Ground preparation and excavation for road construction and driveway installation.'
  },
  sq: {
    title: 'Shërbimet Tona',
    subtitle: 'Ne ofrojmë një gamë të gjerë shërbimesh gërmimi dhe transporti',
    yardLeveling: 'Nivelimi i Oborrit',
    yardLevelingDesc: 'Nivelim dhe gradim profesional i oborrit për projekte ndërtimi dhe peizazhi.',
    channelDigging: 'Gërmimi i Kanaleve',
    channelDiggingDesc: 'Gërmim i saktë i kanaleve për drenazhim, ujitje dhe instalime utilitare.',
    pipeInstallation: 'Instalimi i Tubave',
    pipeInstallationDesc: 'Instalim ekspert i tubave të ujit, kanalizimeve dhe drenazhimit me gradim të duhur.',
    foundationWork: 'Punë Themeli',
    foundationWorkDesc: 'Gërmim dhe përgatitje për themelet e ndërtesave dhe strukturave.',
    landClearing: 'Pastrimi i Tokës',
    landClearingDesc: 'Pastrimi i tokës nga bimësia, shkëmbinjtë dhe mbeturinat për ndërtim ose përdorim bujqësor.',
    roadPreparation: 'Përgatitja e Rrugës',
    roadPreparationDesc: 'Përgatitja e tokës dhe gërmimi për ndërtimin e rrugëve dhe instalimin e rrugicave.'
  }
};
const Services = () => {
  const {
    language
  } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];
  const services = [{
    icon: <ShovelIcon size={32} className="text-yellow-500" />,
    title: t.yardLeveling,
    description: t.yardLevelingDesc
  }, {
    icon: <LayersIcon size={32} className="text-yellow-500" />,
    title: t.channelDigging,
    description: t.channelDiggingDesc
  }, {
    icon: <div size={32} className="text-yellow-500" />,
    title: t.pipeInstallation,
    description: t.pipeInstallationDesc
  }, {
    icon: <HomeIcon size={32} className="text-yellow-500" />,
    title: t.foundationWork,
    description: t.foundationWorkDesc
  }, {
    icon: <TractorIcon size={32} className="text-yellow-500" />,
    title: t.landClearing,
    description: t.landClearingDesc
  }, {
    icon: <div size={32} className="text-yellow-500" />,
    title: t.roadPreparation,
    description: t.roadPreparationDesc
  }];
  return <section id="services" className="w-full bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-gray-300 text-lg">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;