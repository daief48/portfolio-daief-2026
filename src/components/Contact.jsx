import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Github } from 'lucide-react';

const Contact = ({ theme }) => {
    return (
        <section className="contact-section container" id="contact">
            <div className="section-intro text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle serif">
                        Have a project in mind? Let's talk and build something great together.
                    </p>
                </motion.div>
            </div>

            <div className="contact-grid">
                <motion.div
                    initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : -50, y: window.innerWidth < 768 ? 20 : 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="contact-info-card"
                >
                    <h3 className="project-title-modern">Contact Information</h3>
                    <p className="project-desc-modern">
                        Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="contact-methods">
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="method-modern"
                        >
                            <div className="method-icon-box">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="method-label">Email</p>
                                <p className="method-value">daief20103048@gmail.com</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="method-modern"
                        >
                            <div className="method-icon-box">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="method-label">Phone</p>
                                <p className="method-value">+880 1924529986</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="method-modern"
                        >
                            <div className="method-icon-box">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="method-label">Location</p>
                                <p className="method-value">Uttara Sector 10, Road 12, House 98, Dhaka</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : 50, y: window.innerWidth < 768 ? 20 : 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                    className="contact-form-card"
                >
                    <form className="contact-form">
                        <div className="form-group-modern">
                            <label className="form-label-modern">Full Name</label>
                            <input type="text" placeholder="Your Name" className="form-input-modern" />
                        </div>
                        <div className="form-group-modern">
                            <label className="form-label-modern">Email Address</label>
                            <input type="email" placeholder="your@email.com" className="form-input-modern" />
                        </div>
                        <div className="form-group-modern">
                            <label className="form-label-modern">Message</label>
                            <textarea placeholder="How can I help you?" className="form-input-modern" rows="5"></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className="submit-btn-modern"
                        >
                            Send Message <Send size={18} />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
