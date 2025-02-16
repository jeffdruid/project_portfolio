import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ScrollIndicator } from './ScrollIndicator';

export function ProjectsSection() {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      title: "Social Blog Platform",
      description: "A full-featured blog platform with social sharing features using Django and React",
      image: "https://github.com/jeffdruid/how-are-you-really/raw/master/README/images/reponsive.png",
      githubUrl: "https://github.com/jeffdruid/how-are-you-really",
      liveUrl: "https://how-are-you-really.web.app/"
    },
    {
      title: "Event Planner App",
      description: "A collaborative event management application with real-time updates",
      image: "https://github.com/jeffdruid/planpal/raw/main/README/images/dashboard.png",
      githubUrl: "https://github.com/jeffdruid/planpal",
      liveUrl: "https://planpal-1fe5e3919654.herokuapp.com/"
    },
    {
      title: "Weather App",
      description: "A beautiful weather dashboard with data visualization",
      image: "https://github.com/jeffdruid/weather-now/raw/main/assets/media/ui-intro.gif",
      githubUrl: "https://github.com/jeffdruid/weather-now",
      liveUrl: "https://jeffdruid.github.io/weather-now/"
    },
    {
      title: "Drinks Menu App",
      description: "Digital drinks menu with QR code scanning for contactless ordering",
      image: "https://github.com/jeffdruid/fitzgeralds-menu/raw/main/assets/media/resp-menu-page.PNG",
      githubUrl: "https://github.com/jeffdruid/fitzgeralds-menu",
      liveUrl: "https://jeffdruid.github.io/fitzgeralds-menu/index.html"
    },
    {
      title: "Link-Validator Tool",
      description: "Python application that allows users to scrape a webpage and validate all the links found within it.",
      image: "https://github.com/jeffdruid/link-validator/raw/main/assets/media/feat-menu.png",
      githubUrl: "https://github.com/jeffdruid/link-validator",
      liveUrl: "https://link-validator-b9009544d013.herokuapp.com/"
    },
    {
      title: "DRF-API",
      description: "API that handles content moderation, including flagging and checking content for specific trigger words.",
      image: "https://github.com/jeffdruid/drf-api/raw/main/README/images/main.png",
      githubUrl: "https://github.com/jeffdruid/drf-api",
      liveUrl: "https://drf-api-jeff-00b8a22f06d7.herokuapp.com/api/"
    }
  ];

  return (
    <section id="projects" className="snap-section min-h-screen flex items-center bg-white text-black relative">
      <div className="container mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 tracking-wider"
        >
          SELECTED WORK
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
      <ScrollIndicator href="#contact" isDark={false} />
    </section>
  );
}