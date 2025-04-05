// App.jsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactSection from './components/Contact'; // inline contact section on homepage
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactPage from './components/ContactPage'; // full contact page (your file)

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
          <div className="w-screen">
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <ContactSection />
            <Footer />
          </div>
        }
      />

      {/* Contact page route */}
      <Route
        path="/contact"
        element={
          <div className="w-screen">
            <Navbar />
            <ContactPage />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
