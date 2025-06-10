"use client"; // This page uses client-side hooks for data fetching simulation and lightbox

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Project, projectsData, getProjectBySlug, getPrevNextProjects } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Lightbox from '@/components/ui/Lightbox'; // Simple lightbox component
import { motion } from 'framer-motion';
import { pageTransitionVariants, fadeIn } from '@/lib/motion';
import { ArrowLeft, ArrowRight, MapPin, CalendarDays, Maximize, Square, Users, Info } from 'lucide-react';

// This function could be used for generateStaticParams if not fetching client-side
// export async function generateStaticParams() {
//   return projectsData.map((project) => ({ slug: project.slug }));
// }

// This would be for server-side metadata generation
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const project = getProjectBySlug(params.slug);
//   if (!project) return { title: 'Proyek Tidak Ditemukan' };
//   return {
//     title: project.title,
//     description: project.description,
//   };
// }

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  
  const [project, setProject] = useState<Project | null>(null);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  useEffect(() => {
    if (slug) {
      const currentProject = getProjectBySlug(slug);
      if (currentProject) {
        setProject(currentProject);
        const { prev, next } = getPrevNextProjects(slug);
        setPrevProject(prev);
        setNextProject(next);

        // For dynamic metadata (if not using generateMetadata)
        document.title = `${currentProject.title} | Arkitektura Digital`;
      } else {
        router.push('/404'); // Or a custom not found page for projects
      }
    }
  }, [slug, router]);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  if (!project) {
    return <div className="container mx-auto text-center py-20">Memuat proyek...</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.heroImage})` }}
        variants={fadeIn('down')}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 md:p-12">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-white mb-2 font-serif"
            variants={fadeIn('up', 0.2)}
          >
            {project.title}
          </motion.h1>
          <motion.div className="flex items-center space-x-4 text-gray-300 text-sm md:text-base"
            variants={fadeIn('up', 0.4)}
          >
            <span className="flex items-center"><MapPin size={16} className="mr-1.5" /> {project.location}</span>
            <span className="flex items-center"><CalendarDays size={16} className="mr-1.5" /> {project.year}</span>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Description Section */}
        <AnimatedSection tag="article" className="max-w-3xl mx-auto mb-12 md:mb-16">
          <SectionTitle title="Deskripsi Proyek" className="text-left mb-6" titleClassName="text-2xl md:text-3xl" />
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {project.description}
          </p>
          {project.challenge && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-dark-foreground">Tantangan:</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-dark-foreground">Solusi:</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          )}
        </AnimatedSection>

        {/* Gallery Section */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <AnimatedSection className="mb-12 md:mb-16">
            <SectionTitle title="Galeri Gambar" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.galleryImages.map((image, index) => (
                <motion.div 
                  key={index} 
                  className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md"
                  onClick={() => openLightbox(image)}
                  variants={fadeIn('up', index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image src={image} alt={`${project.title} - Galeri ${index + 1}`} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Maximize size={32} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Additional Info Section */}
        {(project.area || project.materials || project.client) && (
          <AnimatedSection className="mb-12 md:mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow">
            <SectionTitle title="Info Tambahan" className="mb-6" titleClassName="text-2xl md:text-3xl" />
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
              {project.area && <p className="flex items-center"><Square size={18} className="mr-2 text-accent dark:text-dark-accent" /> <strong>Luas Bangunan:</strong> {project.area}</p>}
              {project.client && <p className="flex items-center"><Users size={18} className="mr-2 text-accent dark:text-dark-accent" /> <strong>Klien:</strong> {project.client}</p>}
              {project.materials && project.materials.length > 0 && (
                <div>
                  <p className="flex items-center mb-1"><Info size={18} className="mr-2 text-accent dark:text-dark-accent" /> <strong>Material Utama:</strong></p>
                  <ul className="list-disc list-inside ml-2">
                    {project.materials.map((material, i) => <li key={i}>{material}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </AnimatedSection>
        )}

        {/* Project Navigation */}
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Button asLink href={`/projects/${prevProject.slug}`} variant="outline" className="group">
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Proyek Sebelumnya
            </Button>
          ) : <div />} {/* Placeholder for alignment */}
          {nextProject ? (
            <Button asLink href={`/projects/${nextProject.slug}`} variant="outline" className="group">
              Proyek Berikutnya <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : <div />} {/* Placeholder for alignment */}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox imageSrc={lightboxImage} onClose={() => setLightboxOpen(false)} />
      )}
    </motion.div>
  );
}
