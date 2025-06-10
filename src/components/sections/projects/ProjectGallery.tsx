"use client";

import { useState } from 'react';
import { projectsData } from '@/lib/data';
import ProjectCard from '@/components/projects/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/motion';

const categories = ['Semua', 'Residensial', 'Komersial', 'Publik', 'Interior'];

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('Semua');

  const filteredProjects = projectsData.filter(project => 
    filter === 'Semua' || project.category === filter
  );

  return (
    <section>
      <SectionTitle 
        title="Galeri Proyek" 
        subtitle="Temukan inspirasi dari beragam karya yang telah kami selesaikan."
        className="mb-8 md:mb-12"
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors 
                        ${filter === category 
                          ? 'bg-accent text-accent-foreground dark:bg-dark-accent dark:text-dark-accent-foreground' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map(project => (
            <motion.div key={project.id} variants={fadeIn('up')}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
          Tidak ada proyek yang sesuai dengan filter ini.
        </p>
      )}
    </section>
  );
};

export default ProjectGallery;
