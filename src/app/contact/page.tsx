"use client";

import type { Metadata } from 'next';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import ContactForm from '@/components/sections/contact/ContactForm';
import InteractiveMap from '@/components/sections/contact/InteractiveMap';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';

// export const metadata: Metadata = {
//   title: 'Hubungi Kami',
//   description: 'Hubungi Arkitektura Digital untuk pertanyaan, konsultasi, atau memulai proyek baru Anda.',
// };

export default function ContactPage() {
  // Example coordinates for the map
  const mapPosition: [number, number] = [-6.200000, 106.816666]; // Jakarta coordinates

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <AnimatedSection className="mb-12 md:mb-16">
        <SectionTitle 
          title="Hubungi Kami" 
          subtitle="Kami siap mendengar ide dan kebutuhan Anda. Mari berdiskusi!"
          className="text-center mb-10"
        />
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
        <AnimatedSection tag="div">
          <h3 className="text-2xl font-semibold mb-6 text-foreground dark:text-dark-foreground">Informasi Kontak</h3>
          <ContactInfo />
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-dark-foreground">Lokasi Kami</h3>
            <InteractiveMap position={mapPosition} />
          </div>
        </AnimatedSection>
        
        <AnimatedSection tag="div">
          <h3 className="text-2xl font-semibold mb-6 text-foreground dark:text-dark-foreground">Kirim Pesan</h3>
          <ContactForm />
        </AnimatedSection>
      </div>
    </motion.div>
  );
}
