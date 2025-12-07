// App.jsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactSection from './components/Contact';
import Navbar from './components/Navbar';

import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      {/* Home route */}
      <Route
        path="/"
        element={
          <div className="w-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <ContactSection />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
