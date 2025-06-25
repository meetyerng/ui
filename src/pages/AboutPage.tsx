import React, { useEffect, useRef } from 'react';
import { Target, Eye, History, Award, Users, Heart, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const timeline = [
    {
      year: '២០១៨',
      title: 'ការបង្កើតសមាគម',
      description: 'សមាគមត្រូវបានបង្កើតឡើងដោយក្រុមអ្នកស្ម័គ្រចិត្តដែលមានចក្ខុវិស័យដូចគ្នា',
      delay: '0ms'
    },
    {
      year: '២០១៩',
      title: 'ការចុះបញ្ជីផ្លូវការ',
      description: 'សមាគមត្រូវបានចុះបញ្ជីផ្លូវការជាមួយរាជរដ្ឋាភិបាលកម្ពុជា',
      delay: '200ms'
    },
    {
      year: '២០២០',
      title: 'កម្មវិធីដំបូង',
      description: 'បើកដំណើរការកម្មវិធីបម្រើសហគមន៍ដំបូងរបស់យើង',
      delay: '400ms'
    },
    {
      year: '២០២៤',
      title: 'ពង្រីកសកម្មភាព',
      description: 'បន្តពង្រីកសកម្មភាពបម្រើសហគមន៍នៅទូទាំងប្រទេស',
      delay: '600ms'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'ការបម្រើសហគមន៍',
      description: 'យើងផ្តល់អាទិភាពលើការបម្រើសហគមន៍ដោយស្មោះត្រង់និងក្តីស្រលាញ់',
      delay: '0ms'
    },
    {
      icon: Users,
      title: 'ការសហការ',
      description: 'យើងជឿលើកម្លាំងនៃការសហការ និងការចូលរួមពីគ្រប់ភាគីពាក់ព័ន្ធ',
      delay: '200ms'
    },
    {
      icon: Award,
      title: 'គុណភាព',
      description: 'យើងប្តេជ្ញាថាបម្រើការងារដែលមានគុណភាពខ្ពស់ និងប្រសិទ្ធភាព',
      delay: '400ms'
    }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative gradient-animate">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-emerald-200/30 rounded-full blur-xl float-animation"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-max relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 fade-in">
              <Sparkles className="text-emerald-600 mr-2" size={20} />
              <span className="text-gray-700 font-medium">ស្វែងយល់អំពីយើង</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8 fade-in">
              អំពី<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">សមាគម</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto fade-in" style={{ animationDelay: '300ms' }}>
              យើងគឺជាសមាគមដែលមានបេសកកម្មក្នុងការបម្រើសហគមន៍ខ្មែរ 
              និងការអភិវឌ្ឍន៍វប្បធម៌ប្រពៃណីដ៏សម្បូរបែប
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
        
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="card p-10 group slide-in-left">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Target className="text-white" size={36} />
              </div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors duration-300">
                បេសកកម្ម
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                យើងប្តេជ្ញាបម្រើសហគមន៍ខ្មែរ ដោយការពង្រឹងវប្បធម៌ប្រពៃណី ការអប់រំ 
                និងការអភិវឌ្ឍន៍សហគមន៍។ យើងកំពុងប្រឹងប្រែងបង្កើតឱកាសនិងលទ្ធភាព
                សម្រាប់ជនរួមជាតិខ្មែរទាំងអស់។
              </p>
            </div>

            {/* Vision */}
            <div className="card p-10 group slide-in-right">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Eye className="text-white" size={36} />
              </div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                ចក្ខុវិស័យ
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                យើងមានចក្ខុវិស័យក្នុងការក្លាយជាសមាគមឈានមុខគេ ក្នុងការបម្រើសហគមន៍ខ្មែរ 
                និងការអភិវឌ្ឍន៍វប្បធម៌ប្រពៃណី។ យើងចង់បង្កើតប្រព័ន្ធអប់រំនិងអភិវឌ្ឍន៍
                ដែលមានគុណភាពខ្ពស់។
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
        
        <div className="container-max relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 fade-in">
              តម្លៃរបស់យើង
            </h2>
            <p className="text-xl text-gray-600 fade-in" style={{ animationDelay: '200ms' }}>
              តម្លៃដែលដឹកនាំការងាររបស់យើងរាល់ថ្ងៃ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="card p-10 text-center group scale-in"
                style={{ animationDelay: value.delay }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <value.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
        
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 fade-in">
              ប្រវត្តិរបស់យើង
            </h2>
            <p className="text-xl text-gray-600 fade-in" style={{ animationDelay: '200ms' }}>
              ដំណើរការអភិវឌ្ឍន៍របស់សមាគម
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div 
                      className={`card p-8 group ${
                        index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
                      }`}
                      style={{ animationDelay: item.delay }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <History className="text-white" size={24} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-emerald-600 group-hover:text-blue-600 transition-colors duration-300">
                          {item.year}
                        </h3>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full border-4 border-white shadow-xl pulse-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;