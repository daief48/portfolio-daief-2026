import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const Footer = ({ theme }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: 'https://github.com/daief48', label: 'GitHub' },
        { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
        { icon: <Mail size={20} />, href: 'mailto:daief20103048@gmail.com', label: 'Email' },
        { icon: <Twitter size={20} />, href: '#', label: 'Twitter' }
    ];

    return (
        <footer className="modern-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="logo serif"
                        >
                            DAIEF
                        </motion.div>
                        <p className="footer-tagline serif">
                            Building high-quality web applications with precision and modern design standards.
                            Available for new projects and collaborations.
                        </p>
                    </div>

                    <div className="footer-nav">
                        <h4 className="footer-heading">Quick Navigation</h4>
                        <div className="footer-links">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="footer-link">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-connect">
                        <h4 className="footer-heading">Connect With Me</h4>
                        <div className="footer-socials">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                    className="social-icon-btn"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="serif">
                        © {new Date().getFullYear()} Jubair Islam Daief. All rights reserved.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="social-icon-btn"
                        style={{ width: '40px', height: '40px' }}
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
