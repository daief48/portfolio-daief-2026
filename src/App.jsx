import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import Stats from './components/Stats';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TechArsenal from './components/TechArsenal';
import FAQ from './components/FAQ';
import References from './components/References';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Reveal from './components/Reveal';
import Parallax from './components/Parallax';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'ghost';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'zen' ? 'ghost' : 'zen');
  };

  return (
    <div className={`app ${theme}-theme`}>
      <CustomCursor />
      <BackgroundEffects theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <section id="hero">
          <Hero theme={theme} />
        </section>

        <Stats theme={theme} />

        <section id="about" className="section-padding">
          <Parallax offset={30}>
            <About theme={theme} />
          </Parallax>
        </section>

        <section id="services" className="section-padding">
          <Services theme={theme} />
        </section>

        <section id="skills" className="section-padding">
          <Skills theme={theme} />
        </section>

        <section id="experience" className="section-padding">
          <Experience theme={theme} />
        </section>

        <TechArsenal theme={theme} />

        <section id="projects" className="section-padding">
          <Projects theme={theme} />
        </section>

        <section id="testimonials" className="section-padding">
          <Testimonials theme={theme} />
        </section>

        <section id="references" className="section-padding">
          <References theme={theme} />
        </section>

        <section id="faq" className="section-padding">
          <FAQ theme={theme} />
        </section>

        <section id="contact" className="section-padding">
          <Reveal width="100%">
            <Contact theme={theme} />
          </Reveal>
        </section>
      </main>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
