import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialButton } from './SocialButton';
import { ScrollIndicator } from './ScrollIndicator';

interface HeroSectionProps {
  scale: number | string;
  opacity: number | string;
  onOpenEmailModal: () => void;
}

export function HeroSection({ scale, opacity, onOpenEmailModal }: HeroSectionProps) {
  const letterAnimation = {
    initial: { y: 400 },
    animate: { y: 0 },
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  };

  // Stagger effect for social links
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Social media links configuration
  const socialLinks = [
    { href: "https://github.com/jeffdruid", icon: <Github size={24} />, label: "GitHub", target: "_blank", rel: "noopener noreferrer" },
    { href: "https://www.linkedin.com/in/jefferson-aguiar-1b3b3452/", icon: <Linkedin size={24} />, label: "LinkedIn", target: "_blank", rel: "noopener noreferrer" },
    { onClick: onOpenEmailModal, icon: <Mail size={24} />, label: "Email" }
  ];

  return (
    <section className="snap-section h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full bg-black"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Main title with enhanced spacing and glow effect */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial="initial"
            animate="animate"
            variants={letterAnimation}
            className="text-7xl md:text-9xl font-bold tracking-tighter leading-[1.2] pb-6 relative"
          >
            Jefferson Aguiar
          </motion.h1>
        </div>

        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-xl md:text-2xl mb-16 tracking-widest">
            CREATIVE DEVELOPER
          </p>
        </motion.div>

        {/* Social links with enhanced hover effects */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex justify-center gap-8 mb-16"
        >
          {socialLinks.map((link, index) => (
            <SocialButton key={index} {...link} />
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 w-full">
        <ScrollIndicator href="#about" isDark={true} />
      </div>
    </section>
  );
}