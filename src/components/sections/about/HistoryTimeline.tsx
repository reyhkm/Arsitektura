"use client";

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const timelineEvents = [
  {
    year: '2015',
    title: 'Pendirian Arkitektura Digital',
    description: 'Studio didirikan dengan fokus awal pada proyek residensial skala kecil dan menengah.',
  },
  {
    year: '2018',
    title: 'Ekspansi ke Proyek Komersial',
    description: 'Mulai menangani proyek komersial pertama, memperluas portofolio dan keahlian tim.',
  },
  {
    year: '2021',
    title: 'Penghargaan Desain Nasional',
    description: 'Menerima penghargaan nasional untuk desain inovatif pada proyek ruang publik.',
  },
  {
    year: '2024',
    title: 'Fokus pada Keberlanjutan',
    description: 'Memperkuat komitmen terhadap desain berkelanjutan dan teknologi hijau dalam setiap proyek.',
  },
];

const HistoryTimeline: React.FC = () => {
  return (
    <AnimatedSection className="mb-16 md:mb-20">
      <SectionTitle title="Sejarah Singkat Kami" subtitle="Perjalanan Arkitektura Digital dari masa ke masa." />
      <div className="relative max-w-2xl mx-auto">
        {/* Central line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
        
        {timelineEvents.map((event, index) => (
          <motion.div 
            key={index} 
            className={`mb-8 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right pr-8' : 'order-3 text-left pl-8'}`}>
              <p className="text-lg font-semibold text-accent dark:text-dark-accent">{event.year}</p>
            </div>
            <div className="order-2 w-10 h-10 rounded-full bg-accent dark:bg-dark-accent text-accent-foreground dark:text-dark-accent-foreground flex items-center justify-center shadow-md z-10">
              <Calendar size={20} />
            </div>
            <div className={`w-5/12 p-4 bg-card dark:bg-dark-card rounded-lg shadow-md ${index % 2 === 0 ? 'order-3 ml-4' : 'order-1 mr-4'}`}>
              <h4 className="font-semibold text-md mb-1 text-foreground dark:text-dark-foreground">{event.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default HistoryTimeline;
