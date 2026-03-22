import React from 'react';
import { motion } from 'framer-motion';

const Stats = ({ theme }) => {
    const stats = [
        { label: 'Projects Completed', value: '30+' },
        { label: 'Years Experience', value: '3+' },
        { label: 'Client Satisfaction', value: '100%' },
        { label: 'Coffee Cups', value: '500+' }
    ];

    return (
        <section className="stats-section container">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="stat-card"
                    >
                        <motion.h3
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                            className="stat-value"
                        >
                            {stat.value}
                        </motion.h3>
                        <p className="stat-label serif">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
