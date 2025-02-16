import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  href: string;
  isDark?: boolean;
}

export function ScrollIndicator({ href, isDark = true }: ScrollIndicatorProps) {
  // Handle smooth scroll to sections
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleScroll}
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
}