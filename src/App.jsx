import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProjectQR from './pages/ProjectQR';
import ProjectVoiceChatbot from './pages/ProjectVoiceChatbot';
import ProjectInstallments from './pages/ProjectInstallments';
import ProjectElectronicsRating from './pages/ProjectElectronicsRating';
import ProjectListAI from './pages/ProjectListAI';
import ProjectListBI from './pages/ProjectListBI';
import ProjectCafeOffers from './pages/ProjectCafeOffers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-on-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/voice-chatbot" element={<ProjectVoiceChatbot />} />
          <Route path="/projects/installments" element={<ProjectInstallments />} />
          <Route path="/projects/electronics-rating" element={<ProjectElectronicsRating />} />
          <Route path="/projects/ai" element={<ProjectListAI />} />
          <Route path="/projects/bi" element={<ProjectListBI />} />
          <Route path="/projects/cafe-offers" element={<ProjectCafeOffers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
