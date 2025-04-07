import React, { useState, useContext, lazy } from 'react';
import { LanguageContext } from '../App';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'Get in touch with us for your excavation needs',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    phone: 'Phone',
    address: 'Address',
    emailUs: 'Email Us',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    success: 'Message sent successfully!',
    error: 'Please fill in all fields.'
  },
  sq: {
    title: 'Na Kontaktoni',
    subtitle: 'Lidhuni me ne për nevojat tuaja të gërmimit',
    name: 'Emri',
    email: 'Email',
    message: 'Mesazhi',
    send: 'Dërgo Mesazhin',
    phone: 'Telefoni',
    address: 'Adresa',
    emailUs: 'Na Shkruani',
    namePlaceholder: 'Emri Juaj',
    emailPlaceholder: 'Email-i Juaj',
    messagePlaceholder: 'Mesazhi Juaj',
    success: 'Mesazhi u dërgua me sukses!',
    error: 'Ju lutemi plotësoni të gjitha fushat.'
  }
};
const Contact = () => {
  const {
    language
  } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        message: t.error,
        type: 'error'
      });
      return;
    }
    // In a real application, you would send the form data to a server here
    // Simulate success
    setStatus({
      message: t.success,
      type: 'success'
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Clear status after 3 seconds
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };
  return <section id="contact" className="w-full bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-gray-300 text-lg">{t.subtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {status && <div className={`mb-4 p-3 rounded-md ${status.type === 'success' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>
                  {status.message}
                </div>}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  {t.name}
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t.namePlaceholder} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-yellow-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  {t.email}
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.emailPlaceholder} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-yellow-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {t.message}
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t.messagePlaceholder} rows={5} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-yellow-500" />
              </div>
              <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-md flex items-center justify-center transition-colors">
                <SendIcon size={18} className="mr-2" />
                {t.send}
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <PhoneIcon size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t.phone}
                    </h3>
                    <p className="text-gray-300">+383 49 444 649</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <MailIcon size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t.emailUs}
                    </h3>
                    <p className="text-gray-300">blendtelaku@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <MapPinIcon size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t.address}
                    </h3>
                    <p className="text-gray-300">
                      Rruga Agim Ramadani, Prishtinë, Kosovë
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.3478508071546!2d21.160235476376786!3d42.660144071117206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sAgim%20Ramadani%2C%20Prishtina!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s" width="100%" height="200" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Our Location" className="rounded-md"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;