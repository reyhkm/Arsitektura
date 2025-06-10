"use client";

import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { servicesData } from '@/lib/data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

const FeaturedServicesSection: React.FC = () => {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Layanan Unggulan Kami" subtitle="Solusi komprehensif untuk kebutuhan arsitektur dan desain Anda." />
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn('up', index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="p-6 text-center h-full flex flex-col items-center" hoverEffect>
                <div className="p-4 bg-accent/10 dark:bg-dark-accent/10 rounded-full mb-6 inline-block">
                  <service.icon size={36} className="text-accent dark:text-dark-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-dark-foreground">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedServicesSection;
