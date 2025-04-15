import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Check user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <AnimatePresence>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;