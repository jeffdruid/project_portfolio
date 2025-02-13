import React from 'react';
import { motion } from 'framer-motion';

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <motion.div
        className="relative z-10 p-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm
                   transition-colors duration-300 group-hover:bg-white/10"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-white/60 group-hover:text-white transition-colors duration-300"
        >
          {icon}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/40
                   whitespace-nowrap tracking-wider"
      >
        {label}
      </motion.div>
    </motion.a>
  );
}