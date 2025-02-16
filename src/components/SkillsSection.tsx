import React from 'react';
import { motion } from 'framer-motion';
import { SkillBadge } from './SkillBadge';
import { ScrollIndicator } from './ScrollIndicator';

export function SkillsSection() {
  // Animation stagger effect for skills
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    "React", "TypeScript", "Python", "Node.js", "Next.js", "TailwindCSS", 
    "PostgreSQL", "Software Testing", "SEO", "Advanced Front End"
  ];

  return (
    <section id="skills" className="snap-section min-h-screen relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 tracking-wider"
          >
            EXPERTISE
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-16"
          >
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </motion.div>
        </div>
      </div>
      <ScrollIndicator href="#projects" isDark={true} />
    </section>
  );
}