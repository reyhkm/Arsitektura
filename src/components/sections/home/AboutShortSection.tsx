"use client";

import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AboutShortSection: React.FC = () => {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-background dark:bg-dark-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/about-team.jpg" 
              alt="Tim Arkitektura Digital atau kantor" 
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="text-foreground dark:text-dark-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Tentang Kami</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Arkitektura Digital adalah kolektif arsitek, desainer, dan pemikir kreatif yang bersemangat dalam membentuk lingkungan binaan. Filosofi kami berakar pada inovasi, keberlanjutan, dan desain yang berpusat pada manusia.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Kami percaya bahwa setiap proyek adalah kesempatan unik untuk menciptakan sesuatu yang bermakna dan berdampak positif.
            </p>
            <Button asLink href="/about" variant="outline" size="md" className="group">
              Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutShortSection;
