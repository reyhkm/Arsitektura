"use client";

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { teamData } from '@/lib/data';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

const TeamGrid: React.FC = () => {
  return (
    <AnimatedSection>
      <SectionTitle title="Tim Profesional Kami" subtitle="Bertemu dengan para ahli di balik karya-karya Arkitektura Digital." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {teamData.map((member, index) => (
          <motion.div 
            key={member.id} 
            className="bg-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden text-center group"
            variants={fadeIn('up', index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-72 md:h-80 overflow-hidden">
              <Image 
                src={member.image} 
                alt={member.name} 
                layout="fill" 
                objectFit="cover" 
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              {member.socialLinks && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  {member.socialLinks.linkedin && <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent dark:hover:text-dark-accent p-2 bg-white/10 rounded-full"><Linkedin size={20}/></a>}
                  {member.socialLinks.twitter && <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent dark:hover:text-dark-accent p-2 bg-white/10 rounded-full"><Twitter size={20}/></a>}
                  {member.socialLinks.instagram && <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent dark:hover:text-dark-accent p-2 bg-white/10 rounded-full"><Instagram size={20}/></a>}
                </div>
              )}
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-foreground dark:text-dark-foreground mb-1">{member.name}</h4>
              <p className="text-accent dark:text-dark-accent text-sm mb-2">{member.role}</p>
              {member.bio && <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{member.bio}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default TeamGrid;
