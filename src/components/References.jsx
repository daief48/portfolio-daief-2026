import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Phone } from 'lucide-react';

const References = ({ theme }) => {
    const refs = [
        {
            name: 'MD Ratul Hasan',
            title: 'CEO, Rebel IT Firm',
            phone: '+880 1581-816609'
        },
        {
            name: 'Raju Ahmmed',
            title: 'Engineering Manager, Rebel IT Firm',
            phone: '+880 1716-269561'
        }
    ];

    return (
        <section className="references-section container" id="references">
            <div className="section-intro text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">References</h2>
                    <p className="section-subtitle serif">
                        Professional references from people I've worked with.
                    </p>
                </motion.div>
            </div>

            <div className="stats-grid">
                {refs.map((ref, index) => (
                    <motion.div
                        key={ref.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="stat-card"
                    >
                        <div className="service-icon-box" style={{ margin: '0 auto 1.5rem' }}>
                            <UserCheck size={24} />
                        </div>
                        <h4 className="author-name-modern">{ref.name}</h4>
                        <p className="author-role-modern" style={{ fontSize: '0.7rem', marginBottom: '1rem' }}>{ref.title}</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: 0.8 }}>
                            <Phone size={14} color="var(--accent)" />
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{ref.phone}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default References;
