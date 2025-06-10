"use client";

import type { Metadata } from 'next';
import ProjectGallery from '@/components/sections/projects/ProjectGallery';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';

// export const metadata: Metadata = {
//   title: 'Proyek Kami',
//   description: 'Jelajahi portofolio proyek arsitektur, desain interior, dan visualisasi 3D dari Arkitektura Digital.',
// };

export default function ProjectsPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <ProjectGallery />
    </motion.div>
  );
}
