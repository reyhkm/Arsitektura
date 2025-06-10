"use client";

import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 p-4 container mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Arkitektura Digital:
          <br />
          <span className="block sm:inline">Merancang Masa Depan Ruang Hidup</span>
        </motion.h1>
        
        <AnimatedText 
          text="Kami adalah studio arsitektur yang berdedikasi untuk menciptakan ruang yang inovatif, fungsional, dan berkelanjutan."
          el="p"
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
          delay={0.5}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <Button asLink href="/projects" variant="primary" size="lg" className="group">
            Lihat Proyek Kami <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
