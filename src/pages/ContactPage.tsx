import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'អាសយដ្ឋាន',
      content: 'ភ្នំពេញ, កម្ពុជា',
      detail: 'ផ្លូវ ១២៣, សង្កាត់..., ខណ្ឌ...'
    },
    {
      icon: Phone,
      title: 'លេខទូរស័ព្ទ',
      content: '+855 xx xxx xxx',
      detail: 'សម្រាប់ការសុំព័ត៌មាន'
    },
    {
      icon: Mail,
      title: 'អុីមែល',
      content: 'info@mettyeung27.org',
      detail: 'ប្រអប់សំបុត្រផ្លូវការ'
    },
    {
      icon: Clock,
      title: 'ម៉ោងធ្វើការ',
      content: 'ច័ន្ទ - សុក្រ',
      detail: '៨:០០ - ១៧:០០'
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: '#',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: '#',
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      icon: Mail,
      name: 'Email',
      url: '#',
      color: 'bg-emerald-600 hover:bg-emerald-700'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              ទំនាក់ទំនង<span className="text-emerald-600">យើង</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              យើងរីករាយក្នុងការស្តាប់ពីអ្នក។ សូមទំនាក់ទំនងមកយើងសម្រាប់សំណួរ ឬការសហការ
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-emerald-600 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                ផ្ញើសាររបស់អ្នក
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      ឈ្មោះ *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      លេខទូរស័ព្ទ
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="បញ្ចូលលេខទូរស័ព្ទ"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    អុីមែល *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="បញ្ចូលអុីមែលរបស់អ្នក"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    ប្រធានបទ *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">ជ្រើសរើសប្រធានបទ</option>
                    <option value="general">សំណួរទូទៅ</option>
                    <option value="membership">សមាជិកភាព</option>
                    <option value="volunteer">ការស្ម័គ្រចិត្ត</option>
                    <option value="donation">ការបរិច្ចាគ</option>
                    <option value="partnership">ការសហការ</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    សារ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="សរសេរសាររបស់អ្នកនៅទីនេះ..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg"
                >
                  ផ្ញើសារ <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Map */}
              <div className="card overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Google Maps នឹងបង្ហាញនៅទីនេះ</p>
                    <p className="text-sm mt-1">ភ្នំពេញ, កម្ពុជា</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="card p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  ម៉ោងធ្វើការ
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">ច័ន្ទ - ព្រហស្បតិ៍</span>
                    <span className="font-medium text-emerald-600">៨:០០ - ១៧:០០</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">សុក្រ</span>
                    <span className="font-medium text-emerald-600">៨:០០ - ១៦:០០</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">សៅរ៍ - អាទិត្យ</span>
                    <span className="font-medium text-red-500">បិទ</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  តាមដានយើង
                </h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  តាមដានយើងនៅប្រព័ន្ធផ្សព្វផ្សាយសង្គម ដើម្បីទទួលបានព័ត៌មានថ្មីៗ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;