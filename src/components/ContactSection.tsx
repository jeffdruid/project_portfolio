import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onOpenEmailModal: () => void;
}

export function ContactSection({ onOpenEmailModal }: ContactSectionProps) {
  // Animation stagger effect for buttons
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="contact" className="snap-section min-h-screen relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 tracking-wider"
          >
            LET'S CONNECT
          </motion.h2>

          {/* Contact Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto mb-16"
          >
            <p className="text-center text-xl text-white/80 mb-12">
              Open to new opportunities and collaborations.
            </p>

            {/* Action Buttons */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex justify-center gap-8"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onOpenEmailModal}
                className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-black hover:text-white border-2 border-white transition-colors"
              >
                <Mail size={20} />
                <span className="font-medium tracking-wide">EMAIL ME</span>
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://drive.google.com/file/d/1y6z_py5pfpifQr6idHs9MKmOUkBiZfCd/view?usp=sharing"
                target="_blank"
                className="group flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-white transition-colors"
              >
                <ExternalLink size={20} />
                <span className="font-medium tracking-wide">RESUME</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}