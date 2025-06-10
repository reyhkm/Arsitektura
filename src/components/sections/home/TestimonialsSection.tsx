"use client";

import { useState, useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { testimonialsData } from '@/lib/data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    if (testimonialsData.length <= 1) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 7000); // Auto-play every 7 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (testimonialsData.length === 0) return null;

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <AnimatedSection className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Apa Kata Klien Kami" />
        <div className="relative max-w-3xl mx-auto bg-card dark:bg-dark-card p-8 md:p-12 rounded-lg shadow-xl overflow-hidden">
          <Quote className="absolute top-4 left-4 w-12 h-12 text-accent/20 dark:text-dark-accent/20 transform -translate-x-2 -translate-y-2" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-serif">
                "{currentTestimonial.quote}"
              </p>
              <p className="font-semibold text-foreground dark:text-dark-foreground">{currentTestimonial.clientName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{currentTestimonial.company}</p>
            </motion.div>
          </AnimatePresence>
          
          {testimonialsData.length > 1 && (
            <>
              <button 
                onClick={handlePrev} 
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 dark:bg-dark-background/50 hover:bg-background dark:hover:bg-dark-background transition-colors shadow-md"
                aria-label="Testimonial Sebelumnya"
              >
                <ChevronLeft size={24} className="text-accent dark:text-dark-accent" />
              </button>
              <button 
                onClick={handleNext} 
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 dark:bg-dark-background/50 hover:bg-background dark:hover:bg-dark-background transition-colors shadow-md"
                aria-label="Testimonial Berikutnya"
              >
                <ChevronRight size={24} className="text-accent dark:text-dark-accent" />
              </button>
            </>
          )}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-accent dark:bg-dark-accent' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
                aria-label={`Lihat testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
