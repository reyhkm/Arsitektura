"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} passHref legacyBehavior>
      <motion.a
        className="block group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card dark:bg-dark-card"
        whileHover={{ y: -5 }}
      >
        <div className="relative w-full h-60 md:h-72">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-xl font-semibold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {project.category} - {project.location}
            </p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-dark-foreground group-hover:text-accent dark:group-hover:text-dark-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {project.shortDescription || project.description}
          </p>
          <div className="flex items-center text-accent dark:text-dark-accent text-sm font-medium">
            Lihat Detail
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.a>
    </Link>
  );
};

export default ProjectCard;
