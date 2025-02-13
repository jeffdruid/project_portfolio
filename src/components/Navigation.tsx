import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

const menuItems = [
  { href: '#', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'WORK' },
  { href: '#contact', label: 'CONTACT' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      setIsDark(currentSection?.classList.contains('bg-black') ?? true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 right-0 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 m-8 p-3 rounded-full ${
          isDark ? 'bg-white text-black' : 'bg-black text-white'
        } shadow-lg transition-colors duration-300`}
      >
        <Menu size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-screen w-[300px] bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-lg"
          >
            <div className="flex flex-col justify-center h-full px-12">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="py-4 text-white/60 hover:text-white text-2xl tracking-widest transition-colors relative group"
                  style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
                >
                  <span className="relative inline-block">
                    <span className="relative z-10">{item.label}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-white/40"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <span className="absolute -left-8 text-white/20 text-sm">
                    0{index + 1}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}