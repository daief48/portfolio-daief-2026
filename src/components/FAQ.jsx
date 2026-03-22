import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-card ${isOpen ? 'open' : ''}`}>
            <button className="faq-trigger" onClick={onClick}>
                <span className="faq-question-text">{question}</span>
                <ChevronDown className="faq-chevron" size={20} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="faq-collapsible">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = ({ theme }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is your typical project timeline?",
            answer: "Depending on the complexity, a standard landing page takes 1-2 weeks, while a full-scale web application can take 4-8 weeks from start to deployment."
        },
        {
            question: "Do you offer post-deployment support?",
            answer: "Yes, I provide 1 month of dedicated support for every project to ensure a smooth transition and address any initial feedback or bugs."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "My core expertise lies in the Laravel ecosystem (PHP), React/Next.js (JavaScript/TypeScript), and building high-performance SQL databases."
        },
        {
            question: "Are you available for remote work?",
            answer: "Absolutely. I am fully equipped to work with global teams, staying in sync through modern communication tools and agile methodologies."
        }
    ];

    return (
        <section className="faq-section container" id="faq">
            <div className="section-intro text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle serif">
                        Answers to common questions about my services.
                    </p>
                </motion.div>
            </div>

            <div className="faq-stack">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
