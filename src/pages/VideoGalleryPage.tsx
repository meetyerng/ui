import React, { useState } from 'react';
import { Play, X, Filter } from 'lucide-react';

const VideoGalleryPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videos = [
    {
      id: 1,
      title: 'កម្មវិធីបរិច្ចាគសៀវភៅ ២០២៤',
      thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'education',
      duration: '05:30',
      description: 'កម្មវិធីបរិច្ចាគសៀវភៅដល់សិស្សក្រីក្រនៅតំបន់ជនបទ'
    },
    {
      id: 2,
      title: 'ពិធីបុណ្យចូលឆ្នាំខ្មែរ ២០២៤',
      thumbnail: 'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'culture',
      duration: '12:45',
      description: 'ការរៀបចំពិធីបុណ្យចូលឆ្នាំខ្មែរនៅសមាគម'
    },
    {
      id: 3,
      title: 'ការប្រកួតកីឡាប្រពៃណីខ្មែរ',
      thumbnail: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'sports',
      duration: '08:20',
      description: 'ការប្រកួតកីឡាប្រពៃណីខ្មែរប្រចាំឆ្នាំ'
    },
    {
      id: 4,
      title: 'វគ្គបណ្តុះបណ្តាលជំនាញ',
      thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'education',
      duration: '15:10',
      description: 'វគ្គបណ្តុះបណ្តាលជំនាញកុំព្យូទ័រសម្រាប់យុវជន'
    },
    {
      id: 5,
      title: 'កម្មវិធីជួយសហគមន៍',
      thumbnail: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'community',
      duration: '07:55',
      description: 'កម្មវិធីចុះជួយសហគមន៍ក្រីក្រ'
    },
    {
      id: 6,
      title: 'ពិធីបុណ្យកឋិន ២០២៣',
      thumbnail: 'https://images.pexels.com/photos/5273907/pexels-photo-5273907.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'culture',
      duration: '20:30',
      description: 'ការចូលរួមពិធីបុណ្យកឋិននៅវត្តជាតិ'
    }
  ];

  const categories = [
    { key: 'all', label: 'ទាំងអស់' },
    { key: 'education', label: 'ការអប់រំ' },
    { key: 'culture', label: 'វប្បធម៌' },
    { key: 'sports', label: 'កីឡា' },
    { key: 'community', label: 'សហគមន៍' }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const openVideo = (video: any) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              វីដេអូ<span className="text-emerald-600">សកម្មភាព</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              មើលវីដេអូកម្មវិធី និងសកម្មភាពរបស់សមាគម
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <span className="text-lg font-semibold text-gray-900">ប្រភេទវីដេអូ:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.key
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => openVideo(video)}
                className="card overflow-hidden cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play size={24} className="text-emerald-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">មិនមានវីដេអូក្នុងប្រភេទនេះទេ</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-serif font-bold mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-300">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGalleryPage;