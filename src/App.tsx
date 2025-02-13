import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { Navigation } from './components/Navigation';
import { SocialButton } from './components/SocialButton';

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const letterAnimation = {
    initial: { y: 400 },
    animate: { y: 0 },
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialLinks = [
    { href: "https://github.com", icon: <Github size={24} />, label: "GitHub" },
    { href: "https://linkedin.com", icon: <Linkedin size={24} />, label: "LinkedIn" },
    { href: "mailto:john@example.com", icon: <Mail size={24} />, label: "Email" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const ScrollIndicator = ({ href, isDark = true }: { href: string; isDark?: boolean }) => (
    <motion.a
      href={href}
      onClick={(e) => handleScroll(e, href)}
      animate={{
        y: [0, 15, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <ChevronDown size={40} className={isDark ? "text-white/60" : "text-black/60"} />
    </motion.a>
  );

  return (
    <div className="snap-container bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="snap-section h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,1)_100%)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial="initial"
              animate="animate"
              variants={letterAnimation}
              className="text-7xl md:text-9xl font-bold tracking-tighter"
            >
              Jefferson Aguiar
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="text-xl md:text-2xl mb-12 tracking-widest">CREATIVE DEVELOPER</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex justify-center gap-8 mt-12 mb-12"
          >
            {socialLinks.map((link, index) => (
              <SocialButton key={index} {...link} />
            ))}
          </motion.div>
          <ScrollIndicator href="#about" isDark={true} />
        </motion.div>
      </section>

      {/* About Section */}
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

      {/* Skills Section */}
      <section id="skills" className="snap-section min-h-screen flex items-center bg-black relative">
        <div className="container mx-auto px-6 py-24">
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
            className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
          >
            {["React", "TypeScript", "Python", "Node.js", "Next.js", "TailwindCSS", "PostgreSQL", "Software Testing", "SEO", "Advanced Front End"  ].map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </motion.div>
        </div>
        <ScrollIndicator href="#projects" isDark={true} />
      </section>

      {/* Projects Section */}
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
            {[
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
                // image: "https://github.com/jeffdruid/planpal/raw/main/README/images/feat-tooltip.gif",
                image: "https://github.com/jeffdruid/planpal/raw/main/README/images/dashboard.png",
                githubUrl: "https://github.com/jeffdruid/planpal",
                liveUrl: "https://planpal-1fe5e3919654.herokuapp.com/"
              },
              {
                title: "Weather App",
                description: "A beautiful weather dashboard with data visualization",
                image: "https://github.com/jeffdruid/weather-now/raw/main/assets/media/ui-intro.gif",
                // image: "https://github.com/jeffdruid/weather-now/raw/main/assets/media/responsive-hero-update.png",
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
            ].map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </div>
        <ScrollIndicator href="#contact" isDark={false} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-section min-h-screen flex items-center bg-black relative">
        <div className="container mx-auto px-6 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 tracking-wider"
          >
            LET'S CONNECT
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <p className="text-center text-xl text-white/80 mb-12">
              Open to new opportunities and collaborations.
            </p>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex justify-center gap-8"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:john@example.com"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-black hover:text-white border-2 border-white transition-colors"
              >
                <Mail size={20} />
                <span className="font-medium tracking-wide">EMAIL ME</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/resume.pdf"
                className="group flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-white transition-colors"
              >
                <ExternalLink size={20} />
                <span className="font-medium tracking-wide">RESUME</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center text-white/60"
        >
          <p>© 2024 Jefferson Aguiar. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;