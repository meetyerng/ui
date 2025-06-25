import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Tag, ArrowRight, Filter, Search } from 'lucide-react';

const NewsEventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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
  }, [selectedFilter]);

  const newsEvents = [
    {
      id: 1,
      title: 'កម្មវិធីបរិច្ចាគសៀវភៅសម្រាប់យុវជន',
      excerpt: 'យើងបានរៀបចំកម្មវិធីបរិច្ចាគសៀវភៅជាង ១០០០ ក្បាល ដល់យុវជនក្នុងតំបន់ជនបទ...',
      date: '២០២៤-០៣-១៥',
      category: 'education',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'ពិធីបុណ្យចូលឆ្នាំខ្មែរ ២០២៤',
      excerpt: 'ការរៀបចំពិធីបុណ្យចូលឆ្នាំខ្មែរ ដើម្បីអភិរក្សប្រពៃណីវប្បធម៌ខ្មែរ...',
      date: '២០២៤-០៤-១៣',
      category: 'culture',
      image: 'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'ការប្រកួតកីឡាប្រពៃណីខ្មែរ',
      excerpt: 'ការរៀបចំការប្រកួតកីឡាប្រពៃណីខ្មែរ ដូចជា បាល់ទាត់ទឹក គុនខ្មែរ និងល្បែងប្រពៃណីផ្សេងៗ...',
      date: '២០២៤-០២-២០',
      category: 'sports',
      image: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'វគ្គបណ្តុះបណ្តាលជំនាញបច្ចេកទេស',
      excerpt: 'បើកវគ្គបណ្តុះបណ្តាលជំនាញបច្ចេកទេសកុំព្យូទ័រ សម្រាប់យុវជនក្រីក្រ...',
      date: '២០២៤-០១-១០',
      category: 'education',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'ពិធីបុណ្យកឋិន ២០២៣',
      excerpt: 'ការចូលរួមពិធីបុណ្យកឋិននៅវត្តជាតិ ដើម្បីបុណ្យកុសលនិងការអភិរក្សធម៌...',
      date: '២០២៣-១០-២៨',
      category: 'culture',
      image: 'https://images.pexels.com/photos/5273907/pexels-photo-5273907.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'កម្មវិធីចុះជួយសហគមន៍',
      excerpt: 'ការចុះជួយសហគមន៍នៅតំបន់ទន្លេបាសាក់ ដើម្បីចែកជំនួយសម្ភារៈរបស់ប្រើប្រាស់...',
      date: '២០២៣-១២-០៥',
      category: 'community',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = [
    { key: 'all', label: 'ទាំងអស់', count: newsEvents.length },
    { key: 'education', label: 'ការអប់រំ', count: newsEvents.filter(item => item.category === 'education').length },
    { key: 'culture', label: 'វប្បធម៌', count: newsEvents.filter(item => item.category === 'culture').length },
    { key: 'sports', label: 'កីឡា', count: newsEvents.filter(item => item.category === 'sports').length },
    { key: 'community', label: 'សហគមន៍', count: newsEvents.filter(item => item.category === 'community').length }
  ];

  const filteredEvents = newsEvents.filter(event => {
    const matchesFilter = selectedFilter === 'all' || event.category === selectedFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      education: 'bg-blue-100 text-blue-800 border-blue-200',
      culture: 'bg-purple-100 text-purple-800 border-purple-200',
      sports: 'bg-green-100 text-green-800 border-green-200',
      community: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      education: 'ការអប់រំ',
      culture: 'វប្បធម៌',
      sports: 'កីឡា',
      community: 'សហគមន៍'
    };
    return labels[category as keyof typeof labels] || category;
  };

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
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8 fade-in">
              ព័ត៌មាន & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">ព្រឹត្តិការណ៍</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed fade-in" style={{ animationDelay: '300ms' }}>
              តាមដានព័ត៌មានថ្មីៗ និងកម្មវិធីរបស់សមាគម
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-8 bg-white border-b shadow-sm sticky top-20 z-40 backdrop-blur-md">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="ស្វែងរកព័ត៌មាន..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter size={20} className="text-gray-600 mr-2" />
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedFilter(category.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedFilter === category.key
                      ? 'bg-emerald-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Grid */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
        
        <div className="container-max relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <article 
                key={event.id} 
                className={`card overflow-hidden group ${
                  event.featured ? 'md:col-span-2 lg:col-span-2' : ''
                } scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      event.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(event.category)} backdrop-blur-sm`}>
                      <Tag size={12} className="inline mr-1" />
                      {getCategoryLabel(event.category)}
                    </span>
                  </div>
                  
                  {event.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-pulse">
                        សំខាន់
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={16} className="mr-2 text-emerald-600" />
                    <span>{event.date}</span>
                  </div>
                  
                  <h2 className={`font-serif font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300 ${
                    event.featured ? 'text-2xl' : 'text-xl'
                  }`}>
                    {event.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.excerpt}
                  </p>
                  
                  <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium group/btn transition-all duration-300">
                    អានបន្ថែម
                    <ArrowRight 
                      size={16} 
                      className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" 
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-16 fade-in">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <p className="text-xl text-gray-600 mb-2">មិនមានព័ត៌មានក្នុងការស្វែងរកនេះទេ</p>
              <p className="text-gray-500">សូមព្យាយាមប្រើពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសប្រភេទផ្សេង</p>
            </div>
          )}
        </div>
      </section>

      {/* Load More Section */}
      {filteredEvents.length > 0 && (
        <section className="py-16 bg-white text-center">
          <button className="btn-primary text-lg px-8 py-4 group">
            មើលបន្ថែម
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </section>
      )}
    </div>
  );
};

export default NewsEventsPage;