import React from 'react';
import { Calendar, MapPin, Users, Scissors } from 'lucide-react';

const ProjectHighlightsPage = () => {
  const haircutProjects = [
    {
      id: 1,
      title: 'កម្មវិធីកាត់សក់ឥតគិតថ្លៃ ២០២៤',
      date: '២០២៤-០៣-១០',
      location: 'ភ្នំពេញ',
      participants: 150,
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'កម្មវិធីកាត់សក់ឥតគិតថ្លៃសម្រាប់ក្មេងៗនិងយុវជនក្រីក្រ ដើម្បីជួយពួកគេមានរូបរាងស្អាតសម្រាប់ឆ្នាំសិក្សាថ្មី។',
      gallery: [
        'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3738139/pexels-photo-3738139.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 2,
      title: 'កម្មវិធីកាត់សក់ចូលឆ្នាំ ២០២៤',
      date: '២០២៤-០៤-០៨',
      location: 'ស៊ីហនុ',
      participants: 200,
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'កម្មវិធីពិសេសក្នុងឱកាសបុណ្យចូលឆ្នាំខ្មែរ ដើម្បីជួយសមាជិកសហគមន៍មានរូបរាងស្រស់ស្អាតចូលបុណ្យ។',
      gallery: [
        'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3738139/pexels-photo-3738139.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 3,
      title: 'កម្មវិធីកាត់សក់សម្រាប់សិស្ស',
      date: '២០២៣-១២-១០',
      location: 'បាត់ដំបង',
      participants: 120,
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'កម្មវិធីកាត់សក់ឥតគិតថ្លៃសម្រាប់សិស្សនិស្សិតក្រីក្រ ក្នុងគោលដៅលើកកម្ពស់ទំនុកចិត្តខ្លួនឯង។',
      gallery: [
        'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3738139/pexels-photo-3738139.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  ];

  const stats = [
    {
      icon: Scissors,
      label: 'កម្មវិធីកាត់សក់',
      value: '15+',
      description: 'កម្មវិធីបានរៀបចំ'
    },
    {
      icon: Users,
      label: 'អ្នកចូលរួម',
      value: '800+',
      description: 'នាក់បានទទួលការកាត់សក់'
    },
    {
      icon: MapPin,
      label: 'ទីតាំង',
      value: '8+',
      description: 'ខេត្តដែលបានធ្វើកម្មវិធី'
    },
    {
      icon: Calendar,
      label: 'រយៈពេល',
      value: '2+',
      description: 'ឆ្នាំនៃការបម្រើ'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              គម្រោង<span className="text-emerald-600">កាត់សក់</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              កម្មវិធីកាត់សក់ឥតគិតថ្លៃ ដើម្បីបម្រើសហគមន៍ និងលើកកម្ពស់ទំនុកចិត្តខ្លួនឯង
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-emerald-600 mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              កម្មវិធីកាត់សក់សំខាន់ៗ
            </h2>
            <p className="text-xl text-gray-600">
              រូបភាព និងព័ត៌មានលម្អិតអំពីកម្មវិធីកាត់សក់របស់យើង
            </p>
          </div>

          <div className="space-y-16">
            {haircutProjects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="card p-8">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={18} className="mr-2 text-emerald-600" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-2 text-emerald-600" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users size={18} className="mr-2 text-emerald-600" />
                        <span>{project.participants} អ្នកចូលរួម</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {project.description}
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-lg">
                      <p className="text-emerald-800 font-medium">
                        បានបម្រើអ្នកចូលរួម {project.participants} នាក់ ដោយឥតគិតថ្លៃ
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Gallery */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </div>
                    {project.gallery.slice(1).map((image, imgIndex) => (
                      <div key={imgIndex}>
                        <img
                          src={image}
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            ចង់ចូលរួមកម្មវិធីកាត់សក់?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            ទំនាក់ទំនងយើងដើម្បីចុះឈ្មោះ ឬសុំព័ត៌មានបន្ថែម
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary bg-white text-emerald-600 hover:bg-gray-100">
              ចុះឈ្មោះចូលរួម
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              ទំនាក់ទំនងយើង
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectHighlightsPage;