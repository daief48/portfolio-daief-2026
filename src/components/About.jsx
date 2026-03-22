import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import aboutProfileImg from '../assets/about-profile.jpg';

const About = ({ theme }) => {
  return (
    <section className="about-section container" id="about">
      <div className="about-grid">
        {/* Left Side: Professional Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="about-image-wrapper"
        >
          <div className="about-image">
            <img
              src={aboutProfileImg}
              alt="Jubair Islam Daief - Professional Portrait"
              className="about-profile-img"
            />
          </div>
        </motion.div>

        {/* Right Side: Professional Story & Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="about-content-wrapper"
        >
          <div className="about-header-main">
            <h2 className="about-main-title">
              Professional <span className="accent-text">Background</span>
            </h2>
            <p className="about-main-desc serif">
              Full-Stack Web Developer with 3+ years of experience in Laravel, Vue.js, React.js, and Next.js. Skilled in building scalable backends, dynamic UIs, and optimizing performance, with strong problem-solving and teamwork abilities.
            </p>
          </div>

          <div className="about-details-grid">
            {/* Contact Details */}
            <div className="about-card-modern col-span-2">
              <span className="card-label">Quick Connect</span>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="icon-circle"><Mail size={16} /></div>
                  <span>daief20103048@gmail.com</span>
                </div>
                <div className="contact-info-item">
                  <div className="icon-circle"><Phone size={16} /></div>
                  <span>01924529986</span>
                </div>
                <div className="contact-info-item">
                  <div className="icon-circle"><MapPin size={16} /></div>
                  <span>Uttara Sector 10, Road 12, Dhaka</span>
                </div>
              </div>
            </div>

            {/* Academic Journey */}
            <div className="about-card-modern col-span-2">
              <span className="card-label">Academic Journey</span>
              <div className="edu-item">
                <h4 className="edu-name">Bachelor of Computer Science & Engineering (CSE)</h4>
                <p className="edu-school-name">International University of Business Agriculture and Technology (IUBAT)</p>
                <div className="edu-pills">
                  <span className="edu-pill">CGPA: 3.65</span>
                  <span className="edu-pill">Graduation: 2024</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="about-card-modern">
              <span className="card-label">Languages</span>
              <div className="about-tags">
                <span className="about-tag">Bangla</span>
                <span className="about-tag">English</span>
                <span className="about-tag">Hindi</span>
              </div>
            </div>

            {/* Beyond Code */}
            <div className="about-card-modern">
              <span className="card-label">Personal Interests</span>
              <div className="about-tags">
                <span className="about-tag">Programming</span>
                <span className="about-tag">Drawing</span>
                <span className="about-tag">Biking</span>
                <span className="about-tag">Gaming</span>
                <span className="about-tag">Traveling</span>
                <span className="about-tag">Reading</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
