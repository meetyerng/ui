import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Crown, Shield, Star } from 'lucide-react';

const StructurePage = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const structure = [
    {
      title: 'គណៈកម្មការប្រតិបត្តិ',
      icon: Crown,
      color: 'from-emerald-500 to-blue-500',
      members: [
        { name: 'លោក ចាន់ សុភាព', role: 'ប្រធានសមាគម', photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'លោកស្រី លី សុវណ្ណា', role: 'អនុប្រធាន', photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'លោក ភី រតន៍', role: 'អគ្គលេខាធិការ', photo: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'លោកស្រី ណុប សុខមាលា', role: 'រតនាគារ', photo: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=300' }
      ]
    },
    {
      title: 'ក្រុមប្រឹក្សា',
      icon: Shield,
      color: 'from-blue-500 to-purple-500',
      members: [
        { name: 'លោក ហ៊ុន វិចិត្រ', role: 'ប្រធានក្រុមប្រឹក្សា', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'លោកស្រី ទេព សុវត្ថិ', role: 'ទីប្រឹក្សាជាន់ខ្ពស់', photo: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'លោក សុខ ព្រហ្មចារី', role: 'ទីប្រឹក្សាផ្នែកច្បាប់', photo: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300' }
      ]
    },
    {
      title: 'គណៈកម្មការអប់រំ',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      members: [
        { name: 'លោកស្រី ជុំ សុផល', role: 'ប្រធានកម្មការអប់រំ', photo: 'https://images.pexels.com/photos/3760736/pexels-photo-3760736.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'លោក វង្ស ប្រាជ្ញ', role: 'អនុប្រធានកម្មការ', photo: 'https://images.pexels.com/photos/2182968/pexels-photo-2182968.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'លោកស្រី ម៉ម រស្មី', role: 'អ្នកសម្របសម្រួលកម្មវិធី', photo: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=300' }
      ]
    },
    {
      title: 'គណៈកម្មការវប្បធម៌',
      icon: Users,
      color: 'from-pink-500 to-red-500',
      members: [
        { name: 'លោក ខេម បុណ្យ', role: 'ប្រធានកម្មការវប្បធម៌', photo: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'លោកស្រី ឈុន មុនីរ័ត្ន', role: 'អ្នកទទួលបន្ទុកកម្មវិធី', photo: 'https://images.pexels.com/photos/3764959/pexels-photo-3764959.jpeg?auto=compress&cs=tinysrgb&w=300' }
      ]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              រចនាសម្ព័ន្ធ<span className="text-emerald-600">សមាគម</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              ស្វែងយល់អំពីអ្នកដឹកនាំ និងរចនាសម្ព័ន្ធសំខាន់ៗរបស់សមាគមយើង
            </p>
          </div>
        </div>
      </section>

      {/* Structure Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {structure.map((group, index) => (
              <div key={index} className="card overflow-hidden">
                {/* Card Header */}
                <div 
                  className={`bg-gradient-to-r ${group.color} p-6 cursor-pointer`}
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <group.icon className="text-white" size={24} />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-white">
                        {group.title}
                      </h2>
                    </div>
                    <div className="text-white">
                      {expandedCard === index ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>
                  </div>
                  <p className="text-white/90 mt-2">
                    {group.members.length} សមាជិក
                  </p>
                </div>

                {/* Card Content */}
                <div className={`transition-all duration-500 ease-in-out ${
                  expandedCard === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {group.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover shadow-md"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {member.name}
                            </h3>
                            <p className="text-emerald-600 font-medium">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              តារាងរចនាសម្ព័ន្ធ
            </h2>
            <p className="text-xl text-gray-600">
              រចនាសម្ព័ន្ធសංస្ថាកម្មរបស់សមាគម
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Top Level */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold">គណៈកម្មការប្រតិបត្តិ</h3>
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
            </div>

            {/* Second Level */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md">
                  <h4 className="font-semibold">ក្រុមប្រឹក្សា</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md">
                  <h4 className="font-semibold">គណៈកម្មការអប់រំ</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg shadow-md">
                  <h4 className="font-semibold">គណៈកម្មការវប្បធម៌</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StructurePage;