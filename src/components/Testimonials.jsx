import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = ({ theme }) => {
    const testimonials = [
        {
            text: "Jubair's attention to detail is truly remarkable. He doesn't just write code; he crafts digital experiences with precision and honor.",
            author: "Sarah Johnson",
            role: "Product Manager @ TechFlow",
            initials: "SJ"
        },
        {
            text: "The speed and performance of our new dashboard are incredible. His expertise in Laravel and React is top-tier.",
            author: "Michael Chen",
            role: "CTO @ DashWheelz",
            initials: "MC"
        },
        {
            text: "A true professional who understands the balance between aesthetics and functionality. Highly recommended for any serious engineering quest.",
            author: "Emma Williams",
            role: "Founder @ AffilSpark",
            initials: "EW"
        }
    ];

    return (
        <section className="testimonials-section container" id="testimonials">
            <div className="section-intro text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Testimonials</h2>
                    <p className="section-subtitle serif">
                        What people say about my work.
                    </p>
                </motion.div>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item.author}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="testimonial-card-modern"
                    >
                        <Quote className="quote-mark" />
                        <p className="testimonial-text-modern serif">"{item.text}"</p>
                        <div className="author-box">
                            <div className="author-avatar-modern">
                                {item.initials}
                            </div>
                            <div className="author-info-modern">
                                <h4 className="author-name-modern">{item.author}</h4>
                                <p className="author-role-modern">{item.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
