"use client";

import type { Metadata } from 'next';
import VisionMissionSection from '@/components/sections/about/VisionMissionSection';
import HistoryTimeline from '@/components/sections/about/HistoryTimeline';
import TeamGrid from '@/components/sections/about/TeamGrid';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';

// export const metadata: Metadata = {
//   title: 'Tentang Kami',
//   description: 'Pelajari lebih lanjut tentang Arkitektura Digital, filosofi, sejarah, dan tim profesional kami.',
// };

export default function AboutPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <AnimatedSection className="mb-16 md:mb-20">
        <SectionTitle 
          title="Tentang Arkitektura Digital" 
          subtitle="Mengenal lebih dekat studio arsitektur yang berdedikasi pada inovasi dan kualitas."
          className="text-center mb-12"
        />
        <div className="max-w-3xl mx-auto text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="mb-4">
            Arkitektura Digital didirikan dengan keyakinan bahwa desain yang hebat memiliki kekuatan untuk mengubah cara kita hidup, bekerja, dan berinteraksi. Kami adalah tim arsitek, desainer, dan teknisi yang bersemangat, berkomitmen untuk mendorong batas-batas kreativitas dan keunggulan teknis.
          </p>
          <p>
            Setiap proyek kami dekati dengan perspektif segar, berkolaborasi erat dengan klien untuk memahami aspirasi mereka dan menerjemahkannya menjadi ruang yang fungsional, estetis, dan berkelanjutan.
          </p>
        </div>
      </AnimatedSection>

      <VisionMissionSection />
      <HistoryTimeline />
      <TeamGrid />
    </motion.div>
  );
}
