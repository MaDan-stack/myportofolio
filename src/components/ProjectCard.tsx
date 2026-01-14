'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/lib/data';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi'; // Pastikan install: npm install react-icons

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      // PERBAIKAN: Semua className dijadikan satu baris string
      className="group relative h-full rounded-2xl overflow-hidden bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* Overlay saat hover */}
        <div className="absolute inset-0 bg-light-card/70 dark:bg-dark-card/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4" />
        
        {/* Gambar Project */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Tombol Action (Muncul saat Hover) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent-primary text-white shadow-lg hover:scale-110 transition-transform"
              title="View Demo"
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-surface text-white shadow-lg hover:scale-110 transition-transform"
              title="View Code"
            >
              <SiGithub size={20} />
            </a>
          )}
        </div>

        {/* Badge Featured */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-accent-primary text-white shadow-lg z-20">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold mb-2 text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4 line-clamp-3 text-sm flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-text-light-secondary dark:text-text-dark-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}