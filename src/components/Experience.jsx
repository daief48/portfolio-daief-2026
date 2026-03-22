import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ theme }) => {
    const experiences = [
        {
            role: 'Senior Developer',
            company: 'Rebel IT Center',
            period: 'Jan 2024 – Present',
            description: 'Led full-stack development, building scalable Laravel backends and dynamic frontends with Vue.js, React.js, and Next.js. Collaborated on UI/UX improvements and ensured effective client communication.'
        },
        {
            role: 'Junior Web Developer',
            company: 'Golden Harvest Info Tech',
            period: 'Jan 2023 – Dec 2023',
            description: 'Developed full-stack Laravel and Vue.js applications, participated in architecture and feature planning, ensured clean, maintainable code, and maintained effective client communication.'
        }
    ];

    return (
        <div className="experience-section container">
            <h2 className="section-title text-center">Work Experience</h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : (index % 2 === 0 ? -50 : 50), y: window.innerWidth < 768 ? 20 : 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="timeline-content ink-border glassmorphism">
                            <span className="period serif">{exp.period}</span>
                            <h3 className="role serif">{exp.role}</h3>
                            <h4 className="company">{exp.company}</h4>
                            <p className="description">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
