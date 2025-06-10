"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Briefcase, Users, Mail } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/projects', label: 'Proyek', icon: Briefcase },
  { href: '/about', label: 'Tentang Kami', icon: Users },
  { href: '/contact', label: 'Kontak', icon: Mail },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                 ${isScrolled ? 'bg-background/80 dark:bg-dark-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl font-bold text-accent">
            Arkitektura<span className="text-foreground dark:text-dark-foreground">Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} 
                    className="text-sm font-medium text-foreground hover:text-accent dark:text-dark-foreground dark:hover:text-dark-accent transition-colors">
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="ml-2 p-2 rounded-md text-foreground dark:text-dark-foreground hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-background dark:bg-dark-background shadow-lg pb-4"
        >
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="flex items-center py-2 px-3 rounded-md text-foreground hover:bg-gray-100 dark:text-dark-foreground dark:hover:bg-gray-800 transition-colors"
              >
                <link.icon size={20} className="mr-3 text-accent dark:text-dark-accent" />
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
