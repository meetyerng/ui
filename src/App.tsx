import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StructurePage from './pages/StructurePage';
import NewsEventsPage from './pages/NewsEventsPage';
import VideoGalleryPage from './pages/VideoGalleryPage';
import ProjectHighlightsPage from './pages/ProjectHighlightsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/structure" element={<StructurePage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/videos" element={<VideoGalleryPage />} />
            <Route path="/projects" element={<ProjectHighlightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;