import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResiliencyIndex from './pages/ResiliencyIndex';
import Resources from './pages/Resources';
import Education from './pages/Education';
import Crowdfunding from './pages/Crowdfunding';
import Community from './pages/Community';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resiliency" element={<ResiliencyIndex />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/education" element={<Education />} />
            <Route path="/crowdfunding" element={<Crowdfunding />} />
            <Route path="/community" element={<Community />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;