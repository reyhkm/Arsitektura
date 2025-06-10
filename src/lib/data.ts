import { Project, TeamMember, Testimonial, Service } from './types';
import { Building2, Paintbrush, ScanSearch } from 'lucide-react';

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'vila-modern-tepi-pantai',
    title: 'Vila Modern Tepi Pantai',
    category: 'Residensial',
    description: 'Sebuah vila mewah dengan desain kontemporer yang memaksimalkan pemandangan laut. Menggabungkan elemen alam dengan teknologi smart home untuk kenyamanan optimal.',
    shortDescription: 'Vila mewah kontemporer dengan pemandangan laut.',
    heroImage: '/images/projects/project-1-hero.jpg',
    thumbnailImage: '/images/projects/project-1-thumb.jpg',
    galleryImages: ['/images/projects/project-1-gallery-1.jpg', '/images/projects/project-1-hero.jpg', '/images/projects/project-1-thumb.jpg'],
    location: 'Bali, Indonesia',
    year: 2023,
    area: '450 m²',
    materials: ['Beton Ekspos', 'Kayu Jati', 'Kaca Tempered'],
    client: 'Klien Pribadi',
    challenge: 'Mengintegrasikan desain modern dengan lingkungan tropis yang sensitif dan memaksimalkan view tanpa mengorbankan privasi.',
    solution: 'Penggunaan material lokal yang berkelanjutan, desain terbuka dengan ventilasi silang alami, dan penempatan strategis bukaan untuk view dan privasi.'
  },
  {
    id: '2',
    slug: 'ruang-kantor-kreatif-urban',
    title: 'Ruang Kantor Kreatif Urban',
    category: 'Komersial',
    description: 'Desain interior untuk startup teknologi yang mengedepankan kolaborasi dan fleksibilitas. Ruang kerja terbuka dengan area komunal yang dinamis.',
    shortDescription: 'Interior kantor startup teknologi yang kolaboratif.',
    heroImage: '/images/projects/project-2-hero.jpg',
    thumbnailImage: '/images/projects/project-2-thumb.jpg',
    galleryImages: ['/images/projects/project-2-hero.jpg', '/images/projects/project-2-thumb.jpg'],
    location: 'Jakarta, Indonesia',
    year: 2022,
    area: '800 m²',
    client: 'Tech Startup XYZ'
  },
  {
    id: '3',
    slug: 'galeri-seni-minimalis',
    title: 'Galeri Seni Minimalis',
    category: 'Publik',
    description: 'Transformasi gudang tua menjadi galeri seni kontemporer dengan pendekatan minimalis, menonjolkan karya seni yang dipamerkan.',
    shortDescription: 'Transformasi gudang menjadi galeri seni minimalis.',
    heroImage: '/images/projects/project-3-hero.jpg',
    thumbnailImage: '/images/projects/project-3-thumb.jpg',
    galleryImages: ['/images/projects/project-3-hero.jpg', '/images/projects/project-3-thumb.jpg'],
    location: 'Bandung, Indonesia',
    year: 2024,
    area: '600 m²'
  },
  // Add more projects as needed
];

export const teamData: TeamMember[] = [
  {
    id: '1',
    name: 'Andi Pratama',
    role: 'Principal Architect & CEO',
    image: '/images/team/ceo.jpg',
    bio: 'Andi adalah arsitek visioner dengan pengalaman lebih dari 15 tahun dalam merancang bangunan ikonik dan berkelanjutan. Ia percaya bahwa arsitektur yang baik dapat meningkatkan kualitas hidup.',
    socialLinks: { linkedin: '#', twitter: '#' }
  },
  {
    id: '2',
    name: 'Citra Kirana',
    role: 'Lead Interior Designer',
    image: '/images/team/lead-architect.jpg', // Placeholder, replace with actual image
    bio: 'Citra memiliki passion dalam menciptakan ruang interior yang fungsional sekaligus estetis. Keahliannya terletak pada pemilihan material dan detail yang cermat.',
    socialLinks: { instagram: '#', linkedin: '#' }
  },
  // Add more team members
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Arkitektura Digital mengubah visi kami menjadi kenyataan yang melebihi ekspektasi. Profesionalisme dan kreativitas mereka luar biasa!',
    clientName: 'Budi Santoso',
    company: 'PT Properti Jaya'
  },
  {
    id: '2',
    quote: 'Proses desain berjalan mulus dan hasilnya sangat memuaskan. Tim Arkitektura Digital sangat responsif dan memahami kebutuhan kami.',
    clientName: 'Rina Wijaya',
    company: 'Kolektor Seni Pribadi'
  },
  // Add more testimonials
];

export const servicesData: Service[] = [
  {
    id: '1',
    title: 'Desain Arsitektur',
    description: 'Kami merancang bangunan yang inovatif, fungsional, dan estetis, dari konsep awal hingga detail konstruksi.',
    icon: Building2
  },
  {
    id: '2',
    title: 'Desain Interior',
    description: 'Menciptakan ruang interior yang mencerminkan identitas Anda, mengoptimalkan fungsi dan kenyamanan.',
    icon: Paintbrush
  },
  {
    id: '3',
    title: 'Visualisasi 3D',
    description: 'Menghadirkan desain Anda ke dalam bentuk visual realistis melalui render dan animasi 3D berkualitas tinggi.',
    icon: ScanSearch
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(project => project.slug === slug);
};

export const getPrevNextProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projectsData.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const next = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;
  
  return { prev, next };
};
