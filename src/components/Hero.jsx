import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import heroProfileImg from '../assets/hero-profile.jpg';

/* ── elegant split-text animation (adapted for bento) ── */
const StaggeredText = ({ text, className, delay = 0 }) => {
  const words = text.split(' ');
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } }
      }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingRight: '0.2em' }}>
          <motion.span
            style={{ display: 'inline-block', transformOrigin: 'bottom left' }}
            variants={{
              hidden: { y: "100%", rotateZ: 4, opacity: 0, filter: 'blur(10px)' },
              visible: {
                y: "0%",
                rotateZ: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
              }
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

const Hero = ({ theme }) => {
  const containerRef = useRef(null);

  // Dynamic roles spinner
  const roles = [
    "Full-Stack Developer",
    "Laravel Expert",
    "React Developer",
    "Vue.js Developer",
    "Next.js Specialist"
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bentoVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="bento-hero-section" ref={containerRef}>

      {/* ── Background Ambient ── */}
      <div className="bento-ambient-glow"></div>

      <div className="container bento-grid">

        {/* TILE 1: Main Intro (8 cols, 2 rows) */}
        <motion.div
          className="bento-item bento-intro"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={bentoVariants}
        >
          <div className="bento-intro-content">
            <h1 className="bento-title">
              <span className="bento-title-row">
                <StaggeredText text="JUBAIR ISLAM" className="bento-title-main" delay={0.2} />
              </span>
              <span className="bento-title-row" style={{ marginTop: '12px' }}>
                <StaggeredText text="DAIEF" className="bento-title-accent" delay={0.4} />
              </span>
            </h1>

            <div className="bento-role-block">
              <div className="bento-role-line"></div>
              <div className="bento-spinner-container">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentRole}
                    className="bento-role-text"
                    initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {roles[currentRole]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TILE 2: Portrait + Deconstructed Glass UI (4 cols, 2 rows) */}
        <motion.div
          className="bento-item bento-image"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={bentoVariants}
          style={{ overflow: 'visible', zIndex: 10 }}
        >
          {/* Main Portrait */}
          <div className="portrait-container">
            <img src={heroProfileImg} alt="Jubair Islam Daief" className="bento-portrait" />
            <div className="bento-image-overlay"></div>
          </div>

          {/* ── Floating UI Component 1: Tech Stack Radar ── */}
          <motion.div
            className="modern-ui-card top-left-card"
            animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          >
            <div className="ui-card-header">
              <div className="pulse-dot-green"></div>
              <span>Core Stack</span>
            </div>
            <div className="ui-card-body">
              <div className="tech-row">
                <span className="tech-label"><span className="tech-icon">🐘</span> Laravel</span>
                <div className="tech-bar-bg"><div className="tech-bar-fill" style={{ width: '95%' }}></div></div>
              </div>
              <div className="tech-row">
                <span className="tech-label"><span className="tech-icon">⚛️</span> React</span>
                <div className="tech-bar-bg"><div className="tech-bar-fill" style={{ width: '90%' }}></div></div>
              </div>
              <div className="tech-row">
                <span className="tech-label"><span className="tech-icon">▲</span> Next.js</span>
                <div className="tech-bar-bg"><div className="tech-bar-fill" style={{ width: '85%' }}></div></div>
              </div>
              <div className="tech-row">
                <span className="tech-label"><span className="tech-icon">🟢</span> Vue.js</span>
                <div className="tech-bar-bg"><div className="tech-bar-fill" style={{ width: '80%' }}></div></div>
              </div>
            </div>
          </motion.div>

          {/* ── Floating UI Component 2: Quick Badge ── */}
          <motion.div
            className="modern-ui-badge top-right-badge"
            animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
          >
            <span className="badge-icon">🔥</span>
            <span className="badge-text">3+ Yrs Exp</span>
          </motion.div>

          {/* ── Floating UI Component 3: Code snippet ── */}
          <motion.div
            className="modern-ui-card bottom-right-card"
            animate={{ y: [-10, 10, -10], rotate: [1, -1, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
          >
            <div className="ui-code-snippet">
              <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}
              <br />&nbsp;&nbsp;focus: <span className="code-string">'Full-Stack'</span>,
              <br />&nbsp;&nbsp;passionate: <span className="code-keyword">true</span>
              <br />{'}'};
            </div>
          </motion.div>
        </motion.div>

        {/* TILE 3: Status / Available (4 cols, 1 row) */}
        <motion.div
          className="bento-item bento-status"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={bentoVariants}
        >
          <div className="bento-pulse-ring">
            <div className="bento-pulse-dot"></div>
          </div>
          <div>
            <p className="bento-status-main">Available for work</p>
            <p className="bento-status-sub">Based in Sylhet, BD</p>
          </div>
        </motion.div>

        {/* TILE 4: Tech Marquee (4 cols, 1 row) */}
        <motion.div
          className="bento-item bento-tech"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={bentoVariants}
        >
          <div className="bento-mini-marquee">
            <div className="bento-marquee-track">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bento-marquee-text">
                  LARAVEL <span className="m-dot">•</span> REACT <span className="m-dot">•</span> VUE <span className="m-dot">•</span> NEXT.JS <span className="m-dot">•</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TILE 5: CTA (4 cols, 1 row) */}
        <motion.div
          className="bento-item bento-cta"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={bentoVariants}
        >
          <Magnetic>
            <a href="#projects" className="bento-cta-btn">
              <span>View Projects</span>
              <div className="bento-cta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </a>
          </Magnetic>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
