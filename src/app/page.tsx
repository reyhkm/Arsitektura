import type { Metadata } from 'next';
import HeroSection from '@/components/sections/home/HeroSection';
import AboutShortSection from '@/components/sections/home/AboutShortSection';
import FeaturedServicesSection from '@/components/sections/home/FeaturedServicesSection';
import FeaturedProjectsSection from '@/components/sections/home/FeaturedProjectsSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import FinalCTASection from '@/components/sections/home/FinalCTASection';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';

export const metadata: Metadata = {
  title: 'Beranda',
  description: 'Arkitektura Digital - Merancang Masa Depan Ruang Hidup. Studio arsitektur modern yang berfokus pada desain inovatif dan berkelanjutan.',
};

export default function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      <HeroSection />
      <AboutShortSection />
      <FeaturedServicesSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </motion.div>
  );
}
