import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative py-8 bg-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Footer content */}
          <p className="text-white/60 mb-5">
            © 2025 Jefferson Aguiar. All rights reserved.
          </p>
          
          {/* Animated line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </footer>
  );
}