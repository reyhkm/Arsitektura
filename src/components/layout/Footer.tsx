import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">
              Arkitektura<span className="text-foreground dark:text-dark-foreground">Digital</span>
            </h3>
            <p className="text-sm">Merancang Masa Depan Ruang Hidup.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground dark:text-dark-foreground">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="hover:text-accent dark:hover:text-dark-accent">Proyek</Link></li>
              <li><Link href="/about" className="hover:text-accent dark:hover:text-dark-accent">Tentang Kami</Link></li>
              <li><Link href="/contact" className="hover:text-accent dark:hover:text-dark-accent">Kontak</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent dark:hover:text-dark-accent">Kebijakan Privasi</Link></li> {/* Example additional link */}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground dark:text-dark-foreground">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent dark:hover:text-dark-accent"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-accent dark:hover:text-dark-accent"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-accent dark:hover:text-dark-accent"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent dark:hover:text-dark-accent"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
          <p>&copy; {currentYear} Arkitektura Digital. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
