"use client";

import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-accent dark:bg-dark-accent text-accent-foreground dark:text-dark-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">\Siap Memulai Proyek Bersama Kami?</h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Wujudkan visi arsitektur Anda bersama tim profesional kami. Hubungi kami untuk konsultasi gratis.
        </p>
        <Button asLink href="/contact" variant="secondary" size="lg" className="group bg-white text-accent hover:bg-gray-100 dark:bg-dark-primary-foreground dark:text-dark-primary dark:hover:bg-opacity-90">
          Hubungi Kami <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </AnimatedSection>
  );
};

export default FinalCTASection;
