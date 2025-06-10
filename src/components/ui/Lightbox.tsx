"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LightboxProps {
  imageSrc: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={onClose} // Close on backdrop click
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative max-w-[90vw] max-h-[90vh] shadow-2xl rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image itself
        >
          <Image 
            src={imageSrc} 
            alt="Lightbox image" 
            width={1200} // Example width, adjust as needed or use layout fill with a sized container
            height={800} // Example height
            objectFit="contain"
            className="block max-w-full max-h-full"
          />
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors"
            aria-label="Tutup lightbox"
          >
            <X size={24} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
