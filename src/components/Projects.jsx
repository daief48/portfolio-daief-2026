import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, ShieldCheck, Code2, Globe, BookOpen } from 'lucide-react';

const Projects = ({ theme }) => {
    const projects = [
        {
            title: 'Quran Lens',
            category: 'Sacred EdTech',
            desc: 'A high-end, spiritually immersive web application designed for modern reflection. Features cinematic aesthetics, Mashrabiya-inspired design, and sacred typography for a focused reading experience.',
            url: 'https://gregarious-gumption-5095c8.netlify.app/',
            tech: ['Next.js 15', 'Node.js', 'MongoDB', 'Framer Motion'],
            image: '/projects/quran-lens.png',
            icon: <BookOpen size={20} />
        },
        {
            title: 'DashWheelz',
            category: 'Automotive FinTech',
            desc: 'A comprehensive automotive marketplace engineered with rent-to-own capabilities. Developed secure online booking infrastructure, multi-channel OTP verification, and dynamic financial payment synchronization.',
            url: 'https://dashwheelz.com',
            tech: ['Laravel', 'MySQL', 'OTP Sync', 'Tailwind'],
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icon: <Zap size={20} />
        },
        {
            title: 'AffilSpark',
            category: 'AdTech Platform',
            desc: 'High-performance affiliate marketing hub designed for enterprise-level vendor-affiliate synergy. Features real-time conversion tracking, automated revenue split logic, and comprehensive campaign management analytics.',
            url: 'https://affilspark.com',
            tech: ['Laravel', 'React', 'Redis', 'Analytics'],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icon: <ShieldCheck size={20} />
        },
        {
            title: 'Sakura Power',
            category: 'Enterprise eCommerce',
            desc: 'Sophisticated multi-tier commerce architecture built for high-velocity retail. Architected a scalable Laravel API infrastructure integrated with a headless Next.js storefront and a robust React management suite.',
            url: 'https://sakurapower.com',
            tech: ['Laravel', 'React.js', 'Next.js', 'Tailwind'],
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icon: <Code2 size={20} />
        },
        {
            title: 'Dolbear',
            category: 'Digital Retail',
            desc: 'Premium tech-lifestyle commerce platform engineered for maximum performance and UX. Implemented specialized catalog categorization and optimized database indexing for sub-second catalog navigation.',
            url: 'https://dolbear.com.bd',
            tech: ['Laravel', 'React.js', 'Next.js', 'MySQL'],
            image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icon: <Globe size={20} />
        },
        {
            title: 'TaskFino',
            category: 'Enterprise ERP Suite',
            desc: 'Comprehensive ERP solution facilitating seamless organizational digital transformation. Deployed integrated modules for HR/Payroll automation, CRM analytics, and cross-departmental task synchronization.',
            url: 'https://taskfino.com',
            tech: ['Laravel', 'Vue.js', 'HRMS', 'ERP'],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icon: <Zap size={20} />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    };

    return (
        <section className="projects-section container" id="projects">
            <div className="section-intro text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle serif">
                        Real-world applications I've built and deployed.
                    </p>
                </motion.div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="projects-grid"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        variants={cardVariants}
                        className="project-card-modern"
                    >
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image-modern" />
                            <div className="project-overlay-modern"></div>
                        </div>

                        <div className="project-content-modern">
                            <div className="project-header-modern">
                                <div>
                                    <span className="project-category-modern">{project.category}</span>
                                    <h3 className="project-title-modern">{project.title}</h3>
                                </div>
                                <div className="project-icon-box">
                                    {project.icon}
                                </div>
                            </div>

                            <p className="project-desc-modern">{project.desc}</p>

                            <div className="project-tech-modern">
                                {project.tech.map(t => (
                                    <span key={t} className="tech-tag-modern">{t}</span>
                                ))}
                            </div>

                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-modern"
                            >
                                View Project <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
