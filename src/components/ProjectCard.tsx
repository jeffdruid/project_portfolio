import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({ title, description, image, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -20 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black hover:text-gray-600"
          >
            <Github size={20} />
            <span className="font-medium">Code</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black hover:text-gray-600"
          >
            <ExternalLink size={20} />
            <span className="font-medium">Demo</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}