import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.2,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.5 }
      }}
      className="px-6 py-3 bg-white text-black rounded-full border border-white/20 font-medium tracking-wider hover:bg-black hover:text-white transition-colors"
    >
      {name}
    </motion.div>
  );
}