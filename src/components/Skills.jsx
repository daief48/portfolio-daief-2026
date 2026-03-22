import React from 'react';
import { motion } from 'framer-motion';
import { Database, Wrench, Cpu, Layers } from 'lucide-react';

const Skills = ({ theme }) => {
  const skillCategories = [
    {
      title: 'Core Stack',
      icon: <Layers size={24} />,
      skills: [
        { name: 'PHP / Laravel', level: 95 },
        { name: 'JavaScript / React', level: 90 },
        { name: 'Python', level: 75 }
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: <Database size={24} />,
      skills: [
        { name: 'Vue.js / Next.js', level: 90 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'MySQL', level: 90 }
      ]
    },
    {
      title: 'Other Skills',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'Git / Version Control', level: 95 },
        { name: 'SEO Optimization', level: 85 },
        { name: 'Scalability / APIs', level: 95 }
      ]
    }
  ];

  return (
    <div className="skills-section container">
      <div className="skills-intro text-center">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle serif">Tools and technologies I use to build digital products.</p>
      </div>

      <div className="categories-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1, duration: 0.6 }}
            className="skill-category glassmorphism ink-border"
          >
            <div className="category-header">
              <div className="category-icon-wrapper">{category.icon}</div>
              <h3 className="category-title serif">{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.4 + (skillIndex * 0.05) }}
                      className="skill-progress-fill"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
