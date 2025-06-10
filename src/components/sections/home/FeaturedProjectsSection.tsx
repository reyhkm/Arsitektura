"use client";

import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/projects/ProjectCard';
import { projectsData } from '@/lib/data';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';

const FeaturedProjectsSection: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <AnimatedSection className="py-16 md:py-24 bg-background dark:bg-dark-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Proyek Unggulan" subtitle="Beberapa karya terbaik yang telah kami ciptakan." />
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeIn('up')}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Button asLink href="/projects" variant="primary" size="lg" className="group">
            Lihat Semua Proyek <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedProjectsSection;
