import React from 'react';
import { motion } from 'framer-motion';
import { ScrollIndicator } from './ScrollIndicator';

export function AboutSection() {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const words = [
    "Diploma in Full Stack Software Development",
    "(Advanced Front End)",
    "– credit-rated at level 8 (60 SCQF credit points)",
    "by the University of the West of Scotland.",
    "Experienced in content moderation,",
    "policy implementation, and quality assurance,",
    "with advanced technical skills",
    "(HTML, CSS, JavaScript, Python, Django, React, PostgreSQL)",
    "and proven leadership in cross-functional environments.",
    "Bilingual in Brazilian Portuguese and English."
  ];

  return (
    <section id="about" className="snap-section min-h-screen flex items-center bg-white text-black relative">
      <div className="container mx-auto px-6 py-16 flex-grow flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-center">
            {/* Profile Image Column */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 1.5 }}
                className="relative z-10"
              >
                <img
                  src="/README/media/profile.jfif"
                  alt="Profile"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-2xl mx-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -left-4 w-full h-full border-2 border-black/10 rounded-2xl -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black/10 rounded-2xl -z-10"
              />
            </div>

            {/* Text Content Column */}
            <div className="space-y-6">
              {/* <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight mb-8"
              >
                About Me
              </motion.h2> */}
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                {words.map((word, index) => (
                  <motion.p
                    key={index}
                    variants={textAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <span className="relative z-10">{word}</span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5 origin-left"
                    />
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ScrollIndicator href="#skills" isDark={false} />
    </section>
  );
}