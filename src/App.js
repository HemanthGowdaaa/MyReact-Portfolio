import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop/BackToTop';
import './App.css';
import Home from './components/home/Home';
// import Certificate from '/Users/hemanth/Desktop/react-portfolio/src/pages/Certifications/Certifications'; // Adjust path as necessary
import Certificate from '../src/pages/Certifications/Certifications';

import Header from './components/header/Header';

import ContactSection from './pages/ContactSection/ContactSection1';
import Footer from './components/footer/Footer';
import ProjectGallery from './pages/projectGallery/ProjectGallery';
// import Experience from './components/ExperienceSection/Experience';

import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      
      <Router>
      
      <Header className="Header" />
      <BackToTop />
      <Routes>
      
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Education" element={<Certificate />} />
                
                <Route path="/Projects" element={<ProjectGallery />} /> 
                <Route path="/Contact" element={<ContactSection />} /> 
                <Route path="/Experience" element={<Experience />}/>
             
      </Routes>
      <Footer/>
      </Router>
            
            
    </div>
  );
}

export default App;





        

