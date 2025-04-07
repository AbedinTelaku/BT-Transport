import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { XIcon } from 'lucide-react';
import ECR48C from "../assets/ecr48.jpg";
import Volvo from "../assets/Volvo.jpg";
import Video from "../assets/video.mp4";
import VideoKamion from "../assets/kamion_bager.mp4";
import Kamion from "../assets/kamion.mp4";
import ECR48 from "../assets/cover.jpg";

const translations = {
  en: {
    title: 'Our Gallery',
    subtitle: 'See our equipment and completed projects',
    viewLarger: 'Click on images to view larger'
  },
  sq: {
    title: 'Foto nga punet tona',
    subtitle: 'Shihni pajisjet dhe projektet tona të përfunduara',
    viewLarger: 'Klikoni në imazhe për të parë më të mëdha'
  }
};

const galleryImages = [
  {
    type: 'image',
    src: ECR48C,
    alt: 'Volvo ECR48C Excavator'
  },
  {
    type: 'image',
    src: Volvo,
    alt: 'Volvo Excavator'
  },
  {
    type: 'video',
    src: Video,
    alt: 'Video of Volvo ECR48C at Work'
  },
  {
    type: 'video',
    src: VideoKamion,
    alt: 'Volvo ECR48C and Truck at Work'
  },
  {
    type: 'video',
    src: Kamion,
    alt: 'Excavation Work'
  },
  {
    type: 'image',
    src: ECR48,
    alt: 'Volvo Excavator'
  },
];

const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="w-full bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-gray-300 text-lg mb-2">{t.subtitle}</p>
          <p className="text-gray-400 text-sm italic">{t.viewLarger}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(item.src)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-64 object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay // Shtuar për të luajtur automatikisht
                />
              )}
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 z-50"
                onClick={() => setSelectedImage(null)}
              >
                <XIcon size={24} />
              </button>
              {galleryImages.find(item => item.src === selectedImage)?.type === 'image' ? (
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedImage}
                  className="max-w-full max-h-[80vh] object-contain"
                  controls
                  autoPlay
                  loop
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;