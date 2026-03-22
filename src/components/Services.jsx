import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Cpu, Globe, Layout, Database } from 'lucide-react';

const Services = ({ theme }) => {
    const services = [
        {
            title: 'Full-Stack Development',
            desc: 'Building robust, scalable backends and pixel-perfect frontends using Laravel, React, and Next.js.',
            icon: <Code2 size={32} />
        },
        {
            title: 'API Architecture',
            desc: 'Designing clean, secure, and performant RESTful & GraphQL APIs for modern web ecosystems.',
            icon: <Database size={32} />
        },
        {
            title: 'UI/UX Engineering',
            desc: 'Crafting seamless digital experiences with smooth micro-interactions and premium glassmorphism designs.',
            icon: <Layout size={32} />
        },
        {
            title: 'Security & DevOps',
            desc: 'Hardening server infrastructure and streamlining deployment pipelines with modern standard practices.',
            icon: <ShieldCheck size={32} />
        }
    ];

    return (
        <section className="services-section container" id="services">
            <div className="section-intro text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">My Services</h2>
                    <p className="section-subtitle serif">
                        What I do best.
                    </p>
                </motion.div>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="service-card-modern"
                    >
                        <div className="service-icon-box">
                            {service.icon}
                        </div>
                        <h3 className="service-title-modern">{service.title}</h3>
                        <p className="service-desc-modern">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
