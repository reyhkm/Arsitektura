"use client";

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Eye, Target } from 'lucide-react';

const VisionMissionSection: React.FC = () => {
  return (
    <AnimatedSection className="mb-16 md:mb-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Eye size={32} className="text-accent dark:text-dark-accent mr-3" />
            <h3 className="text-2xl font-semibold text-foreground dark:text-dark-foreground font-serif">Visi Kami</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Menjadi studio arsitektur terdepan yang dikenal karena desain inovatif, solusi berkelanjutan, dan kontribusi positif terhadap lingkungan binaan dan masyarakat.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Target size={32} className="text-accent dark:text-dark-accent mr-3" />
            <h3 className="text-2xl font-semibold text-foreground dark:text-dark-foreground font-serif">Misi Kami</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            <li>Menghasilkan desain arsitektur berkualitas tinggi yang merespons kebutuhan klien dan konteks lingkungan.</li>
            <li>Mengintegrasikan prinsip-prinsip keberlanjutan dalam setiap aspek proses desain dan konstruksi.</li>
            <li>Mendorong inovasi melalui eksplorasi teknologi baru dan pendekatan desain kreatif.</li>
            <li>Membangun hubungan kolaboratif yang kuat dengan klien, mitra, dan komunitas.</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default VisionMissionSection;
