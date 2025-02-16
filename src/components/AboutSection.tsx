import React from 'react';
import { motion } from 'framer-motion';
import { ScrollIndicator } from './ScrollIndicator';

export function AboutSection() {
  return (
    <section id="about" className="snap-section min-h-screen flex items-center bg-white text-black relative">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <motion.img
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5 }}
            src="https://media.licdn.com/dms/image/v2/D4D35AQGiJQvoD8gGZw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1681381332093?e=1740052800&v=beta&t=djv5NONHOPE-yNq08fpvd7fd-t3rj1T580TK6kSX0FU"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-12 object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl leading-relaxed mb-8 text-center"
          >
            Diploma in Full Stack Software Development (Advanced Front End) – credit-rated at level 8 (60 SCQF credit points) by the University of the West of Scotland. Experienced in content moderation, policy implementation, and quality assurance, with advanced technical skills (HTML, CSS, JavaScript, Python, Django, React, PostgreSQL) and proven leadership in cross-functional environments. Bilingual in Brazilian Portuguese and English.
          </motion.p>
        </motion.div>
      </div>
      <ScrollIndicator href="#skills" isDark={false} />
    </section>
  );
}