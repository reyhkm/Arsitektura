export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Residensial' | 'Komersial' | 'Publik' | 'Interior';
  description: string;
  shortDescription?: string;
  heroImage: string;
  thumbnailImage: string;
  galleryImages: string[];
  location: string;
  year: number;
  area?: string;
  materials?: string[];
  client?: string;
  challenge?: string;
  solution?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  company: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType; // For lucide-react icons
}
