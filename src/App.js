// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/index'; // Adjust the import to use your existing index.js
import './styles/globals.css';
import NewsPage from './pages/news';
import PostPage from './pages/news/post';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import i18n from './i18n';
import Newsletter from './pages/newsletter/newsletter';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/about';
import Celine from './pages/about/celine';
import Esto from './pages/about/esto';
import Lea from './pages/about/lea';
import ProfMirjamPage from './pages/about/mirjam';
import Selin from './pages/about/selin';
import ProjectPage from './pages/project/ProjectPage';
import InterviewDetailsPage from './pages/project/InterviewDetailsPage';
import SurveyDetailsPage from './pages/project/SurveyDetailsPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<PostPage />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/celine" element={<Celine />} />
        <Route path="/about/esto" element={<Esto />} />
        <Route path="/about/lea" element={<Lea />} />
        <Route path="/about/mirjam" element={<ProfMirjamPage />} />
        <Route path="/about/selin" element={<Selin />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/interview-details" element={<InterviewDetailsPage />} />
        <Route path="/project/survey-details" element={<SurveyDetailsPage />} />
        
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
