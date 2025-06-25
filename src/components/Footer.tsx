import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold">សមាគម</h3>
                <p className="text-sm text-gray-400">ធ្វើការជាមួយសហគមន៍</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              យើងប្តេជ្ញាបម្រើសហគមន៍ខ្មែរនិងអភិវឌ្ឍន៍វប្បធម៌ និងប្រពៃណីខ្មែរ។
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">តំណភ្ជាប់លឿន</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">អំពីយើង</Link></li>
              <li><Link to="/structure" className="text-gray-400 hover:text-emerald-400 transition-colors">រចនាសម្ព័ន្ធ</Link></li>
              <li><Link to="/news-events" className="text-gray-400 hover:text-emerald-400 transition-colors">ព័ត៌មាន & ព្រឹត្តិការណ៍</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-emerald-400 transition-colors">គម្រោងសំខាន់</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ព័ត៌មានទំនាក់ទំនង</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-gray-400 text-sm">ភ្នំពេញ, កម្ពុជា</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-gray-400 text-sm">+855 xx xxx xxx</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-gray-400 text-sm">info@mettyeung27.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">តាមដានយើង</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">តាមដានព័ត៌មានថ្មីៗ និងកម្មវិធីរបស់យើង</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 សមាគម. រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;