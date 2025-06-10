"use client";

import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/sections/home/HeroSection'));
const AboutShortSection = dynamic(() => import('@/components/sections/home/AboutShortSection'));
const FeaturedServicesSection = dynamic(() => import('@/components/sections/home/FeaturedServicesSection'));
const FeaturedProjectsSection = dynamic(() => import('@/components/sections/home/FeaturedProjectsSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/home/TestimonialsSection'));
const FinalCTASection = dynamic(() => import('@/components/sections/home/FinalCTASection'));

// export const metadata: Metadata = { // Metadata should be handled in layout or generated dynamically for client components if needed
//   title: 'Beranda',
//   description: 'Arkitektura Digital - Merancang Masa Depan Ruang Hidup. Studio arsitektur modern yang berfokus pada desain inovatif dan berkelanjutan.',
// };

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
