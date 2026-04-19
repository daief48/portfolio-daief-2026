import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Layers,
    Database,
    Globe,
    Cpu,
    ShieldCheck,
    Zap,
    Layout,
    Smartphone,
    FileJson,
    Terminal,
    Box
} from 'lucide-react';

const TechArsenal = ({ theme }) => {
    const tools = [
        { name: 'PHP', icon: <Globe size={24} /> },
        { name: 'JavaScript', icon: <FileJson size={24} /> },
        { name: 'Python', icon: <Terminal size={24} /> },
        { name: 'Node.js', icon: <Cpu size={24} /> },
        { name: 'Laravel', icon: <Box size={24} /> },
        { name: 'Vue.js', icon: <Zap size={24} /> },
        { name: 'React.js', icon: <Code2 size={24} /> },
        { name: 'Next.js', icon: <Layers size={24} /> },
        { name: 'Bootstrap', icon: <Layout size={24} /> },
        { name: 'HTML', icon: <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>H</div> },
        { name: 'CSS', icon: <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>C</div> },
        { name: 'MySQL', icon: <Database size={24} /> },
        { name: 'MongoDB', icon: <Database size={24} /> },
        { name: 'Git', icon: <ShieldCheck size={24} /> },
        { name: 'SEO', icon: <Zap size={24} /> }
    ];

    return (
        <section className="tech-arsenal-section container" id="arsenal">
            <div className="section-intro text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">My Tech Stack</h2>
                    <p className="section-subtitle serif">
                        A collection of tools and technologies I use to build projects.
                    </p>
                </motion.div>
            </div>

            <div className="tech-arsenal-grid">
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: (index % 6) * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -10,
                            rotate: 5,
                            transition: { duration: 0.2 }
                        }}
                        className="tech-arsenal-card"
                    >
                        <div className="tech-arsenal-icon">
                            {tool.icon}
                        </div>
                        <span className="tech-arsenal-name">{tool.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechArsenal;
